
import React, { useState } from 'react';
import { Mail, X } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const NewsletterBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email) {
      toast({
        title: "Subscription successful!",
        description: "Thank you for subscribing to our newsletter.",
        duration: 3000,
      });
      
      setEmail('');
      setTimeout(() => {
        setIsVisible(false);
      }, 1000);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 right-5 max-w-md z-40 animate-fade-in">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-rnsit-blue to-rnsit-purple p-4 text-white flex justify-between items-center">
          <div className="flex items-center">
            <Mail size={20} className="mr-2" />
            <h3 className="text-lg font-semibold">Department Newsletter</h3>
          </div>
          <button 
            onClick={handleClose}
            className="text-white hover:bg-white/20 p-1 rounded-full transition"
            aria-label="Close newsletter banner"
          >
            <X size={18} />
          </button>
        </div>
        
        <div className="p-5">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Stay updated with the latest news, events, and announcements from our department.
          </p>
          
          <form onSubmit={handleSubmit} className="flex">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-rnsit-blue dark:focus:ring-rnsit-lightBlue bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
              placeholder="Enter your email"
              required
            />
            <button 
              type="submit"
              className="bg-rnsit-blue dark:bg-rnsit-lightBlue text-white dark:text-gray-900 px-4 py-2 rounded-r-lg hover:bg-rnsit-blue/90 dark:hover:bg-rnsit-lightBlue/90 transition"
            >
              Subscribe
            </button>
          </form>
          
          <p className="text-xs text-gray-500 dark:text-gray-500 mt-3">
            By subscribing, you agree to receive emails from us. You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterBanner;
