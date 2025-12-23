import React from 'react';
import Section from './Section';
import { Church, Wine, MapPin } from 'lucide-react';
import egliseImage from '../eglise.jpg';
import receptionImage from '../reception.jpg';

const Schedule: React.FC = () => {
  return (
    <Section id="programme" className="bg-wedding-cream text-center">
      <h2 className="text-4xl md:text-5xl font-serif text-wedding-charcoal mb-16 italic">
        Le Programme
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Cérémonie */}
        <div className="flex flex-col items-center p-6 bg-white shadow-sm rounded-sm h-full transform transition hover:-translate-y-1 duration-300">
          <div className="mb-6 p-4 rounded-full bg-wedding-cream">
            <Church className="w-8 h-8 text-wedding-sage" />
          </div>
          <h3 className="text-2xl font-serif mb-2">La Cérémonie</h3>
          <p className="text-wedding-gold font-sans font-bold mb-4">14h00</p>
          <p className="text-gray-600 mb-1">Église Notre-Dame-des-Marais</p>
          <p className="text-gray-500 text-sm mb-4">Pl. Sadi Carnot, 72400 La Ferté-Bernard</p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Notre-Dame-des-Marais+La+Ferté-Bernard"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-xs font-bold uppercase tracking-widest text-wedding-sage hover:text-wedding-gold mt-auto"
          >
            <MapPin className="w-4 h-4 mr-1" /> Voir sur la carte
          </a>
        </div>

        {/* Photo Image Place holder */}
        <div className="hidden md:block h-80 rounded-sm overflow-hidden shadow-md">
            <img src={egliseImage} alt="Eglise" className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700" />
        </div>

        {/* Photo Image Place holder */}
        <div className="hidden md:block h-80 rounded-sm overflow-hidden shadow-md md:order-last">
             <img src={receptionImage} alt="Réception" className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700" />
        </div>

        {/* Réception */}
        <div className="flex flex-col items-center p-6 bg-white shadow-sm rounded-sm h-full transform transition hover:-translate-y-1 duration-300">
          <div className="mb-6 p-4 rounded-full bg-wedding-cream">
            <Wine className="w-8 h-8 text-wedding-sage" />
          </div>
          <h3 className="text-2xl font-serif mb-2">La Réception</h3>
          <p className="text-wedding-gold font-sans font-bold mb-4">17h00</p>
          <p className="text-gray-600 mb-1">La Grange de Bresteau</p>
          <p className="text-gray-500 text-sm mb-4">31 Rue de la Gare, 72160 Beillé</p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Grange+de+Bresteau+31+Rue+de+la+Gare+72160+Beillé"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-xs font-bold uppercase tracking-widest text-wedding-sage hover:text-wedding-gold mt-auto"
          >
             <MapPin className="w-4 h-4 mr-1" /> Voir sur la carte
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Schedule;
