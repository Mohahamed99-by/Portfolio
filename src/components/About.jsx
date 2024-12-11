import React from 'react';
import {ABOUT_TEXT} from '../constants'
import about from '../assets/Mohamedt.jpg'
import { motion } from "framer-motion";


const About = () => {
  return (
    <section id="about" className="py-16 border-b border-neutral-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-semibold mb-8 text-center lg:text-center">About Me</h2>
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <motion.div 
          whileInView={{opacity:1, x: 0}}
          initial={{opacity: 0, x:-100}}
          transition={{duration: 0.5}}
          className="w-full lg:w-1/3 mb-8 lg:mb-0">
            <img 
              src={about}
              alt="Mohamed Tolba" 
              className="rounded-lg shadow-lg w-64 h-64 object-cover mx-auto lg:mx-0"
            />
          </motion.div>
          <motion.div 
          whileInView={{opacity:1, x: 0}}
          initial={{opacity: 0, x:100}}
          transition={{duration: 0.5}}

          className="w-full lg:w-2/3 lg:pl-8">
            <p  className="my-2 max-w-xl font-light tracking-tighter text-justify">
              {ABOUT_TEXT}
            </p>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;