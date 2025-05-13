
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Linkedin } from 'lucide-react';

const FacultySection = () => {
  // Sample faculty data
  const facultyMembers = [
    {
      id: 1,
      name: "Dr. Anita Kanavalli",
      role: "Head of Department",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300",
      qualification: "Ph.D in Computer Science",
      research: "Machine Learning, Cloud Computing",
      linkedin: "https://www.linkedin.com/"
    },
    {
      id: 2,
      name: "Dr. Rajesh Kumar",
      role: "Professor",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300&h=300",
      qualification: "Ph.D in Data Science",
      research: "Big Data Analytics, AI",
      linkedin: "https://www.linkedin.com/"
    },
    {
      id: 3,
      name: "Prof. Priya Sharma",
      role: "Associate Professor",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300&h=300",
      qualification: "M.Tech, (Ph.D)",
      research: "Deep Learning, NLP",
      linkedin: "https://www.linkedin.com/"
    },
    {
      id: 4,
      name: "Dr. Vikram Singh",
      role: "Assistant Professor",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300&h=300",
      qualification: "Ph.D in Computer Engineering",
      research: "Computer Vision, IoT",
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
                <p className="text-gray-500 dark:text-gray-500 text-xs mt-1">Research: {faculty.research}</p>
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
