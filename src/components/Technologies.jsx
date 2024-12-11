import React from 'react';
import { RiReactjsLine, RiHtml5Line, RiTailwindCssLine } from 'react-icons/ri';
import { FaLaravel, FaGithub, FaNodeJs } from 'react-icons/fa';
import { SiMysql, SiPostman, SiExpress } from 'react-icons/si';
import { DiMongodb } from 'react-icons/di';

import { motion } from 'framer-motion';

const iconVariants = {
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: 1, // Duration of the animation
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
};

const TechnologyIcon = ({ Icon, name, color }) => (
  <div className="flex flex-col items-center space-y-2 rounded-2xl border-2 border-neutral-800 p-4 transition-all hover:border-neutral-600 hover:shadow-lg">
    <Icon className={`text-5xl ${color}`} />
    <span className="text-sm text-neutral-400">{name}</span>
  </div>
);

function Technologies() {
  const technologies = [
    { Icon: RiHtml5Line, name: 'HTML5', color: 'text-orange-500' },
    { Icon: RiTailwindCssLine, name: 'Tailwind', color: 'text-cyan-400' },
    { Icon: RiReactjsLine, name: 'React', color: 'text-blue-400' },
    { Icon: FaLaravel, name: 'Laravel', color: 'text-red-500' },
    { Icon: SiMysql, name: 'MySQL', color: 'text-blue-600' },
    { Icon: FaGithub, name: 'GitHub', color: 'text-gray-400' },
    { Icon: SiPostman, name: 'Postman', color: 'text-orange-600' },
    { Icon: FaNodeJs, name: 'Node.js', color: 'text-green-500' },
    { Icon: SiExpress, name: 'Express', color: 'text-gray-500' },
    { Icon: DiMongodb, name: 'MongoDb', color: 'text-green-500' },
  ];

  return (
    <div className="border-r border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl font-bold text-neutral-200">Technologies</h1>
      <motion.div 
       variants={iconVariants}
       initial="initial"
       animate="animate"
      className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mr-4">
        {technologies.map((tech) => (
          <TechnologyIcon key={tech.name} {...tech} />
        ))}
      </motion.div>
    </div>
  );
}

export default Technologies;