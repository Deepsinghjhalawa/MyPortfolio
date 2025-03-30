import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import projectsData from '../data/projectsData';

const ProjectDetail = () => {
  const { id } = useParams();
  
  // Combine all projects and find the matching project
  const allProjects = [
    ...projectsData.frontendProjects, 
    ...projectsData.fullStackProjects
  ];
  
  const project = allProjects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 flex items-center justify-center">
        <h2 className="text-3xl text-white">Project Not Found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 py-16 px-4 pt-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto max-w-4xl bg-gray-800 rounded-lg shadow-xl p-8"
      >
        <Link 
          to="/projects" 
          className="flex items-center text-white hover:text-blue-400 mb-6"
        >
          <ArrowLeft className="mr-2" /> Back to Projects
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {project.title}
        </h1>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-blue-400 mb-3">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span 
                key={tech}
                className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-blue-400 mb-3">
            Project Description
          </h2>
          <div className="prose prose-invert max-w-full text-gray-300">
            <ReactMarkdown>{project.fullDescription}</ReactMarkdown>
          </div>
        </div>

        <div className="flex space-x-4 mt-8">
          <a 
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition"
          >
            <Github className="mr-2" /> GitHub Repository
          </a>
          
          <a 
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            <ExternalLink className="mr-2" /> Live Demo
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetail;