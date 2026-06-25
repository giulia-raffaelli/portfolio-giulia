import { useEffect, useRef, useState } from 'react';

const CHARS = '0123456789アカサタナハマヤラワイキシチニヒミリウクスツヌフムユルエケセテネヘメレオコソトノホモヨロヲ';

export default function MatrixRain() {
  const canvasRef = useRef(null);
  const [active, setActive] = useState(false);
  const animRef = useRef(null);

  useEffect(() => {
    const check = () => setActive(document.body.classList.contains('terminal-mode'));
    const observer = new MutationObserver(check);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    check();
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!active) {
      cancelAnimationFrame(animRef.current);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let drops = [];
    let cols = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      cols = Math.floor(canvas.width / 16);
      drops = Array.from({ length: cols }, () => Math.random() * -50);
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 3, 0, 0.07)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drops.forEach((y, i) => {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x = i * 16;
        const yPx = y * 16;

        if (y > 0) {
          ctx.font = 'bold 14px monospace';
          ctx.fillStyle = '#ffffff';
          ctx.fillText(char, x, yPx);

          ctx.font = '13px monospace';
          ctx.fillStyle = '#00FF41';
          for (let j = 1; j < 5 && y - j > 0; j++) {
            const fade = 1 - j / 6;
            ctx.fillStyle = `rgba(0, ${Math.floor(200 + 55 * fade)}, ${Math.floor(50 + 15 * fade)}, ${fade})`;
            const prev = CHARS[Math.floor(Math.random() * CHARS.length)];
            ctx.fillText(prev, x, (y - j) * 16);
          }
        }

        if (yPx > canvas.height && Math.random() > 0.97) {
          drops[i] = -Math.floor(Math.random() * 20);
        } else {
          drops[i] += 0.5;
        }
      });

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [active]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 200, opacity: 0.45, mixBlendMode: 'screen' }}
      aria-hidden="true"
    />
  );
}
