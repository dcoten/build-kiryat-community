
import React from 'react';
export const ContactFormStats: React.FC = () => {
  return <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md">
      <div className="flex items-center justify-center space-x-6 rtl:space-x-reverse">
        <div className="text-center">
          <div className="text-kiryat-blue font-bold text-xl mb-1">12</div>
          <div className="text-sm text-gray-600">ימים למפגש הזום הבא</div>
        </div>
        <div className="h-12 w-px bg-gray-300"></div>
        <div className="text-center">
          <div className="text-kiryat-blue font-bold text-xl mb-1">8/15</div>
          <div className="text-sm text-gray-600">משפחות שחסרות לנו</div>
        </div>
        <div className="h-12 w-px bg-gray-300"></div>
        <div className="text-center">
          <div className="text-kiryat-blue font-bold text-xl mb-1">8/25</div>
          <div className="text-sm text-gray-600">אוגוסט הקרוב - המעבר המתוכנן</div>
        </div>
      </div>
    </div>;
};
