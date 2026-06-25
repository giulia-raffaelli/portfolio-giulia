import { motion, useReducedMotion } from 'framer-motion';

const featuredProjects = [
  {
    title: "Smooth Operator",
    tag: "Business Strategy",
    team: "Team of 4",
    desc: "A consulting case challenge designing an AI-monitored solution to tourist-bus congestion in Vienna's inner city - business case, costs & revenue, and a full Business Model Canvas.",
    link: "https://drive.google.com/file/d/1sSrHnwcpho2Oh1drTpUneUN9coaxGK1k/view?usp=sharing",
    color: "teal"
  },
  {
    title: "Venus - Seronade Shelving Strategy",
    tag: "Retail & Shelving",
    team: "Team project",
    desc: "A retail shelving and planogram strategy for Seronade, identifying a multi-million revenue opportunity through an upgraded in-store shelf layout.",
    link: "https://drive.google.com/file/d/13d0lXewj8p5GmteZN_SEdOqQ_ZlFK2hw/view?usp=sharing",
    color: "magenta"
  },
  {
    title: "AI Disclosure & Purchase Intention",
    tag: "Marketing Analytics",
    team: "Team of 5",
    desc: "An experimental research study testing whether disclosing AI co-creation in ads (vs. human-only) affects consumers' purchase intention.",
    link: "https://drive.google.com/file/d/1iOn_VFFpaQav94eigQPFr-QmUx_Xuuys/view?usp=sharing",
    color: "amber"
  }
];

const moreProjects = [
  {
    title: "CVS Health - Sector Analysis",
    tag: "Financial Markets",
    team: "Team of 5",
    desc: "An equity-research style analysis of CVS Health and the US healthcare sector, examining pricing power, competitive dynamics and investment thesis.",
    links: [
      { text: "View full project →", url: "https://drive.google.com/file/d/1iM31cimfXJ4xQmumsATfKhDHxwB1t3sf/view?usp=sharing" },
      { text: "Valuation spreadsheet ↗", url: "https://docs.google.com/spreadsheets/d/1wL41YwdP-xpY8y-uYIZaCUV1IGjS6iFY/edit?usp=sharing" }
    ]
  },
  {
    title: "Mercedes-Benz - Brand Analysis",
    tag: "Brand Strategy",
    team: "Team of 6",
    desc: "A full brand analysis of Mercedes-Benz covering brand identity, positioning and visual language across product, retail and communication touchpoints.",
    link: "https://drive.google.com/file/d/1iM31cimfXJ4xQmumsATfKhDHxwB1t3sf/view?usp=sharing"
  },
  {
    title: "Sunnee - Meta Ads Project",
    tag: "Brand & Performance",
    team: "Individual",
    desc: "A fictional sustainable swimwear brand built end-to-end: brand identity, market research, buyer personas and a full TOFU/MOFU/BOFU Meta Ads funnel.",
    link: "https://drive.google.com/file/d/1rFhOgHoIO7eCJHAqtMYm8DoX2-fh_Z7t/view?usp=sharing"
  },
  {
    title: "Zara - Brand Analysis",
    tag: "Brand Strategy",
    team: "Team project",
    desc: "A brand analysis of Zara covering identity, retail experience and positioning within the fast-fashion competitive landscape.",
    link: "https://drive.google.com/file/d/1yiIJuJmU0IY8lsfACsHGLQpoumK_FIsv/view?usp=sharing"
  },
  {
    title: "Alo Yoga - Marketing & Controversy",
    tag: "Brand Psychology",
    team: "Individual",
    desc: "An analysis of Alo Yoga's psychological marketing playbook - sensory branding and self-concept appeal - set against its recent lawsuits and boycott calls.",
    link: "https://drive.google.com/file/d/1ektRL95r46OLrtVr_vGEUaTweeQQ4OzK/view?usp=sharing"
  },
  {
    title: "ÖBB - Plant-Based Pitch",
    tag: "Behavioural Strategy",
    team: "Team project",
    desc: "An internal pitch for ÖBB tackling why most Austrians still eat meat, using behavioural psychology to design a plant-based dining campaign for employees.",
    link: "https://drive.google.com/file/d/1aWnuRgHnQaO1LY68HwcWN-fBDU6-H2mz/view?usp=sharing"
  },
  {
    title: "Funnel Marketing Project",
    tag: "Funnel Strategy",
    team: "Individual",
    desc: "An end-to-end funnel marketing exercise mapping awareness-to-conversion stages and the tactics used at each step.",
    link: "https://drive.google.com/file/d/18CZOg6keLb0SMsm1wFHiHI9YQMxerU4q/view?usp=sharing"
  },
  {
    title: "Voci - Beyond Stereotypes",
    tag: "Copywriting",
    team: "Individual",
    desc: "A copywriting piece profiling women challenging stereotypes, written for the platform Voci - focused on tone, narrative structure and voice.",
    link: "https://drive.google.com/file/d/1v_PArP45PunEV_pey3XbsZi5mN334K4e/view?usp=sharing"
  },
  {
    title: "Social Media Graphic Design",
    tag: "Visual Design",
    team: "Individual",
    desc: "A graphic design exploration for social media content - visual systems, layout and style applied across a sample content calendar.",
    link: "https://drive.google.com/file/d/19aEPaVu9qPS7l3cNJnRjmmcZPrk7YUy_/view?usp=drive_link"
  },
  {
    title: "Instagram Project",
    tag: "Social Media",
    team: "Individual",
    desc: "A focused Instagram content project - planning and designing posts around a consistent visual and editorial direction.",
    link: "https://drive.google.com/file/d/1cxdzbQ5nzT6Tfh-epbUQtCKint62P8X9/view?usp=sharing"
  },
  {
    title: "Facebook Project",
    tag: "Social Media",
    team: "Individual",
    desc: "A Facebook-focused content and campaign project, applying platform-specific best practices to a sample brand.",
    link: "https://drive.google.com/file/d/1jVt7Pe8ywewDDFFbRQxJ157G80fBMUjt/view?usp=sharing"
  }
];

