import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Linkedin } from 'lucide-react';
const FacultySection = () => {
  // Real faculty data with updated images
  const facultyMembers = [{
    id: 1,
    name: "Dr. Mohan H S",
    role: "Professor & Head",
    image: "/lovable-uploads/243ebbb3-4960-46db-bfb4-faba44d9fcc8.png",
    qualification: "Ph.D. in Cryptography & Network Security",
    linkedin: "https://www.linkedin.com/"
  }, {
    id: 2,
    name: "Dr. Srinivas A",
    role: "Professor",
    image: "/lovable-uploads/d077c916-ed0c-460c-8f9b-c36fd1b5ab40.png",
    qualification: "Ph.D. in Healthcare Informatics & Agriculture Technology",
    linkedin: "https://www.linkedin.com/"
  }, {
    id: 3,
    name: "Dr. Sreevidya R C",
    role: "Associate Professor",
    image: "/lovable-uploads/84633ab6-12d8-4e2d-b356-4a3f501d2c76.png",
    qualification: "Ph.D. in WSN, AI, ML",
    linkedin: "https://www.linkedin.com/"
  }, {
    id: 4,
    name: "Dr. Mahantesh K",
    role: "Associate Professor",
    image: "/lovable-uploads/e838e9ab-518c-4176-8f1f-fc5779141682.png",
    qualification: "Ph.D. in Computer Networking & Engineering",
    linkedin: "https://www.linkedin.com/"
  }, {
    id: 5,
    name: "Dr. Naveen L",
    role: "Associate Professor",
    image: "/lovable-uploads/21795374-2460-44c9-adc3-cc6d94a8fed0.png",
    qualification: "Ph.D. in Neural Networks, ML, AI",
    linkedin: "https://www.linkedin.com/"
  }, {
    id: 6,
    name: "Dr. Savita S J",
    role: "Assistant Professor",
    image: "/lovable-uploads/65dc1bc3-79eb-4fe4-8faf-f5000270919f.png",
    qualification: "Ph.D. in Electrical & Electronics Engineering",
    linkedin: "https://www.linkedin.com/"
  }, {
    id: 7,
    name: "Mr. Sunil G L",
    role: "Assistant Professor",
    image: "/lovable-uploads/15eb02e7-3282-4afc-910b-82865ae8ebb9.png",
    qualification: "M.Tech in Machine Learning",
    linkedin: "https://www.linkedin.com/"
  }, {
    id: 8,
    name: "Ms. Anu Mathews",
    role: "Assistant Professor",
    image: "/lovable-uploads/941db813-0f44-4ae1-aefb-475ca56c9e65.png",
    qualification: "M.Tech in Machine Learning",
    linkedin: "https://www.linkedin.com/"
  }];

  // Additional faculty members that will be shown on the faculty page
  const additionalFacultyMembers = [{
    id: 9,
    name: "Ms. Ramya B K",
    role: "Assistant Professor",
    image: "/lovable-uploads/45b8e3c3-99d8-4dcc-b9f8-d78a37b2d38d.png",
    qualification: "M.Tech in Computer Networks Engineering",
    linkedin: "https://www.linkedin.com/"
  }, {
    id: 10,
    name: "Ms. Smitha B A",
    role: "Assistant Professor",
    image: "/lovable-uploads/bcdbec73-7293-40cd-9ba4-fe9f6458697c.png",
    qualification: "M.Tech in Computer Science & Engineering",
    linkedin: "https://www.linkedin.com/"
  }, {
    id: 11,
    name: "Ms. Pavithra J",
    role: "Assistant Professor",
    image: "/lovable-uploads/778fc6a5-98af-4299-b142-4dc94b1a63f0.png",
    qualification: "M.Tech in Computer Science & Engineering",
    linkedin: "https://www.linkedin.com/"
  }, {
    id: 12,
    name: "Ms. Navyashree K S",
    role: "Assistant Professor",
    image: "/lovable-uploads/82d28928-52c2-496e-ab3b-7539c05ba807.png",
    qualification: "M.Tech in Computer Science & Engineering",
    linkedin: "https://www.linkedin.com/"
  }, {
    id: 13,
    name: "Ms. Vinutha S",
    role: "Assistant Professor",
    image: "/lovable-uploads/5993bfb1-ec1c-446d-84e0-4920a0cbed1d.png",
    qualification: "M.Tech in Computer Science & Engineering",
    linkedin: "https://www.linkedin.com/"
  }, {
    id: 14,
    name: "Ms. Vidya Shirodkar",
    role: "Assistant Professor",
    image: "/lovable-uploads/30b0e6b3-275a-4093-8657-dea9cd78b47a.png",
    qualification: "M.Tech in Information Technology",
    linkedin: "https://www.linkedin.com/"
  }, {
    id: 15,
    name: "Ms. Mythri S",
    role: "Assistant Professor",
    image: "/lovable-uploads/06d4da3e-29b9-4040-8e67-c8783ebf5662.png",
    qualification: "M.Tech in Computer Science & Engineering",
    linkedin: "https://www.linkedin.com/"
  }, {
    id: 16,
    name: "Ms. Rachitha E",
    role: "Assistant Professor",
    image: "/lovable-uploads/30e5b50c-4a36-445b-ab6f-7b2f3f9b6bc4.png",
    qualification: "M.Tech in Computer Science & Engineering",
    linkedin: "https://www.linkedin.com/"
  }];
  return <section className="content-section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Meet Our Faculty</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Our department boasts accomplished faculty members who are experts in various domains of 
            Data Science, dedicated to nurturing the next generation of data scientists.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {facultyMembers.map((faculty, index) => <div key={faculty.id} className="bg-white dark:bg-gray-900 rounded-xl shadow-sm overflow-hidden card-hover animate-fade-in" style={{
          animationDelay: `${0.1 * index}s`
        }}>
              <div className="relative">
                <img src={faculty.image} alt={faculty.name} className="w-full h-56 object-cover" />
                <a href={faculty.linkedin} target="_blank" rel="noopener noreferrer" className="absolute top-3 right-3 bg-white dark:bg-gray-800 p-2 rounded-full text-rnsit-blue dark:text-rnsit-lightBlue hover:bg-blue-50 dark:hover:bg-gray-700 transition" aria-label="LinkedIn Profile">
                  <Linkedin size={18} />
                </a>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-1">{faculty.name}</h3>
                <p className="text-rnsit-purple dark:text-rnsit-lightPurple text-sm font-medium mb-2">{faculty.role}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{faculty.qualification}</p>
              </div>
            </div>)}
        </div>

        <div className="text-center mt-10">
          <Link to="/people/faculty" className="inline-flex items-center px-6 py-3 bg-rnsit-blue dark:bg-rnsit-lightBlue text-white dark:text-gray-900 rounded-lg hover:bg-rnsit-blue/90 dark:hover:bg-rnsit-lightBlue/90 transition">
            View All Faculty <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>;
};
export default FacultySection;