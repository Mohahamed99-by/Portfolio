import React from 'react';
import { motion } from "framer-motion";
import { PROJECTS } from "../constants";

function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 bg-neutral-950">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold text-center text-white mb-16 tracking-tight"
      >
        Projects
      </motion.h1>

      <div className="grid gap-12 md:grid-cols-1 lg:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="bg-neutral-900 rounded-xl overflow-hidden shadow-2xl transform transition-transform hover:scale-105 hover:shadow-purple-900/50"
          >
            <div className="grid md:grid-cols-2 gap-6 p-6">
              <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center justify-center"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full max-w-[250px] h-auto object-cover rounded-lg shadow-md"
                />
              </motion.div>

              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col justify-center"
              >
                <h6 className="text-2xl font-semibold text-white mb-4">{project.title}</h6>
                <p className="text-neutral-300 mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 bg-purple-900/20 text-purple-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-600 transition-colors"
                  >
                    View Project
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;