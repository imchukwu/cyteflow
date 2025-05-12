import React from 'react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface SampleProps {
  title: string;
  category: string;
  imageUrl: string;
  thumbnail?: string;
}

const Sample = ({ title, category, imageUrl, thumbnail }: SampleProps) => {
  const hasValidUrl = imageUrl && imageUrl.startsWith('http');

  return (
    <div className="rounded-lg overflow-hidden border hover:shadow-md transition-shadow">
      <div className="h-56 bg-muted relative">
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          {hasValidUrl ? (
            <img
              src={`${thumbnail}`}
              alt={`${title} Preview`}
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="text-gray-500 text-center px-4">Preview not available</div>
          )}
        </div>
      </div>
      <div className="p-4">
        <span className="text-sm text-primary font-medium">{category}</span>
        <h3 className="text-lg font-bold mt-1">{title}</h3>
        <div className="mt-4">
          {hasValidUrl && (
            <Button variant="outline" size="sm" asChild>
              <Link
                to={imageUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View This Sample
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const Samples = () => {
  const samples = [
    {
      title: 'Naija Corporate',
      category: 'Corporate',
      imageUrl: 'https://naija-corp.vercel.app/',
      thumbnail: '/images/naija-corp.png'
    },
    {
      title: 'Creative Portfolio',
      category: 'Portfolio',
      imageUrl: 'https://portfolio-x-orpin.vercel.app/',
      thumbnail: '/images/portfolio.png'
    },
    {
      title: 'Restaurant Showcase',
      category: 'Food & Beverage',
      imageUrl: 'https://restaurant-phi-rust.vercel.app/',
      thumbnail: '/images/restaurant.png'
    },
    {
      title: 'Legal Aid',
      category: 'Professional Services',
      imageUrl: 'https://legal-aid-opal.vercel.app/',
      thumbnail: '/images/legal-aid.png'
    },
    {
      title: 'Medicare',
      category: 'Healthcare',
      imageUrl: 'https://care-plus-steel.vercel.app/',
      thumbnail: '/images/medicare.png'
    },
    {
      title: 'Property X',
      category: 'Real Estate',
      imageUrl: 'https://propertyx.vercel.app/',
      thumbnail: '/images/propertyx.png'
    },
    {
      title: 'SchoolIT',
      category: 'Education',
      imageUrl: 'https://schoolit-tau.vercel.app/',
      thumbnail: '/images/schoolit.png'
    },
    {
      title: 'Online Store',
      category: 'Online Shop',
      imageUrl: 'https://shop-connect-iota.vercel.app/',
      thumbnail: '/images/online-store.png'
    },
    {
      title: 'Church Connect',
      category: 'Religious',
      imageUrl: 'https://church-connect-sable.vercel.app/',
      thumbnail: '/images/church-connect.png'
    }
  ];

  const categories = ['All', 'Corporate', 'Portfolio', 'E-commerce', 'Blog', 'Landing Page'];
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredSamples = activeCategory === 'All'
    ? samples
    : samples.filter(sample => sample.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Website Samples</h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Browse our collection of professional samples. We'll customize any of these designs for your business at no cost.
              </p>
              <Button size="lg" asChild>
                <Link to="/about">Get Your Free Design</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Samples Section */}
        <section className="py-16">
          <div className="container">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-10 justify-center">
              {categories.map(category => (
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

            {/* Samples Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredSamples.map((sample, index) => (
                <Sample
                  key={index}
                  title={sample.title}
                  category={sample.category}
                  imageUrl={sample.imageUrl}
                  thumbnail={sample.thumbnail} 
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
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

export default Samples;
