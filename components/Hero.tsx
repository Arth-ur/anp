import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://picsum.photos/id/433/1920/1080")', 
        }}
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
        <h3 className="text-xl md:text-2xl font-sans font-light tracking-[0.3em] mb-4 uppercase">
          Nous nous marions
        </h3>
        <h1 className="text-6xl md:text-8xl font-serif italic mb-6">
          Pauline & Arthur
        </h1>
        <div className="h-px w-24 bg-white mb-6"></div>
        <p className="text-2xl md:text-3xl font-serif">
          2 Mai 2026
        </p>
        <p className="mt-2 text-lg font-sans font-light tracking-wide">
          La Ferté-Bernard & Beillé
        </p>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-white" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;