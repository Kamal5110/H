
import React from 'react';
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Company",
      links: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Services", href: "/#services" },
        { label: "Our Clients", href: "/clients" },
        { label: "Blogs", href: "/blogs" },
        { label: "Contact Us", href: "/contact" }
      ]
    },
    {
      title: "Services",
      links: [
        { label: "Accounting & Bookkeeping", href: "/#services" },
        { label: "Tax Preparation", href: "/#services" },
        { label: "Audit & Assurance", href: "/#services" },
        { label: "Payroll Processing", href: "/#services" },
        { label: "Business Advisory", href: "/#services" },
        { label: "Virtual CFO Services", href: "/#services" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "/blogs" },
        { label: "Guides & Ebooks", href: "/blogs" },
        { label: "FAQ", href: "/about" },
        { label: "Testimonials", href: "/clients" }
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of Service", href: "/terms-of-service" },
        { label: "Cookie Policy", href: "/cookie-policy" },
        { label: "GDPR", href: "/gdpr" }
      ]
    }
  ];

  const handleSocialClick = (platform) => {
    // In a real implementation, these would link to actual social profiles
    console.log(`Clicked on ${platform} link`);
    // You could add analytics tracking here
  };

  return (
    <footer className="bg-white relative overflow-hidden pt-16 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="text-2xl font-bold text-primary inline-block mb-4">
              Nishav
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Leading provider of outsourced accounting services for businesses worldwide, helping them streamline operations and achieve financial success.
            </p>
            
            <div className="flex gap-4">
              {[
                { name: 'facebook', url: 'https://facebook.com' },
                { name: 'twitter', url: 'https://twitter.com' }, 
                { name: 'linkedin', url: 'https://linkedin.com' }, 
                { name: 'instagram', url: 'https://instagram.com' }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSocialClick(social.name);
                  }}
                  className="bg-secondary w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors"
                >
                  <span className="sr-only">{social.name}</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    {social.name === 'facebook' && (
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    )}
                    {social.name === 'twitter' && (
                      <>
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </>
                    )}
                    {social.name === 'linkedin' && (
                      <>
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </>
                    )}
                    {social.name === 'instagram' && (
                      <>
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </>
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          {footerLinks.map((category, idx) => (
            <div key={idx}>
              <h4 className="font-bold text-lg mb-4">{category.title}</h4>
              <ul className="space-y-3">
                {category.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    {link.href.startsWith("/#") ? (
                      <a 
                        href={link.href} 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link 
                        to={link.href} 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t py-8 text-center sm:flex sm:justify-between sm:text-left">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Nishav. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0">
            <p className="text-sm text-muted-foreground">
              Comprehensive Solutions for All Your Accounting Needs
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
