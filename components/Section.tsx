import React from 'react';
import { SectionProps } from '../types';

const Section: React.FC<SectionProps> = ({ id, className = '', children }) => {
  return (
    <section id={id} className={`py-20 px-6 md:px-12 max-w-5xl mx-auto ${className}`}>
      {children}
    </section>
  );
};

export default Section;