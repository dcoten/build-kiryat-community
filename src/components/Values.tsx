
import React from 'react';
import { Users, Heart, BookOpen, Handshake, Target, MapPin } from 'lucide-react';

interface Value {
  icon: React.ReactNode;
  title: string;
  description: string;
  quote: string;
}

const Values = () => {
  const values: Value[] = [
    {
      icon: <Users className="h-10 w-10 text-kiryat-blue" />,
      title: "קיום שותפות בין שונים",
      description: "יצירת חיים משותפים בין אנשים מרקעים, עדות וגישות שונות",
      quote: "חיזוק העם והמדינה חשוב לנו יותר מההבדלים בינינו"
    },
    {
      icon: <Heart className="h-10 w-10 text-kiryat-blue" />,
      title: "כבוד הדדי",
      description: "יחס מכבד לכל תרבות, מסורת ואורח חיים בתוך הקהילה ומחוצה לה",
      quote: "הכבוד ההדדי הוא הבסיס ליצירת קהילה שמחברת בין עולמות"
    },
    {
      icon: <BookOpen className="h-10 w-10 text-kiryat-green" />,
      title: "למידה והעשרה בין-תרבותית",
      description: "בניית קהילה לומדת ומתפתחת שמעצימה את חבריה ואת סביבתה",
      quote: "אנחנו מאמינים בלמידה מתמדת והעשרה הדדית כדרך חיים"
    },
    {
      icon: <Handshake className="h-10 w-10 text-kiryat-green" />,
      title: "שותפות אמיתית",
      description: "עבודה משותפת עם תושבי העיר והאזור מתוך כבוד ושוויון",
      quote: "אנחנו באים לא רק לגור, אלא להיות חלק אמיתי מהמרקם האנושי המקומי"
    },
    {
      icon: <Target className="h-10 w-10 text-kiryat-earth" />,
      title: "מחויבות לפעילות משימתית",
      description: "תרומה מוחשית לחיזוק האזור דרך יוזמות חברתיות וקהילתיות",
      quote: "אנחנו רואים בהשתקעות בצפון שליחות לאומית ואישית"
    },
    {
      icon: <MapPin className="h-10 w-10 text-kiryat-blue" />,
      title: "חיבור למקום ולקהילה",
      description: "מחויבות, קשר וכבוד לקהילה המקומית בקריית שמונה ומורשתה",
      quote: "אנחנו באים להתחבר לקהילה ולהיות חלק ממנה"
    }
  ];

  return (
    <section id="ערכים" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="tag mb-3">ערכי הליבה</div>
          <h2 className="heading-lg mb-6">הערכים שמנחים אותנו</h2>
          <p className="text-lg text-gray-600">
            הערכים המשותפים שלנו מהווים את המצפן שמוביל את דרכנו ואת הבסיס לקהילה שאנו בונים יחד
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-kiryat-lightgray/50 flex flex-col"
            >
              <div className="mb-4 flex items-center justify-center">
                <div className="p-4 rounded-full bg-kiryat-lightgray/30">
                  {value.icon}
                </div>
              </div>
              
              <h3 className="heading-md text-center mb-3 text-kiryat-blue">{value.title}</h3>
              <p className="text-gray-600 text-center mb-4 flex-grow">{value.description}</p>
              
              <div className="mt-auto">
                <div className="p-4 bg-kiryat-blue/5 rounded-lg border-r-4 border-kiryat-blue">
                  <p className="text-gray-700 italic">"{value.quote}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
