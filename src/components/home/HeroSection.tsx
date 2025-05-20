
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const HeroSection = () => {
  return <section className="relative bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 pt-28 pb-20 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[10%] right-[5%] w-64 h-64 rounded-full bg-blue-200/20 dark:bg-blue-500/5 blur-3xl"></div>
        <div className="absolute bottom-[10%] left-[5%] w-96 h-96 rounded-full bg-purple-200/20 dark:bg-purple-500/5 blur-3xl"></div>
        <div className="absolute top-[40%] left-[30%] w-72 h-72 rounded-full bg-blue-100/30 dark:bg-blue-500/5 blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 animate-fade-in">
            <span className="gradient-text">Decode Data. Drive Innovation.</span>
            <br className="hidden md:block" />Discover the Future.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            Welcome to the Department of Computer Science & Engineering (Data Science) at RNSIT. 
            Empowering students to extract insights from data and shape the future of technology.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in" style={{
          animationDelay: '0.4s'
        }}>
            <Link to="/academics/curriculum" className="btn-gradient px-6 py-3 rounded-lg font-medium hover:shadow-lg flex items-center transition-all duration-300">
              View Curriculum <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link to="/events" className="bg-white dark:bg-gray-800 text-rnsit-blue dark:text-rnsit-lightBlue px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300">
              Explore Events
            </Link>
            <Link to="/community" className="bg-transparent border border-rnsit-blue dark:border-rnsit-lightBlue text-rnsit-blue dark:text-rnsit-lightBlue px-6 py-3 rounded-lg font-medium hover:bg-rnsit-blue hover:text-white dark:hover:bg-rnsit-lightBlue dark:hover:text-gray-900 transition-all duration-300">
              Join Community
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto animate-fade-in" style={{
        animationDelay: '0.6s'
      }}>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm card-hover text-center">
            <p className="text-4xl font-bold text-rnsit-blue dark:text-rnsit-lightBlue mb-1">120</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Students per batch</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm card-hover text-center">
            <p className="text-4xl font-bold text-rnsit-purple dark:text-rnsit-lightPurple mb-1">2021</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Year Established</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm card-hover text-center">
            <p className="text-4xl font-bold text-rnsit-blue dark:text-rnsit-lightBlue mb-1">25+</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Expert Faculty</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm card-hover text-center">
            <p className="text-4xl font-bold text-rnsit-purple dark:text-rnsit-lightPurple mb-1">100%</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Placement Record</p>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <Link to="/stats" className="inline-flex items-center text-rnsit-blue dark:text-rnsit-lightBlue hover:underline">
            View Detailed Stats <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </section>;
};
export default HeroSection;
