import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, SiJavascript, SiNodedotjs, SiPython, 
  SiTailwindcss, SiDocker, SiMongodb, SiTypescript,
  SiGit, SiHtml5, SiCss3, SiRedux
} from 'react-icons/si';

const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { icon: SiReact, name: 'React', level: 90 },
      { icon: SiJavascript, name: 'JavaScript', level: 85 },
      { icon: SiTypescript, name: 'TypeScript', level: 75 },
      { icon: SiHtml5, name: 'HTML5', level: 90 },
      { icon: SiCss3, name: 'CSS3', level: 85 },
      { icon: SiRedux, name: 'Redux', level: 70 }
    ]
  },
  {
    category: 'Backend',
    skills: [
      { icon: SiNodedotjs, name: 'Node.js', level: 80 },
      { icon: SiPython, name: 'Python', level: 75 },
      { icon: SiMongodb, name: 'MongoDB', level: 70 }
    ]
  },
  {
    category: 'Tools & Technologies',
    skills: [
      { icon: SiDocker, name: 'Docker', level: 65 },
      { icon: SiTailwindcss, name: 'Tailwind CSS', level: 85 },
      { icon: SiGit, name: 'Git', level: 80 }
    ]
  }
];

const Skills = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 py-16 px-4 pt-24">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          My Skills
        </h1>

        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: categoryIndex * 0.2, duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold text-blue-400 mb-6 text-center">
              {category.category}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: (categoryIndex * 0.2) + (skillIndex * 0.1), 
                    duration: 0.5 
                  }}
                  className="bg-gray-800 rounded-lg p-6 transform hover:scale-105 transition-transform"
                >
                  <div className="flex items-center mb-4">
                    <skill.icon className="text-4xl mr-4 text-blue-400" />
                    <h3 className="text-xl font-semibold text-white">
                      {skill.name}
                    </h3>
                  </div>
                  
                  <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
                    <div 
                      style={{ width: `${skill.level}%` }}
                      className="h-full rounded-full bg-blue-500"
                    />
                  </div>
                  
                  <p className="text-right text-sm text-gray-400">
                    {skill.level}% Proficiency
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;