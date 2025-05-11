
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative py-12 md:py-20 overflow-hidden">
  {/* Background Elements */}
  <div className="absolute inset-0 z-0">
    <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
  </div>

  <div className="container relative z-1">
    <div className="max-w-3xl mx-auto text-center mb-8 md:mb-10 animate-fade-in">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        Website design is FREE, pay only for hosting
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
        CyteFlow provides professional web development services with free design and affordable hosting plans. 
        No logins, no complex editors—just reach out and we'll handle everything.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" className="group" asChild>
          <Link to="/about">
            Contact Us <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link to="/samples">View Samples</Link>
        </Button>
      </div>
    </div>
  </div>
</section>

  );
};

export default HeroSection;
