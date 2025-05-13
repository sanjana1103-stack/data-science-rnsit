
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Users, MapPin } from 'lucide-react';

const EventsSection = () => {
  // Sample upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: "AI/ML Workshop Series",
      date: "May 20-22, 2025",
      location: "Main Seminar Hall",
      description: "A three-day intensive workshop covering the latest advancements in AI and ML technologies.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      title: "Data Science Symposium",
      date: "June 5, 2025",
      location: "Virtual Event",
      description: "Annual symposium featuring keynote speakers from leading tech companies discussing data-driven innovation.",
      image: "https://images.unsplash.com/photo-1561489401-fc2876ced162?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      title: "Kaggle Competition Bootcamp",
      date: "July 10-12, 2025",
      location: "Computer Lab 2",
      description: "Hands-on bootcamp to prepare students for participating in global data science competitions.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section className="content-section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="section-title mb-3">Events & Activities</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
              Stay updated with our department's dynamic event calendar featuring workshops, 
              hackathons, guest lectures, and various technical activities.
            </p>
          </div>
          <Link 
            to="/events" 
            className="mt-4 md:mt-0 inline-flex items-center text-rnsit-blue dark:text-rnsit-lightBlue hover:underline"
          >
            View all events <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <div 
              key={event.id} 
              className="bg-white dark:bg-gray-900 rounded-xl shadow-sm overflow-hidden card-hover animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center text-rnsit-purple dark:text-rnsit-lightPurple text-sm mb-2">
                  <Calendar size={16} className="mr-1" />
                  <span>{event.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{event.description}</p>
                <div className="flex items-start text-gray-500 dark:text-gray-500 text-sm mb-4">
                  <MapPin size={16} className="mr-1 flex-shrink-0 mt-0.5" />
                  <span>{event.location}</span>
                </div>
                <Link 
                  to={`/events/${event.id}`}
                  className="inline-block px-4 py-2 bg-gray-100 dark:bg-gray-800 text-rnsit-blue dark:text-rnsit-lightBlue rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                >
                  Event Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-gradient-to-r from-rnsit-blue to-rnsit-purple text-white rounded-xl shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-display font-semibold mb-2">Ready to join our next event?</h3>
              <p className="opacity-90">
                Register for upcoming workshops, hackathons, and guest lectures to enhance your skills.
              </p>
            </div>
            <Link 
              to="/events/register"
              className="flex items-center px-6 py-3 bg-white text-rnsit-blue rounded-lg hover:bg-gray-50 transition"
            >
              <Users size={18} className="mr-2" /> Register Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
