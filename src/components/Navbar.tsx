
import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  return (
    <nav className="py-4 px-6 lg:px-8 flex items-center justify-between relative z-10">
      <div className="flex items-center gap-2">
        <Link to="/" className="text-2xl font-bold font-heading text-primary">
          CyteFlow
        </Link>
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        <div className="flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
          <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
          <Link to="/pricing" className="text-sm font-medium hover:text-primary transition-colors">Pricing</Link>
          <Link to="/samples" className="text-sm font-medium hover:text-primary transition-colors">Samples</Link>
        </div>
        <div className="flex items-center gap-4">
          {/* <Button variant="outline" size="sm" asChild>
            <Link to="/about">Contact Us</Link>
          </Button> */}
          <Button size="sm" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Menu className="h-6 w-6" />
      </button>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 px-3 z-20">
          <Link to="/" className="block py-2 px-3 text-sm hover:bg-muted rounded-md">Home</Link>
          <Link to="/about" className="block py-2 px-3 text-sm hover:bg-muted rounded-md">About</Link>
          <Link to="/pricing" className="block py-2 px-3 text-sm hover:bg-muted rounded-md">Pricing</Link>
          <Link to="/samples" className="block py-2 px-3 text-sm hover:bg-muted rounded-md">Samples</Link>
          <div className="border-t my-2"></div>
          {/* <Button variant="outline" size="sm" className="w-full mb-2" asChild>
            <Link to="/about">Contact Us</Link>
          </Button> */}
          <Button size="sm" className="w-full" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
