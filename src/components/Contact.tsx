
import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare,
  Check
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const contactInfo = [
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "US Office",
    detail: "1234 Market Street, Suite 1000, San Francisco, CA 94103"
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "India Office",
    detail: "Office No. - 2, 2B Darmanagar, Nr. BOB Bank, Sabarmati, Ahmedabad, Gujarat - 380005"
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: "US Phone",
    detail: "+1 (555) 123-4567"
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: "India Phone",
    detail: "+91 96449410824"
  },
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email Address",
    detail: "info@nishavgroup.com"
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Live Chat",
    detail: "Chat with our support team"
  }
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        action: (
          <div className="h-8 w-8 bg-primary/20 rounded-full flex items-center justify-center">
            <Check className="h-4 w-4 text-primary" />
          </div>
        ),
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-12 bg-secondary/50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-sm uppercase tracking-widest text-primary font-medium text-center mb-4">
          Get In Touch
        </div>
        <h2 className="section-title text-center text-3xl md:text-4xl font-bold mb-3">
          Ready to <span className="text-gradient">Transform</span> Your Accounting?
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
          Your offshore accounting partner! Get expert bookkeepers, accountants, tax professionals, and audit associates starting at just $8.5 per hour!
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-8 shadow-sm h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="text-muted-foreground text-sm mt-1">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium mb-3">Follow Us</h4>
                <div className="flex gap-4">
                  {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="bg-secondary w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors"
                    >
                      <span className="sr-only">{social}</span>
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
                        {social === 'facebook' && (
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        )}
                        {social === 'twitter' && (
                          <>
                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                          </>
                        )}
                        {social === 'linkedin' && (
                          <>
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect x="2" y="9" width="4" height="12" />
                            <circle cx="4" cy="4" r="2" />
                          </>
                        )}
                        {social === 'instagram' && (
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
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name<span className="text-red-500">*</span>
                    </label>
                    <Input 
                      id="name" 
                      placeholder="John Doe" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address<span className="text-red-500">*</span>
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject<span className="text-red-500">*</span>
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="How can we help you?" 
                    required
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message<span className="text-red-500">*</span>
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Write your message here..." 
                    rows={6} 
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full button-effect"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -mr-16 -mt-16" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full -ml-16 -mb-16" />
    </section>
  );
};

export default Contact;
