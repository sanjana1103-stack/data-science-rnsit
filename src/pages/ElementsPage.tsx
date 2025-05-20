
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Download, Mail, Info, AlertTriangle, CheckCircle, X } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ElementsPage = () => {
  useEffect(() => {
    // Update document title
    document.title = "UI Elements | RNSIT Department of CSE (Data Science)";
  }, []);

  const { toast } = useToast();

  const showToast = (type: string) => {
    switch (type) {
      case 'success':
        toast({
          title: "Success",
          description: "Operation completed successfully.",
          variant: "default",
        });
        break;
      case 'error':
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
        break;
      case 'warning':
        toast({
          title: "Warning",
          description: "This action might have consequences.",
          variant: "default",
          icon: <AlertTriangle className="h-4 w-4" />,
        });
        break;
      case 'info':
        toast({
          title: "Information",
          description: "Just letting you know something.",
          variant: "default",
          icon: <Info className="h-4 w-4" />,
        });
        break;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 pt-28 pb-20">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              UI Elements
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mb-4">
              Explore the UI components and design elements used throughout the website.
              This page showcases our design system for consistent user experience.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container">
            <h2 className="text-3xl font-display font-bold mb-10">
              Button Styles
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-6 text-rnsit-blue dark:text-rnsit-lightBlue">
                  Primary Buttons
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">Default</h4>
                    <div className="flex flex-wrap gap-4">
                      <Button className="bg-rnsit-blue hover:bg-rnsit-blue/90 text-white">
                        Primary Button
                      </Button>
                      <Button className="bg-rnsit-blue hover:bg-rnsit-blue/90 text-white">
                        <BookOpen size={16} className="mr-2" /> With Icon
                      </Button>
                      <Button className="bg-rnsit-blue hover:bg-rnsit-blue/90 text-white">
                        Next <ArrowRight size={16} className="ml-2" />
                      </Button>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">Sizes</h4>
                    <div className="flex flex-wrap items-center gap-4">
                      <Button size="sm" className="bg-rnsit-blue hover:bg-rnsit-blue/90 text-white">
                        Small
                      </Button>
                      <Button className="bg-rnsit-blue hover:bg-rnsit-blue/90 text-white">
                        Default
                      </Button>
                      <Button size="lg" className="bg-rnsit-blue hover:bg-rnsit-blue/90 text-white">
                        Large
                      </Button>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">States</h4>
                    <div className="flex flex-wrap items-center gap-4">
                      <Button disabled className="bg-rnsit-blue hover:bg-rnsit-blue/90 text-white">
                        Disabled
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-6 text-rnsit-blue dark:text-rnsit-lightBlue">
                  Secondary Buttons
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">Default</h4>
                    <div className="flex flex-wrap gap-4">
                      <Button variant="outline" className="border-rnsit-blue text-rnsit-blue hover:bg-rnsit-blue/10 dark:border-rnsit-lightBlue dark:text-rnsit-lightBlue">
                        Secondary Button
                      </Button>
                      <Button variant="outline" className="border-rnsit-blue text-rnsit-blue hover:bg-rnsit-blue/10 dark:border-rnsit-lightBlue dark:text-rnsit-lightBlue">
                        <Download size={16} className="mr-2" /> With Icon
                      </Button>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">Variants</h4>
                    <div className="flex flex-wrap items-center gap-4">
                      <Button variant="secondary">
                        Secondary
                      </Button>
                      <Button variant="destructive">
                        Destructive
                      </Button>
                      <Button variant="ghost">
                        Ghost
                      </Button>
                      <Button variant="link">
                        Link Style
                      </Button>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">Custom</h4>
                    <div className="flex flex-wrap items-center gap-4">
                      <Button className="bg-gradient-to-r from-rnsit-blue to-rnsit-purple text-white">
                        Gradient
                      </Button>
                      <Button className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700">
                        Neutral
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-display font-bold mb-10">
              Colors & Typography
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-6 text-rnsit-blue dark:text-rnsit-lightBlue">
                  Color Palette
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">Primary Colors</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="h-20 bg-rnsit-blue rounded-lg mb-2"></div>
                        <p className="text-sm font-medium">Blue</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Primary Color</p>
                      </div>
                      <div>
                        <div className="h-20 bg-rnsit-purple rounded-lg mb-2"></div>
                        <p className="text-sm font-medium">Purple</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Secondary Color</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">Neutral Colors</h4>
                    <div className="grid grid-cols-4 gap-2">
                      <div>
                        <div className="h-10 bg-gray-50 dark:bg-gray-900 rounded-lg mb-1"></div>
                        <p className="text-xs">Gray 50</p>
                      </div>
                      <div>
                        <div className="h-10 bg-gray-100 dark:bg-gray-800 rounded-lg mb-1"></div>
                        <p className="text-xs">Gray 100</p>
                      </div>
                      <div>
                        <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-lg mb-1"></div>
                        <p className="text-xs">Gray 200</p>
                      </div>
                      <div>
                        <div className="h-10 bg-gray-300 dark:bg-gray-600 rounded-lg mb-1"></div>
                        <p className="text-xs">Gray 300</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">Accent Colors</h4>
                    <div className="grid grid-cols-3 gap-2">
                      <div>
                        <div className="h-10 bg-green-500 rounded-lg mb-1"></div>
                        <p className="text-xs">Success</p>
                      </div>
                      <div>
                        <div className="h-10 bg-red-500 rounded-lg mb-1"></div>
                        <p className="text-xs">Error</p>
                      </div>
                      <div>
                        <div className="h-10 bg-yellow-500 rounded-lg mb-1"></div>
                        <p className="text-xs">Warning</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-6 text-rnsit-blue dark:text-rnsit-lightBlue">
                  Typography
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">Headings</h4>
                    <div className="space-y-4">
                      <div>
                        <h1 className="text-4xl font-display font-bold">Heading 1</h1>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">40px, Poppins, Bold</p>
                      </div>
                      <div>
                        <h2 className="text-3xl font-display font-bold">Heading 2</h2>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">30px, Poppins, Bold</p>
                      </div>
                      <div>
                        <h3 className="text-2xl font-display font-bold">Heading 3</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">24px, Poppins, Bold</p>
                      </div>
                      <div>
                        <h4 className="text-xl font-display font-bold">Heading 4</h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">20px, Poppins, Bold</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">Body Text</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="text-lg">Large Paragraph</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">18px, Inter, Regular</p>
                      </div>
                      <div>
                        <p>Default Paragraph</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">16px, Inter, Regular</p>
                      </div>
                      <div>
                        <p className="text-sm">Small Text</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">14px, Inter, Regular</p>
                      </div>
                      <div>
                        <p className="text-xs">Extra Small</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">12px, Inter, Regular</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-display font-bold mb-10">
              Interactive Elements
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-6 text-rnsit-blue dark:text-rnsit-lightBlue">
                  Form Elements
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Text Input
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-rnsit-blue dark:focus:ring-rnsit-lightBlue"
                      placeholder="Enter your text"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Select Dropdown
                    </label>
                    <select className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-rnsit-blue dark:focus:ring-rnsit-lightBlue">
                      <option value="">Select an option</option>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Checkbox
                    </label>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="checkbox"
                        className="h-4 w-4 text-rnsit-blue focus:ring-rnsit-blue dark:focus:ring-rnsit-lightBlue border-gray-300 rounded"
                      />
                      <label htmlFor="checkbox" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                        I agree to the terms
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Radio Buttons
                    </label>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input
                          id="radio1"
                          name="radio-group"
                          type="radio"
                          className="h-4 w-4 text-rnsit-blue focus:ring-rnsit-blue dark:focus:ring-rnsit-lightBlue border-gray-300"
                        />
                        <label htmlFor="radio1" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                          Option 1
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="radio2"
                          name="radio-group"
                          type="radio"
                          className="h-4 w-4 text-rnsit-blue focus:ring-rnsit-blue dark:focus:ring-rnsit-lightBlue border-gray-300"
                        />
                        <label htmlFor="radio2" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                          Option 2
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-6 text-rnsit-blue dark:text-rnsit-lightBlue">
                  Notifications & Alerts
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">Toast Notifications</h4>
                    <div className="flex flex-wrap gap-3">
                      <Button onClick={() => showToast('success')} variant="outline" size="sm" className="bg-white dark:bg-gray-700">
                        <CheckCircle size={16} className="mr-1 text-green-500" /> Success Toast
                      </Button>
                      <Button onClick={() => showToast('error')} variant="outline" size="sm" className="bg-white dark:bg-gray-700">
                        <X size={16} className="mr-1 text-red-500" /> Error Toast
                      </Button>
                      <Button onClick={() => showToast('warning')} variant="outline" size="sm" className="bg-white dark:bg-gray-700">
                        <AlertTriangle size={16} className="mr-1 text-yellow-500" /> Warning Toast
                      </Button>
                      <Button onClick={() => showToast('info')} variant="outline" size="sm" className="bg-white dark:bg-gray-700">
                        <Info size={16} className="mr-1 text-blue-500" /> Info Toast
                      </Button>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">Alert Banners</h4>
                    <div className="space-y-3">
                      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 dark:border-green-400 p-4 flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400 mr-3 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-green-800 dark:text-green-300">Success Alert</p>
                          <p className="text-sm text-green-700 dark:text-green-400">Operation completed successfully.</p>
                        </div>
                      </div>
                      
                      <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 dark:border-red-400 p-4 flex items-start">
                        <X className="h-5 w-5 text-red-500 dark:text-red-400 mr-3 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-red-800 dark:text-red-300">Error Alert</p>
                          <p className="text-sm text-red-700 dark:text-red-400">Something went wrong. Please try again.</p>
                        </div>
                      </div>
                      
                      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-400 p-4 flex items-start">
                        <AlertTriangle className="h-5 w-5 text-yellow-500 dark:text-yellow-400 mr-3 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-yellow-800 dark:text-yellow-300">Warning Alert</p>
                          <p className="text-sm text-yellow-700 dark:text-yellow-400">This action might have consequences.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-rnsit-blue to-rnsit-purple text-white p-8 rounded-xl mb-8">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold mb-3">Need design resources?</h3>
                  <p className="max-w-xl opacity-90">
                    Download our UI kit, icon set, and design guidelines to create consistent interfaces for the RNSIT ecosystem.
                  </p>
                </div>
                <Button
                  className="bg-white text-rnsit-blue hover:bg-gray-100"
                  size="lg"
                >
                  <Download size={18} className="mr-2" /> Download UI Kit
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ElementsPage;
