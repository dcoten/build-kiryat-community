
import React from 'react';

interface ContactFormFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: React.ReactNode;
  required?: boolean;
}

export const ContactFormField: React.FC<ContactFormFieldProps> = ({
  label,
  name,
  value,
  onChange,
  icon,
  required = false
}) => {
  return (
    <div className="col-span-1">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          {icon}
        </div>
        <input
          type={name === 'email' ? 'email' : name === 'phone' ? 'tel' : 'text'}
          name={name}
          value={value}
          onChange={onChange}
          className="block w-full pr-10 py-3 border-gray-300 bg-gray-50 rounded-md focus:ring-kiryat-blue focus:border-kiryat-blue"
          required={required}
        />
      </div>
    </div>
  );
};
