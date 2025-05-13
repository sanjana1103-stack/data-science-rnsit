
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Linkedin } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

const FacultyPage = () => {
  useEffect(() => {
    document.title = "Faculty - RNSIT Department of CSE (Data Science)";
  }, []);

  // All faculty data
  const allFacultyMembers = [
    {
      id: 1,
      name: "Dr. Mohan H S",
      role: "Professor & Head",
      image: "https://www.rnsit.ac.in/wp-content/uploads/2023/09/Dr.-Mohan-H-S.jpg",
      qualification: "Ph.D. in Cryptography & Network Security",
      research: "Network Security, Cryptography, Data Privacy",
      linkedin: "https://www.linkedin.com/"
    },
    {
      id: 2,
      name: "Dr. Srinivas A",
      role: "Professor",
      image: "https://www.rnsit.ac.in/wp-content/uploads/2023/09/Dr.-Srinivas-A.jpg",
      qualification: "Ph.D. in Healthcare Informatics & Agriculture Technology",
      research: "Healthcare Data Analytics, Agricultural Technology",
      linkedin: "https://www.linkedin.com/"
    },
    {
      id: 3,
      name: "Dr. Sreevidya R C",
      role: "Associate Professor",
      image: "https://www.rnsit.ac.in/wp-content/uploads/2023/09/Dr.-Sreevidya-R-C.jpg",
      qualification: "Ph.D. in WSN, AI, ML",
      research: "Wireless Sensor Networks, Artificial Intelligence",
      linkedin: "https://www.linkedin.com/"
    },
    {
      id: 4,
      name: "Dr. Mahantesh K",
      role: "Associate Professor",
      image: "https://www.rnsit.ac.in/wp-content/uploads/2023/09/Dr.-Mahantesh-K.jpg",
      qualification: "Ph.D. in Computer Networking & Engineering",
      research: "Computer Networks, Network Security",
      linkedin: "https://www.linkedin.com/"
    },
    {
      id: 5,
      name: "Dr. Naveen L",
      role: "Associate Professor",
      image: "https://www.rnsit.ac.in/wp-content/uploads/2023/09/Dr.-Naveen-L.jpg",
      qualification: "Ph.D. in Neural Networks, ML, AI",
      research: "Neural Networks, Machine Learning, AI Applications",
      linkedin: "https://www.linkedin.com/"
    },
    {
      id: 6,
      name: "Dr. Savita S J",
      role: "Assistant Professor",
      image: "https://www.rnsit.ac.in/wp-content/uploads/2023/09/Dr.-Savita-S-J.jpg",
      qualification: "Ph.D. in Electrical & Electronics Engineering",
      research: "Signal Processing, IoT Applications",
      linkedin: "https://www.linkedin.com/"
    },
    {
      id: 7,
      name: "Mr. Sunil G L",
      role: "Assistant Professor",
      image: "https://www.rnsit.ac.in/wp-content/uploads/2023/09/Mr.-Sunil-G-L.jpg",
      qualification: "M.Tech in Machine Learning",
      research: "Deep Learning, Computer Vision",
      linkedin: "https://www.linkedin.com/"
    },
    {
      id: 8,
      name: "Ms. Anu Mathews",
      role: "Assistant Professor",
      image: "https://www.rnsit.ac.in/wp-content/uploads/2023/09/Ms.-Anu-Mathews.jpg",
      qualification: "M.Tech in Machine Learning",
      research: "Natural Language Processing, Deep Learning",
      linkedin: "https://www.linkedin.com/"
    },
    {
      id: 9,
      name: "Ms. Ramya B K",
      role: "Assistant Professor",
      image: "https://www.rnsit.ac.in/wp-content/uploads/2023/09/Ms.-Ramya-B-K.jpg",
      qualification: "M.Tech in Computer Networks Engineering",
      research: "Computer Networks, Network Security",
      linkedin: "https://www.linkedin.com/"
    },
    {
      id: 10,
      name: "Ms. Smitha B A",
      role: "Assistant Professor",
      image: "https://www.rnsit.ac.in/wp-content/uploads/2023/09/Ms.-Smitha-B-A.jpg",
      qualification: "M.Tech in Computer Science & Engineering",
      research: "Data Mining, Big Data Analytics",
      linkedin: "https://www.linkedin.com/"
    },
    {
      id: 11,
      name: "Ms. Pavithra J",
      role: "Assistant Professor",
      image: "https://www.rnsit.ac.in/wp-content/uploads/2023/09/Ms.-Pavithra-J.jpg",
      qualification: "M.Tech in Computer Science & Engineering",
      research: "Cloud Computing, Distributed Systems",
      linkedin: "https://www.linkedin.com/"
    },
    {
      id: 12,
      name: "Ms. Navyashree K S",
      role: "Assistant Professor",
      image: "https://www.rnsit.ac.in/wp-content/uploads/2023/09/Ms.-Navyashree-K-S.jpg",
      qualification: "M.Tech in Computer Science & Engineering",
      research: "Information Security, Blockchain",
      linkedin: "https://www.linkedin.com/"
    },
    {
      id: 13,
      name: "Ms. Vinutha S",
      role: "Assistant Professor",
      image: "https://www.rnsit.ac.in/wp-content/uploads/2023/09/Ms.-Vinutha-S.jpg",
      qualification: "M.Tech in Computer Science & Engineering",
      research: "Web Mining, Information Retrieval",
      linkedin: "https://www.linkedin.com/"
    },
    {
      id: 14,
      name: "Ms. Vidya Shirodkar",
      role: "Assistant Professor",
      image: "https://www.rnsit.ac.in/wp-content/uploads/2023/09/Ms.-Vidya-Shirodkar.jpg",
      qualification: "M.Tech in Information Technology",
      research: "Database Systems, Data Warehousing",
      linkedin: "https://www.linkedin.com/"
    },
    {
      id: 15,
      name: "Ms. Mythri S",
      role: "Assistant Professor",
      image: "https://www.rnsit.ac.in/wp-content/uploads/2023/09/Ms.-Mythri-S.jpg",
      qualification: "M.Tech in Computer Science & Engineering",
      research: "Software Engineering, Software Testing",
      linkedin: "https://www.linkedin.com/"
    },
    {
      id: 16,
      name: "Ms. Rachitha E",
      role: "Assistant Professor",
      image: "https://www.rnsit.ac.in/wp-content/uploads/2023/09/Ms.-Rachitha-E.jpg",
      qualification: "M.Tech in Computer Science & Engineering",
      research: "Image Processing, Pattern Recognition",
      linkedin: "https://www.linkedin.com/"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <section className="py-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
              Our Faculty
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-16">
              Meet the passionate educators and researchers who make up the Department of Computer Science & Engineering (Data Science) at RNSIT.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {allFacultyMembers.map((faculty) => (
                <Card key={faculty.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative">
                    <img 
                      src={faculty.image} 
                      alt={faculty.name} 
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-3 right-3 flex space-x-2">
                      <a 
                        href={faculty.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white dark:bg-gray-800 p-2 rounded-full text-rnsit-blue dark:text-rnsit-lightBlue hover:bg-blue-50 dark:hover:bg-gray-700 transition"
                        aria-label="LinkedIn Profile"
                      >
                        <Linkedin size={18} />
                      </a>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="text-xl font-semibold mb-1">{faculty.name}</h3>
                    <p className="text-rnsit-purple dark:text-rnsit-lightPurple text-sm font-medium mb-2">{faculty.role}</p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">{faculty.qualification}</p>
                    
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <p className="text-gray-500 dark:text-gray-400 text-sm cursor-help border-b border-dotted border-gray-300 dark:border-gray-600 inline-block">
                          Research Interests
                        </p>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80">
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold">Research Areas</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{faculty.research}</p>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FacultyPage;
