
import React, { useState } from 'react';
import { 
  BarChart3, 
  Calculator, 
  FileText, 
  PieChart, 
  ClipboardCheck, 
  ReceiptText,
  Database,
  BookOpen,
  FileCheck,
  Users,
  LineChart,
  Building,
  ShieldCheck,
  Briefcase,
  UserCircle,
  UserCog,
  Laptop
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const serviceItems = [
  {
    icon: <Database className="h-8 w-8 text-primary" />,
    title: "Data Entry Specialist",
    description: "Accurate and efficient data entry services to maintain detailed financial records and transactions.",
    details: [
      "Specialized in high-volume financial data processing with 99.9% accuracy rates",
      "Expertise in various accounting software platforms including QuickBooks, Xero, and Sage",
      "Rapid turnaround times with customized data validation protocols to ensure integrity"
    ]
  },
  {
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    title: "Accounting & Bookkeeping Services",
    description: "Comprehensive bookkeeping solutions including general ledger maintenance, accounts payable/receivable, and financial statements.",
    details: [
      "Full-cycle bookkeeping with month-end and year-end closing procedures",
      "Bank and credit card reconciliations with discrepancy resolution",
      "Custom chart of accounts setup and management for optimal financial tracking"
    ]
  },
  {
    icon: <FileCheck className="h-8 w-8 text-primary" />,
    title: "Tax Preparation & Planning",
    description: "Professional tax preparation and strategic planning to minimize tax liability and ensure compliance with regulations.",
    details: [
      "Proactive tax planning strategies tailored to your specific financial situation",
      "Expertise in individual, partnership, and corporate tax returns",
      "Year-round tax advisory services to maximize deductions and credits"
    ]
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Payroll Processing",
    description: "End-to-end payroll management including calculations, tax filings, and employee payment processing.",
    details: [
      "Accurate processing of regular and special payrolls with multi-state capabilities",
      "Comprehensive payroll tax filing and reporting services",
      "Employee self-service portal setup for pay stubs and tax documents"
    ]
  },
  {
    icon: <ClipboardCheck className="h-8 w-8 text-primary" />,
    title: "Audit & Assurance Services",
    description: "Thorough audit and assurance services to verify financial accuracy and enhance stakeholder confidence.",
    details: [
      "Risk-based audit approach focusing on key financial areas",
      "Internal control evaluations with detailed improvement recommendations",
      "Compliance audits for regulatory requirements and industry standards"
    ]
  },
  {
    icon: <LineChart className="h-8 w-8 text-primary" />,
    title: "Business Advisory & Consulting",
    description: "Strategic business consulting to improve financial performance, optimize operations, and achieve growth objectives.",
    details: [
      "Financial forecasting and budgeting with scenario analysis",
      "Business process optimization to reduce costs and increase efficiency",
      "Strategic planning sessions with actionable implementation roadmaps"
    ]
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "IRS Representation & Compliance",
    description: "Expert representation before tax authorities and comprehensive compliance services to resolve tax issues.",
    details: [
      "Professional representation during IRS audits and examinations",
      "Resolution of tax notices, penalties, and past-due filings",
      "Negotiation of installment agreements and offers in compromise"
    ]
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: "Virtual CFO & Fractional CFO Services",
    description: "On-demand CFO expertise providing financial leadership without the cost of a full-time executive.",
    details: [
      "Strategic financial oversight and guidance for business growth",
      "Cash flow management and working capital optimization",
      "Financial performance analysis with executive-level reporting"
    ]
  },
  {
    icon: <UserCircle className="h-8 w-8 text-primary" />,
    title: "Individual Tax Return",
    description: "Personalized tax return preparation for individuals to maximize deductions and ensure accurate filing.",
    details: [
      "Comprehensive tax preparation for all income sources and deductions",
      "Strategic tax planning to reduce current and future tax liabilities",
      "Year-round tax support and amendment services when needed"
    ]
  },
  {
    icon: <UserCog className="h-8 w-8 text-primary" />,
    title: "Sr. Accountant Services",
    description: "Advanced accounting services delivered by experienced senior accountants for complex financial requirements.",
    details: [
      "Expert handling of complex accounting transactions and reconciliations",
      "Financial statement preparation with detailed footnotes and disclosures",
      "Technical accounting guidance for specialized industries and transactions"
    ]
  },
  {
    icon: <Laptop className="h-8 w-8 text-primary" />,
    title: "Tax Manager Services",
    description: "Comprehensive tax management including planning, compliance, and strategic advisory services.",
    details: [
      "High-level tax strategy development for businesses and high-net-worth individuals",
      "Multi-entity tax planning and structuring for optimal tax efficiency",
      "International tax expertise for businesses with global operations"
    ]
  },
  {
    icon: <ReceiptText className="h-8 w-8 text-primary" />,
    title: "Accounts Receivable",
    description: "Effective accounts receivable management to improve cash flow and reduce outstanding balances.",
    details: [
      "Streamlined invoicing and collection processes to accelerate cash flow",
      "Aging analysis with targeted collection strategies for past-due accounts",
      "Customer credit assessment and management to minimize bad debt risk"
    ]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary/50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-sm uppercase tracking-widest text-primary font-medium text-center mb-4 opacity-0 animate-fade-in">
          What We Offer
        </div>
        <h2 className="section-title opacity-0 animate-fade-in-delayed">
          Comprehensive <span className="text-gradient">Accounting</span> Services
        </h2>
        <p className="section-subtitle opacity-0 animate-fade-in-delayed-2">
          We provide a wide range of accounting services tailored to meet the specific needs of your business.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-16">
          {serviceItems.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm card-hover opacity-0 group relative"
              style={{ animation: `fade-in-up 0.6s ease-out ${0.1 + index * 0.1}s forwards` }}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              
              {/* Hover details */}
              <div className="absolute inset-0 bg-white p-6 rounded-lg shadow-md z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-auto">
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <ul className="text-muted-foreground mb-4 space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button variant="link" className="p-0 text-primary font-medium">
                Learn More &rarr;
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center opacity-0 animate-fade-in-up-delayed-2">
          <Button size="lg" className="button-effect">
            Explore All Services
          </Button>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -mr-16 -mt-16" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full -ml-16 -mb-16" />
    </section>
  );
};

export default Services;
