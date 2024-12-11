import { motion } from "framer-motion";
import portfolio from '../assets/Mohamedt.jpg';

function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-neutral-950 overflow-hidden">
      {/* Gradient Backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-950 to-purple-950 opacity-70 animate-gradient-x"></div>

      {/* Animated Dots Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute animate-pulse-slow bg-purple-500 rounded-full w-4 h-4 top-1/4 left-1/3"></div>
        <div className="absolute animate-pulse-slow bg-purple-600 rounded-full w-6 h-6 top-1/2 right-1/4 delay-500"></div>
        <div className="absolute animate-pulse-slow bg-purple-700 rounded-full w-5 h-5 bottom-1/3 left-1/4 delay-1000"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6"
      >
        {/* Profile Image with Glowing Effect */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 0.6, 
            type: "spring", 
            stiffness: 120,
            delay: 0.2
          }}
          className="relative mb-8"
        >
          <div className="absolute -inset-2 bg-purple-500/50 rounded-full blur-2xl animate-glow"></div>
          <img 
            src={portfolio} 
            alt="Profile" 
            className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-neutral-800 shadow-2xl shadow-purple-500/50 transform transition-transform hover:scale-105"
          />
        </motion.div>

        {/* Interactive Name */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: 0.6, 
            delay: 0.4,
            type: "spring",
            stiffness: 100
          }}
          className="group cursor-pointer"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight 
            group-hover:text-transparent group-hover:bg-clip-text 
            group-hover:bg-gradient-to-r group-hover:from-purple-500 
            group-hover:to-pink-500 transition-all duration-300">
            Mohamed Tolba
          </h1>
        </motion.div>

        {/* Animated Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: 0.6,
            type: "spring",
            stiffness: 100
          }}
          className="mt-6 flex flex-wrap justify-center space-x-2 sm:space-x-4"
        >
          {[
            { name: 'React', color: 'text-cyan-400' },
            { name: 'Node.js', color: 'text-green-500' },
            { name: 'Laravel', color: 'text-blue-500' },
            { name: 'Tailwind CSS', color: 'text-yellow-500' }
          ].map((tech, index) => (
            <span 
              key={index}
              className={`${tech.color} text-sm sm:text-lg font-medium 
                bg-neutral-900/50 px-2 sm:px-3 py-1 rounded-full 
                hover:scale-110 transition-transform`}
            >
              {tech.name}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Subtle Animated Lines */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-line-move opacity-50"></div>
    </div>
  );
}

export default Hero;