import { useState } from 'react';
import { Link } from 'react-router-dom';

function OneUpButton() {
  const [count, setCount] = useState(0);
  const [pops, setPops] = useState([]);

  const handleClick = () => {
    const id = Date.now();
    setCount((c) => c + 1);
    setPops((p) => [...p, id]);
    setTimeout(() => setPops((p) => p.filter((x) => x !== id)), 1100);
  };

  return (
    <button
      onClick={handleClick}
      className="relative font-pixel text-[9px] text-green-400/50 hover:text-green-400 border border-green-400/25 hover:border-green-400/70 px-2 py-0.5 transition-all duration-200 cursor-pointer select-none hover:shadow-[0_0_10px_rgba(74,222,128,0.35)]"
      title="???"
      aria-label="Hidden bonus"
    >
      ♥ 1UP
      {pops.map((id) => (
        <span
          key={id}
          className="one-up-pop absolute bottom-full left-1/2 -translate-x-1/2 mb-1 font-pixel text-[11px] text-green-400 pointer-events-none whitespace-nowrap drop-shadow-[0_0_6px_rgba(74,222,128,0.9)]"
        >
          +1UP{count > 5 ? '!!' : '!'}
        </span>
      ))}
    </button>
  );
}

function TerminalToggle() {
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive((a) => !a);
    document.body.classList.toggle('terminal-mode');
  };

  return (
    <button
      onClick={toggle}
      className={`font-pixel text-[8px] border px-2 py-0.5 transition-all duration-200 cursor-pointer select-none ${
        active
          ? 'text-green-400 border-green-400/70 shadow-[0_0_12px_rgba(0,255,65,0.5)] bg-green-400/10'
          : 'text-green-500/35 border-green-500/20 hover:text-green-400/70 hover:border-green-400/40 hover:shadow-[0_0_8px_rgba(0,255,65,0.25)]'
      }`}
      title="Toggle Matrix mode"
      aria-label="Toggle Matrix terminal mode"
    >
      {active ? 'EXIT MATRIX' : '>_ MATRIX'}
    </button>
  );
}

export default function Footer() {
  return (
    <footer className="w-full border-t-2 border-teal/30 bg-bg-deep mt-24 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Nav */}
          <nav className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-8">
            <Link to="/" className="font-pixel text-[10px] text-ink-dim hover:text-teal transition-colors neon-focus">Home</Link>
            <Link to="/projects" className="font-pixel text-[10px] text-ink-dim hover:text-teal transition-colors neon-focus">Projects</Link>
            <Link to="/curiosity-corner" className="font-pixel text-[10px] text-ink-dim hover:text-teal transition-colors neon-focus">Side Quests</Link>
            <a href="#top" className="font-pixel text-[10px] text-amber hover:text-amber/80 transition-colors neon-focus">Back to top ↑</a>
          </nav>

          {/* Copyright + hidden controls */}
          <div className="text-center md:text-right flex flex-col items-center md:items-end gap-2">
            <p className="font-mono text-sm text-ink-dim">
              © Giulia Raffaelli · 2026
            </p>
            <span className="slow-blink font-pixel text-[8px] text-ink-dim/30 tracking-widest select-none" aria-hidden="true">
              CONTINUE? Y/N
            </span>
            {/* Easter-egg micro-controls */}
            <div className="flex items-center gap-3 mt-1" aria-hidden="true">
              <OneUpButton />
              <TerminalToggle />
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
