
import React, { useRef } from 'react';
import { 
  Download,
  Printer,
  Share2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import html2pdf from 'html2pdf.js';

const Brochure = () => {
  const brochureRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
    toast({
      title: "Print dialog opened",
      description: "The brochure is ready to print.",
    });
  };

  const handleDownload = () => {
    toast({
      title: "Download started",
      description: "Your brochure PDF is being prepared.",
    });
    
    // Check if the ref is available
    if (!brochureRef.current) {
      toast({
        title: "Error",
        description: "Could not generate PDF. Please try again.",
        variant: "destructive",
      });
      return;
    }

    // PDF options
    const opt = {
      margin: [0.5, 0.5, 0.5, 0.5],
      filename: 'nishav_accounting_brochure.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    // Generate and download PDF
    html2pdf().set(opt).from(brochureRef.current).save()
      .then(() => {
        toast({
          title: "Download complete",
          description: "Your brochure PDF has been downloaded.",
        });
      })
      .catch(error => {
        console.error('PDF generation error:', error);
        toast({
          title: "Download failed",
          description: "There was an error generating your PDF.",
          variant: "destructive",
        });
      });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Nishav Business Solutions Brochure',
        text: 'Check out these accounting services!',
        url: window.location.href,
      })
      .then(() => {
        toast({
          title: "Shared successfully",
          description: "Thank you for sharing our brochure.",
        });
      })
      .catch((error) => {
        toast({
          title: "Sharing failed",
          description: "Unable to share the brochure.",
          variant: "destructive",
        });
        console.error('Error sharing:', error);
      });
    } else {
      toast({
        title: "Sharing not supported",
        description: "Your browser doesn't support the Web Share API.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="py-16 bg-white relative">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Action buttons */}
        <div className="flex justify-end gap-4 mb-8 print:hidden">
          <Button variant="outline" onClick={handlePrint} className="button-effect">
            <Printer className="mr-2 h-4 w-4" />
            Print
          </Button>
          <Button variant="outline" onClick={handleDownload} className="button-effect">
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
          <Button variant="outline" onClick={handleShare} className="button-effect">
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
        </div>

        {/* Brochure container */}
        <div ref={brochureRef} className="bg-white shadow-lg rounded-lg overflow-hidden print:shadow-none">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary/90 to-blue-600/90 p-8 text-white">
            <h1 className="text-4xl font-bold mb-4">Streamline Your Accounting Operations</h1>
            <p className="text-xl max-w-3xl">
              Nishav provides comprehensive outsourced accounting, bookkeeping, and tax preparation services to help your business thrive.
            </p>
            <div className="mt-6 p-4 bg-white/20 rounded-lg inline-block">
              <p className="font-semibold">Accounting professionals starting from just $8.5/hour</p>
            </div>
          </div>

          {/* The rest of your brochure content */}
          {/* Services section */}
          <div className="p-8 border-b">
            <h2 className="text-2xl font-bold mb-6">Our Comprehensive Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Bookkeeping Services</h3>
                  <p className="text-muted-foreground">Full-cycle bookkeeping with month-end and year-end closing procedures</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m-6-8h6M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Tax Preparation</h3>
                  <p className="text-muted-foreground">Expert tax preparation for individuals, partnerships, and corporations</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Financial Reporting</h3>
                  <p className="text-muted-foreground">Comprehensive financial statements and management reports</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Payroll Processing</h3>
                  <p className="text-muted-foreground">Complete payroll management and tax filing services</p>
                </div>
              </div>
            </div>
          </div>

          {/* Process section */}
          <div className="p-8 border-b">
            <h2 className="text-2xl font-bold mb-6">Our Four-Step Process</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="relative px-4 py-6">
                <div className="absolute -top-2 -left-2 bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center text-primary font-bold">1</div>
                <h3 className="text-lg font-semibold mb-2">Initial Consultation</h3>
                <p className="text-sm text-muted-foreground">We begin with a detailed assessment of your accounting needs</p>
              </div>
              
              <div className="relative px-4 py-6">
                <div className="absolute -top-2 -left-2 bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center text-primary font-bold">2</div>
                <h3 className="text-lg font-semibold mb-2">Strategic Planning</h3>
                <p className="text-sm text-muted-foreground">We design a tailored service plan that outlines workflow processes</p>
              </div>
              
              <div className="relative px-4 py-6">
                <div className="absolute -top-2 -left-2 bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center text-primary font-bold">3</div>
                <h3 className="text-lg font-semibold mb-2">Team Assignment</h3>
                <p className="text-sm text-muted-foreground">We assign dedicated offshore professionals with expertise in your industry</p>
              </div>
              
              <div className="relative px-4 py-6">
                <div className="absolute -top-2 -left-2 bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center text-primary font-bold">4</div>
                <h3 className="text-lg font-semibold mb-2">Implementation</h3>
                <p className="text-sm text-muted-foreground">We provide continuous monitoring, regular reporting, and quality assurance</p>
              </div>
            </div>
          </div>

          {/* Software section */}
          <div className="p-8 border-b">
            <h2 className="text-2xl font-bold mb-6">Accounting Software Expertise</h2>
            <p className="text-muted-foreground mb-6">Our team is proficient in all major accounting platforms:</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-center">
              <div className="flex flex-col items-center p-4">
                <img 
                  src="/lovable-uploads/b5a864c5-5950-4b42-be96-de0c5ff6884d.png" 
                  alt="Zoho Books logo" 
                  className="max-h-12 max-w-full object-contain mb-2"
                />
                <p className="text-sm font-medium text-center">Zoho Books</p>
              </div>
              <div className="flex flex-col items-center p-4">
                <img 
                  src="/lovable-uploads/50436d23-3492-4418-a36b-6aed0949896f.png" 
                  alt="QuickBooks logo" 
                  className="max-h-12 max-w-full object-contain mb-2"
                />
                <p className="text-sm font-medium text-center">QuickBooks</p>
              </div>
              <div className="flex flex-col items-center p-4">
                <img 
                  src="/lovable-uploads/192eb368-bbb0-4fd8-b7be-4969dfc43185.png" 
                  alt="Xero logo" 
                  className="max-h-12 max-w-full object-contain mb-2"
                />
                <p className="text-sm font-medium text-center">Xero</p>
              </div>
              <div className="flex flex-col items-center p-4">
                <img 
                  src="/lovable-uploads/c919bdcf-c8f5-4437-abb1-af68e06b250b.png" 
                  alt="Wave Accounting logo" 
                  className="max-h-12 max-w-full object-contain mb-2"
                />
                <p className="text-sm font-medium text-center">Wave</p>
              </div>
              <div className="flex flex-col items-center p-4">
                <img 
                  src="/lovable-uploads/b84e6cdd-4fca-4394-b045-050a7ae9ca8e.png" 
                  alt="Datarails logo" 
                  className="max-h-12 max-w-full object-contain mb-2"
                />
                <p className="text-sm font-medium text-center">Datarails</p>
              </div>
            </div>
          </div>

          {/* Contact section */}
          <div className="p-8 bg-gray-50">
            <h2 className="text-2xl font-bold mb-6">Contact Us Today</h2>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <p className="mb-4">Ready to streamline your accounting operations? Contact our team today for a free consultation.</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>info@nishav.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>+1 (800) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>123 Accounting Street, Suite 100, New York, NY 10001</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full md:w-auto">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Contact us" 
                  className="rounded-lg shadow-md w-full max-w-md mx-auto"
                />
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-primary/10 p-6 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Nishav Business Solutions. All rights reserved.
            </p>
            <p className="text-xs mt-2 text-muted-foreground">
              Designed to provide information about our accounting services. Contact us for a personalized quote.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brochure;
