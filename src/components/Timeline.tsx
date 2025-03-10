
import React from 'react';
import { Calendar, Home, Users, BookOpen, Building } from 'lucide-react';

interface TimelineStep {
  icon: React.ReactNode;
  title: string;
  date: string;
  description: string;
}

const Timeline = () => {
  const steps: TimelineStep[] = [
    {
      icon: <Users className="h-10 w-10 text-kiryat-blue" />,
      title: "גיבוש הקבוצה המייסדת",
      date: "פברואר-מרץ 2025",
      description: "מיפוי צרכים, בניית חיבורים עם הקהילות המקומיות, התנעת תהליכי גיבוש הגרעין"
    },
    {
      icon: <Calendar className="h-10 w-10 text-kiryat-blue" />,
      title: "הרחבת הגרעין",
      date: "אפריל-מאי 2025",
      description: "הגעה לכ-15 משפחות, איתור פתרונות דיור, הקמת צוותי פעולה והתמחות בתחומים שונים"
    },
    {
      icon: <Home className="h-10 w-10 text-kiryat-green" />,
      title: "הכנות אחרונות",
      date: "יוני-יולי 2025",
      description: "סגירת הסכמי דיור, בניית מערכי קליטה, מפגשי הכנה אינטנסיביים, חיבורים עם מערכות החינוך"
    },
    {
      icon: <Building className="h-10 w-10 text-kiryat-green" />,
      title: "המעבר המשותף",
      date: "אוגוסט 2025",
      description: "מעבר מתואם, שילוב במערכות החינוך, התחלת פעילות קהילתית משותפת עם התושבים הקיימים"
    },
    {
      icon: <BookOpen className="h-10 w-10 text-kiryat-earth" />,
      title: "שנה ראשונה",
      date: "2025-2026",
      description: "בניית הקהילה, פיתוח יוזמות משותפות, השתלבות בעיר, הנחת היסודות לצמיחה ארוכת טווח"
    }
  ];

  return (
    <section id="תוכנית" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="tag mb-3">מפת הדרכים</div>
          <h2 className="heading-lg mb-6">המסע המשותף - מפברואר 2025 עד אוגוסט 2025</h2>
          <p className="text-lg text-gray-600">
            תכנית מסודרת ומדורגת שתאפשר לנו להגיע מוכנים ומאורגנים למעבר המשותף
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 w-1 bg-kiryat-blue/20 transform md:-translate-x-1/2"></div>
          
          {/* Timeline steps */}
          {steps.map((step, index) => (
            <div key={index} className="relative mb-12 fade-in-section">
              <div className="flex flex-col md:flex-row items-start md:items-center">
                {/* Icon */}
                <div className="absolute left-0 md:left-1/2 w-9 h-9 bg-white rounded-full flex items-center justify-center z-10 border-4 border-kiryat-lightgray transform md:-translate-x-1/2 shadow-md">
                  <div className="w-5 h-5 rounded-full bg-kiryat-blue"></div>
                </div>
                
                {/* Content */}
                <div className={`mr-16 md:mr-0 ${index % 2 === 0 ? 'md:ml-auto md:text-left md:pr-16' : 'md:mr-auto md:pl-16 md:text-right'} md:w-1/2 pt-1`}>
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-kiryat-lightgray/50 rounded-lg mr-4">
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="font-heebo font-bold text-xl text-kiryat-blue">{step.title}</h3>
                        <p className="text-kiryat-green font-medium">{step.date}</p>
                      </div>
                    </div>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
