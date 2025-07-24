import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => (
  <div className="">
    <h2 className="text-white text-base leading-tight font-bold ">{title}</h2>
    {subtitle && (
      <p className="text-gray-400 text-sm mt-1">{subtitle}</p>
    )}
  </div>
);

export default SectionTitle; 