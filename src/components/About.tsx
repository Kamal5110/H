
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="pb-16 pt-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 reveal fade-in-left delay-300">
            <div className="text-sm uppercase tracking-widest text-primary font-medium mb-4">About Nishav</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Trusted Partner in <span className="text-gradient">Accounting Excellence</span></h2>
            <p className="text-muted-foreground mb-6">
              Nishav is a premier provider of outsourced accounting and financial services exclusively for CPA and accounting firms. With over 10 years of industry expertise, we empower accounting professionals to streamline operations, enhance efficiency, and focus on growing their practice.
            </p>
            <p className="text-muted-foreground mb-8">
              Our team of 50+ qualified professionals delivers comprehensive services including bookkeeping, accounting, tax preparation, and advisory solutions tailored to the unique needs of your firm.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="button-effect" variant="outline" asChild>
                <a href="/about">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative reveal fade-in-right delay-300">
            <div className="relative z-10 bg-white shadow-xl rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Accounting Team" 
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <div className="text-white font-medium">Trusted by 30+ CPA firms worldwide</div>
              </div>
            </div>
            
            <div className="absolute top-4 -right-4 w-20 h-20 bg-primary/10 rounded-lg z-0 animate-float" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-lg z-0 animate-float-delayed" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
