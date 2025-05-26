
import React from 'react';
import { Check } from 'lucide-react';

interface ContactFormSubmitButtonProps {
  isSubmitting: boolean;
  text?: string;
}

export const ContactFormSubmitButton: React.FC<ContactFormSubmitButtonProps> = ({
  isSubmitting,
  text = "שלחו לי פרטים בוואטסאפ"
}) => {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      dir="rtl"
      className="w-full btn-primary flex items-center justify-center text-lg py-4"
      style={{ 
        fontFamily: 'Heebo, Assistant, Arial, sans-serif',
        unicodeBidi: 'embed',
        direction: 'rtl'
      }}
    >
      {isSubmitting ? (
        <span className="inline-flex items-center gap-2" dir="rtl" style={{ direction: 'rtl' }}>
          <span>מעבד...</span>
          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </span>
      ) : (
        <span className="inline-flex items-center gap-2" dir="rtl" style={{ direction: 'rtl' }}>
          <span>{text}</span>
          <Check className="h-5 w-5" />
        </span>
      )}
    </button>
  );
};
