'use client';

import { useEffect, useRef, useState } from 'react';
import BrandMark from '@/components/ui/BrandMark';
import { cn } from '@/lib/cn';

/**
 * The Smartgic mark — two rounded bars and a dot — rendered as floating glass
 * in real time. One full-screen-quad fragment shader raymarches signed distance
 * fields (two capsules and a sphere matching the logo's geometry), so there is
 * no 3D library: the whole effect is this file.
 *
 * Shading: Schlick fresnel between a reflected and a refracted sample of a
 * procedural studio environment, refraction through the body with a slight
 * chromatic split, an edge glow in the bar's brand colour and a specular key
 * light. The body is partly transparent, so whatever sits behind the canvas
 * (the hero video) shows through the glass.
 *
 * Cost control: started after the browser is idle, rendered at a capped pixel
 * ratio, paused off-screen and in hidden tabs, drops resolution if frames run
 * slow, and draws a single still frame for reduced-motion visitors. Without
 * WebGL it falls back to the flat brand mark.
 */

const VERT = `
attribute vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`;

const FRAG = `
precision highp float;
uniform vec2 uRes;
uniform float uTime;
uniform vec2 uRot;

const vec3 CYAN = vec3(0.067, 0.761, 0.800);
const vec3 BLUE = vec3(0.090, 0.388, 0.910);

mat2 rot(float a) { float c = cos(a), s = sin(a); return mat2(c, -s, s, c); }

float sdCapsule(vec3 p, vec3 a, vec3 b, float r) {
  vec3 pa = p - a, ba = b - a;
  float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
  return length(pa - ba * h) - r;
}

// Logo geometry, measured from the supplied logo: bars at 45 degrees, equal
// length, the dot level with the bars' lower ends.
vec2 map(vec3 p) {
  p.y -= sin(uTime * 0.9) * 0.05;
  p.xz *= rot(uRot.x);
  p.yz *= rot(uRot.y);
  vec3 dir = vec3(0.704, 0.710, 0.0) * 1.04;
  vec3 c1 = vec3(-0.645, 0.0, 0.0);
  vec3 c2 = vec3(0.785, 0.0, 0.0);
  float r = 0.324;
  float d1 = sdCapsule(p, c1 - dir, c1 + dir, r);
  float d2 = sdCapsule(p, c2 - dir, c2 + dir, r);
  float d3 = length(p - vec3(1.373, -0.741, 0.0)) - r;
  vec2 res = vec2(d1, 1.0);
  if (d2 < res.x) res = vec2(d2, 2.0);
  if (d3 < res.x) res = vec2(d3, 3.0);
  return res;
}

vec3 calcNormal(vec3 p) {
  const vec2 k = vec2(1.0, -1.0);
  const float e = 0.0008;
  return normalize(
    k.xyy * map(p + k.xyy * e).x +
    k.yyx * map(p + k.yyx * e).x +
    k.yxy * map(p + k.yxy * e).x +
    k.xxx * map(p + k.xxx * e).x);
}

// Procedural studio: navy-to-blue dome, a large soft key light, a cool rim
// strip and a faint cyan horizon band.
vec3 env(vec3 d) {
  vec3 col = mix(vec3(0.03, 0.05, 0.12), vec3(0.11, 0.22, 0.46), smoothstep(-0.7, 0.9, d.y));
  float key = smoothstep(0.80, 0.985, dot(d, normalize(vec3(-0.55, 0.75, 0.55))));
  col += vec3(1.0, 0.98, 0.95) * key * 2.4;
  float rim = smoothstep(0.90, 0.995, dot(d, normalize(vec3(0.95, 0.15, -0.25))));
  col += vec3(0.55, 0.92, 1.0) * rim * 1.8;
  float fill = smoothstep(0.6, 0.98, dot(d, normalize(vec3(0.2, -0.6, 0.8))));
  col += vec3(0.10, 0.40, 0.95) * fill * 0.6;
  col += CYAN * exp(-abs(d.y + 0.08) * 14.0) * 0.28;
  return col;
}

void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * uRes) / uRes.y;
  // Framed so the mark (about 3.6 x 2.2 units) fits a square canvas with
  // margin at any rotation.
  vec3 ro = vec3(0.0, 0.0, 6.8);
  vec3 rd = normalize(vec3(uv, -1.75));

  // Skip rays that miss the bounding sphere entirely — most of the canvas.
  float b = dot(ro, rd);
  float c = dot(ro, ro) - 2.35 * 2.35;
  float disc = b * b - c;
  if (disc < 0.0) { gl_FragColor = vec4(0.0); return; }
  float t = max(0.0, -b - sqrt(disc));
  float tMax = -b + sqrt(disc);

  // Angular size of one pixel, for the antialiased silhouette.
  float px = 1.5 / (uRes.y * 1.75);
  float minD = 1e3;
  vec2 hit = vec2(-1.0);
  for (int i = 0; i < 96; i++) {
    vec3 p = ro + rd * t;
    vec2 h = map(p);
    minD = min(minD, h.x / max(t, 1.0));
    if (h.x < 0.0008) { hit = vec2(t, h.y); break; }
    t += h.x;
    if (t > tMax) break;
  }

  if (hit.x < 0.0) {
    // Near-miss: a thin, soft edge so the silhouette is antialiased.
    float edge = 1.0 - smoothstep(0.0, px * 1.5, minD);
    gl_FragColor = vec4(vec3(0.55, 0.9, 1.0) * edge * 0.35, edge * 0.35);
    return;
  }

  vec3 pos = ro + rd * hit.x;
  vec3 n = calcNormal(pos);
  vec3 body = hit.y > 1.5 && hit.y < 2.5 ? BLUE : CYAN;

  float ndv = clamp(dot(n, -rd), 0.0, 1.0);
  float fres = 0.04 + 0.96 * pow(1.0 - ndv, 5.0);

  vec3 refl = env(reflect(rd, n));

  // March through the body along the refracted ray to find the exit point.
  vec3 rr = refract(rd, n, 1.0 / 1.45);
  float th = 0.02;
  for (int j = 0; j < 28; j++) {
    float d = map(pos + rr * th).x;
    if (d > 0.0005) break;
    th += max(-d, 0.015);
  }
  vec3 pExit = pos + rr * th;
  vec3 nExit = -calcNormal(pExit);
  vec3 oR = refract(rr, nExit, 1.43);
  vec3 oG = refract(rr, nExit, 1.45);
  vec3 oB = refract(rr, nExit, 1.47);
  if (dot(oG, oG) < 0.01) {
    // Total internal reflection: the light bounces back inside instead.
    vec3 tir = reflect(rr, nExit);
    oR = tir; oG = tir; oB = tir;
  }
  vec3 refr = vec3(env(oR).r, env(oG).g, env(oB).b);

  vec3 absorb = exp(-(1.0 - body) * th * 1.4);
  vec3 trans = refr * absorb * 1.1 + body * 0.36;

  vec3 col = mix(trans, refl, fres);
  col += body * pow(1.0 - ndv, 2.0) * 1.15;

  vec3 L = normalize(vec3(-0.55, 0.75, 0.55));
  vec3 H = normalize(L - rd);
  col += vec3(1.0) * pow(max(dot(n, H), 0.0), 140.0) * 1.4;

  col = col / (1.0 + col * 0.35);
  float alpha = clamp(mix(0.68, 1.0, fres) + 0.18 * (1.0 - absorb.g), 0.0, 1.0);
  gl_FragColor = vec4(col * alpha, alpha);
}
`;

