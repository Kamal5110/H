
import React from 'react';
import { 
  FileText, 
  Download, 
  BookOpen,
  File
} from "lucide-react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { handleResourceDownload } from "@/lib/utils";
import { toast } from "@/components/ui/use-toast";

const Resources = () => {
  const resources = [
    {
      icon: <FileText className="h-10 w-10 text-primary" />,
      title: "Outsourcing Guide",
      description: "Comprehensive guide to accounting outsourcing best practices and implementation strategies.",
      type: "PDF Guide",
      action: "Download",
      filename: "outsourcing-guide.pdf"
    },
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: "Cost Savings Calculator",
      description: "Interactive tool to estimate your potential savings from outsourced accounting services.",
      type: "Excel Template",
      action: "Download",
      filename: "cost-savings-calculator.xlsx"
    },
    {
      icon: <File className="h-10 w-10 text-primary" />,
      title: "Transition Checklist",
      description: "Step-by-step checklist for a smooth transition to outsourced accounting services.",
      type: "PDF Checklist",
      action: "Download",
      filename: "transition-checklist.pdf"
    },
    {
      icon: <FileText className="h-10 w-10 text-primary" />,
      title: "Data Security Whitepaper",
      description: "Detailed information on our robust data security protocols and compliance measures.",
      type: "Whitepaper",
      action: "Download",
      filename: "data-security-whitepaper.pdf"
    }
  ];

  const handleResourceClick = (resource: {title: string, filename: string}) => {
    try {
      handleResourceDownload(resource.filename);
      toast({
        title: "Download Started",
        description: `${resource.title} is being downloaded.`,
      });
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "The file could not be downloaded. Please try again later.",
        variant: "destructive",
      });
      console.error(`Error downloading ${resource.title}:`, error);
    }
  };

  return (
    <section id="resources" className="py-20 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-sm uppercase tracking-widest text-primary font-medium text-center mb-4 reveal">
          Knowledge Center
        </div>
        <h2 className="section-title reveal">
          Free <span className="text-gradient">Resources</span> & Tools
        </h2>
        <p className="section-subtitle reveal">
          Access our library of accounting resources designed to help your business optimize financial operations
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {resources.map((resource, index) => (
            <Card 
              key={index} 
              className="reveal border hover:border-primary/20 transition-all duration-300"
              style={{ animation: `fade-in-up 0.6s ease-out ${0.1 + index * 0.1}s forwards` }}
            >
              <CardHeader className="pb-0">
                <div className="mb-4">{resource.icon}</div>
                <h3 className="text-xl font-bold">{resource.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{resource.description}</p>
                <div className="text-sm text-primary mt-4">{resource.type}</div>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="outline" 
                  className="w-full mt-2 button-effect"
                  onClick={() => handleResourceClick(resource)}
                >
                  <Download className="mr-2 h-4 w-4" />
                  {resource.action}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center reveal">
          <Button size="lg" className="button-effect">
            View All Resources
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/5 rounded-full -mr-24 -mb-24" />
    </section>
  );
};

export default Resources;
