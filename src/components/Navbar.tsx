
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-kiryat-blue/90 flex items-center justify-center text-white font-bold">
            קש
          </div>
          <span className={cn(
            'font-heebo font-bold text-lg transition-colors',
            isScrolled ? 'text-kiryat-blue' : 'text-white'
          )}>
            גרעין קריית שמונה
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['חזון', 'המשפחות', 'תוכנית', 'שאלות', 'ערכים'].map((item) => (
            <a 
              key={item} 
              href={`#${item}`}
              className={cn(
                'hover-link text-sm font-medium transition-colors',
                isScrolled ? 'text-gray-700' : 'text-white'
              )}
            >
              {item}
            </a>
          ))}
          <a 
            href="#contact" 
            className="btn-primary text-sm"
          >
            השאירו פרטים
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className={isScrolled ? 'text-kiryat-blue' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-kiryat-blue' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          'fixed inset-0 bg-white z-40 pt-20 transition-transform duration-300 ease-in-out md:hidden',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="container mx-auto px-4 py-6 flex flex-col space-y-6">
          {['חזון', 'המשפחות', 'תוכנית', 'שאלות', 'ערכים'].map((item) => (
            <a 
              key={item}
              href={`#${item}`}
              className="text-xl font-medium text-kiryat-blue hover:text-kiryat-green transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a 
            href="#contact"
            className="btn-primary text-center mt-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            השאירו פרטים
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
