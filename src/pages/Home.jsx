import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Wraps an education card: Tetris drop-in spring animation + coin-pop on hover
function CoinCard({ children, delay, className }) {
  const [coinKey, setCoinKey] = useState(null);
  const shouldReduce = useReducedMotion();

  const variants = {
    hidden: { opacity: 0, y: shouldReduce ? 0 : -100, scaleY: shouldReduce ? 1 : 0.85 },
    visible: {
      opacity: 1, y: 0, scaleY: 1,
      transition: { type: 'spring', stiffness: 280, damping: 22, delay: delay ?? 0 },
    },
  };

  const pop = () => {
    const id = Date.now();
    setCoinKey(id);
    setTimeout(() => setCoinKey(null), 950);
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}
      className={`${className} relative`}
      onMouseEnter={pop}
      style={{ overflow: 'visible' }}
    >
      {children}
      {coinKey && (
        <div
          key={coinKey}
          className="coin-pop absolute right-5 -top-7 pointer-events-none z-30 flex items-end gap-1"
        >
          <svg width="16" height="16" viewBox="0 0 6 6" style={{ imageRendering: 'pixelated', display: 'block' }}>
            <rect x="1" y="0" width="4" height="1" fill="#FFB627" />
            <rect x="0" y="1" width="1" height="4" fill="#FFB627" />
            <rect x="5" y="1" width="1" height="4" fill="#FFB627" />
            <rect x="1" y="1" width="4" height="4" fill="#FFD700" />
            <rect x="1" y="5" width="4" height="1" fill="#FFB627" />
            <rect x="2" y="2" width="1" height="2" fill="rgba(255,255,255,0.55)" />
          </svg>
          <span className="font-pixel text-[7px] text-amber leading-none">+10</span>
        </div>
      )}
    </motion.div>
  );
}

function EasterEggTooltip({ children, quote }) {
  const [show, setShow] = useState(false);
  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
    >
      {children}
      {show && (
        <span className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 bg-bg-deep border border-teal/40 text-teal font-mono text-[10px] px-3 py-1.5 whitespace-nowrap shadow-[0_0_12px_rgba(62,144,158,0.25)] pointer-events-none">
          {quote}
        </span>
      )}
    </span>
  );
}

