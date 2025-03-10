
import React from 'react';

interface ContactFormTextAreaProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  icon: React.ReactNode;
  required?: boolean;
}

export const ContactFormTextArea: React.FC<ContactFormTextAreaProps> = ({
  label,
  name,
  value,
  onChange,
  icon,
  required = false
}) => {
  return (
    <div className="col-span-2">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <div className="absolute top-3 right-0 flex items-start pr-3 pointer-events-none">
          {icon}
        </div>
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          rows={4}
          className="block w-full pr-10 py-3 border-gray-300 bg-gray-50 rounded-md focus:ring-kiryat-blue focus:border-kiryat-blue"
          required={required}
        ></textarea>
      </div>
    </div>
  );
};
