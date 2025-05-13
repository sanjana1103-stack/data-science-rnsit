
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Send, ExternalLink } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="content-section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Contact Us</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Have questions or want to know more about our department? Get in touch with us through any of these channels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-fade-in-right">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-display font-semibold mb-6 text-rnsit-blue dark:text-rnsit-lightBlue">
                Send us a Message
              </h3>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-rnsit-blue dark:focus:ring-rnsit-lightBlue"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-rnsit-blue dark:focus:ring-rnsit-lightBlue"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-rnsit-blue dark:focus:ring-rnsit-lightBlue"
                    placeholder="Enter message subject"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea 
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-rnsit-blue dark:focus:ring-rnsit-lightBlue h-32"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full py-2 px-4 bg-gradient-to-r from-rnsit-blue to-rnsit-purple text-white rounded-lg hover:opacity-90 transition flex items-center justify-center"
                >
                  <Send size={18} className="mr-2" /> Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="animate-fade-in-left space-y-6">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-display font-semibold mb-4 text-rnsit-blue dark:text-rnsit-lightBlue">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin size={20} className="flex-shrink-0 mt-1 text-rnsit-purple dark:text-rnsit-lightPurple mr-3" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Department of CS&E (DS), RNSIT<br />
                      Dr. Vishnuvardhan Road, Channasandra<br />
                      Bengaluru - 560098, Karnataka
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone size={20} className="flex-shrink-0 text-rnsit-purple dark:text-rnsit-lightPurple mr-3" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600 dark:text-gray-400">
                      <a href="tel:+919876543210" className="hover:text-rnsit-blue dark:hover:text-rnsit-lightBlue">
                        +91 98765 43210
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Mail size={20} className="flex-shrink-0 text-rnsit-purple dark:text-rnsit-lightPurple mr-3" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600 dark:text-gray-400">
                      <a href="mailto:datasciencedept@rnsit.ac.in" className="hover:text-rnsit-blue dark:hover:text-rnsit-lightBlue">
                        datasciencedept@rnsit.ac.in
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-display font-semibold mb-4 text-rnsit-blue dark:text-rnsit-lightBlue flex items-center">
                Campus Location <ExternalLink size={16} className="ml-2" />
              </h3>
              
              <div className="rounded-lg overflow-hidden h-64 bg-gray-200 dark:bg-gray-700">
                {/* Google Map would be embedded here */}
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-gray-600 dark:text-gray-400">
                    Google Map Integration
                  </p>
                </div>
              </div>
              
              <a 
                href="https://goo.gl/maps/JfMgUkq4Lc7S4RkC7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full mt-4 py-2 px-4 bg-gray-100 dark:bg-gray-800 text-rnsit-blue dark:text-rnsit-lightBlue rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              >
                Get Directions <ExternalLink size={16} className="ml-2" />
              </a>
            </div>

            <div className="bg-gradient-to-r from-rnsit-blue to-rnsit-purple rounded-xl shadow-sm p-6 text-white">
              <h3 className="text-xl font-display font-semibold mb-2">
                Subscribe to Newsletter
              </h3>
              
              <p className="opacity-90 mb-4">
                Stay updated with our department's latest news, events, and achievements.
              </p>
              
              <div className="flex">
                <input 
                  type="email" 
                  className="flex-grow px-4 py-2 rounded-l-lg border-0 focus:outline-none text-gray-900"
                  placeholder="Enter your email"
                />
                <button 
                  type="button"
                  className="bg-white text-rnsit-blue px-4 py-2 rounded-r-lg hover:bg-gray-100 transition"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
