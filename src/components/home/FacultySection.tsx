
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Linkedin } from 'lucide-react';

const FacultySection = () => {
  // Real faculty data
  const facultyMembers = [
    {
      id: 1,
      name: "Dr. Mohan H S",
      role: "Professor & Head",
      image: "https://www.rnsit.ac.in/wp-content/uploads/2023/09/Dr.-Mohan-H-S.jpg",
      qualification: "Ph.D. in Cryptography & Network Security",
      linkedin: "https://www.linkedin.com/"
    },
    {
      id: 2,
      name: "Dr. Srinivas A",
      role: "Professor",
      image: "https://www.rnsit.ac.in/wp-content/uploads/2023/09/Dr.-Srinivas-A.jpg",
      qualification: "Ph.D. in Healthcare Informatics & Agriculture Technology",
      linkedin: "https://www.linkedin.com/"
    },
    {
      id: 3,
      name: "Dr. Sreevidya R C",
      role: "Associate Professor",
      image: "https://www.rnsit.ac.in/wp-content/uploads/2023/09/Dr.-Sreevidya-R-C.jpg",
      qualification: "Ph.D. in WSN, AI, ML",
      linkedin: "https://www.linkedin.com/"
    },
    {
      id: 4,
      name: "Dr. Mahantesh K",
      role: "Associate Professor",
      image: "https://www.rnsit.ac.in/wp-content/uploads/2023/09/Dr.-Mahantesh-K.jpg",
      qualification: "Ph.D. in Computer Networking & Engineering",
      linkedin: "https://www.linkedin.com/"
    },
    {
      id: 5,
      name: "Dr. Naveen L",
      role: "Associate Professor",
      image: "https://www.rnsit.ac.in/wp-content/uploads/2023/09/Dr.-Naveen-L.jpg",
      qualification: "Ph.D. in Neural Networks, ML, AI",
      linkedin: "https://www.linkedin.com/"
    },
    {
      id: 6,
      name: "Dr. Savita S J",
      role: "Assistant Professor",
      image: "https://www.rnsit.ac.in/wp-content/uploads/2023/09/Dr.-Savita-S-J.jpg",
      qualification: "Ph.D. in Electrical & Electronics Engineering",
      linkedin: "https://www.linkedin.com/"
    },
    {
      id: 7,
      name: "Mr. Sunil G L",
      role: "Assistant Professor",
      image: "https://www.rnsit.ac.in/wp-content/uploads/2023/09/Mr.-Sunil-G-L.jpg",
      qualification: "M.Tech in Machine Learning",
      linkedin: "https://www.linkedin.com/"
    },
    {
      id: 8,
      name: "Ms. Anu Mathews",
      role: "Assistant Professor",
      image: "https://www.rnsit.ac.in/wp-content/uploads/2023/09/Ms.-Anu-Mathews.jpg",
      qualification: "M.Tech in Machine Learning",
      linkedin: "https://www.linkedin.com/"
    }
  ];

  // Additional faculty members that will be shown on the faculty page
  const additionalFacultyMembers = [
    {
      id: 9,
      name: "Ms. Ramya B K",
      role: "Assistant Professor",
      image: "https://www.rnsit.ac.in/wp-content/uploads/2023/09/Ms.-Ramya-B-K.jpg",
      qualification: "M.Tech in Computer Networks Engineering",
      linkedin: "https://www.linkedin.com/"
    },
    {
      id: 10,
      name: "Ms. Smitha B A",
      role: "Assistant Professor",
      image: "https://www.rnsit.ac.in/wp-content/uploads/2023/09/Ms.-Smitha-B-A.jpg",
      qualification: "M.Tech in Computer Science & Engineering",
      linkedin: "https://www.linkedin.com/"
    },
    {
      id: 11,
      name: "Ms. Pavithra J",
      role: "Assistant Professor",
      image: "https://www.rnsit.ac.in/wp-content/uploads/2023/09/Ms.-Pavithra-J.jpg",
      qualification: "M.Tech in Computer Science & Engineering",
      linkedin: "https://www.linkedin.com/"
    },
    {
      id: 12,
      name: "Ms. Navyashree K S",
      role: "Assistant Professor",
      image: "https://www.rnsit.ac.in/wp-content/uploads/2023/09/Ms.-Navyashree-K-S.jpg",
      qualification: "M.Tech in Computer Science & Engineering",
      linkedin: "https://www.linkedin.com/"
    },
    {
      id: 13,
      name: "Ms. Vinutha S",
      role: "Assistant Professor",
      image: "https://www.rnsit.ac.in/wp-content/uploads/2023/09/Ms.-Vinutha-S.jpg",
      qualification: "M.Tech in Computer Science & Engineering",
      linkedin: "https://www.linkedin.com/"
    },
    {
      id: 14,
      name: "Ms. Vidya Shirodkar",
      role: "Assistant Professor",
      image: "https://www.rnsit.ac.in/wp-content/uploads/2023/09/Ms.-Vidya-Shirodkar.jpg",
      qualification: "M.Tech in Information Technology",
      linkedin: "https://www.linkedin.com/"
    },
    {
      id: 15,
      name: "Ms. Mythri S",
      role: "Assistant Professor",
      image: "https://www.rnsit.ac.in/wp-content/uploads/2023/09/Ms.-Mythri-S.jpg",
      qualification: "M.Tech in Computer Science & Engineering",
      linkedin: "https://www.linkedin.com/"
    },
    {
      id: 16,
      name: "Ms. Rachitha E",
      role: "Assistant Professor",
      image: "https://www.rnsit.ac.in/wp-content/uploads/2023/09/Ms.-Rachitha-E.jpg",
      qualification: "M.Tech in Computer Science & Engineering",
      linkedin: "https://www.linkedin.com/"
    }
  ];

  return (
    <section className="content-section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Meet Our Faculty</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Our department boasts accomplished faculty members who are experts in various domains of 
            Data Science, dedicated to nurturing the next generation of data scientists.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {facultyMembers.map((faculty, index) => (
            <div 
              key={faculty.id} 
              className="bg-white dark:bg-gray-900 rounded-xl shadow-sm overflow-hidden card-hover animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="relative">
                <img 
                  src={faculty.image} 
                  alt={faculty.name} 
                  className="w-full h-56 object-cover"
                />
                <a 
                  href={faculty.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 bg-white dark:bg-gray-800 p-2 rounded-full text-rnsit-blue dark:text-rnsit-lightBlue hover:bg-blue-50 dark:hover:bg-gray-700 transition"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={18} />
                </a>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-1">{faculty.name}</h3>
                <p className="text-rnsit-purple dark:text-rnsit-lightPurple text-sm font-medium mb-2">{faculty.role}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{faculty.qualification}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link 
            to="/people/faculty" 
            className="inline-flex items-center px-6 py-3 bg-rnsit-blue dark:bg-rnsit-lightBlue text-white dark:text-gray-900 rounded-lg hover:bg-rnsit-blue/90 dark:hover:bg-rnsit-lightBlue/90 transition"
          >
            View All Faculty <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
