
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const CampusGallerySection = () => {
  const campusImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      alt: "RNSIT Campus Building"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
      alt: "Department Building"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2",
      alt: "Campus View"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e",
      alt: "Campus Architecture"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace",
      alt: "Modern Facilities"
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
      alt: "Student Center"
    }
  ];

  return (
    <section className="content-section bg-white dark:bg-gray-800">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Campus</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Experience the modern facilities and beautiful surroundings of RNSIT's campus, 
            where innovation and learning thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {campusImages.map((image) => (
            <div 
              key={image.id} 
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${0.1 * image.id}s` }}
            >
              <AspectRatio ratio={16 / 9} className="bg-muted">
                <img 
                  src={image.url} 
                  alt={image.alt} 
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </AspectRatio>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampusGallerySection;
