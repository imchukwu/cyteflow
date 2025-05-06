
import React from 'react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MessageCircle } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">About CyteFlow</h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                We create beautiful websites while making professional web development accessible and affordable.
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold font-heading mb-6">Our Mission</h2>
                <p className="text-lg mb-4">
                  At CyteFlow, we believe that every business deserves a professional online presence without the hefty price tag or technical complexity.
                </p>
                <p className="text-lg mb-4">
                  That's why we offer FREE website design with affordable hosting plans, making it accessible for businesses of all sizes.
                </p>
                <p className="text-lg">
                  No complicated editors, no technical learning curve - just tell us what you need, and we'll handle the rest.
                </p>
              </div>
              <div className="bg-muted/50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold font-heading mb-6">How It Works</h3>
                <ol className="space-y-4">
                  <li className="flex gap-4">
                    <span className="bg-primary text-white h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <h4 className="font-bold">Contact Us</h4>
                      <p>Reach out via phone, email, or WhatsApp to discuss your website needs.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="bg-primary text-white h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <h4 className="font-bold">Free Design</h4>
                      <p>We'll create a custom website design based on your requirements at no cost.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="bg-primary text-white h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <h4 className="font-bold">Choose Hosting</h4>
                      <p>Select a hosting plan that fits your needs and budget.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="bg-primary text-white h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <h4 className="font-bold">Go Live</h4>
                      <p>We handle the technical setup and your website goes live.</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Get In Touch</h2>
              <p className="text-lg text-muted-foreground">
                Ready to start your website journey? Contact us through any of these channels:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="flex flex-col items-center p-6 border rounded-lg bg-card">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Phone</h3>
                <p className="text-center mb-4">Call us directly</p>
                <p className="font-medium">+234 800 123 4567</p>
              </div>
              
              <div className="flex flex-col items-center p-6 border rounded-lg bg-card">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-center mb-4">Send us a message</p>
                <p className="font-medium">contact@cyteflow.com</p>
              </div>
              
              <div className="flex flex-col items-center p-6 border rounded-lg bg-card">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
                <p className="text-center mb-4">Chat with us</p>
                <Button variant="outline">Open WhatsApp</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default About;
