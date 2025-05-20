
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Users, MessageSquare, Discord, Whatsapp, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const CommunityPage = () => {
  useEffect(() => {
    // Update document title
    document.title = "Community | RNSIT Department of CSE (Data Science)";
  }, []);

  // Community clubs and groups
  const clubs = [
    {
      name: "Data Science Club",
      description: "A student-led community focused on learning and applying data science concepts through projects, competitions, and knowledge sharing.",
      members: 120,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
      joinLink: "#"
    },
    {
      name: "AI Research Group",
      description: "A collaborative group of students and faculty working on cutting-edge AI research projects and publications.",
      members: 45,
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=800",
      joinLink: "#"
    },
    {
      name: "Competitive Programming Circle",
      description: "Dedicated to improving algorithmic and problem-solving skills through regular coding contests and practice sessions.",
      members: 80,
      image: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&q=80&w=800",
      joinLink: "#"
    },
    {
      name: "Open Source Contributors",
      description: "A community that collaborates on open source projects, contributing to data science libraries and applications.",
      members: 35,
      image: "https://images.unsplash.com/photo-1638643391904-9b551ba91eaa?auto=format&fit=crop&q=80&w=800",
      joinLink: "#"
    }
  ];

  // Communication channels
  const channels = [
    {
      name: "Discord Server",
      description: "Join our active Discord community for discussions, resources sharing, and connecting with peers and alumni.",
      icon: Discord,
      color: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300",
      link: "#"
    },
    {
      name: "WhatsApp Groups",
      description: "Stay updated with announcements, events, and informal discussions through our batch-specific and interest-based WhatsApp groups.",
      icon: Whatsapp,
      color: "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300",
      link: "#"
    },
    {
      name: "Email Newsletter",
      description: "Subscribe to our monthly newsletter to receive updates on department activities, opportunities, and achievements.",
      icon: Mail,
      color: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300",
      link: "#"
    }
  ];

  // Recent community achievements
  const achievements = [
    {
      title: "National Hackathon First Prize",
      description: "Our students won the first prize in the National Level Hackathon organized by TechCrunch, developing an AI-powered healthcare solution.",
      date: "October 2024"
    },
    {
      title: "Research Paper Publication",
      description: "Faculty and student collaborative research on 'Deep Learning for Climate Change Prediction' published in a prestigious international journal.",
      date: "September 2024"
    },
    {
      title: "Open Source Contribution",
      description: "A team of students contributed significant improvements to a popular data visualization library, which were merged into the main codebase.",
      date: "August 2024"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 pt-28 pb-20">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Join Our Community
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mb-8">
              Be part of our vibrant data science community at RNSIT. Connect with peers, 
              collaborate on projects, participate in events, and grow together.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container">
            <h2 className="text-3xl font-display font-bold mb-8">
              Student Clubs & Groups
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {clubs.map((club, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm flex flex-col md:flex-row hover:shadow-md transition-shadow"
                >
                  <div className="md:w-1/3">
                    <img 
                      src={club.image} 
                      alt={club.name} 
                      className="w-full h-full object-cover"
                      style={{ height: '100%', minHeight: '200px' }}
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-xl font-bold mb-2 text-rnsit-blue dark:text-rnsit-lightBlue">
                      {club.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {club.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500 dark:text-gray-400">
                        <Users size={18} className="mr-2" />
                        <span>{club.members} members</span>
                      </div>
                      <a 
                        href={club.joinLink}
                        className="inline-flex items-center text-rnsit-blue dark:text-rnsit-lightBlue hover:underline"
                      >
                        Join Group <ArrowRight size={16} className="ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-display font-bold mb-8">
              Communication Channels
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {channels.map((channel, index) => {
                const Icon = channel.icon;
                
                return (
                  <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className={`rounded-full w-12 h-12 flex items-center justify-center ${channel.color} mb-4`}>
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{channel.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {channel.description}
                    </p>
                    <a 
                      href={channel.link}
                      className="inline-flex items-center text-rnsit-blue dark:text-rnsit-lightBlue hover:underline"
                    >
                      Join Now <ArrowRight size={16} className="ml-1" />
                    </a>
                  </div>
                );
              })}
            </div>

            <div className="bg-gradient-to-r from-rnsit-blue to-rnsit-purple text-white p-8 rounded-xl mb-16">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold mb-3">Looking for project collaborators?</h3>
                  <p className="max-w-xl opacity-90">
                    Our community platform helps you find teammates with complementary skills for your next project or research initiative.
                  </p>
                </div>
                <a 
                  href="#" 
                  className="inline-flex items-center bg-white text-rnsit-blue px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Find Collaborators <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </div>

            <h2 className="text-3xl font-display font-bold mb-8">
              Community Achievements
            </h2>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-8">
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index} 
                    className={`${
                      index !== achievements.length - 1 ? 'border-b border-gray-200 dark:border-gray-700 pb-6' : ''
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-rnsit-blue dark:text-rnsit-lightBlue">
                        {achievement.title}
                      </h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{achievement.date}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {achievement.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Ready to join our community?</h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
                Connect with like-minded individuals, learn from peers and faculty, and grow your professional network.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/events"
                  className="inline-flex items-center bg-rnsit-blue dark:bg-rnsit-lightBlue text-white px-6 py-3 rounded-lg hover:bg-rnsit-blue/90 dark:hover:bg-rnsit-lightBlue/90 transition"
                >
                  Join an Event <ArrowRight size={16} className="ml-2" />
                </Link>
                <a 
                  href="#"
                  className="inline-flex items-center bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                >
                  <MessageSquare size={18} className="mr-2" /> Start a Discussion
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CommunityPage;
