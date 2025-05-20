
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Download, FileText, BookOpen, BookCopy, Mail, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const TemplatesPage = () => {
  useEffect(() => {
    // Update document title
    document.title = "Templates | RNSIT Department of CSE (Data Science)";
  }, []);

  // Sample templates
  const projectTemplates = [
    { 
      title: "Data Science Project Report",
      description: "Standard template for BE Data Science project documentation with LaTeX and Word versions.",
      format: ["DOCX", "PDF", "LaTeX"],
      lastUpdated: "May 15, 2024",
      size: "2.3 MB"
    },
    { 
      title: "Mini Project Documentation",
      description: "Template for mini-project reports with format guidelines and section structure.",
      format: ["DOCX", "PDF"],
      lastUpdated: "June 3, 2024",
      size: "1.8 MB"
    },
    { 
      title: "Project Presentation Template",
      description: "PowerPoint and Keynote templates for project presentations with RNSIT branding.",
      format: ["PPTX", "KEY", "PDF"],
      lastUpdated: "April 22, 2024",
      size: "4.5 MB"
    },
    { 
      title: "Technical Paper Format",
      description: "IEEE format template for technical papers and conference submissions.",
      format: ["DOCX", "LaTeX", "PDF"],
      lastUpdated: "March 10, 2024",
      size: "1.2 MB"
    }
  ];

  const labTemplates = [
    { 
      title: "Data Science Lab Manual Template",
      description: "Standard format for creating lab manuals for Data Science practical sessions.",
      format: ["DOCX", "PDF"],
      lastUpdated: "May 5, 2024",
      size: "1.5 MB"
    },
    { 
      title: "Lab Report Template",
      description: "Template for students to document their lab experiments and results.",
      format: ["DOCX", "PDF"],
      lastUpdated: "April 18, 2024",
      size: "0.9 MB"
    },
    { 
      title: "Programming Assignment Template",
      description: "Jupyter Notebook and Python script templates for programming assignments.",
      format: ["IPYNB", "PY", "PDF"],
      lastUpdated: "June 10, 2024",
      size: "0.8 MB"
    }
  ];

  const letterTemplates = [
    { 
      title: "Internship Application Letter",
      description: "Template for students to apply for industry internships with proper formatting.",
      format: ["DOCX", "PDF"],
      lastUpdated: "May 12, 2024",
      size: "0.5 MB"
    },
    { 
      title: "Recommendation Letter Format",
      description: "Standard format for faculty to write student recommendation letters.",
      format: ["DOCX", "PDF"],
      lastUpdated: "March 25, 2024",
      size: "0.6 MB"
    },
    { 
      title: "Event Proposal Format",
      description: "Template for proposing technical events, workshops, or guest lectures.",
      format: ["DOCX", "PDF"],
      lastUpdated: "April 30, 2024",
      size: "0.7 MB"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 pt-28 pb-20">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Document Templates
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mb-4">
              Download standardized templates for project reports, lab manuals, presentations, and other academic documents.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container">
            <h2 className="text-3xl font-display font-bold mb-10">
              Project Documentation Templates
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {projectTemplates.map((template, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
                        <FileText size={24} />
                      </div>
                    </div>
                    <div className="ml-5 flex-grow">
                      <h3 className="text-xl font-semibold mb-2">{template.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{template.description}</p>
                      
                      <div className="flex flex-wrap items-center justify-between">
                        <div>
                          <div className="flex flex-wrap gap-2 mb-2">
                            {template.format.map((format, idx) => (
                              <span 
                                key={idx}
                                className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded"
                              >
                                {format}
                              </span>
                            ))}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-500">
                            Updated: {template.lastUpdated} • Size: {template.size}
                          </div>
                        </div>
                        
                        <Button variant="ghost" size="sm" className="text-rnsit-blue dark:text-rnsit-lightBlue hover:bg-blue-50 dark:hover:bg-blue-900/20">
                          <Download size={16} className="mr-2" /> Download
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-display font-bold mb-10">
              Lab Documentation Templates
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {labTemplates.map((template, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-12 w-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400">
                        <BookOpen size={24} />
                      </div>
                    </div>
                    <div className="ml-5 flex-grow">
                      <h3 className="text-xl font-semibold mb-2">{template.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{template.description}</p>
                      
                      <div className="flex flex-wrap items-center justify-between">
                        <div>
                          <div className="flex flex-wrap gap-2 mb-2">
                            {template.format.map((format, idx) => (
                              <span 
                                key={idx}
                                className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded"
                              >
                                {format}
                              </span>
                            ))}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-500">
                            Updated: {template.lastUpdated} • Size: {template.size}
                          </div>
                        </div>
                        
                        <Button variant="ghost" size="sm" className="text-rnsit-blue dark:text-rnsit-lightBlue hover:bg-green-50 dark:hover:bg-green-900/20">
                          <Download size={16} className="mr-2" /> Download
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-display font-bold mb-10">
              Official Letters & Forms
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {letterTemplates.map((template, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-12 w-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400">
                        <Mail size={24} />
                      </div>
                    </div>
                    <div className="ml-5 flex-grow">
                      <h3 className="text-xl font-semibold mb-2">{template.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{template.description}</p>
                      
                      <div className="flex flex-wrap items-center justify-between">
                        <div>
                          <div className="flex flex-wrap gap-2 mb-2">
                            {template.format.map((format, idx) => (
                              <span 
                                key={idx}
                                className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded"
                              >
                                {format}
                              </span>
                            ))}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-500">
                            Updated: {template.lastUpdated} • Size: {template.size}
                          </div>
                        </div>
                        
                        <Button variant="ghost" size="sm" className="text-rnsit-blue dark:text-rnsit-lightBlue hover:bg-purple-50 dark:hover:bg-purple-900/20">
                          <Download size={16} className="mr-2" /> Download
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-rnsit-blue to-rnsit-purple text-white p-8 rounded-xl mb-8">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold mb-3">Need a Custom Template?</h3>
                  <p className="max-w-xl opacity-90">
                    If you need a specific template that's not listed here, please contact the department office. 
                    We're always expanding our template library based on student and faculty needs.
                  </p>
                </div>
                <Button
                  asChild
                  className="bg-white text-rnsit-blue hover:bg-gray-100"
                >
                  <a href="mailto:datasciencedept@rnsit.ac.in">
                    <Mail size={18} className="mr-2" /> Contact Us
                  </a>
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="flex items-center text-xl font-bold mb-4 text-rnsit-blue dark:text-rnsit-lightBlue">
                  <BookCopy size={20} className="mr-2" /> Submission Guidelines
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span> Use the official templates when submitting assignments, project reports, or lab manuals.
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span> Do not modify the template structure, formatting, or branding elements.
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span> Replace placeholder text with your content while maintaining the document's formatting.
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span> Submit final documents in PDF format unless otherwise specified.
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="flex items-center text-xl font-bold mb-4 text-rnsit-blue dark:text-rnsit-lightBlue">
                  <ArrowRight size={20} className="mr-2" /> Related Resources
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a 
                      href="#" 
                      className="block p-3 bg-white dark:bg-gray-700 rounded-lg hover:shadow-sm transition-shadow"
                    >
                      <p className="font-medium">IEEE Citation Style Guide</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Guidelines for properly citing sources in technical documents</p>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#" 
                      className="block p-3 bg-white dark:bg-gray-700 rounded-lg hover:shadow-sm transition-shadow"
                    >
                      <p className="font-medium">Academic Writing Resources</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Tips and resources for effective technical writing</p>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#" 
                      className="block p-3 bg-white dark:bg-gray-700 rounded-lg hover:shadow-sm transition-shadow"
                    >
                      <p className="font-medium">Project Guidelines</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Detailed project submission requirements and evaluation criteria</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TemplatesPage;
