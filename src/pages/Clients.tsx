
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Clients from '@/components/Clients';
import { Toaster } from '@/components/ui/toaster';

const ClientsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Valued Clients</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're proud to serve businesses across industries with our exceptional accounting services
          </p>
        </div>
        <Clients />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default ClientsPage;