function PixelAvatar({ src }) {
  return (
    <div className="relative w-full h-full">
      <img
        src={src}
        alt="Giulia Raffaelli"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center top',
          display: 'block',
          filter: 'contrast(1.18) brightness(0.88) saturate(0.72)',
        }}
      />
      {/* Teal arcade colour wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'rgba(62, 144, 158, 0.18)', mixBlendMode: 'color' }}
      ></div>
      {/* Magenta edge glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ boxShadow: 'inset 0 0 28px rgba(255,46,146,0.18)' }}
      ></div>
    </div>
  );
}

export default function Home() {
  const shouldReduceMotion = useReducedMotion();

  const fadeIn = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 overflow-hidden border-b-2 border-teal/20 pt-20">
        {/* Tron Grid Background — animated perspective grid */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" style={{ perspective: '800px' }}>
          <div
            className={`tron-grid absolute bottom-[-20%] left-[-50%] w-[200%] h-[130%]`}
            style={{
              backgroundImage:
                'linear-gradient(rgba(62,144,158,0.55) 1px, transparent 1px), linear-gradient(90deg, rgba(62,144,158,0.4) 1px, transparent 1px), linear-gradient(rgba(255,46,146,0.12) 1px, transparent 1px)',
              backgroundSize: '50px 50px, 50px 50px, 150px 150px',
              transform: 'rotateX(62deg) translateY(60px)',
              transformOrigin: 'bottom center',
            }}
          ></div>
          {/* Horizon fade */}
          <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg/70 to-transparent z-10 pointer-events-none"></div>
          {/* Side fades */}
          <div className="absolute inset-0 bg-gradient-to-r from-bg via-transparent to-bg z-10 pointer-events-none"></div>
        </div>

        <motion.div
          className="relative z-20 text-center max-w-4xl mx-auto w-full"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn} className="mb-4">
            <span className="font-mono text-sm tracking-widest uppercase text-magenta">Portfolio · Marketing & Brand Strategy</span>
          </motion.div>

          <motion.h1 variants={fadeIn} className="font-pixel text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-ink drop-shadow-[0_0_15px_rgba(237,234,224,0.3)] mb-8 leading-tight">
            Giulia<br/>Raffaelli
          </motion.h1>

          <motion.p variants={fadeIn} className="font-mono text-lg md:text-xl text-ink-dim max-w-2xl mx-auto mb-8 leading-relaxed">
            Marketing & Brand Strategy — MSc Marketing student at WU Vienna, building the bridge between creative ideas and measurable impact.
          </motion.p>

          {/* INSERT COIN arcade prompt */}
          <motion.div variants={fadeIn} className="flex justify-center items-center gap-3 mb-8">
            <span className="font-pixel text-xs sm:text-sm text-amber tracking-widest uppercase drop-shadow-[0_0_8px_rgba(255,182,39,0.6)]">
              INSERT COIN TO CONTINUE
            </span>
            <span className="cursor-blink inline-block w-3 h-5 bg-amber align-middle"></span>
          </motion.div>

          <motion.div variants={fadeIn} className="font-mono text-sm text-ink flex flex-wrap justify-center items-center gap-x-4 gap-y-2 mb-12">
            <span>MSc Marketing · WU Vienna</span>
            <span className="hidden sm:inline text-teal">/</span>
            <span className="text-amber animate-pulse bg-amber/10 px-2 py-1 border border-amber/30 rounded font-bold tracking-wider">
              1UP AVAILABLE: Open to 2026 opportunities
            </span>
          </motion.div>

          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link to="/projects" className="w-full sm:w-auto px-8 py-4 bg-teal text-bg font-pixel text-xs tracking-wider uppercase hover:bg-teal/90 pixel-border transition-all neon-focus text-center">
              View projects →
            </Link>
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-transparent text-teal font-pixel text-xs tracking-wider uppercase border-2 border-teal hover:bg-teal/10 shadow-[4px_4px_0_var(--teal)] transition-all neon-focus text-center">
              Get in touch
            </a>
          </motion.div>

          {/* Visitor hint — lets curious players know secrets exist */}
          <motion.p variants={fadeIn} className="font-mono text-[10px] text-ink-dim/25 tracking-widest mt-8 select-none" aria-hidden="true">
            // this page contains hidden achievements — good luck, player
          </motion.p>
        </motion.div>
      </section>

      {/* SECTION 01: ABOUT */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-16 flex items-center gap-4"
        >
          <span className="font-pixel text-2xl text-teal">01</span>
          <h2 className="font-pixel text-xl sm:text-2xl text-ink uppercase">Character Select</h2>
          <div className="h-[2px] bg-teal/30 flex-grow ml-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
          {/* Left: Avatar Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="flex flex-col"
          >
            <div className="bg-panel border-4 border-teal p-2 shadow-[8px_8px_0_var(--teal)] relative group">
              <div className="aspect-square bg-bg-deep border-2 border-teal/50 overflow-hidden relative">
                {/* Pixel corner decorations */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-teal z-10 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-teal z-10 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-teal z-10 pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-teal z-10 pointer-events-none"></div>
                {/* Scanline overlay on photo */}
                <div className="absolute inset-0 z-10 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.18) 3px, rgba(0,0,0,0.18) 4px)' }}></div>
                <PixelAvatar src="/giulia-avatar.png" />
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-pixel text-sm text-ink mb-2">Giulia Raffaelli</h3>
                <div className="inline-block bg-teal/20 border border-teal text-teal font-mono text-xs px-2 py-1">
                  CLASS: GROWTH MARKETER
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Bio & Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col space-y-8"
          >
            <motion.p variants={fadeIn} className="font-mono text-lg text-ink-dim leading-relaxed">
              MSc Marketing at WU Vienna, Bocconi alumna in Economics & Management. Drawn to brand strategy, digital campaigns, and the data behind consumer behaviour — building the bridge between creative thinking and measurable impact.
            </motion.p>

            <motion.div variants={fadeIn} className="bg-magenta/10 border-l-4 border-magenta p-4 flex items-start gap-4">
              <span className="font-pixel text-magenta text-sm mt-1 animate-pulse">!</span>
              <p className="font-mono text-ink text-sm">
                <strong className="text-magenta">Next -</strong> exchange semester in Kobe, Japan, from September to January.
              </p>
            </motion.div>

            {/* Two-path decision — sci-fi trope nod */}
            <motion.div variants={fadeIn} className="flex flex-wrap gap-3">
              <span className="font-mono text-[10px] text-ink-dim/60 border border-ink-dim/20 px-2 py-1 tracking-wider uppercase">
                ▸ STAY ON CURRENT PATH
              </span>
              <span className="font-mono text-[10px] text-teal border border-teal/30 px-2 py-1 tracking-wider uppercase">
                ▸ NEW EXCHANGE UNLOCKED →
              </span>
            </motion.div>

            <motion.div variants={fadeIn} className="flex flex-col space-y-4">
              <h4 className="font-pixel text-xs text-teal uppercase">Language Skills</h4>
              <div className="flex flex-wrap gap-3">
                <span className="font-mono text-xs px-3 py-1.5 border border-ink/20 text-ink bg-panel">Italian · Native</span>
                <span className="font-mono text-xs px-3 py-1.5 border border-ink/20 text-ink bg-panel">English · C1</span>
                <span className="font-mono text-xs px-3 py-1.5 border border-ink/20 text-ink bg-panel">German · B1/B2</span>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="pt-6 border-t border-teal/20 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="mailto:giuliaraffaelli179@gmail.com" className="font-mono text-sm text-ink-dim hover:text-teal transition-colors neon-focus flex items-center gap-2">
                <span className="text-teal">@</span> giuliaraffaelli179@gmail.com
              </a>
              <a href="tel:+393341094073" className="font-mono text-sm text-ink-dim hover:text-teal transition-colors neon-focus flex items-center gap-2">
                <span className="text-teal">#</span> +39 334 109 4073
              </a>
              <a href="https://linkedin.com/in/giulia-raffaelli-" target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-ink-dim hover:text-teal transition-colors neon-focus flex items-center gap-2">
                <span className="text-teal">&gt;</span> linkedin.com/in/giulia-raffaelli-
              </a>
              <span className="font-mono text-sm text-ink-dim flex items-center gap-2">
                <span className="text-teal">*</span> Loc: The world
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 02: WORK EXPERIENCE */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-16 flex items-center gap-4"
        >
          <span className="font-pixel text-2xl text-magenta">02</span>
          <h2 className="font-pixel text-xl sm:text-2xl text-ink uppercase">Quest Log</h2>
          <div className="h-[2px] bg-magenta/30 flex-grow ml-4"></div>
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-4 sm:before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-magenta before:via-magenta/50 before:to-transparent">

          {/* Job 1 — Active */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-full border-4 border-bg bg-magenta absolute left-0 sm:left-2 md:left-1/2 -translate-x-1/2 shadow-[0_0_15px_rgba(255,46,146,0.8)] z-10"></div>

            <div className="w-[calc(100%-3rem)] sm:w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-panel p-6 pixel-border-magenta relative ml-auto md:ml-0 md:group-odd:ml-auto">
              {/* Quest type labels */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="bg-amber text-bg font-pixel text-[9px] px-2 py-1 shadow-[2px_2px_0_rgba(0,0,0,0.5)] animate-pulse">
                  ACTIVE QUEST
                </span>
                <span className="font-mono text-[10px] text-amber/80 tracking-widest uppercase border border-amber/30 px-2 py-1">
                  MAIN QUEST
                </span>
              </div>
              <h3 className="font-pixel text-sm text-ink mb-1 leading-relaxed">Social Media Manager</h3>
              <div className="font-mono text-xs text-magenta mb-4">Digital Economy, WU Vienna</div>
              <div className="font-mono text-xs text-ink-dim mb-4 flex flex-col sm:flex-row gap-2 sm:gap-4">
                <span>Nov 2025–Present</span>
                <span className="hidden sm:inline text-ink/30">|</span>
                <span>Vienna, Austria</span>
              </div>
              <p className="font-mono text-sm text-ink-dim leading-relaxed">
                Managing the LinkedIn presence for WU's Master in Digital Economy - content strategy and creation, community management, and stakeholder coordination across alumni, students, faculty and industry partners. Editorial calendar planning and performance analytics.
              </p>
            </div>
          </motion.div>

          {/* Job 2 — Completed */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
          >
            <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-bg bg-ink-dim absolute left-1 sm:left-3 md:left-1/2 -translate-x-1/2 z-10 group-hover:bg-teal transition-colors"></div>

            <div className="w-[calc(100%-3rem)] sm:w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-panel p-6 border-2 border-teal/20 hover:border-teal/50 transition-colors relative ml-auto md:ml-0 md:group-odd:ml-auto">
              <div className="mb-3">
                <span className="font-mono text-[10px] text-ink-dim/60 tracking-widest uppercase border border-ink-dim/20 px-2 py-1">
                  COMPLETED QUEST
                </span>
              </div>
              <h3 className="font-pixel text-sm text-ink mb-1 leading-relaxed">Marketing & Business Development Intern</h3>
              <div className="font-mono text-xs text-teal mb-4">BitBang S.r.l.</div>
              <div className="font-mono text-xs text-ink-dim mb-4 flex flex-col sm:flex-row gap-2 sm:gap-4">
                <span>Jul 2024–Dec 2024</span>
                <span className="hidden sm:inline text-ink/30">|</span>
                <span>Bologna, Italy</span>
              </div>
              <p className="font-mono text-sm text-ink-dim leading-relaxed">
                Identified new business opportunities and developed marketing strategies, supporting sales efforts with a focus on prospects' digital needs.
              </p>
            </div>
          </motion.div>

          {/* Job 3 — Completed */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
          >
            <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-bg bg-ink-dim absolute left-1 sm:left-3 md:left-1/2 -translate-x-1/2 z-10 group-hover:bg-teal transition-colors"></div>

            <div className="w-[calc(100%-3rem)] sm:w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-panel p-6 border-2 border-teal/20 hover:border-teal/50 transition-colors relative ml-auto md:ml-0 md:group-odd:ml-auto">
              <div className="mb-3">
                <span className="font-mono text-[10px] text-ink-dim/60 tracking-widest uppercase border border-ink-dim/20 px-2 py-1">
                  COMPLETED QUEST
                </span>
              </div>
              <h3 className="font-pixel text-sm text-ink mb-1 leading-relaxed">Sales Representative</h3>
              <div className="font-mono text-xs text-teal mb-4">PegPerego</div>
              <div className="font-mono text-xs text-ink-dim mb-4 flex flex-col sm:flex-row gap-2 sm:gap-4">
                <span>Apr 2024–Jun 2024</span>
                <span className="hidden sm:inline text-ink/30">|</span>
                <span>Milan, Italy</span>
              </div>
              <p className="font-mono text-sm text-ink-dim leading-relaxed">
                Promoted PegPerego products at Salina Milano, engaging directly with customers on the retail floor.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* SECTION 03: EDUCATION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-16 flex items-center gap-4"
        >
          <span className="font-pixel text-2xl text-amber">03</span>
          <h2 className="font-pixel text-xl sm:text-2xl text-ink uppercase">Skill Tree</h2>
          <div className="h-[2px] bg-amber/30 flex-grow ml-4"></div>
        </motion.div>

        <div className="relative">
          {/* Connector lines (Desktop only) */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
            <svg className="w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="none" style={{ minHeight: '500px' }}>
              {/* MSc → Bocconi BSc */}
              <path d="M 200 150 L 600 150" fill="none" stroke="rgba(255,182,39,0.3)" strokeWidth="4" strokeDasharray="8 8" />
              {/* Bocconi BSc → Exchange Program (same institution, linked) */}
              <path d="M 600 150 L 600 450" fill="none" stroke="rgba(255,182,39,0.55)" strokeWidth="3" strokeDasharray="6 5" />
              <text x="612" y="310" fill="rgba(255,182,39,0.4)" fontSize="10" fontFamily="monospace">↳ BSc yr 3</text>
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 relative z-10">

            {/* Node 1 — MSc Marketing */}
            <CoinCard delay={0} className="bg-panel border-l-4 border-amber p-6 group sparkle-card">
              <div className="absolute top-0 right-0 p-2 bg-amber/10 text-amber font-mono text-xs font-bold">GPA 1.0/4</div>
              <h3 className="font-pixel text-sm text-ink mb-2 leading-relaxed pr-20">MSc in Marketing</h3>
              <div className="font-mono text-xs text-amber mb-4">Wirtschaftsuniversität Wien (WU) · Sep 2025–Jun 2027</div>
              <div className="font-mono text-sm text-ink-dim">
                <span className="text-ink font-bold">Coursework:</span> Global Marketing Strategy, Management by Experiments, Marketing Analytics, SQL & Power BI
              </div>
            </CoinCard>

            {/* Node 2 — Bocconi */}
            <CoinCard delay={0.15} className="bg-panel border-l-4 border-amber p-6 group sparkle-card">
              {/* Badges row — stacked inside card bounds */}
              <div className="flex flex-wrap justify-end items-start gap-2 mb-4">
                <span className="bg-amber/10 text-amber font-mono text-xs font-bold px-2 py-1">109/110</span>
                <span className="bg-violet text-bg font-pixel text-[9px] px-2 py-1 shadow-[2px_2px_0_rgba(0,0,0,0.5)] border border-violet/50 rotate-1 whitespace-nowrap">
                  SECRET ACHIEVEMENT UNLOCKED 🏆
                </span>
              </div>
              <h3 className="font-pixel text-sm text-ink mb-2 leading-relaxed">BSc Economics & Management</h3>
              <div className="font-mono text-xs text-amber mb-4">Bocconi University · Sep 2021–Oct 2024</div>
              <p className="font-mono text-sm text-ink-dim leading-relaxed">
                Arts, Culture and Communication. Thesis: 'Marketing Mattel's live-action Barbie: a case study in rebranding a cultural icon.'
              </p>
            </CoinCard>

            {/* Node 3 — Digital Marketing */}
            <CoinCard delay={0.3} className="bg-panel border-l-4 border-amber/50 p-6 group sparkle-card">
              <div className="absolute top-0 right-0 p-2 bg-amber/5 text-amber/70 font-mono text-xs">Online</div>
              <h3 className="font-pixel text-sm text-ink mb-2 leading-relaxed">Master in Digital Marketing</h3>
              <div className="font-mono text-xs text-amber/70 mb-4">Start2Impact University · Apr 2024–May 2025</div>
              <div className="font-mono text-sm text-ink-dim">
                <span className="text-ink font-bold">Coursework:</span> SEO, Google Ads & Analytics, Meta Ads, Funnel Marketing, Copywriting, Video Editing
              </div>
            </CoinCard>

            {/* Node 4 — Exchange */}
            <CoinCard delay={0.45} className="bg-panel border-l-4 border-amber/50 p-6 group sparkle-card">
              <div className="absolute top-0 right-0 p-2 bg-amber/5 text-amber/70 font-mono text-xs font-bold">GPA 1.2/4</div>
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <h3 className="font-pixel text-sm text-ink leading-relaxed">Exchange Program</h3>
                <span className="font-mono text-[9px] text-amber/60 border border-amber/25 px-1.5 py-0.5 tracking-wider whitespace-nowrap">↳ Bocconi BSc · Year 3</span>
              </div>
              <div className="font-mono text-xs text-amber/70 mb-4">Wirtschaftsuniversität Wien (WU) · Sep 2023–Jan 2024</div>
              <div className="font-mono text-sm text-ink-dim">
                <span className="text-ink font-bold">Coursework:</span> Marketing, Corporate Finance, Strategic Management & Leadership
              </div>
            </CoinCard>

          </div>
        </div>
      </section>

      {/* SECTION 04: BEYOND THE DESK */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-16 flex items-center gap-4"
        >
          <span className="font-pixel text-2xl text-violet">04</span>
          <h2 className="font-pixel text-xl sm:text-2xl text-ink uppercase">Beyond the Desk</h2>
          <div className="h-[2px] bg-violet/30 flex-grow ml-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

          {/* Panel A: Guild Hall */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-panel border-2 border-violet/30 p-8"
          >
            <h3 className="font-pixel text-lg text-violet mb-8 border-b-2 border-violet/20 pb-4">Guild Hall</h3>
            <ul className="space-y-6">
              <li className="relative pl-6 before:absolute before:left-0 before:top-1.5 before:w-2 before:h-2 before:bg-violet">
                <div className="font-mono text-sm text-ink font-bold">WUMA Marketing Association</div>
                <div className="font-mono text-xs text-ink-dim">Partners Department Associate · Oct 2025–Present</div>
              </li>
              <li className="relative pl-6 before:absolute before:left-0 before:top-1.5 before:w-2 before:h-2 before:bg-violet">
                <div className="font-mono text-sm text-ink font-bold">Mentors4u Program</div>
                <div className="font-mono text-xs text-ink-dim">Mentee, top 25% merit-based program · Apr 2024–Present</div>
              </li>
              <li className="relative pl-6 before:absolute before:left-0 before:top-1.5 before:w-2 before:h-2 before:bg-violet">
                <div className="font-mono text-sm text-ink font-bold">B.lab Bocconi</div>
                <div className="font-mono text-xs text-ink-dim">Social Media Manager, staff · Jan 2022–Jun 2023</div>
              </li>
            </ul>
          </motion.div>

          {/* Panel B: World Map — passport stamps + flight path + compass */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-bg-deep border-2 border-teal/30 p-8 relative overflow-hidden"
          >
            {/* Dot grid bg */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--teal) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>

            {/* Flight path SVG overlay */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-35" viewBox="0 0 400 300" preserveAspectRatio="none" aria-hidden="true">
              <path
                d="M 30,240 Q 100,140 180,200 Q 260,260 310,160 Q 350,100 380,140"
                fill="none"
                stroke="#3E909E"
                strokeWidth="1.5"
                strokeDasharray="7 5"
                strokeLinecap="round"
              />
              <circle cx="30"  cy="240" r="2.5" fill="#3E909E" opacity="0.7"/>
              <circle cx="180" cy="200" r="2.5" fill="#3E909E" opacity="0.7"/>
              <circle cx="310" cy="160" r="2.5" fill="#3E909E" opacity="0.7"/>
              <circle cx="380" cy="140" r="2.5" fill="#3E909E" opacity="0.7"/>
            </svg>

            {/* Compass rose */}
            <svg
              className="absolute bottom-4 right-4 opacity-50"
              width="38"
              height="38"
              viewBox="0 0 38 38"
              aria-hidden="true"
            >
              <line x1="19" y1="3"  x2="19" y2="35" stroke="#3E909E" strokeWidth="1"/>
              <line x1="3"  y1="19" x2="35" y2="19" stroke="#3E909E" strokeWidth="1"/>
              <line x1="7"  y1="7"  x2="31" y2="31" stroke="#3E909E" strokeWidth="0.5" opacity="0.6"/>
              <line x1="31" y1="7"  x2="7"  y2="31" stroke="#3E909E" strokeWidth="0.5" opacity="0.6"/>
              <polygon points="19,3 21,15 19,17 17,15" fill="#3E909E"/>
              <polygon points="19,35 21,23 19,21 17,23" fill="#3E909E" opacity="0.6"/>
              <polygon points="3,19 15,17 17,19 15,21"  fill="#3E909E" opacity="0.6"/>
              <polygon points="35,19 23,17 21,19 23,21" fill="#3E909E" opacity="0.6"/>
              <text x="19" y="11" textAnchor="middle" fill="#3E909E" fontSize="5" fontFamily="monospace" fontWeight="bold">N</text>
              <circle cx="19" cy="19" r="2.5" fill="#3E909E"/>
            </svg>

            <EasterEggTooltip quote="not all who scroll are lost...">
              <h3 className="font-pixel text-lg text-teal mb-8 border-b-2 border-teal/20 pb-4 relative z-10 cursor-default">World Map</h3>
            </EasterEggTooltip>

            {/* Passport stamp chips */}
            <div className="flex flex-wrap gap-4 relative z-10">
              {[
                { label: 'Michigan, USA', sub: 'Rotary Exchange', rotate: '-rotate-2' },
                { label: 'Beijing',       sub: 'High School Exchange', rotate: 'rotate-1' },
                { label: 'Salisbury, UK', sub: 'Kaplan Summer Camp', rotate: '-rotate-1' },
                { label: 'Malta',         sub: 'EF Summer Camp', rotate: 'rotate-2' },
                { label: 'Australia',     sub: 'Melbourne · Sydney · Brisbane — 1 month exploring', rotate: '-rotate-1' },
              ].map(({ label, sub, rotate }) => (
                <span
                  key={label}
                  className={`${rotate} font-mono text-xs px-3 py-2 border-2 border-teal/50 text-ink bg-panel/60 shadow-[inset_0_0_0_1px_rgba(62,144,158,0.15)] hover:border-teal hover:bg-teal/10 transition-colors cursor-default`}
                  style={{ textAlign: 'center' }}
                >
                  <span className="block text-teal text-[9px] tracking-widest uppercase mb-0.5">[+]</span>
                  <span className="block font-bold">{label}</span>
                  <span className="block text-ink-dim text-[10px]">{sub}</span>
                </span>
              ))}
            </div>
          </motion.div>

        </div>

      </section>

      {/* SECTION 05: CONTACT */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center border-t-2 border-teal/20 mt-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="flex flex-col items-center gap-10"
        >
          {/* Section header with PHONE HOME eyebrow */}
          <div className="flex flex-wrap justify-center items-center gap-3 mb-2">
            <span className="font-pixel text-xs text-teal">05 · Contact</span>
            <EasterEggTooltip quote="the call is coming from inside the portfolio.">
              <span className="font-mono text-[10px] text-teal/50 border border-teal/20 px-2 py-0.5 tracking-widest uppercase cursor-default">
                PHONE HOME
              </span>
            </EasterEggTooltip>
          </div>

          <h2 className="font-pixel text-2xl sm:text-3xl md:text-4xl text-ink leading-tight">
            Let's talk about how I can bring this thinking to your team.
          </h2>

          {/* Contact links + glowing signal icon */}
          <div className="flex flex-col items-center gap-4 w-full">
            <div className="flex items-center justify-center gap-3">
              {/* Signal wave SVG */}
              <svg
                width="22"
                height="16"
                viewBox="0 0 22 16"
                className="glow-teal flex-shrink-0"
                aria-hidden="true"
              >
                <path d="M1 13 Q5.5 3 11 8 Q16.5 13 21 3" stroke="#3E909E" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 15 Q7 7 11 10 Q15 13 18 5" stroke="#3E909E" strokeWidth="0.8" fill="none" strokeLinecap="round" opacity="0.45"/>
                <circle cx="11" cy="8.5" r="1.5" fill="#3E909E"/>
              </svg>
              <a
                href="mailto:giuliaraffaelli179@gmail.com"
                className="font-mono text-lg text-teal hover:text-amber transition-colors neon-focus"
              >
                giuliaraffaelli179@gmail.com
              </a>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-8">
              <a
                href="tel:+393341094073"
                className="font-mono text-lg text-teal hover:text-amber transition-colors neon-focus"
              >
                +39 334 109 4073
              </a>
              <span className="hidden sm:inline text-ink/30 font-mono">·</span>
              <a
                href="https://linkedin.com/in/giulia-raffaelli-"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-lg text-teal hover:text-amber transition-colors neon-focus"
              >
                linkedin.com/in/giulia-raffaelli-
              </a>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
