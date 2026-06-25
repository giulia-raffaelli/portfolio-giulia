import { useEffect, useRef, useState } from 'react';

// Generic friendly pixel ghost — follows cursor only in the footer zone (bottom 22% of page)
export default function PixelGhost() {
  const [visible, setVisible] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const posRef = useRef({ x: -200, y: -200 });
  const targetRef = useRef({ x: -200, y: -200 });
  const [renderPos, setRenderPos] = useState({ x: -200, y: -200 });
  const animRef = useRef(null);
  const prevX = useRef(-200);

  useEffect(() => {
    const onMove = (e) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      const threshold = window.innerHeight * 0.78;
      setVisible(e.clientY > threshold);
      setFlipped(e.clientX < prevX.current);
      prevX.current = e.clientX;
    };

    const loop = () => {
      posRef.current.x += (targetRef.current.x - posRef.current.x) * 0.09;
      posRef.current.y += (targetRef.current.y - posRef.current.y) * 0.09;
      setRenderPos({ x: posRef.current.x, y: posRef.current.y });
      animRef.current = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMove);
    animRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  if (!visible) return null;

  // Ghost color cycles subtly between teal and violet
  const ghostColor = '#3E909E';
  const pupilShift = flipped ? 0 : 1;

  return (
    <div
      className="fixed pointer-events-none select-none"
      style={{
        left: renderPos.x - 14,
        top: renderPos.y - 30,
        zIndex: 9985,
        opacity: 0.45,
        transform: `scaleX(${flipped ? -1 : 1}) translateZ(0)`,
        transition: 'opacity 0.3s ease',
        willChange: 'transform',
      }}
      aria-hidden="true"
    >
      {/* 12×14 pixel ghost, rendered via SVG rectangles */}
      <svg width="28" height="32" viewBox="0 0 12 14" style={{ imageRendering: 'pixelated', display: 'block' }}>
        {/* top dome */}
        <rect x="3" y="0" width="6" height="1" fill={ghostColor} />
        <rect x="2" y="1" width="8" height="1" fill={ghostColor} />
        <rect x="1" y="2" width="10" height="1" fill={ghostColor} />
        {/* body */}
        <rect x="0" y="3" width="12" height="6" fill={ghostColor} />
        {/* left eye white */}
        <rect x="2" y="4" width="3" height="3" fill="#e8ffe8" />
        {/* right eye white */}
        <rect x="7" y="4" width="3" height="3" fill="#e8ffe8" />
        {/* left pupil */}
        <rect x={2 + pupilShift} y="5" width="2" height="2" fill="#05060D" />
        {/* right pupil */}
        <rect x={7 + pupilShift} y="5" width="2" height="2" fill="#05060D" />
        {/* wavy skirt — 3 bumps */}
        <rect x="0"  y="9"  width="4"  height="3" fill={ghostColor} />
        <rect x="1"  y="12" width="2"  height="2" fill={ghostColor} />
        <rect x="4"  y="9"  width="4"  height="3" fill={ghostColor} />
        <rect x="5"  y="12" width="2"  height="2" fill={ghostColor} />
        <rect x="8"  y="9"  width="4"  height="3" fill={ghostColor} />
        <rect x="9"  y="12" width="2"  height="2" fill={ghostColor} />
        {/* subtle shine */}
        <rect x="3" y="2" width="2" height="1" fill="rgba(255,255,255,0.35)" />
      </svg>
    </div>
  );
}
