
import React from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle2, Award, Globe, Users, Building, BarChart3 } from "lucide-react";

const AboutContent = () => {
  const coreValues = [
    "Integrity & Transparency – We uphold honesty, ethics, and clear communication in all our business dealings.",
    "Client-Centric Approach – Our success lies in delivering tailored solutions that drive client growth and satisfaction.",
    "Excellence & Innovation – We strive for continuous improvement, leveraging technology to enhance efficiency.",
    "Accountability & Ownership – We take full responsibility for our commitments and ensure quality in every service.",
    "Collaboration & Teamwork – Strong partnerships within our team and with clients foster success and mutual growth.",
    "Adaptability & Growth – We embrace change, evolving with industry trends to stay ahead in the market.",
    "Confidentiality & Compliance – Ensuring data security and adherence to global financial and business regulations."
  ];

  return (
    <div className="py-24">
      {/* Hero section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">10+ Years of Trusted Expertise:</span> Exclusively Empowering CPA/Accounting Firms
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Dedicated support for accounting professionals, without competing with them.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Company Overview</h2>
              <p className="text-muted-foreground mb-6">
                Nishav has over 10+ years of experience providing scalable and efficient Accounting, Bookkeeping, Audit, Client Advisory Services (CAS), and Tax preparation services EXCLUSIVELY to CPA/accounting firms worldwide. We do not compete with accountants.
              </p>
              <p className="text-muted-foreground mb-6">
                With a team of 50+ experienced and qualified accounting professionals, we enable 30+ firms streamline their financial operations, ensure compliance, and drive profitable growth. Our experienced and qualified accounting professionals backed by years of expertise in using advanced software and technologies commonly used by accountants gives us the in-depth knowledge of accounting principles, tax regulations, and industry best practices required to earn the trust and loyalty of CPA/accounting firm clients worldwide.
              </p>
              <p className="text-muted-foreground mb-8">
                Nishav is your one-stop shop for reliably growing your firm to thrive in a dynamic and competitive landscape.
              </p>
              <Button className="button-effect">Learn More</Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Professional at work" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="text-primary h-5 w-5" />
                  <span className="font-medium">Trusted by 30+ CPA firms</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  We're proud to be the partner of choice for accounting professionals worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Footprint */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Company Footprint</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Building className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">10+</h3>
              <p className="text-muted-foreground">Years in industry expertise</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">50+</h3>
              <p className="text-muted-foreground">Strong workforce</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">30+</h3>
              <p className="text-muted-foreground">Global clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Core Values</h2>
            <p className="text-muted-foreground">
              These principles guide our operations and relationships with clients, ensuring we deliver exceptional value consistently.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreValues.map((value, index) => (
              <div key={index} className="flex gap-4 p-6 bg-white rounded-lg shadow-sm border border-muted">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Accounting Practice?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Partner with us to enhance efficiency, reduce costs, and focus on growing your practice while we handle the heavy lifting.
          </p>
          <Button className="button-effect bg-primary hover:bg-primary/90 px-8 py-6 text-lg">
            Schedule a Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutContent;
