import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { EnvelopeIcon, PhoneIcon, LocationMarkerIcon, GithubIcon, LinkedinIcon, TwitterIcon } from '../Icons';
import { submitContact } from '../../utils/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await submitContact(formData);
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    { icon: EnvelopeIcon, label: 'Email', value: 'ontipulianjali@gmail.com', href: 'mailto:ontipulianjali@gmail.com' },
    { icon: LocationMarkerIcon, label: 'Location', value: 'Vijayawada, India', href: null },
  ];

  const socialLinks = [
    { icon: GithubIcon, href: 'https://github.com/Anjali5636', label: 'GitHub' },
    { icon: LinkedinIcon, href: 'https://linkedin.com/in/anjali-ontipuli-5aa2982ab', label: 'LinkedIn' },
    { icon: TwitterIcon, href: 'https://twitter.com/anjali', label: 'Twitter' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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
    <section id="contact" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold mb-4">
            Get In <span className="text-primary-400">Touch</span>
          </h2>
          <p className="text-gray-500 dark:text-slate-400 max-w-2xl mx-auto">
            Have a question or want to work together? Let's talk!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <motion.div variants={itemVariants} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label className="block text-sm font-medium mb-2 text-slate-300">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-slate-700 text-white placeholder-slate-400 transition-all"
                    placeholder="Your name"
                  />
                </motion.div>
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label className="block text-sm font-medium mb-2 text-slate-300">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-slate-700 text-white placeholder-slate-400 transition-all"
                    placeholder="your@email.com"
                  />
                </motion.div>
              </div>
              <motion.div whileFocus={{ scale: 1.02 }}>
                <label className="block text-sm font-medium mb-2 text-slate-300">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-slate-700 text-white placeholder-slate-400 transition-all"
                  placeholder="What's this about?"
                />
              </motion.div>
              <motion.div whileFocus={{ scale: 1.02 }}>
                <label className="block text-sm font-medium mb-2 text-slate-300">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-slate-700 text-white placeholder-slate-400 transition-all resize-none"
                  placeholder="Your message..."
                />
              </motion.div>
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-primary-500 to-purple-500 text-white font-semibold rounded-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </form>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 space-y-6">
              <h3 className="text-xl font-semibold text-white">Contact Information</h3>
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-4 group"
                >
                  <div className="p-3 bg-primary-500/20 rounded-lg group-hover:bg-primary-500/30 transition-colors">
                    <info.icon className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="font-medium text-white group-hover:text-primary-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-medium text-white">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-6">Social Links</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.15, y: -3, backgroundColor: 'rgba(59, 130, 246, 0.3)' }}
                      whileTap={{ scale: 0.95 }}
                      className="p-4 rounded-xl bg-slate-700 text-slate-300 hover:text-white transition-all"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-primary-500 via-purple-500 to-pink-500 p-8 rounded-2xl text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-x-12 translate-y-12" />
              <h3 className="text-xl font-semibold mb-2 relative z-10">Available for work!</h3>
              <p className="text-white/80 relative z-10">
                I'm currently open to new opportunities. If you have a project in mind, let's discuss it!
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;