function compile(gl: WebGLRenderingContext, type: number, src: string) {
  const s = gl.createShader(type);
  if (!s) return null;
  gl.shaderSource(s, src);
  gl.compileShader(s);
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
    console.warn('GlassMark shader:', gl.getShaderInfoLog(s));
    gl.deleteShader(s);
    return null;
  }
  return s;
}

export default function GlassMark({ className }: { className?: string }) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [state, setState] = useState<'idle' | 'running' | 'fallback'>('idle');

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    let disposed = false;
    let raf = 0;
    let cleanup: (() => void) | null = null;

    const start = () => {
      if (disposed) return;
      // The mark is only shown on large screens; never spend GPU (or, on
      // software renderers, CPU) on a canvas nobody can see.
      if (!window.matchMedia('(min-width: 1024px)').matches || wrap.offsetWidth === 0) {
        setState('fallback');
        return;
      }
      const gl = canvas.getContext('webgl', {
        alpha: true,
        antialias: false,
        premultipliedAlpha: true,
        powerPreference: 'low-power',
        preserveDrawingBuffer: false,
      });
      if (!gl) {
        setState('fallback');
        return;
      }

      const vs = compile(gl, gl.VERTEX_SHADER, VERT);
      const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
      const prog = gl.createProgram();
      if (!vs || !fs || !prog) {
        setState('fallback');
        return;
      }
      gl.attachShader(prog, vs);
      gl.attachShader(prog, fs);
      gl.linkProgram(prog);
      if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
        setState('fallback');
        return;
      }
      gl.useProgram(prog);

      const buf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
      const loc = gl.getAttribLocation(prog, 'aPos');
      gl.enableVertexAttribArray(loc);
      gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

      const uRes = gl.getUniformLocation(prog, 'uRes');
      const uTime = gl.getUniformLocation(prog, 'uTime');
      const uRot = gl.getUniformLocation(prog, 'uRot');

      const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
      const renderer = debugInfo ? String(gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)) : '';
      const software = /swiftshader|llvmpipe|softpipe|software|basic render/i.test(renderer);
      // Animate only on hardware GPUs and when motion is welcome.
      const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches || software;
      const reduce = still;
      let scale = Math.min(window.devicePixelRatio || 1, software ? 1 : 1.75);
      let visible = true;
      let slowFrames = 0;

      const resize = () => {
        const rect = wrap.getBoundingClientRect();
        canvas.width = Math.max(1, Math.round(rect.width * scale));
        canvas.height = Math.max(1, Math.round(rect.height * scale));
        gl.viewport(0, 0, canvas.width, canvas.height);
      };
      resize();
      const ro = new ResizeObserver(resize);
      ro.observe(wrap);

      // Pointer → target rotation, eased toward in the render loop.
      const target = { x: 0, y: 0 };
      const current = { x: 0, y: 0 };
      const onPointer = (e: PointerEvent) => {
        if (e.pointerType === 'touch') return;
        target.x = (e.clientX / window.innerWidth - 0.5) * 2;
        target.y = (e.clientY / window.innerHeight - 0.5) * 2;
      };
      window.addEventListener('pointermove', onPointer, { passive: true });

      const io = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        if (visible && !reduce) loop(performance.now());
      });
      io.observe(wrap);

      const t0 = performance.now();
      let last = t0;

      const draw = (now: number) => {
        const time = (now - t0) / 1000;
        current.x += (target.x - current.x) * 0.045;
        current.y += (target.y - current.y) * 0.045;
        const yaw = Math.sin(time * 0.35) * 0.42 + current.x * 0.45;
        const pitch = Math.sin(time * 0.27) * 0.12 + current.y * 0.22;
        gl.uniform2f(uRes, canvas.width, canvas.height);
        gl.uniform1f(uTime, reduce ? 0 : time);
        gl.uniform2f(uRot, reduce ? 0.38 : yaw, reduce ? 0.08 : pitch);
        gl.drawArrays(gl.TRIANGLES, 0, 3);
      };

      function loop(now: number) {
        cancelAnimationFrame(raf);
        if (disposed || !visible || document.visibilityState !== 'visible') return;
        const dt = now - last;
        last = now;
        // Sustained slow frames → render fewer pixels.
        if (dt > 34) slowFrames += 1;
        else slowFrames = Math.max(0, slowFrames - 1);
        if (slowFrames > 20) {
          if (scale > 0.6) {
            scale = Math.max(0.6, scale * 0.75);
            slowFrames = 0;
            resize();
          } else {
            // Still too slow: keep the current frame as a still image.
            cancelAnimationFrame(raf);
            return;
          }
        }
        draw(now);
        raf = requestAnimationFrame(loop);
      }

      const onVisibility = () => {
        if (document.visibilityState === 'visible' && !reduce) {
          last = performance.now();
          loop(last);
        }
      };
      document.addEventListener('visibilitychange', onVisibility);

      const onLost = (e: Event) => {
        e.preventDefault();
        cancelAnimationFrame(raf);
        setState('fallback');
      };
      canvas.addEventListener('webglcontextlost', onLost);

      setState('running');
      if (reduce) draw(performance.now());
      else loop(performance.now());

      cleanup = () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        io.disconnect();
        window.removeEventListener('pointermove', onPointer);
        document.removeEventListener('visibilitychange', onVisibility);
        canvas.removeEventListener('webglcontextlost', onLost);
        gl.getExtension('WEBGL_lose_context')?.loseContext();
      };
    };

    // Start once the main thread is idle, so the shader never competes with
    // the hero's first paint.
    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    let idleId = 0;
    let timeoutId = 0;
    if (w.requestIdleCallback) idleId = w.requestIdleCallback(start, { timeout: 1500 });
    else timeoutId = window.setTimeout(start, 600);

    return () => {
      disposed = true;
      if (idleId && w.cancelIdleCallback) w.cancelIdleCallback(idleId);
      if (timeoutId) window.clearTimeout(timeoutId);
      cleanup?.();
    };
  }, []);

  return (
    // The caller's positioning wins (e.g. "absolute inset-0"); otherwise the
    // wrapper is relative so the canvas has a positioned box to fill.
    <div ref={wrapRef} className={className && /\b(absolute|fixed)\b/.test(className) ? className : cn('relative', className)} aria-hidden="true">
      {/* Colour haze behind the glass, so it reads as lit from within. */}
      <div className="pointer-events-none absolute inset-[12%] rounded-full bg-[radial-gradient(closest-side,rgba(17,194,204,0.28),rgba(23,99,232,0.18)_55%,transparent)] blur-2xl" />
      <canvas
        ref={canvasRef}
        className={cn(
          'absolute inset-0 h-full w-full transition-opacity duration-1000',
          state === 'running' ? 'opacity-100' : 'opacity-0',
        )}
      />
      {state === 'fallback' && (
        <div className="absolute inset-0 grid place-items-center">
          <BrandMark className="h-1/2 w-1/2 drop-shadow-[0_20px_60px_rgba(17,194,204,0.35)]" />
        </div>
      )}
    </div>
  );
}
