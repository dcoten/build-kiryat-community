
import React from 'react';
import { Facebook, Phone, Mail, ArrowUp, MessageCircle } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-kiryat-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-kiryat-blue font-bold">
                  קש
                </div>
                <span className="font-heebo font-bold text-lg">גרעין קריית שמונה</span>
              </div>
              <p className="text-white/80 max-w-md">
                מובילים את ההתחדשות של הצפון ויוצרים קהילה ערכית, מגוונת ומשפיעה בקריית שמונה
              </p>
            </div>
            
            <div className="flex flex-col items-center gap-4">
              <div className="flex space-x-4 rtl:space-x-reverse">
                <a 
                  href="https://facebook.com" 
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Facebook"
                  rel="noopener noreferrer"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="https://wa.me/972546734313?text=שלום,%20אני%20מעוניין%20לקבל%20פרטים%20נוספים!" 
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
                <a 
                  href="tel:+9721234567" 
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Phone"
                >
                  <Phone className="h-5 w-5" />
                </a>
                <a 
                  href="mailto:DCOTEN@GMAIL.COM" 
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
              
              <p className="text-white/70 text-sm">
                #גרעין_קריית_שמונה
              </p>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-white/60 mb-4 md:mb-0">
              © 2023 גרעין קריית שמונה. כל הזכויות שמורות.
            </div>
            
            <div className="flex space-x-6 rtl:space-x-reverse text-sm">
              <a href="https://privacy-policy" className="text-white/60 hover:text-white transition-colors">מדיניות פרטיות</a>
              <a href="https://terms" className="text-white/60 hover:text-white transition-colors">תנאי שימוש</a>
              <a href="#contact" className="text-white/60 hover:text-white transition-colors">צור קשר</a>
            </div>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 left-6 w-12 h-12 rounded-full bg-kiryat-blue text-white shadow-lg flex items-center justify-center hover:bg-kiryat-blue/90 transition-colors z-10"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    </footer>
  );
};

export default Footer;
