
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Blogs from '@/components/Blogs';

const BlogsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <Blogs />
      </main>
      <Footer />
    </div>
  );
};

export default BlogsPage;
