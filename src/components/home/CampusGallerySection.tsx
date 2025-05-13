import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
const CampusGallerySection = () => {
  const campusImages = [{
    id: 1,
    url: "/lovable-uploads/b8eca5c3-6920-46a4-8e1d-ed60bff7a216.png",
    alt: "RNSIT Campus Building"
  }, {
    id: 2,
    url: "/lovable-uploads/da04a371-cd3f-43d9-b2f8-6e5b9bb33e8e.png",
    alt: "Cultural Performance at RNSIT"
  }, {
    id: 3,
    url: "/lovable-uploads/b5ff85f9-da72-4073-a7ad-9648e4463da0.png",
    alt: "Sports Activities at RNSIT"
  }, {
    id: 4,
    url: "/lovable-uploads/cf217805-75d6-477d-add6-055005c55a92.png",
    alt: "Cultural Dance Performance"
  }, {
    id: 5,
    url: "/lovable-uploads/71bc52c5-97eb-4c4a-9736-1895b648451e.png",
    alt: "Student Achievements"
  }, {
    id: 6,
    url: "/lovable-uploads/c05e78a9-c648-41ea-81b5-23d89ee8b4ad.png",
    alt: "Sports at RNSIT"
  }];
  return <section className="content-section bg-white dark:bg-gray-800">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Campus</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Experience the modern facilities and vibrant campus life at RNSIT, 
            where academics, sports, and cultural activities thrive in harmony.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {campusImages.map(image => <div key={image.id} className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 animate-fade-in" style={{
          animationDelay: `${0.1 * image.id}s`
        }}>
              <AspectRatio ratio={16 / 9} className="bg-muted">
                <img src={image.url} alt={image.alt} className="object-cover w-full h-full hover:scale-105 transition-transform duration-500" />
              </AspectRatio>
            </div>)}
        </div>
      </div>
    </section>;
};
export default CampusGallerySection;