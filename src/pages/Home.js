import { Github, Linkedin, Download } from "lucide-react";

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-blue-900 pt-16">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-4xl mx-auto px-4"
      >
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Deepak Kumar
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Full Stack Developer | React Specialist | Web Innovator
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="flex justify-center space-x-6 mb-8"
        >
          <img 
            src="/api/placeholder/300/300" 
            alt="Profile" 
            className="rounded-full w-48 h-48 object-cover border-4 border-white shadow-lg"
          />
        </motion.div>

        <div className="flex justify-center space-x-6 mb-8">
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition"
          >
            <Github size={32} />
          </a>
          <a 
            href="https://linkedin.com/in/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition"
          >
            <Linkedin size={32} />
          </a>
        </div>

        <div className="flex justify-center space-x-6">
          <Link 
            to="/projects" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            View Projects
          </Link>
          <a 
            href="/resume.pdf" 
            download 
            className="flex items-center bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition"
          >
            <Download className="mr-2" /> Download CV
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;