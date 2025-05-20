
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  useEffect(() => {
    // Update document title
    document.title = "About | RNSIT Department of CSE (Data Science)";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 pt-28 pb-20">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              About Our Department
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
              Department of Computer Science & Engineering (Data Science) at RNSIT is dedicated to 
              providing quality education in the rapidly evolving field of data science.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-display font-bold mb-6 text-rnsit-blue dark:text-rnsit-lightBlue">
                  Department Overview
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Established in 2021, the Department of Computer Science & Engineering (Data Science) 
                  offers a comprehensive program focused on training students in data analytics, 
                  machine learning, artificial intelligence, and other data-driven technologies.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Our curriculum is designed to provide both theoretical knowledge and practical skills, 
                  preparing students for the challenges of the industry and research domains alike.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  With state-of-the-art laboratories, experienced faculty, and strong industry connections, 
                  we ensure that our graduates are well-equipped to excel in their careers.
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">At a Glance</h3>
                <div className="space-y-4">
                  <div className="flex justify-between pb-2 border-b border-gray-200 dark:border-gray-700">
                    <span className="font-medium">Established</span>
                    <span>2021</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-gray-200 dark:border-gray-700">
                    <span className="font-medium">Program</span>
                    <span>B.E. in CSE (Data Science)</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-gray-200 dark:border-gray-700">
                    <span className="font-medium">Intake</span>
                    <span>120 students per year</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-gray-200 dark:border-gray-700">
                    <span className="font-medium">Faculty</span>
                    <span>25+ experienced educators</span>
                  </div>
                  <div className="flex justify-between pb-2">
                    <span className="font-medium">Placement</span>
                    <span>100% placement record</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-display font-bold mb-8 text-center">
                HOD's Message
              </h2>
              <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
                  <img 
                    src="/path/to/hod-image.jpg" 
                    alt="Dr. Mohan H. S." 
                    className="w-32 h-32 object-cover rounded-full"
                  />
                  <div>
                    <h3 className="text-xl font-bold">Dr. Mohan H. S.</h3>
                    <p className="text-gray-600 dark:text-gray-400">Professor & Head, Department of CSE (Data Science)</p>
                    <p className="text-rnsit-blue dark:text-rnsit-lightBlue mt-1">Experience: Over 24 years in academia and research</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 dark:text-gray-300 border-l-4 border-rnsit-blue dark:border-rnsit-lightBlue pl-4 italic">
                  Welcome to the Department of CSE (Data Science) at RNSIT. Our department is committed to providing a robust 
                  academic foundation coupled with practical exposure to emerging technologies. We aim to nurture innovation, 
                  critical thinking, and interdisciplinary learning among our students, preparing them to excel in the dynamic 
                  field of data science.
                </blockquote>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  Dr. Mohan H. S. holds a Ph.D. in Computer Science & Engineering from Dr. MGR University, Chennai. 
                  His areas of specialization include Cryptography, Network Security, Big Data, Cloud Computing, 
                  Artificial Intelligence, and Machine Learning. He has been recognized with several awards for 
                  excellence in teaching and research, including the Dr. Abdul Kalam Life Time Achievement National Award.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">
              Vision & Mission
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-rnsit-blue dark:text-rnsit-lightBlue mb-4">Our Vision</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  To be a center of excellence in Data Science education, producing graduates who are 
                  technically competent, ethically responsible, and capable of addressing real-world 
                  challenges through data-driven approaches. We aspire to be recognized nationally and 
                  internationally for our innovative teaching methodologies, research contributions, 
                  and industry collaborations.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-rnsit-purple dark:text-rnsit-lightPurple mb-4">Our Mission</h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span> To provide quality education that blends theoretical foundations with practical applications
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span> To foster critical thinking, problem-solving abilities, and innovation in data science
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span> To promote research activities and scholarly publications among faculty and students
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span> To collaborate with industry partners for curriculum enhancement and internship opportunities
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span> To encourage entrepreneurial mindset and startup initiatives among students
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">
              Department Facilities
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-3">Computer Labs</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  State-of-the-art computing facilities with high-end hardware and 
                  software required for data science applications.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-3">Research Center</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Dedicated space for research activities, project work, and collaborative 
                  learning initiatives.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-3">Digital Library</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Access to a vast collection of e-books, journals, and research papers 
                  in the field of data science and related domains.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-3">AI & ML Lab</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Specialized laboratory equipped with GPUs and AI infrastructure for 
                  deep learning and machine learning experiments.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-3">Big Data Lab</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Lab facilities for working with large datasets, distributed computing, 
                  and big data frameworks like Hadoop and Spark.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-3">Innovation Hub</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Collaborative space for students to work on innovative projects, 
                  hackathons, and industry problem statements.
                </p>
              </div>
            </div>
            <div className="text-center mt-10">
              <Link to="/academics/curriculum" className="inline-flex items-center bg-rnsit-blue dark:bg-rnsit-lightBlue text-white px-6 py-3 rounded-lg hover:bg-rnsit-blue/90 dark:hover:bg-rnsit-lightBlue/90 transition">
                Explore Curriculum <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
