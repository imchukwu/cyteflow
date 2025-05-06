
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PricingPlanProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

const PricingPlan = ({ name, price, description, features, highlighted = false }: PricingPlanProps) => {
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
          <span className="text-muted-foreground">/month</span>
        </div>
        <p className="text-muted-foreground mb-6">{description}</p>
        <Button variant={highlighted ? "default" : "outline"} className="mb-6" asChild>
          <Link to="/pricing">View Plan</Link>
        </Button>
        <div className="space-y-3 mt-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <Check className="h-5 w-5 flex-shrink-0 text-primary" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const PricingSection = () => {
  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that's right for you and start your website journey today.
          </p>
          <div className="mt-4">
            <Button variant="outline" asChild>
              <Link to="/pricing">See full pricing details</Link>
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up">
          <PricingPlan 
            name="Basic" 
            price="₦5,000" 
            description="Perfect for individuals and small projects."
            features={[
              "Free website design",
              "1 website",
              "Reliable hosting",
              "Basic support"
            ]}
          />
          <PricingPlan 
            name="Professional" 
            price="₦15,000" 
            description="Ideal for professionals and growing businesses."
            features={[
              "Free website design",
              "Advanced features",
              "Priority support",
              "Analytics dashboard"
            ]}
            highlighted 
          />
          <PricingPlan 
            name="Business" 
            price="₦30,000" 
            description="For businesses with advanced needs."
            features={[
              "Free website design",
              "Premium features",
              "Premium support",
              "Advanced integrations"
            ]} 
          />
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
