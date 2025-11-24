import React from 'react';

const SectionWrapper = ({ children, bgColor = 'bg-white', className = '' }) => {
  return (
    <section className={`${bgColor} ${className}`}>
      <div className="container mx-auto px-4 py-16 md:py-24">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;