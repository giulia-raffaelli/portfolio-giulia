import { useState, useEffect, useCallback, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

const ACHIEVEMENTS = [
  {
    id: 'explorer',
    icon: '📜',
    title: 'DEEP SCROLL',
    desc: 'You reached the final level of the portfolio.',
  },
  {
    id: 'patient',
    icon: '⏱️',
    title: 'PATIENT PLAYER',
    desc: '60 seconds in. You actually read everything.',
  },
];

export default function AchievementToast() {
  const [toast, setToast] = useState(null);
  const fired = useRef(new Set());
  const shouldReduceMotion = useReducedMotion();

  const trigger = useCallback((id) => {
    if (fired.current.has(id)) return;
    fired.current.add(id);
    const ach = ACHIEVEMENTS.find((a) => a.id === id);
    if (!ach) return;
    setToast(ach);
    setTimeout(() => setToast(null), 5500);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => trigger('patient'), 60000);

    const onScroll = () => {
      const atBottom =
        window.scrollY + window.innerHeight >= document.body.scrollHeight - 100;
      if (atBottom) trigger('explorer');
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
    };
  }, [trigger]);

  if (!toast) return null;

  return (
    <div
      role="alert"
      aria-live="polite"
      className={`fixed bottom-6 right-6 z-[10000] flex items-center gap-4 bg-panel border-2 border-amber px-5 py-4 shadow-[0_0_30px_rgba(255,182,39,0.45)] ${shouldReduceMotion ? '' : 'achievement-toast'}`}
    >
      <span className="text-3xl select-none leading-none">{toast.icon}</span>
      <div className="flex flex-col gap-0.5">
        <span className="font-pixel text-[8px] text-amber/70 tracking-[0.18em] uppercase">
          Achievement Unlocked
        </span>
        <span className="font-pixel text-[11px] text-ink">{toast.title}</span>
        <span className="font-mono text-[11px] text-ink-dim">{toast.desc}</span>
      </div>
      <button
        onClick={() => setToast(null)}
        className="ml-3 self-start font-mono text-ink-dim/50 hover:text-ink-dim leading-none text-base"
        aria-label="Dismiss achievement"
      >
        ✕
      </button>
    </div>
  );
}
