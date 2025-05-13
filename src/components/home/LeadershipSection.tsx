
import React from 'react';
import { User } from 'lucide-react';

const LeadershipSection = () => {
  return (
    <section className="content-section bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Leadership</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Meet the visionaries guiding RNSIT towards excellence in education and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* HOD's Message */}
          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">HOD's Message</h3>
              <div className="flex items-center mb-4">
                <User className="w-5 h-5 mr-2 text-rnsit-blue" />
                <span className="font-medium">Dr. Mohan H. S.</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                <span className="font-medium">Designation:</span> Professor & Head, Department of CSE (Data Science)
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                <span className="font-medium">Experience:</span> Over 24 years in academia and research
              </p>
              <div className="text-gray-600 dark:text-gray-400 text-sm mt-4">
                <p className="mb-2">
                  Welcome to the Department of CSE (Data Science) at RNSIT. Our department is committed to providing a robust academic foundation coupled with practical exposure to emerging technologies. We aim to nurture innovation, critical thinking, and interdisciplinary learning among our students, preparing them to excel in the dynamic field of data science.
                </p>
              </div>
              <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                <p>Specialization in Cryptography, Network Security, Big Data, Cloud Computing, AI, and ML</p>
                <p className="mt-1">Ph.D. in Computer Science & Engineering from Dr. MGR University, Chennai</p>
              </div>
            </div>
          </div>

          {/* Director's Message */}
          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Director's Message</h3>
              <div className="flex items-center mb-4">
                <User className="w-5 h-5 mr-2 text-rnsit-blue" />
                <span className="font-medium">Dr. M. K. Venkatesha</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                <span className="font-medium">Designation:</span> Director, RNS Institute of Technology
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                <span className="font-medium">Experience:</span> Over 35 years in academia
              </p>
              <div className="text-gray-600 dark:text-gray-400 text-sm mt-4">
                <p className="mb-2">
                  Dr. Venkatesha is a respected academic leader with a deep commitment to innovation and institutional progress. Under his direction, RNSIT has embraced a future-focused approach, supporting interdisciplinary learning, industry collaboration, and research-driven pedagogy.
                </p>
              </div>
            </div>
          </div>

          {/* Principal's Note */}
          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Principal's Note</h3>
              <div className="flex items-center mb-4">
                <User className="w-5 h-5 mr-2 text-rnsit-blue" />
                <span className="font-medium">Dr. Ramesh Babu H. S.</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                <span className="font-medium">Designation:</span> Principal, RNSIT
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                <span className="font-medium">Experience:</span> 25+ years
              </p>
              <div className="text-gray-600 dark:text-gray-400 text-sm mt-4">
                <p className="mb-2">
                  A strong academician and institution builder, Dr. Ramesh Babu has led various initiatives to modernize learning, integrate technology, and uplift student opportunities across all departments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
