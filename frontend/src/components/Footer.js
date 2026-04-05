import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  EnvelopeIcon,
} from '../components/Icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { isDark } = useTheme();

  const socialLinks = [
    { name: 'GitHub', icon: GithubIcon, href: 'https://github.com/Anjali5636', color: 'hover:text-gray-900 dark:hover:text-white' },
    { name: 'LinkedIn', icon: LinkedinIcon, href: 'https://linkedin.com/in/anjali-ontipuli-5aa2982ab', color: 'hover:text-blue-600 dark:hover:text-blue-400' },
    { name: 'Twitter', icon: TwitterIcon, href: 'https://twitter.com/anjali', color: 'hover:text-sky-500' },
    { name: 'Email', icon: EnvelopeIcon, href: 'mailto:ontipulianjali@gmail.com', color: 'hover:text-red-500' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <footer className="relative bg-gray-100 dark:bg-slate-900">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          <motion.div variants={itemVariants} className="md:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="text-4xl font-display font-bold bg-gradient-to-r from-primary-500 to-purple-500 bg-clip-text text-transparent"
              >
                Anjali
              </motion.span>
            </Link>
            <p className="text-gray-600 dark:text-slate-400 max-w-md leading-relaxed">
              Full Stack Developer passionate about building beautiful, functional digital experiences with modern technologies.
            </p>
            <motion.div className="flex items-center gap-2">
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-green-500 rounded-full"
              />
              <span className="text-sm text-gray-500 dark:text-slate-500">Open to work</span>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-600 dark:text-slate-400 hover:text-primary-500 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Let's Connect</h3>
            <p className="text-gray-600 dark:text-slate-400">
              Feel free to reach out for collaborations or just a friendly chat.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-xl bg-gray-200 dark:bg-slate-800 text-gray-600 dark:text-slate-400 ${link.color} transition-all duration-300 border border-gray-300 dark:border-slate-700 hover:border-primary-500`}
                    aria-label={link.name}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 pt-8 border-t border-gray-300 dark:border-slate-800"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 dark:text-slate-500 flex items-center gap-2">
              <span>© {currentYear}</span>
              <span className="text-gray-400 dark:text-slate-600">•</span>
              <span>Built with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-red-500"
              >
                ♥
              </motion.span>
              <span className="text-gray-500 dark:text-slate-500">using React</span>
            </p>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400 dark:text-slate-600">Designed & Developed by</span>
              <span className="text-sm font-semibold text-primary-500">Anjali Ontipuli</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;