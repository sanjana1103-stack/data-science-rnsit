
import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Download, ChevronRight, Code, Database, ChartBar, Server } from 'lucide-react';

const AcademicsSection = () => {
  const specializations = [
    {
      icon: <Code size={22} />,
      title: "Programming Fundamentals",
      description: "Python, R, Java, and advanced programming concepts for data processing."
    },
    {
      icon: <Database size={22} />,
      title: "Database Systems",
      description: "Relational & NoSQL databases, data warehousing, and data modeling techniques."
    },
    {
      icon: <ChartBar size={22} />,
      title: "Analytics & Visualization",
      description: "Statistical analysis, data visualization tools, and interpretation methods."
    },
    {
      icon: <Server size={22} />,
      title: "Big Data Technologies",
      description: "Hadoop, Spark, and distributed computing frameworks for large datasets."
    }
  ];

  return (
    <section className="content-section bg-white dark:bg-gray-900">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Academics</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Our comprehensive curriculum is designed to provide students with strong theoretical foundations 
            and practical skills in Data Science and related technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div className="animate-fade-in-right">
            <h3 className="text-2xl font-display font-bold mb-4 text-rnsit-blue dark:text-rnsit-lightBlue">
              Curriculum Highlights
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Our Data Science program offers a blend of computer science fundamentals, mathematical 
              principles, and specialized courses in data analytics, machine learning, and artificial intelligence.
            </p>

            <div className="space-y-4 mb-6">
              {specializations.map((item, index) => (
                <div 
                  key={index} 
                  className="flex bg-gray-50 dark:bg-gray-800 p-4 rounded-lg animate-fade-in"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-rnsit-blue to-rnsit-purple text-white mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-6">
              <Link 
                to="/academics/curriculum" 
                className="flex items-center px-4 py-2 bg-rnsit-blue dark:bg-rnsit-lightBlue text-white dark:text-gray-900 rounded-lg hover:bg-rnsit-blue/90 dark:hover:bg-rnsit-lightBlue/90 transition"
              >
                <Book size={18} className="mr-2" /> View Curriculum
              </Link>
              <Link 
                to="/academics/syllabus" 
                className="flex items-center px-4 py-2 border border-rnsit-blue dark:border-rnsit-lightBlue text-rnsit-blue dark:text-rnsit-lightBlue rounded-lg hover:bg-rnsit-blue/10 dark:hover:bg-rnsit-lightBlue/10 transition"
              >
                <Download size={18} className="mr-2" /> Download Syllabus
              </Link>
            </div>
          </div>

          <div className="animate-fade-in-left">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                Semester-wise Topics
              </h3>
              <div className="space-y-4">
                <div className="hover:bg-white dark:hover:bg-gray-700 p-3 rounded-lg transition">
                  <Link to="/academics/curriculum#sem1" className="flex justify-between items-center">
                    <span className="font-medium">Semester 1 & 2</span>
                    <ChevronRight size={18} className="text-rnsit-blue dark:text-rnsit-lightBlue" />
                  </Link>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Core engineering subjects, programming fundamentals
                  </p>
                </div>
                
                <div className="hover:bg-white dark:hover:bg-gray-700 p-3 rounded-lg transition">
                  <Link to="/academics/curriculum#sem3" className="flex justify-between items-center">
                    <span className="font-medium">Semester 3 & 4</span>
                    <ChevronRight size={18} className="text-rnsit-blue dark:text-rnsit-lightBlue" />
                  </Link>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Data structures, algorithms, database systems
                  </p>
                </div>
                
                <div className="hover:bg-white dark:hover:bg-gray-700 p-3 rounded-lg transition">
                  <Link to="/academics/curriculum#sem5" className="flex justify-between items-center">
                    <span className="font-medium">Semester 5 & 6</span>
                    <ChevronRight size={18} className="text-rnsit-blue dark:text-rnsit-lightBlue" />
                  </Link>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Machine learning, data mining, visualization
                  </p>
                </div>
                
                <div className="hover:bg-white dark:hover:bg-gray-700 p-3 rounded-lg transition">
                  <Link to="/academics/curriculum#sem7" className="flex justify-between items-center">
                    <span className="font-medium">Semester 7 & 8</span>
                    <ChevronRight size={18} className="text-rnsit-blue dark:text-rnsit-lightBlue" />
                  </Link>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Deep learning, big data, capstone projects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicsSection;
