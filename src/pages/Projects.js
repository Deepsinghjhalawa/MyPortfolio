import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import projectsData from '../data/projectsData';
import { Code, Globe } from 'lucide-react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  const renderProjects = () => {
    const projects = activeTab === 'frontend' 
      ? projectsData.frontendProjects 
      : projectsData.fullStackProjects;

    return projects.map((project) => (
      <motion.div
        key={project.id}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 rounded-lg overflow-hidden shadow-xl"
      >
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white mb-3">
            {project.title}
          </h3>
          <p className="text-gray-300 mb-4">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <span 
                key={tech}
                className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex space-x-4">
            <Link 
              to={`/project/${project.id}`}
              className="flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              <Code className="mr-2" /> View Details
            </Link>
            <a 
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
            >
              <Globe className="mr-2" /> Live Demo
            </a>
          </div>
        </div>
      </motion.div>
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          My Projects
        </h1>
        
        <div className="flex justify-center mb-8">
          <div className="bg-gray-800 rounded-full p-1 flex space-x-2">
            <button
              onClick={() => setActiveTab('frontend')}
              className={`px-6 py-2 rounded-full transition ${
                activeTab === 'frontend' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              Frontend Projects
            </button>
            <button
              onClick={() => setActiveTab('fullstack')}
              className={`px-6 py-2 rounded-full transition ${
                activeTab === 'fullstack' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              Full Stack Projects
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderProjects()}
        </div>
      </div>
    </div>
  );
};

export default Projects;