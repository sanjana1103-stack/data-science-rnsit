
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Facebook, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Department Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-rnsit-blue dark:text-rnsit-lightBlue">Department of CS&E (DS)</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Empowering students with cutting-edge data science skills to drive innovation and discovery.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://www.instagram.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-rnsit-blue dark:text-gray-400 dark:hover:text-rnsit-lightBlue transition"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://twitter.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-rnsit-blue dark:text-gray-400 dark:hover:text-rnsit-lightBlue transition"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-rnsit-blue dark:text-gray-400 dark:hover:text-rnsit-lightBlue transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://www.facebook.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-rnsit-blue dark:text-gray-400 dark:hover:text-rnsit-lightBlue transition"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-rnsit-blue dark:text-rnsit-lightBlue">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-rnsit-blue dark:hover:text-rnsit-lightBlue transition">
                  About Department
                </Link>
              </li>
              <li>
                <Link to="/academics/curriculum" className="text-gray-600 dark:text-gray-400 hover:text-rnsit-blue dark:hover:text-rnsit-lightBlue transition">
                  Curriculum
                </Link>
              </li>
              <li>
                <Link to="/people/faculty" className="text-gray-600 dark:text-gray-400 hover:text-rnsit-blue dark:hover:text-rnsit-lightBlue transition">
                  Faculty
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-600 dark:text-gray-400 hover:text-rnsit-blue dark:hover:text-rnsit-lightBlue transition">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/stats" className="text-gray-600 dark:text-gray-400 hover:text-rnsit-blue dark:hover:text-rnsit-lightBlue transition">
                  Placements
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-rnsit-blue dark:hover:text-rnsit-lightBlue transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-rnsit-blue dark:text-rnsit-lightBlue">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/academics/syllabus" className="text-gray-600 dark:text-gray-400 hover:text-rnsit-blue dark:hover:text-rnsit-lightBlue transition">
                  E-Learning Resources
                </Link>
              </li>
              <li>
                <a 
                  href="https://rnsit.ac.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-rnsit-blue dark:hover:text-rnsit-lightBlue transition"
                >
                  RNSIT Website <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-600 dark:text-gray-400 hover:text-rnsit-blue dark:hover:text-rnsit-lightBlue transition">
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link to="/templates" className="text-gray-600 dark:text-gray-400 hover:text-rnsit-blue dark:hover:text-rnsit-lightBlue transition">
                  Templates
                </Link>
              </li>
              <li>
                <Link to="/elements" className="text-gray-600 dark:text-gray-400 hover:text-rnsit-blue dark:hover:text-rnsit-lightBlue transition">
                  UI Elements
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-rnsit-blue dark:text-rnsit-lightBlue">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="flex-shrink-0 mr-2 text-rnsit-purple dark:text-rnsit-lightPurple mt-1" />
                <span className="text-gray-600 dark:text-gray-400">
                  Department of CSE (DS), RNSIT, Channasandra, Bengaluru - 560098
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="flex-shrink-0 mr-2 text-rnsit-purple dark:text-rnsit-lightPurple" />
                <a 
                  href="tel:+919876543210" 
                  className="text-gray-600 dark:text-gray-400 hover:text-rnsit-blue dark:hover:text-rnsit-lightBlue transition"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="flex-shrink-0 mr-2 text-rnsit-purple dark:text-rnsit-lightPurple" />
                <a 
                  href="mailto:datasciencedept@rnsit.ac.in" 
                  className="text-gray-600 dark:text-gray-400 hover:text-rnsit-blue dark:hover:text-rnsit-lightBlue transition"
                >
                  datasciencedept@rnsit.ac.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 mt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Department of CS&E (Data Science), RNSIT. All rights reserved.
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">
            Designed and Developed with care for RNSIT Data Science community
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
