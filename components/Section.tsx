import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className = "", id }) => {
  return (
    <section id={id} className={`py-16 md:py-20 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};