// src/components/Hero.js
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-5xl font-bold mb-5"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Welcome to My Portfolio
      </motion.h1>
      <motion.p
        className="text-xl mb-8"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        I am a Blockchain Developer & Frontend Expert.
      </motion.p>
      <motion.button
        className="px-6 py-3 bg-white text-gray-900 rounded-lg shadow-lg"
        whileHover={{ scale: 1.1 }}
      >
        Explore My Work
      </motion.button>
    </motion.div>
  );
};

export default Hero;
