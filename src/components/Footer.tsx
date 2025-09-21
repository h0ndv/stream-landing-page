// Footer component with socials and contact
import React from 'react';
import { Github, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Socials</h3>
            <div className="flex items-center space-x-4">
              <a 
                href="https://github.com/h0ndv" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-2xl hover:text-blue-400 transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-2xl hover:text-blue-400 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="mr-2" size={16} />
                <a 
                  href="mailto:" 
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  youremail@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;