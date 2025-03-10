
import React from 'react';
import { 
  Briefcase, Shield, GraduationCap, Home, 
  UsersRound, Clock, MessageCircleQuestion 
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  icon: React.ReactNode;
  question: string;
  answer: React.ReactNode;
}

const FAQ = () => {
  const faqs: FAQ[] = [
    {
      icon: <Briefcase className="h-5 w-5" />,
      question: "איך מתפרנסים בקריית שמונה?",
      answer: (
        <>
          <p>קריית שמונה מציעה מגוון אפשרויות תעסוקה:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>עבודה מרחוק - רבים מחברי הגרעין ימשיכו לעבוד במשרותיהם הנוכחיות</li>
            <li>תעסוקה מקומית - מערכות חינוך, רפואה, שירותים ציבוריים</li>
            <li>יזמות - הגרעין יתמוך בפיתוח יוזמות עסקיות מקומיות</li>
            <li>פארק תעשייה - ישנן חברות טכנולוגיה באזור התעשייה</li>
          </ul>
          <p className="mt-2">אנו עובדים עם גורמים עירוניים וממשלתיים לפיתוח מענים תעסוקתיים מותאמים.</p>
        </>
      )
    },
    {
      icon: <Shield className="h-5 w-5" />,
      question: "מה לגבי המצב הביטחוני?",
      answer: (
        <>
          <p>אנחנו מתייחסים למצב הביטחוני בכובד ראש:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>העיר מוגנת היטב ויש מענה ביטחוני מתאים</li>
            <li>לכל המבנים יש מרחבים מוגנים תקניים</li>
            <li>כחלק מהגרעין, נעבוד על חיזוק החוסן הקהילתי בשגרה ובחירום</li>
          </ul>
          <p className="mt-2">דווקא בימים אלו, הגעה לאזור היא הבעת אמון ותרומה לביטחון הלאומי של ישראל.</p>
        </>
      )
    },
    {
      icon: <GraduationCap className="h-5 w-5" />,
      question: "איך החינוך באזור?",
      answer: (
        <>
          <p>מערכת החינוך בקריית שמונה מגוונת ומתפתחת:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>מוסדות חינוך ממלכתיים, ממלכתיים-דתיים ומסגרות ייחודיות</li>
            <li>גני ילדים איכותיים ובתי ספר יסודיים ותיכוניים</li>
            <li>הגרעין ייצור מענים משלימים לפי הצורך (חוגים, העשרה, למידה משותפת)</li>
          </ul>
          <p className="mt-2">אחד מהיעדים המרכזיים של הגרעין הוא חיזוק מערכת החינוך המקומית.</p>
        </>
      )
    },
    {
      icon: <Home className="h-5 w-5" />,
      question: "אילו פתרונות דיור יש?",
      answer: (
        <>
          <p>בקריית שמונה ישנם מספר פתרונות דיור:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>שכירות - דירות 3-5 חדרים במחירים נוחים (3,000-4,500 ש"ח)</li>
            <li>רכישה - בתים ודירות במחירים נמוכים משמעותית ממרכז הארץ</li>
            <li>שיפוץ - אפשרות לרכישת נכסים ושיפוצם במחירים אטרקטיביים</li>
          </ul>
          <p className="mt-2">הגרעין עובד מול העירייה למיפוי אפשרויות דיור מתאימות למשפחות.</p>
        </>
      )
    },
    {
      icon: <UsersRound className="h-5 w-5" />,
      question: "האם יש דרישות קבלה לגרעין?",
      answer: (
        <>
          <p>הצטרפות לגרעין כוללת מספר מרכיבים:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>התאמה ערכית - הזדהות עם חזון הגרעין ומטרותיו</li>
            <li>מחויבות - נכונות להשקיע בבניית הקהילה ובפעילות משותפת</li>
            <li>השתתפות בתהליך - מפגשי היכרות, סמינרים, והכנה לקראת המעבר</li>
          </ul>
          <p className="mt-2">חשוב לנו מגוון ושונות - אנחנו מחפשים משפחות מרקעים שונים שיחד יצרו קהילה עשירה ומגוונת.</p>
        </>
      )
    },
    {
      icon: <Clock className="h-5 w-5" />,
      question: "מה המחויבות הנדרשת?",
      answer: (
        <>
          <p>המחויבות לגרעין כוללת:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>זמן - השתתפות במפגשים חודשיים (פרונטליים ובזום) לקראת המעבר</li>
            <li>נוכחות - השתתפות בפעילויות הגרעין לאחר המעבר (אחת לשבועיים בערך)</li>
            <li>תרומה - נכונות לתרום מהידע והיכולות האישיות לטובת הקהילה והאזור</li>
          </ul>
          <p className="mt-2">אנחנו מכירים באילוצי המשפחות השונות ופועלים ליצירת מרחב שמתאים למגוון אורחות חיים.</p>
        </>
      )
    },
  ];

  return (
    <section id="שאלות" className="section-padding bg-kiryat-lightgray/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="tag mb-3">תשובות</div>
          <h2 className="heading-lg mb-6">השאלות האמיתיות שכולם שואלים</h2>
          <p className="text-lg text-gray-600">
            קיבצנו את השאלות הנפוצות ביותר שאנשים שואלים כשהם שוקלים להצטרף לגרעין
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border rounded-lg px-6 py-2 border-kiryat-blue/10 data-[state=open]:bg-kiryat-blue/5"
              >
                <AccordionTrigger className="flex items-center py-4 hover:no-underline">
                  <div className="flex items-center">
                    <div className="mr-3 p-2 rounded-full bg-kiryat-blue/10 text-kiryat-blue">
                      {faq.icon}
                    </div>
                    <h3 className="font-heebo font-semibold text-lg">{faq.question}</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pt-2 pb-4 pr-14">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-8 text-center p-6 bg-kiryat-blue/5 rounded-xl">
            <MessageCircleQuestion className="mx-auto h-10 w-10 text-kiryat-blue mb-4" />
            <h3 className="font-heebo font-semibold text-lg mb-3">יש לכם שאלות נוספות?</h3>
            <p className="text-gray-700 mb-4">אנחנו כאן כדי לענות על כל השאלות ולתת לכם את המידע הנדרש</p>
            <a href="#contact" className="btn-primary">צרו קשר</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
