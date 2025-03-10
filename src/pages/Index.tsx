
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Vision from '@/components/Vision';
import Stories from '@/components/Stories';
import Timeline from '@/components/Timeline';
import FAQ from '@/components/FAQ';
import Values from '@/components/Values';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Function to handle fade-in animations on scroll
    const handleScroll = () => {
      const fadeSections = document.querySelectorAll('.fade-in-section');
      
      fadeSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // If element is in viewport
        if (rect.top <= windowHeight * 0.85) {
          section.classList.add('is-visible');
        }
      });
    };
    
    // Initial check for elements in view
    handleScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Vision />
      <Stories />
      <Timeline />
      <FAQ />
      <Values />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
