import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
        {/* Tron Grid Background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none perspective-[1000px]">
          <div className="absolute bottom-0 left-[-50%] w-[200%] h-[100%] bg-[linear-gradient(rgba(62,144,158,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(62,144,158,0.2)_1px,transparent_1px)] bg-[size:50px_50px] [transform:rotateX(60deg)_translateY(100px)] opacity-60"></div>
          {/* Horizon fade */}
          <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg/80 to-transparent z-10"></div>
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

          <motion.div variants={fadeIn} className="font-mono text-sm text-ink flex flex-wrap justify-center items-center gap-x-4 gap-y-2 mb-12">
            <span>Vienna, Austria</span>
            <span className="hidden sm:inline text-teal">/</span>
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
              <div className="aspect-square bg-bg-deep border-2 border-teal/50 flex items-center justify-center overflow-hidden relative">
                {/* Pixel frame inner corners */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-bg-deep z-10"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-bg-deep z-10"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-bg-deep z-10"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-bg-deep z-10"></div>
                
                {/* Placeholder silhouette - abstract shapes */}
                <div className="w-full h-full relative opacity-80 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[40%] bg-teal/20 border-t-4 border-l-4 border-r-4 border-teal/40"></div>
                  <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[40%] aspect-square bg-teal/20 border-4 border-teal/40 rounded-sm"></div>
                </div>
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
              I'm a marketing master's student at WU Vienna with a background in Economics & Management for Arts, Culture and Communication from Bocconi University. I'm curious by nature - drawn to brand strategy, digital campaigns and the data behind consumer behaviour, and always looking for the bridge between creativity and measurable impact. Outside coursework, I've worked across content strategy, business development and sales - and I like projects that combine structured thinking with a strong creative point of view.
            </motion.p>

            <motion.div variants={fadeIn} className="bg-magenta/10 border-l-4 border-magenta p-4 flex items-start gap-4">
              <span className="font-pixel text-magenta text-sm mt-1 animate-pulse">!</span>
              <p className="font-mono text-ink text-sm">
                <strong className="text-magenta">Next -</strong> exchange semester in Kobe, Japan, from September to January.
              </p>
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
              <a href="https://linkedin.com/in/giulia-raffaelli" target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-ink-dim hover:text-teal transition-colors neon-focus flex items-center gap-2">
                <span className="text-teal">&gt;</span> linkedin.com/in/giulia-raffaelli
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
          
          {/* Job 1 */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            {/* Timeline dot */}
            <div className="flex items-center justify-center w-8 h-8 rounded-full border-4 border-bg bg-magenta absolute left-0 sm:left-2 md:left-1/2 -translate-x-1/2 shadow-[0_0_15px_rgba(255,46,146,0.8)] z-10"></div>
            
            <div className="w-[calc(100%-3rem)] sm:w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-panel p-6 pixel-border-magenta relative ml-auto md:ml-0 md:group-odd:ml-auto">
              <div className="absolute -top-3 -right-3 bg-amber text-bg font-pixel text-[10px] px-2 py-1 shadow-[2px_2px_0_rgba(0,0,0,0.5)] z-20 animate-pulse">
                ACTIVE QUEST
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

          {/* Job 2 */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
          >
            {/* Timeline dot */}
            <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-bg bg-ink-dim absolute left-1 sm:left-3 md:left-1/2 -translate-x-1/2 z-10 group-hover:bg-teal transition-colors"></div>
            
            <div className="w-[calc(100%-3rem)] sm:w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-panel p-6 border-2 border-teal/20 hover:border-teal/50 transition-colors relative ml-auto md:ml-0 md:group-odd:ml-auto">
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

          {/* Job 3 */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
          >
            {/* Timeline dot */}
            <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-bg bg-ink-dim absolute left-1 sm:left-3 md:left-1/2 -translate-x-1/2 z-10 group-hover:bg-teal transition-colors"></div>
            
            <div className="w-[calc(100%-3rem)] sm:w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-panel p-6 border-2 border-teal/20 hover:border-teal/50 transition-colors relative ml-auto md:ml-0 md:group-odd:ml-auto">
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

        {/* Desktop: SVG connectors visible, Mobile: Stacked with CSS lines */}
        <div className="relative">
          {/* Connector lines (Desktop only visual flair) */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
            <svg className="w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="none" style={{ minHeight: '500px' }}>
              <path d="M 200 150 L 200 300 L 600 300 L 600 450" fill="none" stroke="rgba(255,182,39,0.3)" strokeWidth="4" strokeDasharray="8 8" />
              <path d="M 200 150 L 600 150" fill="none" stroke="rgba(255,182,39,0.3)" strokeWidth="4" strokeDasharray="8 8" />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 relative z-10">
            
            {/* Node 1 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-panel border-l-4 border-amber p-6 relative group"
            >
              <div className="absolute top-0 right-0 p-2 bg-amber/10 text-amber font-mono text-xs font-bold">GPA 1.0/4</div>
              <h3 className="font-pixel text-sm text-ink mb-2 leading-relaxed pr-20">MSc in Marketing</h3>
              <div className="font-mono text-xs text-amber mb-4">Wirtschaftsuniversität Wien (WU) · Sep 2025–Jun 2027</div>
              <div className="font-mono text-sm text-ink-dim">
                <span className="text-ink font-bold">Coursework:</span> Global Marketing Strategy, Management by Experiments, Marketing Analytics, SQL & Power BI
              </div>
            </motion.div>

            {/* Node 2 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-panel border-l-4 border-amber p-6 relative group"
            >
              <div className="absolute -top-4 -right-4 md:-right-8 bg-violet text-bg font-pixel text-[9px] px-3 py-2 shadow-[2px_2px_0_rgba(0,0,0,0.5)] z-20 border-2 border-ink rotate-3">
                SECRET ACHIEVEMENT UNLOCKED 🔓
              </div>
              <div className="absolute top-0 right-0 p-2 bg-amber/10 text-amber font-mono text-xs font-bold mt-6 md:mt-0 mr-8 md:mr-0">109/110</div>
              <h3 className="font-pixel text-sm text-ink mb-2 leading-relaxed pr-24 mt-4 md:mt-0">BSc Economics & Management</h3>
              <div className="font-mono text-xs text-amber mb-4">Bocconi University · Sep 2021–Oct 2024</div>
              <p className="font-mono text-sm text-ink-dim leading-relaxed">
                Arts, Culture and Communication. Thesis: 'Marketing Mattel's live-action Barbie: a case study in rebranding a cultural icon.'
              </p>
            </motion.div>

            {/* Node 3 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-panel border-l-4 border-amber/50 p-6 relative group"
            >
              <div className="absolute top-0 right-0 p-2 bg-amber/5 text-amber/70 font-mono text-xs">Online</div>
              <h3 className="font-pixel text-sm text-ink mb-2 leading-relaxed">Master in Digital Marketing</h3>
              <div className="font-mono text-xs text-amber/70 mb-4">Start2Impact University · Apr 2024–May 2025</div>
              <div className="font-mono text-sm text-ink-dim">
                <span className="text-ink font-bold">Coursework:</span> SEO, Google Ads & Analytics, Meta Ads, Funnel Marketing, Copywriting, Video Editing
              </div>
            </motion.div>

            {/* Node 4 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-panel border-l-4 border-amber/50 p-6 relative group"
            >
              <div className="absolute top-0 right-0 p-2 bg-amber/5 text-amber/70 font-mono text-xs font-bold">GPA 1.2/4</div>
              <h3 className="font-pixel text-sm text-ink mb-2 leading-relaxed">Exchange Program</h3>
              <div className="font-mono text-xs text-amber/70 mb-4">Wirtschaftsuniversität Wien (WU) · Sep 2023–Jan 2024</div>
              <div className="font-mono text-sm text-ink-dim">
                <span className="text-ink font-bold">Coursework:</span> Marketing, Corporate Finance, Strategic Management & Leadership
              </div>
            </motion.div>

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

          {/* Panel B: World Map */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-bg-deep border-2 border-teal/30 p-8 relative overflow-hidden"
          >
            {/* Subtle map pattern bg */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--teal) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
            
            <h3 className="font-pixel text-lg text-teal mb-8 border-b-2 border-teal/20 pb-4 relative z-10">World Map</h3>
            <div className="flex flex-wrap gap-4 relative z-10">
              <span className="font-mono text-xs px-3 py-2 border-2 border-dashed border-teal/40 text-ink bg-panel/50 hover:border-teal hover:bg-teal/10 transition-colors">[+] Michigan, USA · Rotary Exchange</span>
              <span className="font-mono text-xs px-3 py-2 border-2 border-dashed border-teal/40 text-ink bg-panel/50 hover:border-teal hover:bg-teal/10 transition-colors">[+] Beijing · High School Exchange</span>
              <span className="font-mono text-xs px-3 py-2 border-2 border-dashed border-teal/40 text-ink bg-panel/50 hover:border-teal hover:bg-teal/10 transition-colors">[+] Salisbury, UK · Kaplan Summer Camp</span>
              <span className="font-mono text-xs px-3 py-2 border-2 border-dashed border-teal/40 text-ink bg-panel/50 hover:border-teal hover:bg-teal/10 transition-colors">[+] Malta · EF Summer Camp</span>
              <span className="font-mono text-xs px-3 py-2 border-2 border-dashed border-teal/40 text-ink bg-panel/50 hover:border-teal hover:bg-teal/10 transition-colors">[+] Vienna · Tandem Language Program</span>
            </div>
          </motion.div>

        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-3xl mx-auto text-center py-12 px-8 relative"
        >
          {/* Quotes visual styling */}
          <div className="absolute top-0 left-0 text-6xl text-teal/20 font-serif leading-none">"</div>
          <div className="absolute bottom-0 right-0 text-6xl text-teal/20 font-serif leading-none">"</div>
          
          <p className="font-serif italic text-2xl md:text-3xl text-ink leading-relaxed">
            A genuine curiosity for different cultures and languages - German (B1/B2) is the latest one in progress.
          </p>
        </motion.div>
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
          <h2 className="font-pixel text-2xl sm:text-3xl md:text-4xl text-ink leading-tight">
            Let's talk about how I can bring this thinking to your team.
          </h2>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 sm:gap-10 w-full">
            <a 
              href="mailto:giuliaraffaelli179@gmail.com"
              className="font-mono text-lg text-teal hover:text-amber transition-colors neon-focus"
            >
              giuliaraffaelli179@gmail.com
            </a>
            <span className="hidden sm:inline text-ink/30 font-mono">·</span>
            <a 
              href="tel:+393341094073"
              className="font-mono text-lg text-teal hover:text-amber transition-colors neon-focus"
            >
              +39 334 109 4073
            </a>
            <span className="hidden sm:inline text-ink/30 font-mono">·</span>
            <a 
              href="https://linkedin.com/in/giulia-raffaelli"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-lg text-teal hover:text-amber transition-colors neon-focus"
            >
              linkedin.com/in/giulia-raffaelli
            </a>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
