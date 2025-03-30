import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database } from 'lucide-react';

const About = () => {
  const professionalSummary = `
    Passionate Full Stack Developer with expertise in modern web technologies. 
    I specialize in creating responsive, efficient, and user-friendly web applications 
    using React, Node.js, and cutting-edge frameworks. With a strong background in 
    both frontend and backend development, I bring innovative solutions to complex 
    technical challenges.
  `;

  const keySkills = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Proficient in React, JavaScript, TypeScript, Tailwind CSS, and modern frontend frameworks.'
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Experienced with Node.js, Express, Python, and creating robust server-side applications.'
    },
    {
      icon: Database,
      title: 'Database & Cloud',
      description: 'Skilled in MongoDB, PostgreSQL, Firebase, and cloud deployment strategies.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="container mx-auto max-w-4xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          About Me
        </h1>

        <div className="bg-gray-800 rounded-lg shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">
            Professional Summary
          </h2>
          <p className="text-gray-300 leading-relaxed">
            {professionalSummary}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {keySkills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-gray-800 rounded-lg p-6 text-center"
            >
              <div className="flex justify-center mb-4">
                <skill.icon className="text-blue-400" size={48} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {skill.title}
              </h3>
              <p className="text-gray-300">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Educational Background
          </h2>
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-400">
              Bachelor of Technology in Computer Science
            </h3>
            <p className="text-gray-300">
              XYZ University | Graduation Year: 20XX
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;