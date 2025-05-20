
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
const AboutSection = () => {
  return <section className="content-section bg-white dark:bg-gray-900">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">About The Department</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Established in 2021-22, our department is at the forefront of Data Science education, 
            equipping students with the skills needed to excel in today's data-driven world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-right">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-display font-bold text-rnsit-blue dark:text-rnsit-lightBlue mb-3">Our Vision</h3>
              <p className="text-gray-700 dark:text-gray-300">
                To be a center of excellence in Data Science education, producing graduates who are 
                technically competent, ethically responsible, and capable of addressing real-world 
                challenges through data-driven approaches.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-display font-bold text-rnsit-purple dark:text-rnsit-lightPurple mb-3">Our Mission</h3>
              <p className="text-gray-700 dark:text-gray-300">
                To provide quality education that blends theoretical foundations with practical applications, 
                fostering critical thinking, problem-solving abilities, and innovation in the field of Data Science.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-display font-bold text-rnsit-blue dark:text-rnsit-lightBlue mb-3">Focus Areas</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span> Artificial Intelligence & Machine Learning
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span> Big Data Analytics & Visualization
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span> Data Engineering & Cloud Computing
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span> Statistical Modeling & Analysis
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <Link to="/about" className="inline-flex items-center text-rnsit-blue dark:text-rnsit-lightBlue hover:underline">
                Read more about our department <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>

          <div className="animate-fade-in-left">
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-lg"></div>
              <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-purple-100 dark:bg-purple-900/20 rounded-lg"></div>
              <div className="relative bg-white dark:bg-gray-800 p-1 rounded-lg shadow-lg">
                <img alt="Students working on Data Science projects" className="rounded-lg" src="https://www.rnsit.ac.in/wp-content/themes/rnsit/img/vision-mission.jpg" />
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                <p className="text-center text-lg font-bold gradient-text">Established in 2021</p>
                <p className="text-center text-gray-700 dark:text-gray-300">With an intake of 120 students</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;
