import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Importing social media icons

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-6 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Left section: Name and short description */}
          <div className="text-center lg:text-left mb-6 lg:mb-0">
            <h3 className="text-2xl font-semibold text-purple-900">Mohamed Tolba</h3>
            <p className="text-sm text-neutral-400 mt-2">
              Web Developer | Passionate about coding and building modern web apps
            </p>
          </div>

          {/* Social media icons */}
          <div className="flex space-x-6 justify-center lg:justify-start">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-500"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/yourusername/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-500"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-500"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>

        {/* Bottom section: Copyright */}
        <div className="mt-8 text-center">
          <p className="text-sm text-neutral-400">
            &copy; {new Date().getFullYear()} Mohamed Tolba. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
