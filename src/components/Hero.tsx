import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="home" className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto">
          <div className="w-full md:w-1/2 mb-12 md:mb-0 md:pr-8">
            <div className="text-sm uppercase tracking-widest text-primary font-medium opacity-0 animate-fade-in">
              Outsourced Accounting Services
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-4 mb-6 opacity-0 animate-fade-in-delayed">
              Streamline Your <span className="text-gradient">Accounting</span> Operations
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg opacity-0 animate-fade-in-delayed-2">
              Nishav provides comprehensive outsourced accounting, bookkeeping, and tax preparation services to help your business thrive.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-delayed-2">
              <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="button-effect">
                    Learn More
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold mb-4">Streamline Your Accounting Operations</DialogTitle>
                  </DialogHeader>
                  <p className="text-muted-foreground">
                    Running an accounting firm in the U.S., Canada, or the U.K. comes with high costs, compliance challenges, and increasing workload. But what if you could cut costs while maintaining efficiency? At Nishav Business Solutions, we provide expert offshore accounting professionals—including bookkeepers, tax specialists, and auditors—starting at just $8.5 per hour. Say goodbye to payroll taxes, compliance headaches, and expensive health insurance. Your dedicated offshore staff works in your time zone, just like your in-house team, ensuring seamless operations and maximum productivity. Over 30+ accounting firms have already partnered with us to save money, reduce workload, and scale faster. Join the offshore revolution today—Schedule a free consultation now!
                  </p>
                </DialogContent>
              </Dialog>

              <Link to="/#services">
                <Button size="lg" variant="outline" className="button-effect">
                  Our Services
                </Button>
              </Link>
            </div>
            
            <div className="mt-8 p-4 bg-primary/10 rounded-lg border border-primary/20 opacity-0 animate-fade-in-up-delayed-2">
              <p className="text-primary font-semibold">Hiring cost for accounting professionals starts from $8.5/hour</p>
            </div>
            
            <div className="mt-12 flex items-center gap-8 opacity-0 animate-fade-in-up-delayed-2">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-10 h-10 rounded-full border-2 border-white bg-gray-200"
                    style={{
                      backgroundImage: `url("https://randomuser.me/api/portraits/men/${10 + i}.jpg")`,
                      backgroundSize: 'cover'
                    }}
                  />
                ))}
              </div>
              <div className="text-sm">
                <span className="font-medium">30+</span> happy clients
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative opacity-0 animate-fade-in-right-delayed">
            <div className="relative z-10 bg-white shadow-xl rounded-lg p-6 md:p-8">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Accounting Services" 
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-lg animate-float" />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-lg animate-pulse-soft" />
            </div>
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
              <div className="absolute w-64 h-64 md:w-96 md:h-96 bg-primary/5 rounded-full filter blur-3xl" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
