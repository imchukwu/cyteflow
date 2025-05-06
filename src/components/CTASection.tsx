
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Ready to get your website?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your website needs. Our team will design your perfect website for free
            and set you up with affordable hosting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="group" asChild>
              <Link to="/about">
                Get Started <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/templates">View Templates</Link>
            </Button>
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <span>+234 800 123 4567</span>
            </div>
            <div className="hidden md:block">•</div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <span>contact@cyteflow.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
