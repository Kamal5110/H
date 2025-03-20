
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Footer from '@/components/Footer';
import AccountingSoftware from '@/components/AccountingSoftware';
import ProcessBreakdown from '@/components/ProcessBreakdown';
import Resources from '@/components/Resources';
import { Toaster } from '@/components/ui/toaster';

const Index = () => {
  useEffect(() => {
    // Reveal animation for elements when they enter the viewport
    const revealElements = () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('.reveal').forEach((el) => {
        observer.observe(el);
      });
    };

    revealElements();

    // Clean up observer on component unmount
    return () => {
      document.querySelectorAll('.reveal').forEach((el) => {
        el.classList.add('revealed');
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <ProcessBreakdown />
        <About />
        <AccountingSoftware />
        <Resources />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
