/**
 * True when WebGL is being emulated on the CPU (SwiftShader, llvmpipe, the
 * Windows Basic Render driver). Animated WebGL there costs main-thread time on
 * every frame, so decorative 3D falls back to a still frame instead.
 * The probe context is released immediately. Client-only.
 */
let cached: boolean | null = null;

export function isSoftwareWebGL(): boolean {
  if (cached !== null) return cached;
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl');
    if (!gl) return (cached = true);
    const info = gl.getExtension('WEBGL_debug_renderer_info');
    const renderer = info ? String(gl.getParameter(info.UNMASKED_RENDERER_WEBGL)) : '';
    gl.getExtension('WEBGL_lose_context')?.loseContext();
    cached = /swiftshader|llvmpipe|softpipe|software|basic render/i.test(renderer);
  } catch {
    cached = true;
  }
  return cached;
}
