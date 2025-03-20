
import React from 'react';
import { 
  Route, 
  ArrowRight, 
  CheckCircle2, 
  ClipboardList
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProcessBreakdown = () => {
  const processSteps = [
    {
      icon: <ClipboardList className="h-10 w-10 text-primary" />,
      title: "Initial Consultation",
      description: "We begin with a detailed assessment of your accounting needs, understanding your business model, and identifying key challenges to create a customized solution.",
      number: "01"
    },
    {
      icon: <Route className="h-10 w-10 text-primary" />,
      title: "Strategic Planning",
      description: "Our team designs a tailored service plan that outlines workflow processes, timelines, deliverables, and integration points with your existing systems.",
      number: "02"
    },
    {
      icon: <ArrowRight className="h-10 w-10 text-primary" />,
      title: "Team Assignment",
      description: "We assign dedicated offshore professionals with expertise in your specific industry and requirements, ensuring seamless collaboration and communication.",
      number: "03"
    },
    {
      icon: <CheckCircle2 className="h-10 w-10 text-primary" />,
      title: "Implementation & Ongoing Support",
      description: "After onboarding and system setup, we provide continuous monitoring, regular reporting, and quality assurance to maintain exceptional service standards.",
      number: "04"
    }
  ];

  return (
    <section id="process" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-sm uppercase tracking-widest text-primary font-medium text-center mb-4 reveal">
          How We Work
        </div>
        <h2 className="section-title reveal">
          Our <span className="text-gradient">Four-Step</span> Process
        </h2>
        <p className="section-subtitle reveal">
          A streamlined approach to integrating outsourced accounting services with your business
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {processSteps.map((step, index) => (
            <Card key={index} className="border-none shadow-lg reveal" style={{ animation: `fade-in-up 0.6s ease-out ${0.1 + index * 0.1}s forwards` }}>
              <CardContent className="p-6 relative">
                <span className="absolute -top-4 -right-4 bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary font-bold">
                  {step.number}
                </span>
                <div className="mb-6">{step.icon}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-12 reveal">
          <Link to="/contact">
            <Button size="lg" className="button-effect">
              Start Your Journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-16 transform -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full -ml-16 -mb-16" />
    </section>
  );
};

export default ProcessBreakdown;
