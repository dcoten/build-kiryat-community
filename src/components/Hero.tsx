import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';
const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const opacity = 1 - Math.min(scrollY / 800, 0.8);
      const translateY = scrollY * 0.4;
      heroRef.current.style.opacity = String(opacity);
      heroRef.current.style.transform = `translateY(${translateY}px)`;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Using the uploaded galilview.jpeg image with absolute URL path */}
        <div className="absolute inset-0 bg-gradient-to-b from-kiryat-blue/30 to-kiryat-green/20 z-10"></div>
        <img src="/galilview.jpeg" alt="נוף גלילי קריית שמונה - הגרעין המשימתי של קריית שמונה במקום מדהים בצפון ישראל" className="object-cover w-full h-full" loading="eager" crossOrigin="anonymous" fetchPriority="high" />
      </div>

      {/* Content */}
      <div ref={heroRef} className="container mx-auto px-4 z-10 text-center">
        <div className="animate-fade-in max-w-4xl mx-auto">
          <h1 className="heading-xl text-white mb-4 text-balance shadow-text" style={{
          textShadow: '0 2px 4px rgba(0,0,0,0.6)'
        }}>
            לבנות את הציונות של המאה ה-21: הגרעין המשימתי של קריית שמונה
          </h1>
          
          <div className="text-xl md:text-2xl font-light text-white mb-8 max-w-3xl mx-auto space-y-4 text-balance" style={{
          textShadow: '0 1px 3px rgba(0,0,0,0.6)'
        }}>
            <p>
              חולמים על שינוי? מחפשים מקום לגדל בו משפחה עם קהילה חמה, חינוך טוב וטבע מסביב?
            </p>
            <p>אנחנו בתחילת הדרךלבנות קהילה חדשה ומגוונת בקריית שמונה – עם משפחות מכל הארץ.</p>
            <p>
              אם זה מסקרן אתכם – השאירו פרטים ונחזור אליכם עם מידע אישי בוואטסאפ.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-10">
            <a href="#contact" className="btn-primary text-lg md:text-base shadow-lg hover:-translate-y-1 transition-all">
              רוצים לשמוע עוד? השאירו פרטים
            </a>
            
            <AnimatedCounter end={7} />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-pulse">
        <a href="#חזון" className="flex flex-col items-center text-white/80 hover:text-white transition-colors">
          <span className="mb-2 text-sm">גלול למטה</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </div>;
};
export default Hero;