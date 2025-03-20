
import React from 'react';

const AccountingSoftware = () => {
  const softwareList = [
    {
      name: "Zoho Books",
      logo: "/lovable-uploads/b5a864c5-5950-4b42-be96-de0c5ff6884d.png",
      description: "Comprehensive online accounting software for small and medium businesses"
    },
    {
      name: "QuickBooks",
      logo: "/lovable-uploads/50436d23-3492-4418-a36b-6aed0949896f.png",
      description: "Leading accounting software for small and medium-sized businesses"
    },
    {
      name: "Xero",
      logo: "/lovable-uploads/192eb368-bbb0-4fd8-b7be-4969dfc43185.png",
      description: "Cloud-based accounting software platform for small and medium-sized businesses"
    },
    {
      name: "Wave Accounting",
      logo: "/lovable-uploads/c919bdcf-c8f5-4437-abb1-af68e06b250b.png",
      description: "Free accounting software with credit card processing and payroll services"
    },
    {
      name: "Datarails",
      logo: "/lovable-uploads/b84e6cdd-4fca-4394-b045-050a7ae9ca8e.png",
      description: "Financial planning and analysis solution for Excel-based businesses"
    }
  ];

  return (
    <section className="py-16 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Accounting Software Expertise</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Our team is proficient in all major accounting platforms, ensuring seamless integration and efficient workflow management for your business
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-center">
          {softwareList.map((software, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
              <div className="mb-4 h-16 flex items-center justify-center">
                <img 
                  src={software.logo} 
                  alt={`${software.name} logo`} 
                  className="max-h-16 max-w-full object-contain"
                />
              </div>
              <h3 className="font-medium text-center mb-2">{software.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccountingSoftware;
