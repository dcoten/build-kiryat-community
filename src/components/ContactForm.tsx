
import React, { useState, useRef } from 'react';
import { useToast } from "@/hooks/use-toast";
import { User, Mail, Phone, MapPin, Users, Briefcase, MessageSquare, Check } from 'lucide-react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const { toast } = useToast();
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    residence: '',
    children: '',
    occupation: '',
    reason: '',
    consent: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.fullName || !formData.phone || !formData.email || !formData.residence) {
      toast({
        title: "שגיאה",
        description: "אנא מלאו את כל השדות המסומנים בכוכבית",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.consent) {
      toast({
        title: "שגיאה",
        description: "אנא אשרו את מדיניות הפרטיות",
        variant: "destructive",
      });
      return;
    }
    
    // Submit form
    setIsSubmitting(true);
    
    // יצירת טמפלייט להודעת המייל
    const templateParams = {
      to_email: 'DCOTEN@GMAIL.COM',
      from_name: formData.fullName,
      from_email: formData.email,
      phone: formData.phone,
      residence: formData.residence,
      children: formData.children || 'לא צוין',
      occupation: formData.occupation || 'לא צוין',
      reason: formData.reason || 'לא צוין',
      message: `שם מלא: ${formData.fullName}
טלפון: ${formData.phone}
אימייל: ${formData.email}
מקום מגורים: ${formData.residence}
ילדים: ${formData.children || 'לא צוין'}
עיסוק: ${formData.occupation || 'לא צוין'}
סיבה להתעניינות: ${formData.reason || 'לא צוין'}`
    };
    
    // Send email using EmailJS directly with parameters
    emailjs.send(
      'service_nbnb05r', // עדכון עם מזהה השירות שלך
      'template_b6wry0w', // עדכון עם מזהה התבנית שלך
      templateParams,
      'c4dFZ_6nWu3w7hv1m' // עדכון עם המפתח הציבורי שלך
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      setIsSubmitting(false);
      toast({
        title: "הפרטים נשלחו בהצלחה!",
        description: "ניצור איתכם קשר בהקדם",
      });
      
      // Reset form
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        residence: '',
        children: '',
        occupation: '',
        reason: '',
        consent: false
      });
    })
    .catch((error) => {
      console.error('Failed to send email:', error);
      setIsSubmitting(false);
      toast({
        title: "שגיאה בשליחת הטופס",
        description: "אירעה שגיאה בעת שליחת הטופס. אנא נסו שוב מאוחר יותר.",
        variant: "destructive",
      });
    });
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-kiryat-blue/10 to-kiryat-green/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="tag mb-3">הצטרפו אלינו</div>
          <h2 className="heading-lg mb-6">קחו את הצעד הראשון</h2>
          <p className="text-lg text-gray-600">
            השאירו פרטים ונחזור אליכם תוך 24 שעות לשיחה אישית ולהזמנה למפגש הזום הקרוב
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form 
            ref={form}
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-lg p-6 md:p-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  שם מלא <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="block w-full pr-10 py-3 border-gray-300 bg-gray-50 rounded-md focus:ring-kiryat-blue focus:border-kiryat-blue"
                    required
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  טלפון נייד <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="block w-full pr-10 py-3 border-gray-300 bg-gray-50 rounded-md focus:ring-kiryat-blue focus:border-kiryat-blue"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  דוא"ל <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full pr-10 py-3 border-gray-300 bg-gray-50 rounded-md focus:ring-kiryat-blue focus:border-kiryat-blue"
                    required
                  />
                </div>
              </div>

              {/* Current Residence */}
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  מקום מגורים נוכחי <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <MapPin className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="residence"
                    value={formData.residence}
                    onChange={handleChange}
                    className="block w-full pr-10 py-3 border-gray-300 bg-gray-50 rounded-md focus:ring-kiryat-blue focus:border-kiryat-blue"
                    required
                  />
                </div>
              </div>

              {/* Children */}
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  מספר וגיל הילדים (אם רלוונטי)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <Users className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="children"
                    value={formData.children}
                    onChange={handleChange}
                    className="block w-full pr-10 py-3 border-gray-300 bg-gray-50 rounded-md focus:ring-kiryat-blue focus:border-kiryat-blue"
                  />
                </div>
              </div>

              {/* Occupation */}
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  עיסוקים של בני הזוג
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <Briefcase className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                    className="block w-full pr-10 py-3 border-gray-300 bg-gray-50 rounded-md focus:ring-kiryat-blue focus:border-kiryat-blue"
                  />
                </div>
              </div>

              {/* Reason */}
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  למה אתם מתעניינים בגרעין?
                </label>
                <div className="relative">
                  <div className="absolute top-3 right-0 flex items-start pr-3 pointer-events-none">
                    <MessageSquare className="h-5 w-5 text-gray-400" />
                  </div>
                  <textarea
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    rows={4}
                    className="block w-full pr-10 py-3 border-gray-300 bg-gray-50 rounded-md focus:ring-kiryat-blue focus:border-kiryat-blue"
                  ></textarea>
                </div>
              </div>

              {/* Consent */}
              <div className="col-span-2">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="consent"
                      name="consent"
                      type="checkbox"
                      checked={formData.consent}
                      onChange={handleCheckboxChange}
                      className="h-4 w-4 text-kiryat-blue focus:ring-kiryat-blue border-gray-300 rounded"
                    />
                  </div>
                  <div className="mr-3 text-sm">
                    <label htmlFor="consent" className="font-medium text-gray-700">
                      אני מסכים/ה לקבל עדכונים על הגרעין ומאשר/ת את <a href="#" className="text-kiryat-blue underline">מדיניות הפרטיות</a>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center text-lg py-4"
              >
                {isSubmitting ? (
                  <span className="inline-flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    מעבד...
                  </span>
                ) : (
                  <span className="inline-flex items-center">
                    הצטרפו למסע
                    <Check className="ml-2 h-5 w-5" />
                  </span>
                )}
              </button>
            </div>
          </form>

          <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md">
            <div className="flex items-center justify-center space-x-6 rtl:space-x-reverse">
              <div className="text-center">
                <div className="text-kiryat-blue font-bold text-xl mb-1">12</div>
                <div className="text-sm text-gray-600">ימים למפגש הזום הבא</div>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div className="text-center">
                <div className="text-kiryat-blue font-bold text-xl mb-1">5/15</div>
                <div className="text-sm text-gray-600">משפחות שחסרות לנו</div>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div className="text-center">
                <div className="text-kiryat-blue font-bold text-xl mb-1">8/25</div>
                <div className="text-sm text-gray-600">חודשים למעבר המתוכנן</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
