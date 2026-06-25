import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full border-t-2 border-teal/30 bg-bg-deep mt-24 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Nav */}
          <nav className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-8">
            <Link to="/" className="font-pixel text-[10px] text-ink-dim hover:text-teal transition-colors neon-focus">Home</Link>
            <Link to="/projects" className="font-pixel text-[10px] text-ink-dim hover:text-teal transition-colors neon-focus">Projects</Link>
            <Link to="/curiosity-corner" className="font-pixel text-[10px] text-ink-dim hover:text-teal transition-colors neon-focus">Curiosity Corner</Link>
            <a href="#top" className="font-pixel text-[10px] text-amber hover:text-amber/80 transition-colors neon-focus">Back to top ↑</a>
          </nav>

          {/* Copyright + decorative CONTINUE prompt */}
          <div className="text-center md:text-right flex flex-col items-center md:items-end gap-2">
            <p className="font-mono text-sm text-ink-dim">
              © Giulia Raffaelli · Vienna, 2026
            </p>
            <span className="slow-blink font-pixel text-[8px] text-ink-dim/30 tracking-widest select-none" aria-hidden="true">
              CONTINUE? Y/N
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
}
