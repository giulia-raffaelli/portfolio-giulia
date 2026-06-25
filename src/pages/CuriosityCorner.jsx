import { motion, useReducedMotion } from 'framer-motion';

export default function CuriosityCorner() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }
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
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="font-pixel text-3xl md:text-5xl text-teal drop-shadow-[0_0_15px_rgba(62,144,158,0.5)] mb-6 leading-tight">
            Bonus Stage /<br/>Secret Room
          </h1>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="bg-panel p-12 pixel-border-magenta relative"
        >
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-magenta"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-magenta"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-magenta"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-magenta"></div>
          
          <div className="text-center flex flex-col items-center justify-center min-h-[300px]">
            <h2 className="font-pixel text-xl text-ink mb-4">
              Content coming soon.
            </h2>
          </div>
        </motion.div>
        
      </motion.div>
    </div>
  );
}
