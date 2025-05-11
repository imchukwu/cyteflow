import React from 'react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import { Button } from '@/components/ui/button';
import { Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Contact Us</h1>
              <p className="text-lg text-muted-foreground">
                We'd love to hear from you. Reach out to us through any of the options below.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {/* Phone */}
              <div className="flex flex-col items-center p-6 border rounded-lg bg-card">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Phone</h3>
                <p className="text-center mb-4">Call us directly</p>
                <p className="font-medium">+234 812 289 1361</p>
              </div>

              {/* Email */}
              <div className="flex flex-col items-center p-6 border rounded-lg bg-card">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-center mb-4">Send us a message</p>
                <p className="font-medium">contact@cyteflow.com</p>
              </div>

              {/* WhatsApp */}
              <div className="flex flex-col items-center p-6 border rounded-lg bg-card">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  {/* WhatsApp SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-500"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                  >
                    <path d="M16.003 2.003C8.822 2.003 2.997 7.828 2.997 15.01c0 2.683.7 5.27 2.03 7.552L2 30l7.648-2.006A13.94 13.94 0 0016 28.017c7.18 0 13.005-5.826 13.005-13.007 0-7.18-5.825-13.006-13.002-13.006zM16 25.998a11.97 11.97 0 01-6.114-1.658l-.438-.257-4.547 1.19 1.21-4.428-.286-.455A11.94 11.94 0 014.997 15.01c0-6.065 4.94-11.006 11.006-11.006 6.067 0 11.007 4.94 11.007 11.006.002 6.065-4.938 10.988-11.01 10.988zm6.42-8.223c-.35-.176-2.064-1.02-2.384-1.137-.318-.117-.55-.176-.78.177-.23.35-.894 1.136-1.096 1.37-.203.234-.397.263-.736.088-.342-.176-1.443-.531-2.75-1.697-1.016-.91-1.703-2.03-1.9-2.372-.196-.342-.02-.524.15-.698.154-.152.345-.397.516-.596.17-.2.227-.35.342-.584.114-.234.057-.438-.03-.614-.088-.176-.78-1.895-1.068-2.6-.28-.673-.565-.58-.78-.59l-.665-.012a1.28 1.28 0 00-.926.438c-.317.35-1.207 1.18-1.207 2.87s1.237 3.33 1.408 3.56c.17.234 2.432 3.717 5.9 5.213.826.357 1.47.57 1.972.729.828.263 1.582.226 2.18.137.664-.099 2.064-.842 2.355-1.656.292-.812.292-1.508.204-1.655-.088-.146-.318-.233-.665-.41z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
                <p className="text-center mb-4">Chat with us directly</p>
                <a
                  href="https://wa.me/2348122891361"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline">Open WhatsApp</Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
};

export default Contact;
