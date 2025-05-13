
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import FacultySection from '@/components/home/FacultySection';
import AcademicsSection from '@/components/home/AcademicsSection';
import EventsSection from '@/components/home/EventsSection';
import PlacementsSection from '@/components/home/PlacementsSection';
import ContactSection from '@/components/home/ContactSection';
import NewsletterBanner from '@/components/NewsletterBanner';
import CampusGallerySection from '@/components/home/CampusGallerySection';

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "RNSIT Department of CSE (Data Science)";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <FacultySection />
        <AcademicsSection />
        <EventsSection />
        <CampusGallerySection />
        <PlacementsSection />
        <ContactSection />
      </main>

      <NewsletterBanner />
      <Footer />
    </div>
  );
};

export default Index;
