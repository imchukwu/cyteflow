import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PricingPlanProps {
  name: string;
  price?: string;
  originalPrice?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  comingSoon?: boolean;
}

const PricingPlan = ({
  name,
  price = '',
  originalPrice,
  description,
  features,
  highlighted = false,
  comingSoon = false,
}: PricingPlanProps) => {
  return (
    <div className={`flex flex-col h-full rounded-lg border ${highlighted ? 'border-primary shadow-lg shadow-primary/10' : ''}`}>
      {highlighted && (
        <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-medium rounded-t-lg">
          Most Popular
        </div>
      )}
      <div className={`p-6 ${highlighted ? 'rounded-b-lg' : 'rounded-lg'} flex flex-col h-full`}>
        <h3 className="text-xl font-bold font-heading">{name}</h3>
        {price && (
          <div className="mt-4 mb-2 flex items-center gap-2">
            <span className="text-3xl font-bold font-heading">{price}</span>
            {originalPrice && (
              <span className="text-muted-foreground line-through text-lg">
                {originalPrice}
              </span>
            )}
            <span className="text-muted-foreground text-sm">/month</span>
          </div>
        )}
        <p className="text-muted-foreground mb-6">{description}</p>

        {!comingSoon && (
          <Button variant={highlighted ? 'default' : 'outline'} className="mb-6" asChild>
            <Link to="/pricing">View Plan</Link>
          </Button>
        )}

        {comingSoon ? (
          <div className="text-sm text-center text-muted-foreground italic mt-auto">Coming Soon</div>
        ) : (
          <div className="space-y-3 mt-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        )}
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
            originalPrice="₦7,500"
            description="Perfect for individuals and professionals."
            features={[
              'Single-page website',
              '1 revision per month',
              'Basic support',
              'Free website design',
            ]}
          />
          <PricingPlan
            name="Business"
            price="₦10,000"
            originalPrice="₦15,000"
            description="Ideal for small and growing businesses."
            features={[
              'All in Basic plan',
              'Business email integration',
              'Multi-page website',
              'Basic SEO support',
            ]}
            highlighted
          />
          <PricingPlan
            name="Premium"
            description="For businesses with advanced needs."
            features={[]}
            comingSoon
          />
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
