import React from 'react';
import { motion } from 'framer-motion';
import { BriefcaseIcon, CheckCircleIcon } from '../Icons';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Full Stack Web Developer Intern',
      company: 'Zaalima Development',
      location: 'Remote',
      period: 'Mar 2025 – Jun 2025',
      description: 'Built login, filtering, and cart features. Improved UI responsiveness using Tailwind CSS. Collaborated using Git, GitHub, Postman.',
      skills: ['React', 'Node.js', 'Tailwind CSS', 'Git', 'Postman'],
    },
  ];

  const certifications = [
    {
      title: 'Internship Completion Certificate',
      issuer: 'Zaalima Development',
      year: '2025',
    },
    {
      title: 'NCAT 2025',
      issuer: 'Various',
      year: '2025',
    },
    {
      title: 'ICAT 2025',
      issuer: 'Various',
      year: '2025',
      rank: 'Rank 5478',
    },
  ];

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
    <section id="experience" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold mb-4">
            Experience & <span className="text-primary-400">Certifications</span>
          </h2>
          <p className="text-gray-500 dark:text-slate-400 max-w-2xl mx-auto">
            My professional journey and achievements
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h3 variants={itemVariants} className="text-2xl font-semibold text-gray-800 dark:text-white mb-8 flex items-center gap-3">
            <span className="p-2 bg-primary-500/20 rounded-lg">
              <BriefcaseIcon className="w-6 h-6 text-primary-400" />
            </span>
            Experience
          </motion.h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.01, y: -2 }}
                className="p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-primary-500/50 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-xs font-medium uppercase tracking-wider text-primary-400 bg-primary-500/20 px-3 py-1 rounded-full">
                    {exp.type}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors">{exp.title}</h4>
                <p className="text-primary-400 font-medium">{exp.company}</p>
                <p className="text-sm text-slate-400 mb-2">
                  {exp.location} • {exp.period}
                </p>
                <p className="text-slate-400 text-sm mb-3">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="text-xs px-3 py-1 bg-slate-700 rounded-full text-slate-300 hover:bg-primary-500/20 hover:text-primary-400 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3 variants={itemVariants} className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
            <span className="p-2 bg-purple-500/20 rounded-lg">
              <CheckCircleIcon className="w-6 h-6 text-purple-400" />
            </span>
            Certifications
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                className="p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300 group cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-500 rounded-xl flex items-center justify-center mb-4"
                >
                  <CheckCircleIcon className="w-6 h-6 text-white" />
                </motion.div>
                <h4 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">{cert.title}</h4>
                <p className="text-sm text-slate-400">{cert.issuer}</p>
                <p className="text-sm text-primary-400 mt-1">{cert.year}</p>
                {cert.rank && (
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="text-xs text-green-400 mt-2 font-medium"
                  >
                    🏆 {cert.rank}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;