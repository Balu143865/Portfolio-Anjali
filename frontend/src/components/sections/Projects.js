import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLinkIcon, GithubIcon } from '../Icons';

const Projects = () => {
  const anjaliProjects = [
    {
      _id: '1',
      title: 'Trendify',
      description: 'Fashion E-Commerce Platform built with MERN stack. Features include JWT authentication, product filtering, shopping cart, and payment integration.',
      image: '/trendify.png',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
      githubLink: 'https://github.com/Anjali5636/Trendify-project',
      liveLink: 'https://trendify-demo.com',
    },
    {
      _id: '2',
      title: 'GitHub Clone',
      description: 'Repository management system with features for creating, managing, and sharing repositories. Built with React, Node.js, Express, and MongoDB.',
      image: '/github-clone.png',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
      githubLink: 'https://github.com/Anjali5636?tab=repositories',
      liveLink: '',
    },
    {
      _id: '3',
      title: 'Portfolio',
      description: 'Personal portfolio website showcasing skills, projects, and experience with modern UI/UX design and smooth animations.',
      image: '/portfolio.png',
      techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'Node.js'],
      githubLink: 'https://github.com/Anjali5636?tab=repositories',
      liveLink: '',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold mb-4">
            My <span className="text-primary-400">Projects</span>
          </h2>
          <p className="text-gray-500 dark:text-slate-400 max-w-2xl mx-auto">
            A selection of projects I've worked on
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {anjaliProjects.map((project, index) => (
            <motion.div
              key={project._id}
              variants={cardVariants}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.15)' }}
              className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-primary-500/50 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling && (e.target.nextSibling.style.display = 'flex');
                    }}
                  />
                </motion.div>
                <div className="w-full h-48 bg-slate-700 flex items-center justify-center hidden">
                  <span className="text-slate-400 text-lg font-medium">{project.title}</span>
                </div>
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-900/80 rounded-lg text-white hover:bg-primary-500 transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-900/80 rounded-lg text-white hover:bg-primary-500 transition-colors"
                    >
                      <ExternalLinkIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <motion.h3
                  whileHover={{ color: '#60a5fa' }}
                  className="text-xl font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors"
                >
                  {project.title}
                </motion.h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {(project.techStack || []).map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-primary-500/20 text-primary-400 text-xs rounded-full cursor-default hover:bg-primary-500/30 transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                
                <div className="flex space-x-4 pt-2 border-t border-slate-700">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-primary-400 transition-colors flex items-center space-x-1 text-sm group/link"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span className="group-hover/link:text-primary-400">Code</span>
                  </a>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-primary-400 transition-colors flex items-center space-x-1 text-sm group/link"
                    >
                      <ExternalLinkIcon className="w-4 h-4" />
                      <span className="group-hover/link:text-primary-400">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Anjali5636?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors group"
          >
            <span>View all projects on GitHub</span>
            <motion.span whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
              <ExternalLinkIcon className="w-4 h-4" />
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;