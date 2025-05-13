
import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { toast } = useToast();

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
    setIsDark(!isDark);
    
    toast({
      title: isDark ? "Light mode activated" : "Dark mode activated",
      description: "Your theme preference has been saved.",
      duration: 3000,
    });
  };

  useEffect(() => {
    // Check for dark mode preference
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && 
        window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }

    // Add scroll listener
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Academics', 
      path: '/academics',
      dropdown: [
        { name: 'Curriculum', path: '/academics/curriculum' },
        { name: 'Syllabus', path: '/academics/syllabus' },
        { name: 'Labs', path: '/academics/labs' },
      ]
    },
    { 
      name: 'People', 
      path: '/people',
      dropdown: [
        { name: 'Faculty', path: '/people/faculty' },
        { name: 'Students', path: '/people/students' },
      ]
    },
    { name: 'Events', path: '/events' },
    { name: 'Research', path: '/research' },
    { name: 'Placements', path: '/placements' },
    { name: 'Resources', path: '/resources' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3">
          <img src="/lovable-uploads/ed7a4209-4979-4214-ab5d-3fe8f2b8f9c1.png" alt="RNSIT Logo" className="h-12" />
          <span className="font-display font-bold text-xl md:text-2xl">
            <span className="text-rnsit-blue">RNSIT</span>
            <span className="text-rnsit-purple"> | Data Science</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <div className="flex space-x-6">
            {navItems.map((item) => (
              item.dropdown ? (
                <div key={item.name} className="relative group">
                  <button className="flex items-center py-2 text-gray-700 dark:text-gray-200 hover:text-rnsit-blue dark:hover:text-rnsit-lightBlue font-medium">
                    {item.name} <ChevronDown size={16} className="ml-1" />
                  </button>
                  <div className="absolute z-10 left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left">
                    <div className="py-1 rounded-md bg-white dark:bg-gray-800 shadow-xs">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className="py-2 text-gray-700 dark:text-gray-200 hover:text-rnsit-blue dark:hover:text-rnsit-lightBlue font-medium"
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center lg:hidden">
          <button 
            onClick={toggleTheme}
            className="p-2 mr-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-gray-700" />
            )}
          </button>
          <button 
            onClick={toggleMenu}
            className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 shadow-xl animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div className="py-2">
                    <div className="font-medium text-gray-700 dark:text-gray-200 mb-2">
                      {item.name}
                    </div>
                    <div className="pl-4 border-l-2 border-gray-200 dark:border-gray-700">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          onClick={toggleMenu}
                          className="block py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-rnsit-blue dark:hover:text-rnsit-lightBlue"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    onClick={toggleMenu}
                    className="block py-3 text-gray-700 dark:text-gray-200 hover:text-rnsit-blue dark:hover:text-rnsit-lightBlue font-medium border-b border-gray-100 dark:border-gray-800"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
