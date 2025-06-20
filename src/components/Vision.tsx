
import React, { useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, Milestone } from 'lucide-react';

const Vision = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const currentElements = document.querySelectorAll('.fade-in-section');
    currentElements.forEach(el => observer.observe(el));
    
    return () => {
      currentElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="חזון" className="section-padding relative overflow-hidden" ref={sectionRef}>
      {/* Background elements */}
      <div className="absolute -top-20 -right-40 w-80 h-80 bg-kiryat-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-kiryat-green/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="tag mb-3 fade-in-section">החזון שלנו</div>
          <h2 className="heading-lg mb-8 fade-in-section">למה דווקא עכשיו? למה דווקא קריית שמונה?</h2>
          
          <div className="space-y-10">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow fade-in-section">
              <h3 className="sr-only">מצב הצפון לאחר המלחמה - הזדמנות לחיזוק קריית שמונה</h3>
              <p className="text-lg leading-relaxed mb-4">
                <strong className="text-kiryat-blue">לאחר המלחמה, הצפון עומד בפני אתגרים חסרי תקדים. </strong>
                זוהי נקודת מפנה היסטורית שמחייבת אותנו לפעול. הגרעין המשימתי בקריית שמונה הוא צעד משמעותי להעצמת האזור ובניית עתיד חדש.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow fade-in-section">
              <h3 className="sr-only">יתרונות מיקום קריית שמונה - שער הכניסה לצפון</h3>
              <p className="text-lg leading-relaxed mb-4">
                <strong className="text-kiryat-green">קריית שמונה היא שער הכניסה לצפון - </strong>
                עיר עם פוטנציאל אדיר, טבע מרהיב, וקהילה מגוונת המחכה להתחדשות. המיקום האסטרטגי והמשאבים הקיימים יוצרים בסיס מושלם להתחדשות.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow fade-in-section">
              <h3 className="sr-only">החזון - מרכז אזורי חזק וצומח בקריית שמונה</h3>
              <p className="text-lg leading-relaxed">
                <strong className="text-kiryat-earth">החזון שלנו: </strong>
                יצירת מרכז אזורי חזק, צומח ומחובר, בעל איכות חיים גבוהה, שישמש מודל לערי פריפריה בישראל. מרכז שמשלב בין קהילות שונות, מעודד יזמות ויצירתיות, ומחזק את החוסן החברתי.
              </p>
            </div>
          </div>
          
          {/* Development Timeline */}
          <div className="mt-16 fade-in-section">
            <h3 className="heading-md mb-8 text-center">המסע מההווה לעתיד</h3>
            
            <div className="relative flex flex-col md:flex-row items-start justify-between">
              {/* Timeline line */}
              <div className="absolute top-7 left-0 right-0 h-1 bg-kiryat-blue/20 hidden md:block"></div>
              
              {/* Timeline steps */}
              {[
                { title: "היום", desc: "תחילת המסע", icon: <ArrowLeft className="text-kiryat-blue" /> },
                { title: "2025", desc: "הקמת הגרעין", icon: <ArrowLeft className="text-kiryat-blue" /> },
                { title: "2026", desc: "ביסוס קהילתי", icon: <ArrowLeft className="text-kiryat-blue" /> },
                { title: "2028", desc: "השפעה אזורית", icon: <ArrowLeft className="text-kiryat-green" /> }
              ].map((step, index) => (
                <div key={index} className="relative flex-1 text-center mb-8 md:mb-0">
                  <div className="flex justify-center mb-2">
                    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-md z-10 transition-transform hover:scale-110">
                      {step.icon}
                    </div>
                  </div>
                  <h4 className="font-heebo font-bold text-xl text-kiryat-blue">{step.title}</h4>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
