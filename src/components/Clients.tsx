import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Building, Star, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const clientsList = [
  {
    name: "Parceldeck",
    description: "A leading logistics and package delivery service provider modernizing the shipping industry with innovative tracking solutions.",
    logo: "/lovable-uploads/6c6e0d9e-1385-44f8-bb40-a84203a99b53.png" 
  },
  {
    name: "Shreehari Education",
    description: "Pioneer in educational services offering comprehensive learning programs and resources for students across various academic levels.",
    logo: "/lovable-uploads/61eccbcf-1be2-4b89-8ec0-9aafa180e916.png"
  },
  {
    name: "Radiance Technologies",
    description: "Cutting-edge technology firm specializing in software development, cybersecurity, and digital transformation solutions.",
    logo: "/lovable-uploads/f8221f76-38d1-4990-b804-837a8f99c346.png"
  },
  {
    name: "Maintedge Techlabs",
    description: "Maintenance management and asset tracking solution provider helping businesses optimize operational efficiency.",
    logo: "/lovable-uploads/96e551a7-f5c1-4b9f-b3ad-798bf116359e.png"
  },
  {
    name: "AavGO",
    description: "Innovative hospitality technology company revolutionizing guest experience through digital solutions.",
    logo: "/lovable-uploads/eda27774-1c1f-43a8-8097-3ea18aec1347.png"
  },
  {
    name: "TeroTAM Technolabs",
    description: "Research and development company focused on creating next-generation technological solutions for various industries.",
    logo: "/lovable-uploads/140fc1b1-c388-4c75-890d-42dffa15b19f.png"
  },
  {
    name: "Astics Techlabs",
    description: "Digital innovation lab specializing in artificial intelligence, machine learning, and data analytics solutions.",
    logo: "/lovable-uploads/357a1190-9c75-467e-a811-c8776bc0fa7e.png"
  },
  {
    name: "Abilities India Pistons & Rings",
    description: "Leading manufacturer of high-precision automotive components with a global distribution network.",
    logo: "/lovable-uploads/f9d94cbb-89c3-4148-baca-8abd97535799.png"
  },
  {
    name: "Oizom",
    description: "Environmental monitoring technology company providing smart solutions for air and water quality management.",
    logo: "/lovable-uploads/3326fdd6-c515-48d0-983e-f97081c10302.png"
  },
  {
    name: "Fitcast",
    description: "Health and wellness technology platform offering personalized fitness and nutrition solutions.",
    logo: "/lovable-uploads/a018af40-85dd-4842-9a59-6afe3ecd206e.png"
  },
  {
    name: "Webosphere",
    description: "Web development and digital marketing agency creating impactful online presence for businesses.",
    logo: "/lovable-uploads/976f2a71-a877-4739-a237-b642ba51f07b.png"
  },
  {
    name: "QLTech",
    description: "Quality-focused technology services company delivering custom software solutions and IT consulting.",
    logo: "/lovable-uploads/4b2aa245-eab8-43ba-8c34-072cc944764c.png"
  },
  {
    name: "Kalintis",
    description: "Specialized firm providing integrated business solutions and digital transformation services.",
    logo: "/lovable-uploads/23765533-440e-4a3e-a094-fb91aa500feb.png"
  },
  {
    name: "Comptech Equipments",
    description: "Industrial equipment manufacturer serving various sectors with reliable machinery and components.",
    logo: "/lovable-uploads/ca091b2a-d6b9-4ab6-90ce-e8a2f3f7ead4.png"
  },
  {
    name: "Fuji Silvertech",
    description: "Advanced materials and technology company pioneering innovations in specialized industrial applications.",
    logo: "/lovable-uploads/b2bf898d-331d-4ba7-b667-af68c5650633.png"
  },
  {
    name: "TDC Contracting",
    description: "Premier construction and contracting company delivering high-quality building solutions and project management services.",
    logo: "/lovable-uploads/60799b5b-697e-4cd3-931f-2a9096534170.png"
  },
  {
    name: "The Leela Corporation",
    description: "Innovative partner in progress providing comprehensive solutions across multiple industries with a focus on technological advancement.",
    logo: "/lovable-uploads/c37806a6-46f2-491d-89ab-bbcd97e0deb2.png"
  }
];

// Group clients into industries for filtering
const industries = [
  { name: "All Clients", count: 30 },
  { name: "Technology", count: 20 },
  { name: "Education", count: 2 },
  { name: "Manufacturing", count: 3 },
  { name: "Services", count: 3 },
  { name: "Construction", count: 2 }
];

const Clients = () => {
  const [activeIndustry, setActiveIndustry] = React.useState("All Clients");
  const [hoveredClient, setHoveredClient] = React.useState<number | null>(null);

  const getRandomGradient = (index: number) => {
    const gradients = [
      "bg-gradient-to-r from-blue-50 to-indigo-50",
      "bg-gradient-to-r from-purple-50 to-pink-50",
      "bg-gradient-to-r from-green-50 to-emerald-50",
      "bg-gradient-to-r from-amber-50 to-orange-50",
      "bg-gradient-to-r from-cyan-50 to-blue-50"
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section id="clients" className="py-16 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <div className="text-sm uppercase tracking-widest text-primary font-medium mb-4">
            Our Trusted Partners
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Companies That <span className="text-gradient">Trust Us</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're proud to work with industry leaders across various sectors, providing them with exceptional accounting and financial services.
          </p>
          
          {/* Client Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            <div className="flex items-center space-x-2 text-lg">
              <Users className="h-6 w-6 text-primary" />
              <span><strong>30+</strong> Happy Clients</span>
            </div>
            <div className="flex items-center space-x-2 text-lg">
              <Building className="h-6 w-6 text-primary" />
              <span><strong>12+</strong> Industries Served</span>
            </div>
            <div className="flex items-center space-x-2 text-lg">
              <Star className="h-6 w-6 text-primary" />
              <span><strong>98%</strong> Client Satisfaction</span>
            </div>
          </div>
        </div>

        {/* Industry Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 reveal">
          {industries.map((industry, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndustry(industry.name)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                activeIndustry === industry.name
                  ? "bg-primary text-white shadow-md"
                  : "bg-white hover:bg-gray-100"
              )}
            >
              {industry.name} ({industry.count})
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clientsList.map((client, index) => (
            <Card
              key={index}
              className={cn(
                "border hover:shadow-lg transition-all duration-300 reveal",
                getRandomGradient(index),
                hoveredClient === index ? "scale-[1.02]" : ""
              )}
              onMouseEnter={() => setHoveredClient(index)}
              onMouseLeave={() => setHoveredClient(null)}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 mr-4 bg-white rounded-lg overflow-hidden flex items-center justify-center shadow-sm p-2">
                    <img src={client.logo} alt={`${client.name} logo`} className="max-w-full max-h-full object-contain" />
                  </div>
                  <h3 className="text-xl font-bold">{client.name}</h3>
                </div>
                <p className="text-muted-foreground">{client.description}</p>
                
                {/* Client badge or tag */}
                <div className="mt-4 flex justify-end">
                  <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    Trusted Partner
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="mt-16 text-center reveal">
          <p className="text-lg mb-6">
            Join our growing family of satisfied clients and experience the difference our expertise makes.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            Become Our Client
          </a>
        </div>
      </div>
    </section>
  );
};

export default Clients;

