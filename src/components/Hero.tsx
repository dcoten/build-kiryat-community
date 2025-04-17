
import React from 'react';
import { Button } from '@/components/ui/button';
import AnimatedCounter from './AnimatedCounter';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center text-white" style={{ backgroundImage: 'url(/galilview.jpeg)' }}>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">גרעין קריית שמונה</h1>
        
        {/* Add spacing between buttons */}
        <div className="flex justify-center items-center gap-6 mb-8">
          <a href="#vision">
            <Button variant="secondary">חזון</Button>
          </a>
          <a href="#families">
            <Button variant="secondary">המשפחות</Button>
          </a>
        </div>

        <p className="text-xl mb-8 max-w-2xl mx-auto">
          חולמים על שינוי? מחפשים מקום לגדל בו משפחה עם קהילה חמה, חינוך טוב וטבע מסביב?
          אנחנו בתחילת הדרך לבנות קהילה חדשה ומגוונת בקריית שמונה – עם משפחות מכל הארץ.
          אם זה מסקרן אתכם – השאירו פרטים ונחזור אליכם עם מידע אישי בוואטסאפ.
        </p>

        <div className="flex justify-center">
          <AnimatedCounter end={15} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
