
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, MapPin, Users, Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type EventCategory = 'all' | 'workshop' | 'seminar' | 'hackathon' | 'conference';

interface Event {
  id: number;
  title: string;
  date: string;
  endDate?: string; // For multi-day events
  category: string;
  location: string;
  description: string;
  image: string;
  seats?: number;
  registration?: boolean;
}

const EventsPage = () => {
  useEffect(() => {
    // Update document title
    document.title = "Events | RNSIT Department of CSE (Data Science)";
  }, []);

  const [activeCategory, setActiveCategory] = useState<EventCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample events data
  const events: Event[] = [
    {
      id: 1,
      title: "AI/ML Workshop Series",
      date: "May 20-22, 2025",
      endDate: "May 22, 2025",
      category: "workshop",
      location: "Main Seminar Hall",
      description: "A three-day intensive workshop covering the latest advancements in AI and ML technologies. Learn from industry experts and gain hands-on experience with real-world projects.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800",
      seats: 60,
      registration: true
    },
    {
      id: 2,
      title: "Data Science Symposium",
      date: "June 5, 2025",
      category: "seminar",
      location: "Virtual Event",
      description: "Annual symposium featuring keynote speakers from leading tech companies discussing data-driven innovation and the future of data science.",
      image: "https://images.unsplash.com/photo-1561489401-fc2876ced162?auto=format&fit=crop&q=80&w=800",
      seats: 200,
      registration: true
    },
    {
      id: 3,
      title: "Kaggle Competition Bootcamp",
      date: "July 10-12, 2025",
      endDate: "July 12, 2025",
      category: "workshop",
      location: "Computer Lab 2",
      description: "Hands-on bootcamp to prepare students for participating in global data science competitions. Learn strategies for effective model development and improve your leaderboard ranking.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
      seats: 40,
      registration: true
    },
    {
      id: 4,
      title: "DataHack 2025",
      date: "August 8-9, 2025",
      endDate: "August 9, 2025",
      category: "hackathon",
      location: "RNSIT Auditorium",
      description: "Annual hackathon focused on solving real-world problems using data science, machine learning, and AI. Form teams and compete for exciting prizes and recognition.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
      seats: 150,
      registration: true
    },
    {
      id: 5,
      title: "Big Data Conference",
      date: "September 15, 2025",
      category: "conference",
      location: "RNSIT Auditorium",
      description: "A conference bringing together researchers, practitioners, and enthusiasts to discuss the latest trends and challenges in big data technologies and applications.",
      image: "https://images.unsplash.com/photo-1559445368-b8a993676bf9?auto=format&fit=crop&q=80&w=800",
      seats: 120,
      registration: true
    },
    {
      id: 6,
      title: "Deep Learning for NLP Workshop",
      date: "October 5-6, 2025",
      endDate: "October 6, 2025",
      category: "workshop",
      location: "Computer Lab 3",
      description: "Learn how to apply deep learning techniques to natural language processing tasks, including text classification, sentiment analysis, and language generation.",
      image: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?auto=format&fit=crop&q=80&w=800",
      seats: 40,
      registration: true
    },
    {
      id: 7,
      title: "Guest Lecture: Ethics in AI",
      date: "October 20, 2025",
      category: "seminar",
      location: "Main Seminar Hall",
      description: "A thought-provoking discussion on ethical considerations in artificial intelligence development and deployment, led by industry experts and ethicists.",
      image: "https://images.unsplash.com/photo-1558021211-6d1403321394?auto=format&fit=crop&q=80&w=800",
      seats: 80,
      registration: false
    },
    {
      id: 8,
      title: "Cloud Computing for Data Science",
      date: "November 12, 2025",
      category: "workshop",
      location: "Computer Lab 1",
      description: "Learn how to leverage cloud computing platforms for data science workloads, including setting up environments, scaling computations, and managing costs.",
      image: "https://images.unsplash.com/photo-1603993097397-89c963e325c7?auto=format&fit=crop&q=80&w=800",
      seats: 50,
      registration: true
    }
  ];

  // Filter events based on category and search query
  const filteredEvents = events.filter(event => {
    const matchesCategory = activeCategory === 'all' || event.category === activeCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          event.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 pt-28 pb-20">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Events & Activities
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mb-8">
              Stay updated with our department's dynamic event calendar featuring workshops, 
              hackathons, guest lectures, and various technical activities.
            </p>
            <Link 
              to="/events/register"
              className="inline-flex items-center bg-rnsit-blue dark:bg-rnsit-lightBlue text-white px-6 py-3 rounded-lg hover:bg-rnsit-blue/90 dark:hover:bg-rnsit-lightBlue/90 transition"
            >
              <Users size={18} className="mr-2" /> Register for an Event
            </Link>
          </div>
        </section>

        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <div className="mb-4 md:mb-0">
                <h2 className="text-3xl font-display font-bold mb-2">
                  Upcoming Events
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Discover and join our upcoming data science events and activities
                </p>
              </div>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search events..." 
                  className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 w-full focus:outline-none focus:ring-2 focus:ring-rnsit-blue dark:focus:ring-rnsit-lightBlue"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              <button 
                onClick={() => setActiveCategory('all')} 
                className={`px-4 py-2 rounded-full ${activeCategory === 'all' 
                  ? 'bg-rnsit-blue dark:bg-rnsit-lightBlue text-white' 
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
              >
                All Events
              </button>
              <button 
                onClick={() => setActiveCategory('workshop')} 
                className={`px-4 py-2 rounded-full ${activeCategory === 'workshop' 
                  ? 'bg-rnsit-blue dark:bg-rnsit-lightBlue text-white' 
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
              >
                Workshops
              </button>
              <button 
                onClick={() => setActiveCategory('seminar')} 
                className={`px-4 py-2 rounded-full ${activeCategory === 'seminar' 
                  ? 'bg-rnsit-blue dark:bg-rnsit-lightBlue text-white' 
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
              >
                Seminars
              </button>
              <button 
                onClick={() => setActiveCategory('hackathon')} 
                className={`px-4 py-2 rounded-full ${activeCategory === 'hackathon' 
                  ? 'bg-rnsit-blue dark:bg-rnsit-lightBlue text-white' 
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
              >
                Hackathons
              </button>
              <button 
                onClick={() => setActiveCategory('conference')} 
                className={`px-4 py-2 rounded-full ${activeCategory === 'conference' 
                  ? 'bg-rnsit-blue dark:bg-rnsit-lightBlue text-white' 
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
              >
                Conferences
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredEvents.length > 0 ? (
                filteredEvents.map(event => (
                  <div 
                    key={event.id} 
                    className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs px-3 py-1 rounded-full">
                          {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                        </span>
                        {event.registration && (
                          <span className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs px-3 py-1 rounded-full">
                            Registration Open
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                      <div className="flex items-center text-rnsit-purple dark:text-rnsit-lightPurple text-sm mb-2">
                        <Calendar size={16} className="mr-1" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-start text-gray-500 dark:text-gray-500 text-sm mb-3">
                        <MapPin size={16} className="mr-1 flex-shrink-0 mt-0.5" />
                        <span>{event.location}</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                        {event.description}
                      </p>
                      {event.seats && (
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                          <Users size={16} className="mr-1" />
                          <span>{event.seats} seats available</span>
                        </div>
                      )}
                      <div className="flex justify-between items-center">
                        <Link 
                          to={`/events/${event.id}`}
                          className="inline-block px-4 py-2 bg-gray-100 dark:bg-gray-700 text-rnsit-blue dark:text-rnsit-lightBlue rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                        >
                          Event Details
                        </Link>
                        {event.registration && (
                          <Link 
                            to="/events/register"
                            className="inline-block px-4 py-2 bg-rnsit-blue dark:bg-rnsit-lightBlue text-white rounded-lg hover:bg-rnsit-blue/90 dark:hover:bg-rnsit-lightBlue/90 transition"
                          >
                            Register
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-3 py-12 text-center">
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">No events found matching your criteria.</p>
                  <p className="text-gray-500 dark:text-gray-500">Try adjusting your search or filter.</p>
                </div>
              )}
            </div>

            <div className="bg-gradient-to-r from-rnsit-blue to-rnsit-purple text-white p-8 rounded-xl">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold mb-2">Want to organize an event?</h3>
                  <p className="max-w-xl opacity-90">
                    If you're a student or faculty member interested in organizing a workshop, seminar, or other event, 
                    we'd love to help make it happen.
                  </p>
                </div>
                <Link 
                  to="/events/register"
                  className="inline-flex items-center bg-white text-rnsit-blue px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Contact Us <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EventsPage;
