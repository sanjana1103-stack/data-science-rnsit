
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Update document title
    document.title = "Page Not Found | RNSIT Department of CSE (Data Science)";
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center bg-gray-50 dark:bg-gray-800 py-20">
        <div className="container max-w-3xl">
          <div className="text-center">
            <div className="mb-6">
              <span className="text-9xl font-bold gradient-text">404</span>
            </div>
            
            <h1 className="text-4xl font-display font-bold mb-4">Oops! Page Not Found</h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              The page you are looking for doesn't exist or has been moved.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/"
                className="btn-gradient px-6 py-3 rounded-lg font-medium flex items-center hover:shadow-lg transition"
              >
                <Home size={18} className="mr-2" /> Return to Home
              </Link>
              
              <button 
                onClick={() => window.history.back()} 
                className="bg-white dark:bg-gray-900 text-rnsit-blue dark:text-rnsit-lightBlue px-6 py-3 rounded-lg font-medium flex items-center hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition"
              >
                <ArrowLeft size={18} className="mr-2" /> Go Back
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
