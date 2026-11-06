'use client';

import { useEffect, useRef, useState } from 'react';
import createGlobe from 'cobe';
import { isSoftwareWebGL } from '@/lib/webgl';

/** The seven emirates' capitals. */
const EMIRATES: [number, number][] = [
  [25.2048, 55.2708], // Dubai
  [24.4539, 54.3773], // Abu Dhabi
  [25.3463, 55.4209], // Sharjah
  [25.4052, 55.5136], // Ajman
  [25.5647, 55.5552], // Umm Al Quwain
  [25.8007, 55.9762], // Ras Al Khaimah
  [25.1288, 56.3265], // Fujairah
];

/** cobe angles that put Dubai's longitude at the centre of the globe. */
const DUBAI_PHI = Math.PI - ((55.27 * Math.PI) / 180 - Math.PI / 2);
const DUBAI_THETA = 0.32;

/**
 * A dotted WebGL globe (cobe, ~5 KB) turned toward the UAE, with the seven
 * emirates marked. It is only created once it nears the viewport, its render
 * loop is paused whenever it is off-screen, it can be dragged, and for
 * reduced-motion visitors it draws a single still frame.
 */
export default function EmiratesGlobe({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const drag = useRef<{ x: number; base: number } | null>(null);
  const offset = useRef(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap || typeof IntersectionObserver === 'undefined') return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches || isSoftwareWebGL();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = wrap.offsetWidth;
    let t = 0;
    let globe: ReturnType<typeof createGlobe> | null = null;
    let stillTimer = 0;

    const onResize = () => {
      width = wrap.offsetWidth;
    };

    const create = () => {
      globe = createGlobe(canvas, {
        devicePixelRatio: dpr,
        width: width * dpr,
        height: width * dpr,
        phi: DUBAI_PHI,
        theta: DUBAI_THETA,
        dark: 1,
        diffuse: 1.6,
        mapSamples: 20000,
        mapBrightness: 9,
        mapBaseBrightness: 0.04,
        baseColor: [0.3, 0.45, 0.8],
        markerColor: [0.2, 0.9, 0.95],
        glowColor: [0.12, 0.42, 1],
        opacity: 0.95,
        markers: EMIRATES.map((location, i) => ({ location, size: i === 0 ? 0.09 : 0.045 })),
        onRender: (state) => {
          if (!reduce && !drag.current) t += 0.0035;
          state.phi = DUBAI_PHI + Math.sin(t) * 0.55 + offset.current;
          state.theta = DUBAI_THETA;
          state.width = width * dpr;
          state.height = width * dpr;
        },
      });
      window.addEventListener('resize', onResize);
      window.setTimeout(() => setReady(true), 60);
    };

    // Render only while on screen; a single frame under reduced motion.
    const setRunning = (on: boolean) => {
      if (!globe) return;
      window.clearTimeout(stillTimer);
      if (reduce) {
        globe.toggle(true);
        stillTimer = window.setTimeout(() => globe?.toggle(false), 250);
      } else {
        globe.toggle(on);
      }
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !globe) create();
        setRunning(entry.isIntersecting);
      },
      { rootMargin: '200px 0px' },
    );
    io.observe(wrap);

    return () => {
      io.disconnect();
      window.clearTimeout(stillTimer);
      window.removeEventListener('resize', onResize);
      globe?.destroy();
    };
  }, []);

  return (
    <div ref={wrapRef} className={`relative aspect-square w-full ${className}`} aria-hidden="true">
      <div className="pointer-events-none absolute inset-[8%] rounded-full bg-[radial-gradient(closest-side,rgba(23,99,232,0.35),transparent)] blur-2xl" />
      <canvas
        ref={canvasRef}
        className={`relative h-full w-full cursor-grab transition-opacity duration-1000 active:cursor-grabbing ${ready ? 'opacity-100' : 'opacity-0'}`}
        style={{ contain: 'layout paint size' }}
        onPointerDown={(e) => {
          drag.current = { x: e.clientX, base: offset.current };
        }}
        onPointerUp={() => (drag.current = null)}
        onPointerOut={() => (drag.current = null)}
        onPointerMove={(e) => {
          if (drag.current) offset.current = drag.current.base + (e.clientX - drag.current.x) / 220;
        }}
      />
    </div>
  );
}
