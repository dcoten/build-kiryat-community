
import React from 'react';
import { User, MapPin, Quote } from 'lucide-react';

interface FamilyStory {
  name: string;
  origin: string;
  occupation: string;
  quote: string;
  image?: string;
}

const Stories = () => {
  const stories: FamilyStory[] = [
    {
      name: "משפחת כהן",
      origin: "תל אביב",
      occupation: "חינוך וטכנולוגיה",
      quote: "אנחנו מאמינים שבקריית שמונה יש הזדמנות ייחודית לחיבור בין עולמות וליצירת קהילה משמעותית."
    },
    {
      name: "משפחת לוי",
      origin: "באר שבע",
      occupation: "רפואה ויזמות",
      quote: "רצינו לקחת חלק במשהו גדול מאיתנו, להיות חלק מסיפור ההתחדשות של הצפון."
    },
    {
      name: "משפחת ישראלי",
      origin: "ירושלים",
      occupation: "אמנות וחינוך",
      quote: "חיפשנו קהילה ערכית שתהיה משפחה שנייה, ובגרעין הרגשנו בבית מהרגע הראשון."
    },
    {
      name: "משפחת אברהמי",
      origin: "חיפה",
      occupation: "הייטק ותיירות",
      quote: "הצפון הוא העתיד של ישראל, ואנחנו רוצים להיות חלק מהעתיד הזה."
    }
  ];

  return (
    <section id="המשפחות" className="section-padding bg-kiryat-lightgray/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="tag mb-3">משפחות מובילות</div>
          <h2 className="heading-lg mb-6">האנשים שכבר בדרך - משפחות קריית שמונה</h2>
          <p className="text-lg text-gray-600">
            הכירו את המשפחות שכבר החליטו להצטרף למסע המשותף לקריית שמונה.
            אלו האנשים שיבנו יחד את הקהילה החדשה - משפחות עוברים לגור בקריית שמונה כחלק מהגרעין המשימתי.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              <div className="h-40 bg-gradient-to-r from-kiryat-blue to-kiryat-green relative overflow-hidden">
                {story.image ? (
                  <img 
                    src={story.image} 
                    alt={`${story.name} - משפחה בגרעין קריית שמונה`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <User size={60} className="text-white/40" />
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="font-heebo font-bold text-xl mb-2 text-kiryat-blue">{story.name}</h3>
                
                <div className="flex items-center text-gray-600 text-sm mb-3">
                  <MapPin size={14} className="inline mr-1" />
                  <span>{story.origin}</span>
                  <span className="mx-2">•</span>
                  <span>{story.occupation}</span>
                </div>
                
                <div className="relative mt-4 pt-4">
                  <Quote size={20} className="absolute top-0 right-0 text-kiryat-blue/20" />
                  <p className="text-gray-700 leading-relaxed">{story.quote}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#contact" className="btn-secondary inline-block">
            רוצים להצטרף למשפחות המובילות?
          </a>
        </div>
      </div>
    </section>
  );
};

export default Stories;
