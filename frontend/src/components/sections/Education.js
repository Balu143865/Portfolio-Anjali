import React from 'react';
import { motion } from 'framer-motion';
import { AcademicCapIcon } from '../Icons';

const Education = () => {
  const education = [
    { title: 'B.Tech in AI & ML', school: 'R.K College of Engineering, Vijayawada', period: '2022 – 2026', cgpa: 'CGPA: 7.7', description: 'Artificial Intelligence & Machine Learning' },
    { title: 'Intermediate (MPC)', school: 'Bhavana Junior College', period: '2020 – 2022', cgpa: 'CGPA: 6.5', description: 'Mathematics, Physics, Chemistry' },
    { title: 'SSC', school: 'ZPHS Kotcherla High School', period: '2015 – 2020', cgpa: 'CGPA: 8.5', description: 'Secondary School Certificate' },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold mb-4">
            My <span className="text-primary-400">Education</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-500 via-purple-500 to-pink-500" />
          
          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 hover:border-primary-500/50 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-primary-500/20 rounded-lg">
                        <AcademicCapIcon className="w-5 h-5 text-primary-400" />
                      </div>
                      <span className="text-sm text-primary-400 bg-primary-500/20 px-3 py-1 rounded-full">
                        {edu.period}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1 group-hover:text-primary-400 transition-colors">
                      {edu.title}
                    </h3>
                    <p className="text-purple-500 dark:text-purple-400 text-sm font-medium mb-2">{edu.description}</p>
                    <p className="text-gray-600 dark:text-slate-400 mb-2">{edu.school}</p>
                    <p className="text-primary-500 dark:text-primary-400 font-bold">{edu.cgpa}</p>
                  </motion.div>
                </div>
                
                <div className="relative hidden md:block">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    className="w-4 h-4 bg-primary-500 rounded-full border-4 bg-gray-50 dark:bg-slate-900 z-10 relative"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-primary-400 rounded-full opacity-50"
                    />
                  </motion.div>
                </div>
                
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;