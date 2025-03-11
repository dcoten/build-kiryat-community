
import React, { useState, useRef } from 'react';
import { useToast } from "@/hooks/use-toast";
import { User, Mail, Phone, MapPin, Users, Briefcase, MessageSquare, Check } from 'lucide-react';
import emailjs from 'emailjs-com';
import { ContactFormData } from '@/types/contact';
import { ContactFormField } from '@/components/ContactFormField';
import { ContactFormTextArea } from '@/components/ContactFormTextArea';
import { ContactFormSubmitButton } from '@/components/ContactFormSubmitButton';
import { ContactFormConsent } from '@/components/ContactFormConsent';
import { ContactFormStats } from '@/components/ContactFormStats';

const ContactForm = () => {
  const { toast } = useToast();
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<ContactFormData>({
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
    
    // Create email template params - make sure to include to_email for EmailJS
    const templateParams = {
      from_name: formData.fullName,
      from_email: formData.email,
      to_email: "kirya.team@gmail.com", // Add a recipient email address
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
    
    // Send email using EmailJS
    emailjs.init("c4dFZ_6nWu3w7hv1m"); // Initialize explicitly
    
    emailjs.send(
      'service_nbnb05r',
      'template_b6wry0w',
      templateParams
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

      // Clear the form physically
      if (form.current) {
        form.current.reset();
      }
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
    <div id="contact" className="section-padding bg-gradient-to-b from-kiryat-blue/10 to-kiryat-green/10">
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
              <ContactFormField
                label="שם מלא"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                icon={<User className="h-5 w-5 text-gray-400" />}
                required
              />

              <ContactFormField
                label="טלפון נייד"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                icon={<Phone className="h-5 w-5 text-gray-400" />}
                required
              />

              <ContactFormField
                label="דוא״ל"
                name="email"
                value={formData.email}
                onChange={handleChange}
                icon={<Mail className="h-5 w-5 text-gray-400" />}
                required
              />

              <ContactFormField
                label="מקום מגורים נוכחי"
                name="residence"
                value={formData.residence}
                onChange={handleChange}
                icon={<MapPin className="h-5 w-5 text-gray-400" />}
                required
              />

              <ContactFormField
                label="מספר וגיל הילדים (אם רלוונטי)"
                name="children"
                value={formData.children}
                onChange={handleChange}
                icon={<Users className="h-5 w-5 text-gray-400" />}
              />

              <ContactFormField
                label="עיסוקים של בני הזוג"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                icon={<Briefcase className="h-5 w-5 text-gray-400" />}
              />

              <ContactFormTextArea
                label="למה אתם מתעניינים בגרעין?"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                icon={<MessageSquare className="h-5 w-5 text-gray-400" />}
              />
            </div>

            <ContactFormConsent
              checked={formData.consent}
              onChange={handleCheckboxChange}
            />

            <div className="mt-8">
              <ContactFormSubmitButton isSubmitting={isSubmitting} />
            </div>
          </form>

          <ContactFormStats />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
