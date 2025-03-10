
import React from 'react';

interface ContactFormConsentProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ContactFormConsent: React.FC<ContactFormConsentProps> = ({
  checked,
  onChange
}) => {
  return (
    <div className="col-span-2 mt-6">
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            checked={checked}
            onChange={onChange}
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
  );
};
