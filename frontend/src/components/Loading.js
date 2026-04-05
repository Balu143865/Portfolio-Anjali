import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <motion.div
          className="w-16 h-16 border-4 border-primary-200 dark:border-dark-700 border-t-primary-500 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
        <p className="text-dark-500 dark:text-dark-400">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;