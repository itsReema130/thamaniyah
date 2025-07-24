import React, { ReactNode } from 'react';

interface HorizontalScrollProps {
  children: ReactNode;
  className?: string;
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({ children, className = '' }) => (
  <div
    className={`overflow-x-auto scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-800 rounded-lg py-2.5 px-1 ${className}`}
    style={{ scrollbarColor: '#533E7D #6B4080', scrollbarWidth: 'thin' }}
  >
    <div className="flex gap-4 w-max">
      {children}
    </div>
    <style jsx>{`
      /* Custom scrollbar for all browsers */
      div::-webkit-scrollbar {
        height: 16px;
        border-radius: 8px;
      }
      div::-webkit-scrollbar-thumb {
        background: #533E7D;
        border-radius: 8px;
      }
      div::-webkit-scrollbar-track {
        background: #533E7D;
        border-radius: 8px;
      }
    `}</style>
  </div>
);

export default HorizontalScroll; 