
import React from 'react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface TemplateProps {
  title: string;
  category: string;
  imageUrl: string;
}

const Template = ({ title, category, imageUrl }: TemplateProps) => {
  return (
    <div className="rounded-lg overflow-hidden border hover:shadow-md transition-shadow">
      <div className="h-56 bg-muted relative">
        <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
          {/* Image would be displayed here. Using placeholder for now */}
          <div className="text-lg font-bold text-gray-500">{title} Preview</div>
        </div>
      </div>
      <div className="p-4">
        <span className="text-sm text-primary font-medium">{category}</span>
        <h3 className="text-lg font-bold mt-1">{title}</h3>
        <div className="mt-4">
          <Button variant="outline" size="sm" asChild>
            <Link to="/about">Use This Template</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

const Templates = () => {
  const templates = [
    {
      title: "Business Pro",
      category: "Corporate",
      imageUrl: ""
    },
    {
      title: "Creative Portfolio",
      category: "Portfolio",
      imageUrl: ""
    },
    {
      title: "Restaurant Showcase",
      category: "Food & Beverage",
      imageUrl: ""
    },
    {
      title: "Legal Services",
      category: "Professional Services",
      imageUrl: ""
    },
    {
      title: "Health & Wellness",
      category: "Healthcare",
      imageUrl: ""
    },
    {
      title: "Real Estate Listings",
      category: "Real Estate",
      imageUrl: ""
    },
    {
      title: "Educational Platform",
      category: "Education",
      imageUrl: ""
    },
    {
      title: "E-commerce Store",
      category: "Online Shop",
      imageUrl: ""
    }
  ];

  const categories = ["All", "Corporate", "Portfolio", "E-commerce", "Blog", "Landing Page"];
  const [activeCategory, setActiveCategory] = React.useState("All");

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Website Templates</h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Browse our collection of professional templates. We'll customize any of these designs for your business at no cost.
              </p>
              <Button size="lg" asChild>
                <Link to="/about">Get Your Free Design</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Templates */}
        <section className="py-16">
          <div className="container">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-10 justify-center">
              {categories.map((category) => (
                <button 
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted hover:bg-muted/80'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Templates Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {templates.map((template, index) => (
                <Template 
                  key={index}
                  title={template.title}
                  category={template.category}
                  imageUrl={template.imageUrl}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold font-heading mb-4">Don't see what you're looking for?</h2>
              <p className="text-lg mb-8">
                We can create a completely custom design based on your specific requirements.
              </p>
              <Button size="lg" asChild>
                <Link to="/about">Request Custom Design</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default Templates;
