import React, { useState, useRef, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";
import { User, Mail, Phone, MapPin, Users, Briefcase, MessageSquare } from 'lucide-react';
import emailjs from 'emailjs-com';
import { supabase } from '@/integrations/supabase/client';
import { ContactFormData } from '@/types/contact';
import { ContactFormField } from '@/components/ContactFormField';
import { ContactFormTextArea } from '@/components/ContactFormTextArea';
import { ContactFormSubmitButton } from '@/components/ContactFormSubmitButton';
import { ContactFormConsent } from '@/components/ContactFormConsent';
import { ContactFormStats } from '@/components/ContactFormStats';

// Initialize EmailJS with your public key
emailjs.init("c4dFZ_6nWu3w7hv1m");

// Declare global functions
declare global {
  interface Window {
    fbq: (...args: any[]) => void;
    gtag: (...args: any[]) => void;
  }
}

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

  // Check if tracking scripts are loaded
  useEffect(() => {
    const checkTracking = () => {
      if (typeof window !== 'undefined') {
        if (window.fbq) {
          console.log('✅ Facebook Pixel loaded successfully');
        } else {
          console.log('❌ Facebook Pixel not loaded');
        }
        
        if (window.gtag) {
          console.log('✅ Google Analytics loaded successfully');
        } else {
          console.log('❌ Google Analytics not loaded');
        }
      }
    };
    
    // Check immediately and after a delay
    checkTracking();
    setTimeout(checkTracking, 2000);
  }, []);

  // Function to track Facebook Pixel events
  const trackFacebookPixel = (eventType: string, data?: any) => {
    if (typeof window !== 'undefined' && window.fbq) {
      console.log(`🔥 Tracking Facebook Pixel event: ${eventType}`, data);
      
      // Use trackCustom for custom events, track for standard events
      if (eventType === 'Lead') {
        window.fbq('track', 'Lead', data);
      } else {
        // For custom events like GareenFormSubmit, use trackCustom
        window.fbq('trackCustom', eventType, data);
      }
    } else {
      console.log('❌ Facebook Pixel not available for tracking:', eventType);
    }
  };

  // Function to track Google Analytics events
  const trackGoogleAnalytics = (eventName: string, parameters?: any) => {
    if (typeof window !== 'undefined' && window.gtag) {
      console.log(`📊 Tracking Google Analytics event: ${eventName}`, parameters);
      window.gtag('event', eventName, parameters);
    } else {
      console.log('❌ Google Analytics not available for tracking:', eventName);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const saveToSupabase = async (data: ContactFormData) => {
    try {
      const { error } = await supabase
        .from('contacts')
        .insert([
          { 
            full_name: data.fullName,
            email: data.email,
            phone: data.phone,
            residence: data.residence,
            children: data.children || null,
            occupation: data.occupation || null,
            reason: data.reason || null
          }
        ]);
      
      if (error) throw error;
      console.log('Saved to Supabase successfully');
      return true;
    } catch (error) {
      console.error('Error saving to Supabase:', error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
    
    // Create email template params
    const templateParams = {
      from_name: formData.fullName,
      from_email: formData.email,
      to_email: "DCOTEN@GMAIL.COM",
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
    
    // Attempt to save to Supabase first
    const savedToSupabase = await saveToSupabase(formData);
    
    // Log the params being sent (for debugging)
    console.log("Sending email with params:", templateParams);
    
    // Send email using EmailJS
    emailjs.send(
      'service_nbnb05r',   // Service ID
      'template_l2z11qt',  // Updated Template ID
      templateParams
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      setIsSubmitting(false);
      
      // 🔥 TRACK EVENTS ON SUCCESS
      console.log('📊 Tracking successful form submission');
      
      // Track Facebook Pixel events
      trackFacebookPixel('Lead');
      trackFacebookPixel('GareenFormSubmit', {
        content_name: 'Gareen Contact Form',
        content_category: 'Lead Generation',
        value: 1,
        currency: 'ILS',
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        residence: formData.residence,
        form_type: 'contact_form',
        timestamp: new Date().toISOString()
      });
      
      // Track Google Analytics events
      trackGoogleAnalytics('generate_lead', {
        event_category: 'engagement',
        event_label: 'Gareen Contact Form',
        value: 1,
        currency: 'ILS',
        form_type: 'contact_form',
        residence: formData.residence
      });
      
      trackGoogleAnalytics('form_submit', {
        event_category: 'engagement', 
        event_label: 'Contact Form Submission',
        form_name: 'gareen_contact_form'
      });
      
      if (savedToSupabase) {
        toast({
          title: "הפרטים נשלחו בהצלחה!",
          description: "הפרטים נשמרו במערכת וניצור איתכם קשר בהקדם",
        });
      } else {
        toast({
          title: "הפרטים נשלחו בהצלחה!",
          description: "המייל נשלח אך התרחשה שגיאה בשמירת הפרטים במערכת. ניצור איתכם קשר בהקדם",
        });
      }
      
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
      
      if (savedToSupabase) {
        toast({
          title: "הפרטים נשמרו, אך אירעה שגיאה בשליחת המייל",
          description: "הפרטים נשמרו במערכת, אך אירעה שגיאה בשליחת המייל. ניצור איתכם קשר בהקדם או צרו קשר ישירות במייל dany@north-il.center",
          variant: "destructive",
        });
      } else {
        toast({
          title: "שגיאה בשליחת הטופס",
          description: "אירעה שגיאה בעת שליחת הטופס. אנא נסו שוב מאוחר יותר או צרו קשר ישירות במייל dany@north-il.center",
          variant: "destructive",
        });
      }
    });
  };

  return (
    <div id="contact" className="section-padding bg-gradient-to-b from-kiryat-blue/10 to-kiryat-green/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="tag mb-3">הצטרפו אלינו</div>
          <h2 className="heading-lg mb-6">רוצים לשמוע עוד? השאירו כאן פרטים ונשלח לכם מידע אישי בוואטסאפ</h2>
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
                label="משהו שחשוב לכם שנדע?"
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
              <ContactFormSubmitButton isSubmitting={isSubmitting} text="שלחו לי פרטים בוואטסאפ" />
            </div>
          </form>

          <div className="mt-4 text-center text-gray-600">
            ההצטרפות אינה מחייבת – רק תקבלו מאיתנו מידע חם מהשטח.
          </div>

          <ContactFormStats />

          <div className="mt-12 text-center space-y-2 text-gray-700">
            <p>אנחנו רק בתחילת הדרך – אבל יש התרגשות, ויש חזון.</p>
            <p>נשמח שתהיו חלק ממנו.</p>
            <p className="font-medium">דני</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
