import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaJava, FaGitAlt, FaGithub, FaBootstrap } from 'react-icons/fa';
import { FaServer, FaCode, FaPaperPlane } from 'react-icons/fa';

const skills = [
  { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500', bg: 'bg-orange-500/10', border: 'border-orange-500/20' },
  { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
  { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400', bg: 'bg-yellow-400/10', border: 'border-yellow-400/20' },
  { name: 'React.js', icon: FaReact, color: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-blue-400/20' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500', bg: 'bg-green-500/10', border: 'border-green-500/20' },
  { name: 'Express.js', icon: FaServer, color: 'text-gray-300', bg: 'bg-gray-500/10', border: 'border-gray-500/20' },
  { name: 'MongoDB', icon: FaDatabase, color: 'text-green-400', bg: 'bg-green-400/10', border: 'border-green-400/20' },
  { name: 'MySQL', icon: FaDatabase, color: 'text-blue-300', bg: 'bg-blue-300/10', border: 'border-blue-300/20' },
  { name: 'Java', icon: FaJava, color: 'text-red-500', bg: 'bg-red-500/10', border: 'border-red-500/20' },
  { name: 'Git', icon: FaGitAlt, color: 'text-orange-600', bg: 'bg-orange-600/10', border: 'border-orange-600/20' },
  { name: 'GitHub', icon: FaGithub, color: 'text-white', bg: 'bg-white/10', border: 'border-white/20' },
  { name: 'VS Code', icon: FaCode, color: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-blue-400/20' },
  { name: 'Postman', icon: FaPaperPlane, color: 'text-orange-400', bg: 'bg-orange-400/10', border: 'border-orange-400/20' },
  { name: 'Bootstrap', icon: FaBootstrap, color: 'text-purple-500', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold mb-4">
            Tools & <span className="text-primary-400">Technologies</span>
          </h2>
          <p className="text-gray-500 dark:text-slate-400 max-w-2xl mx-auto">
            Technologies I use to build amazing applications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.08, 
                  y: -5,
                  boxShadow: '0 10px 30px rgba(59, 130, 246, 0.2)',
                }}
                whileTap={{ scale: 0.95 }}
                className={`flex flex-col items-center p-5 ${skill.bg} ${skill.border} border rounded-xl cursor-pointer group hover:border-primary-500/50 transition-all duration-300`}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`${skill.color} mb-3`}
                >
                  <Icon className="text-3xl" />
                </motion.div>
                <span className="text-sm font-medium text-gray-600 dark:text-slate-300 group-hover:text-primary-500 dark:group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;