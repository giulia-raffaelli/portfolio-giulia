import { useState } from 'react';
import { Link } from 'react-router-dom';

function OneUpButton() {
  const [count, setCount] = useState(0);
  const [showPop, setShowPop] = useState(false);

  const handleClick = () => {
    setCount((c) => c + 1);
    setShowPop(true);
    setTimeout(() => setShowPop(false), 1200);
  };

  return (
    <button
      onClick={handleClick}
      className="relative font-pixel text-[8px] text-ink-dim/20 hover:text-amber/70 transition-colors duration-300 cursor-pointer select-none"
      title="???"
      aria-label="Hidden bonus"
    >
      1UP
      {showPop && (
        <span className="one-up-pop absolute bottom-full left-1/2 -translate-x-1/2 mb-1 font-pixel text-[9px] text-amber pointer-events-none whitespace-nowrap">
          +1UP{count > 4 ? ' 🤯' : ''}
        </span>
      )}
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
      className="font-mono text-[9px] text-ink-dim/25 hover:text-teal/50 transition-colors cursor-pointer tracking-wider select-none"
      title="Toggle terminal mode"
      aria-label="Toggle hacker terminal mode"
    >
      {active ? '[EXIT MATRIX]' : '[>_]'}
    </button>
  );
}

function CRTToggle() {
  const [crtOn, setCrtOn] = useState(true);

  const toggle = () => {
    setCrtOn((c) => !c);
    document.body.classList.toggle('crt-off');
  };

  return (
    <button
      onClick={toggle}
      className="font-mono text-[9px] text-ink-dim/25 hover:text-violet/50 transition-colors cursor-pointer select-none"
      title={crtOn ? 'Disable CRT scanlines' : 'Enable CRT scanlines'}
      aria-label="Toggle CRT scanline overlay"
    >
      📺
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
            {/* Easter-egg micro-controls — subtle, for curious visitors */}
            <div className="flex items-center gap-4 mt-1" aria-hidden="true">
              <OneUpButton />
              <TerminalToggle />
              <CRTToggle />
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
