import React from 'react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PlanFeature {
  text: string;
  available: boolean;
}

interface PricingPlanProps {
  name: string;
  price: string;
  originalPrice?: string;
  description: string;
  features: PlanFeature[];
  highlighted?: boolean;
  comingSoon?: boolean;
}

const PricingPlan = ({ name, price, originalPrice, description, features, highlighted = false, comingSoon = false }: PricingPlanProps) => {
  return (
    <div className={`flex flex-col h-full rounded-lg border ${highlighted ? 'border-primary shadow-lg shadow-primary/10' : ''}`}>
      {highlighted && (
        <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-medium rounded-t-lg">
          Most Popular
        </div>
      )}
      <div className={`p-6 ${highlighted ? 'rounded-b-lg' : 'rounded-lg'} flex flex-col h-full`}>
        <h3 className="text-xl font-bold font-heading">{name}</h3>
        <div className="mt-4 mb-2">
          <span className="text-3xl font-bold font-heading">{price}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through ml-2">{originalPrice}</span>
          )}
          <span className="text-muted-foreground">/month</span>
        </div>
        <p className="text-muted-foreground mb-6">{description}</p>
        {!comingSoon && (
          <Button variant={highlighted ? "default" : "outline"} className="mb-6" asChild>
            <Link to="/about">Choose Plan</Link>
          </Button>
        )}
        {comingSoon && (
          <div className="text-center py-2 text-sm font-medium text-muted-foreground">
            Coming Soon
          </div>
        )}
        <div className="space-y-3 mt-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              {feature.available ? (
                <Check className="h-5 w-5 flex-shrink-0 text-primary" />
              ) : (
                <X className="h-5 w-5 flex-shrink-0 text-muted-foreground/40" />
              )}
              <span className={feature.available ? '' : 'text-muted-foreground/60'}>{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Pricing = () => {
  const basicFeatures = [
    { text: "Free website design", available: true },
    { text: "Single-page website", available: true },
    { text: "1 revision per month", available: true },
    { text: "Basic support", available: true },
    { text: "Custom branding option", available: true },
    { text: "Mobile-responsive design", available: true },
    { text: "SEO-friendly structure", available: true },
    { text: "No hidden fees", available: true },
  ];
  
  const businessFeatures = [
    { text: "Free website design", available: true },
    { text: "Multi-page website", available: true },
    { text: "2 revisions per month", available: true },
    { text: "Business email integration", available: true },
    { text: "Basic SEO support", available: true },
    { text: "Custom branding option", available: true },
    { text: "Up to 10 pages", available: true },
    { text: "Mobile-responsive design", available: true },
    { text: "Basic analytics", available: true },
    { text: "Priority support", available: true },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Simple, Transparent Pricing</h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Website design is FREE. You only pay for hosting with no hidden fees.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up">
              <PricingPlan 
                name="Basic" 
                price="₦5,000" 
                originalPrice="₦7,500"
                description="Perfect for individuals and small projects."
                features={basicFeatures} 
              />
              <PricingPlan 
                name="Business" 
                price="₦10,000" 
                originalPrice="₦15,000"
                description="Ideal for small and growing businesses."
                features={businessFeatures}
                highlighted 
              />
              <PricingPlan 
                name="Premium" 
                price="Coming Soon" 
                description="For businesses with advanced needs."
                features={[]} 
                comingSoon
              />
            </div>
          </div>
        </section>

        {/* Add-ons */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold font-heading mb-4">Special Add-ons</h2>
              <p className="text-muted-foreground">
                Enhance your website with these one-time purchases.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg border">
                <h4 className="text-lg font-bold mb-2">E-commerce Integration</h4>
                <p className="text-2xl font-bold mb-2"><span className="text-sm text-muted-foreground">one-time</span></p>
                <p className="text-muted-foreground mb-4">Sell products online with shopping cart and payment processing.</p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/about">Contact Us</Link>
                </Button>
              </div>
              <div className="p-6 rounded-lg border">
                <h4 className="text-lg font-bold mb-2">Blog Post Writing</h4>
                <p className="text-2xl font-bold mb-2"><span className="text-sm text-muted-foreground">monthly</span></p>
                <p className="text-muted-foreground mb-4">Professional monthly blog writing service to keep your content fresh and engaging, without the hassle.</p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/about">Contact Us</Link>
                </Button>
              </div>
              <div className="p-6 rounded-lg border">
                <h4 className="text-lg font-bold mb-2">SEO Optimization</h4>
                <p className="text-2xl font-bold mb-2"><span className="text-sm text-muted-foreground">one-time</span></p>
                <p className="text-muted-foreground mb-4">Advanced SEO tools and consultation to improve rankings.</p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/about">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold font-heading mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">
                Find answers to common questions about our pricing and services.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto divide-y">
              <div className="py-6">
                <h3 className="text-xl font-bold mb-3">What does "free website design" include?</h3>
                <p>Our free design service includes custom website layout, responsive design for all devices, and implementation of your branding. You only pay for hosting.</p>
              </div>
              <div className="py-6">
                <h3 className="text-xl font-bold mb-3">Can I change my plan later?</h3>
                <p>Yes, you can upgrade or downgrade your plan at any time. Your billing will be adjusted accordingly.</p>
              </div>
              <div className="py-6">
                <h3 className="text-xl font-bold mb-3">What payment methods do you accept?</h3>
                <p>We accept bank transfers only for now.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default Pricing;
