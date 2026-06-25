import { motion, useReducedMotion } from 'framer-motion';

function LockedTile({ label }) {
  return (
    <div className="bg-bg border-2 border-dashed border-ink-dim/20 p-6 flex flex-col items-center justify-center gap-3 min-h-[140px] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, var(--ink-dim) 0, var(--ink-dim) 1px, transparent 0, transparent 50%)', backgroundSize: '8px 8px' }}></div>
      <span className="font-pixel text-2xl text-ink-dim/30 select-none">🔒</span>
      <span className="font-mono text-xs text-ink-dim/40 text-center">{label}</span>
      <span className="font-pixel text-[9px] text-magenta/70 border border-magenta/30 px-2 py-1 tracking-widest">COMING SOON</span>
    </div>
  );
}

export default function CuriosityCorner() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Page header */}
        <motion.div variants={itemVariants} className="mb-4">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-pixel text-2xl text-magenta">AI</span>
            <h1 className="font-pixel text-xl sm:text-3xl text-ink uppercase leading-tight">
              AI Killed the Human Star
            </h1>
            <div className="h-[2px] bg-magenta/30 flex-grow ml-2"></div>
          </div>
          <p className="font-mono text-xs text-ink-dim/60 tracking-wider">
            A space for experiments at the intersection of human creativity and machine intelligence.
          </p>
        </motion.div>

        {/* Loading screen state */}
        <motion.div
          variants={itemVariants}
          className="bg-panel border-2 border-magenta/20 p-8 mb-8 relative overflow-hidden mt-10"
        >
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,46,146,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,46,146,0.6) 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

          <div className="flex flex-col items-center justify-center gap-6 py-8 relative z-10">
            <div className="font-pixel text-sm text-magenta/70 tracking-widest text-center">
              NEW LEVELS LOADING
              <span className="inline-block ml-1 cursor-blink">_</span>
            </div>

            {/* Fake loading bar */}
            <div className="w-full max-w-xs h-3 border border-magenta/40 bg-bg relative overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full bg-magenta/50"
                style={{ width: '18%' }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center font-pixel text-[8px] text-magenta/60">
                18%
              </div>
            </div>

            <p className="font-mono text-xs text-ink-dim/50 text-center max-w-sm">
              AI projects are being assembled. Check back soon for experiments in prompt engineering, generative branding, and human–machine creative workflows.
            </p>
          </div>
        </motion.div>

        {/* Locked level tiles — repeatable card structure */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <LockedTile label="Generative Brand Identity" />
          <LockedTile label="Prompt Engineering Lab" />
          <LockedTile label="Human × Machine Campaigns" />
        </motion.div>

        <motion.p variants={itemVariants} className="font-mono text-[10px] text-ink-dim/30 text-center mt-6 tracking-wider">
          INSERT PROJECT TO UNLOCK
        </motion.p>
      </motion.div>
    </div>
  );
}
