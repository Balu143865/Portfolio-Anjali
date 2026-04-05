import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold mb-4">
            About <span className="text-primary-400">Me</span>
          </h2>
          <p className="text-gray-500 dark:text-slate-400 max-w-2xl mx-auto">
            I'm a passionate full-stack developer dedicated to creating exceptional digital experiences
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="aspect-square rounded-2xl bg-gradient-to-br from-primary-500/20 to-purple-500/20 p-1"
              >
                <div className="w-full h-full rounded-2xl bg-white dark:bg-slate-800 p-4 flex items-center justify-center overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full relative"
                  >
                    <img
                      src="/profile2.jpeg"
                      alt="About me"
                      className="w-full h-full object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl dark:from-slate-900/50" />
                  </motion.div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-4 -right-4 md:-right-8 px-6 py-3 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 shadow-xl"
              >
                <motion.p 
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-2xl font-bold text-primary-400"
                >
                  Fresher
                </motion.p>
                <p className="text-sm text-gray-500 dark:text-slate-400">Full Stack Developer</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h3 
              whileHover={{ color: '#60a5fa' }}
              className="text-2xl font-semibold text-gray-800 dark:text-white transition-colors"
            >
              Building solutions that make a difference
            </motion.h3>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
              I'm a B.Tech graduate in Artificial Intelligence & Machine Learning 
              with a passion for building modern, scalable web applications using the MERN stack.
              My journey began with curiosity about how things work on the web, and it has evolved into 
              a career dedicated to building products that users love.
            </p>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
              I specialize in React for building beautiful interfaces and Node.js for creating robust APIs. 
              Every project is an opportunity to learn, grow, and deliver value.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;