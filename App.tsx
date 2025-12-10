import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Schedule from './components/Schedule';
import Info from './components/Info';
import Rsvp from './components/Rsvp';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased text-wedding-charcoal bg-wedding-cream min-h-screen">
      <Navigation />
      <Hero />
      <Schedule />
      
      {/* Visual breaker with another photo */}
      <div 
        className="w-full h-64 md:h-96 bg-cover bg-center bg-fixed grayscale opacity-90"
        style={{ backgroundImage: 'url("https://picsum.photos/id/238/1920/600")' }}
      ></div>
      
      <Info />
      <Rsvp />

      <footer className="bg-wedding-charcoal text-wedding-cream py-10 text-center">
        <p className="font-serif italic text-2xl mb-2">Pauline & Arthur</p>
        <p className="text-xs font-sans tracking-widest uppercase opacity-70">2 Mai 2026</p>
        <div className="mt-8 text-xs text-gray-500">
          <p>Fait avec amour</p>
        </div>
      </footer>
    </div>
  );
};

export default App;