const colorClassMap = {
  teal: {
    border: 'pixel-border',
    badge: 'bg-teal/20 text-teal border border-teal/50'
  },
  magenta: {
    border: 'pixel-border-magenta',
    badge: 'bg-magenta/20 text-magenta border border-magenta/50'
  },
  amber: {
    border: 'pixel-border-amber',
    badge: 'bg-amber/20 text-amber border border-amber/50'
  }
};

export default function Projects() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-16 border-b-2 border-teal/30 pb-12">
          <h1 className="font-pixel text-3xl md:text-5xl text-teal mb-6">Level Select Map</h1>
          <p className="font-mono text-lg text-ink-dim max-w-3xl leading-relaxed">
            <strong className="text-ink font-bold">Selected Work</strong> — A selection of strategy, brand and analytics work across coursework, consulting challenges and self-directed projects. Each opens the full case file.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div variants={itemVariants} className="mb-20">
          <h2 className="font-pixel text-xl text-amber mb-8 flex items-center gap-4">
            <span className="w-4 h-4 bg-amber inline-block"></span>
            Featured Stages
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, idx) => (
              <a 
                key={idx}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`block bg-panel p-6 ${colorClassMap[project.color].border} hover:-translate-y-2 transition-transform duration-300 neon-focus h-full flex flex-col group`}
              >
                <div className="flex justify-between items-start mb-4">
                  <span className={`text-xs font-mono px-2 py-1 ${colorClassMap[project.color].badge}`}>
                    {project.tag}
                  </span>
                  <span className="text-xs font-mono text-ink-dim">{project.team}</span>
                </div>
                <h3 className="font-pixel text-sm text-ink mb-4 group-hover:text-teal transition-colors leading-relaxed">
                  {project.title}
                </h3>
                <p className="font-mono text-sm text-ink-dim flex-grow mb-6">
                  {project.desc}
                </p>
                <div className="mt-auto font-pixel text-[10px] text-teal flex items-center">
                  OPEN FILE <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* More Projects Grid */}
        <motion.div variants={itemVariants}>
          <h2 className="font-pixel text-xl text-violet mb-8 flex items-center gap-4">
            <span className="w-4 h-4 bg-violet inline-block"></span>
            More Work
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {moreProjects.map((project, idx) => (
              <div 
                key={idx}
                className="bg-panel border-2 border-violet/30 p-5 hover:border-violet shadow-[4px_4px_0_rgba(108,79,246,0.2)] transition-colors h-full flex flex-col group"
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[10px] font-mono text-violet bg-violet/10 px-2 py-1 uppercase tracking-wider">
                    {project.tag}
                  </span>
                  <span className="text-[10px] font-mono text-ink-dim">{project.team}</span>
                </div>
                <h3 className="font-pixel text-xs text-ink mb-3 leading-loose">
                  {project.title}
                </h3>
                <p className="font-mono text-xs text-ink-dim mb-5 flex-grow">
                  {project.desc}
                </p>
                
                <div className="mt-auto flex flex-col gap-2">
                  {project.links ? (
                    project.links.map((link, i) => (
                      <a 
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-teal hover:text-amber transition-colors neon-focus inline-block w-fit"
                      >
                        {link.text}
                      </a>
                    ))
                  ) : (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-teal hover:text-amber transition-colors neon-focus inline-block w-fit"
                    >
                      View project →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
