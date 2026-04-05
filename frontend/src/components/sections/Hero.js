import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { DownloadIcon, GithubIcon, LinkedinIcon, EnvelopeIcon } from '../Icons';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'Building modern, scalable web applications using MERN stack';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.3 },
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-100 dark:bg-slate-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="blob-container">
          <div className="blob blob-1" />
          <div className="blob blob-2" />
          <div className="blob blob-3" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 rounded-full border border-primary-500/20">
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-primary-500 rounded-full"
              />
              <span className="text-primary-600 dark:text-primary-400 text-sm font-medium">Available for work</span>
            </motion.div>
            
            <motion.p variants={itemVariants} className="text-primary-600 dark:text-primary-400 font-medium text-lg">
              Hello, I'm
            </motion.p>
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-display font-bold">
              <span className="text-gray-800 dark:text-white">Anjali</span>{" "}
              <span className="bg-gradient-to-r from-primary-500 to-purple-500 bg-clip-text text-transparent">Ontipuli</span>
            </motion.h1>
            
            <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-semibold text-gray-600 dark:text-slate-300">
              {text}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-primary-500"
              >
                |
              </motion.span>
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-lg text-gray-500 dark:text-slate-400 max-w-lg">
              Aspiring Full Stack Developer passionate about building modern, scalable 
              web applications. Let's build something amazing together.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <motion.button
                onClick={() => scrollToSection('#projects')}
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-primary-500 to-purple-500 text-white font-semibold rounded-lg hover:opacity-90 transition-all"
              >
                View Projects
              </motion.button>
              
              <motion.a
                href="/RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, borderColor: 'rgba(59, 130, 246, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-primary-500 text-primary-400 font-semibold rounded-lg hover:bg-primary-500/10 transition-all flex items-center space-x-2"
              >
                <DownloadIcon className="w-5 h-5" />
                <span>Resume</span>
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex space-x-4 pt-4">
              {[
                { icon: GithubIcon, href: 'https://github.com/Anjali5636', label: 'GitHub', color: 'hover:text-gray-900 dark:hover:text-white' },
                { icon: LinkedinIcon, href: 'https://linkedin.com/in/anjali-ontipuli-5aa2982ab', label: 'LinkedIn', color: 'hover:text-blue-600 dark:hover:text-blue-400' },
                { icon: EnvelopeIcon, href: 'mailto:ontipulianjali@gmail.com', label: 'Email', color: 'hover:text-red-500 dark:hover:text-red-400' },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.15, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-xl bg-gray-200 dark:bg-slate-800 text-gray-600 dark:text-slate-400 ${social.color} transition-all border border-gray-300 dark:border-slate-700 hover:border-primary-500`}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  boxShadow: [
                    '0 0 60px rgba(59, 130, 246, 0.3)',
                    '0 0 80px rgba(139, 92, 246, 0.3)',
                    '0 0 60px rgba(59, 130, 246, 0.3)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-primary-500 via-purple-500 to-pink-500 p-1"
              >
                <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src="/profile2.jpeg"
                      alt="Profile"
                      className="w-64 h-64 md:w-88 md:h-88 rounded-full object-cover"
                    />
                  </motion.div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -top-2 -right-4 md:-right-8 px-4 py-2 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 shadow-xl"
              >
                <motion.p 
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-sm font-semibold text-gray-800 dark:text-white"
                >
                  MERN Stack
                </motion.p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-2 -left-4 md:-left-8 px-4 py-2 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 shadow-xl"
              >
                <motion.p 
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="text-sm font-semibold text-gray-800 dark:text-white"
                >
                  React
                </motion.p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute top-1/2 -left-4 md:-left-8 px-3 py-1 bg-green-500 rounded-full"
              >
                <span className="text-xs font-medium text-white">Open to Work</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 dark:border-slate-600 rounded-full flex justify-center pt-2"
          >
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-primary-500 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;