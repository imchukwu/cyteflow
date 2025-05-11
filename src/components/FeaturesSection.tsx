
import React from 'react';
import { Paintbrush, Globe, Zap, Database, CreditCard, PieChart, ShieldCheck, Settings } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => {
  return (
    <div className="p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2 font-heading">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <Paintbrush className="h-6 w-6" />,
      title: "Professional Design",
      description: "Expert web designers create beautiful, custom websites tailored to your business needs."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Custom Domains",
      description: "Connect your own domain or purchase a custom domain through us for seamless setup and effective management."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fast Performance",
      description: "Optimized hosting ensures your website loads quickly for visitors."
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Reliable Hosting",
      description: "99.9% uptime guarantee with global CDN for fast delivery worldwide."
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Simple Pricing",
      description: "Transparent subscription plans with no hidden fees. Design is always FREE."
    },
    {
      icon: <PieChart className="h-6 w-6" />,
      title: "Analytics",
      description: "Built-in analytics to track visitors and understand your audience."
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Security",
      description: "Free SSL certificates and security features to protect your website."
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Add-ons",
      description: "Enhance your site with e-commerce, forms, and other integrations."
    }
  ];
  
  return (
    <section id="features" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Everything you need to succeed online
          </h2>
          <p className="text-lg text-muted-foreground">
            From designing your site to hosting and maintenance, we've got you covered with all the tools you need.
          </p>
          <div className="mt-6 inline-block bg-primary/10 px-4 py-2 rounded-full">
            <p className="font-medium text-primary">Website design is FREE — You only pay for hosting!</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
