
import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  rating: number;
}

const Testimonial = ({ quote, author, role, rating }: TestimonialProps) => {
  return (
    <div className="p-6 rounded-lg border bg-card hover:shadow-md transition-shadow flex flex-col h-full">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`h-5 w-5 ${i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      <blockquote className="text-lg mb-6 flex-grow">"{quote}"</blockquote>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      "quote": "What impressed me most about CyteFlow is their lightning-fast support. When I had an issue with my business site, their team responded and fixed it within minutes - no waiting!",
      "author": "Sarah Nwamaka",
      "role": "Small Business Owner",
      "rating": 5
    },
    {
      "quote": "I was shocked at how affordable CyteFlow is - for less than my daily breakfast budget, I got a professional portfolio website with zero upfront costs. The monthly subscription means I never worry about surprise payments.",
      "author": "Mark Adebowale",
      "role": "Photographer",
      "rating": 4
    },
    {
      quote: "The e-commerce add-on saved me thousands in development costs. I now have a fully functional online store that looks amazing.",
      author: "Abdulquadri Mukaila",
      role: "Online Retailer",
      rating: 5
    }
  ];
  
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            What our customers say
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of satisfied users who've transformed their online presence with CyteFlow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              rating={testimonial.rating}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center animate-fade-in">
          <div className="p-8 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 font-heading">Take your brand to the next level.</h3>
            <p className="mb-6 text-lg">Your business deserves better. Let us build it.</p>
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-medium transition-colors">
              Get Started For Free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
