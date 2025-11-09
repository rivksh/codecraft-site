import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
  <section id="home" className="section min-h-screen flex items-center justify-center relative overflow-hidden bg-background-light dark:bg-background-dark">
  {/* code animation background */}
      <div className="absolute inset-0 opacity-5">
        <div className="animate-code-flow font-mono text-sm whitespace-pre overflow-hidden">
          {`const codeAnimation = () => {...}\nfunction developWeb() {...}\nconst design = () => {...}`.repeat(50)}
        </div>
      </div>

      <div className="container mx-auto px-4 text-center z-10">
        <div id="hero-blob" aria-hidden="true"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-heading text-primary dark:text-white mb-6">
            Hi — I'm Rivka Schreiber<br />
            <span className="text-accent">Full Stack Software Developer</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            I build scalable, maintainable web applications using React, TypeScript and Node.js.
          </p>

          {/* Professional quick highlights / tech chips */}
          <motion.div 
            className="flex justify-center flex-wrap gap-2 mb-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              { name: 'React', years: '3+ years' },
              { name: 'TypeScript', years: '2+ years' },
              { name: 'Node.js', years: '3+ years' },
              { name: 'Tailwind', years: '2+ years' },
              { name: 'AWS', years: '1+ year' }
            ].map((tech) => (
              <motion.span
                key={tech.name}
                className="tech-tag group relative cursor-help"
                whileHover={{ scale: 1.1 }}
                variants={itemVariants}
              >
                {tech.name}
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-gray-900 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {tech.years}
                </span>
              </motion.span>
            ))}
          </motion.div>

          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <span className="inline-block bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900 text-sm px-4 py-2 rounded-full font-medium shadow-sm">
              <span role="img" aria-label="sparkles" className="mr-2">✨</span>
              Open to work · Available for hire
            </span>
          </motion.div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg relative overflow-hidden group"
            >
              <span className="relative z-10">View my work</span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
              />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary text-lg"
            >
              Let's talk
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;