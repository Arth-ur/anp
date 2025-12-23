import React from 'react';
import Section from './Section';
import { Train, Car, BedDouble, MessageCircle, Download, ParkingCircle, Camera } from 'lucide-react';

const Info: React.FC = () => {
  return (
    <Section id="infos" className="">
      <h2 className="text-4xl md:text-5xl font-serif text-center text-wedding-charcoal mb-16 italic">
        Infos Pratiques
      </h2>

      <div className="space-y-16">

        {/* Train Info */}
        <div id="train" className="bg-white p-8 border-l-4 border-wedding-sage shadow-sm">
          <div className="flex items-start mb-4">
            <Train className="w-6 h-6 text-wedding-sage mr-3 mt-1" />
            <h3 className="text-xl font-serif font-bold text-gray-800">Venir en Train</h3>
          </div>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Il est possible de se rendre en train à La Ferté-Bernard. Le déplacement entre la cérémonie et la réception est également possible en train.
            Il faut compter environ 50 minutes pour le trajet complet entre l'église et la Grange de Bresteau.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-2">
            <li><strong>Gare de La Ferté-Bernard :</strong> 1,2km de l'église</li>
            <li><strong>Gare de Connerré-Beillé :</strong> 1,6km de la Grange</li>
            <li><strong>Départ navette train :</strong> 16h58 (Ferté-Bernard)</li>
          </ul>
          <div className="mt-4 pt-4 border-t border-wedding-sage/20">
            <a href="https://ter-fiches-horaires.sncf.fr/publish/L23%20RV%20du%201er%20septembre%20au%2013%20d%C3%83%C2%A9embre%202025%20V1.pdf" target="_blank"  rel="noopener noreferrer" className="inline-flex items-center text-wedding-darkSage hover:underline font-medium">
              <Download className="w-4 h-4 mr-2" />
              Télécharger la fiche horaire
            </a>
          </div>
        </div>

        {/* Carpool & WhatsApp */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div id="covoiturage" className="bg-white p-8 border-l-4 border-wedding-gold shadow-sm">
                <div className="flex items-start mb-4">
                    <Car className="w-6 h-6 text-wedding-gold mr-3 mt-1" />
                    <h3 className="text-xl font-serif font-bold text-gray-800">Covoiturage</h3>
                </div>
                <p className="text-gray-600 mb-6 text-sm">
                    Pour faciliter vos déplacements, pensez au covoiturage.
                </p>
                <div className="flex flex-col space-y-3">
                    <a href="https://www.covoitribu.fr/poll/94292_o02I28M0xMvL7J" target="_blank" rel="noreferrer" className="text-wedding-sage hover:underline font-semibold">
                        🚗 Proposer/Chercher un trajet ALLER
                    </a>
                    <a href="https://www.covoitribu.fr/poll/94293_EQiQJYWLMt6ezA" target="_blank" rel="noreferrer" className="text-wedding-sage hover:underline font-semibold">
                        🚗 Proposer/Chercher un trajet RETOUR
                    </a>
                </div>
                <div id="parking" className="mt-4 pt-4 border-t border-wedding-sage/20">
                    <div className="flex flex-col text-xs space-y-1">
                        <p className="text-gray-500">
                          Des parkings sont disponibles à proximité de l'église.
                        </p>
                        <a href="https://maps.app.goo.gl/2EAmCwAAFLMp9AV97" target="_blank" rel="noreferrer" className="text-wedding-sage hover:underline font-semibold">
                            <ParkingCircle className="w-4 h-4 inline-block mr-1" /> Place de la République (Église)
                        </a>
                        <a href="https://maps.app.goo.gl/Ham49ja93yMA4L4LA" target="_blank" rel="noreferrer" className="text-wedding-sage hover:underline font-semibold">
                            <ParkingCircle className="w-4 h-4 inline-block mr-1" /> Rue Virette
                        </a>
                        <a href="https://maps.app.goo.gl/tJsfgLMhFEP353YXA" target="_blank" rel="noreferrer" className="text-wedding-sage hover:underline font-semibold">
                            <ParkingCircle className="w-4 h-4 inline-block mr-1" /> Place Desnos
                        </a>
                        <a href="https://maps.app.goo.gl/fbuDLHfMMyHGaL56A" target="_blank" rel="noreferrer" className="text-wedding-sage hover:underline font-semibold">
                            <ParkingCircle className="w-4 h-4 inline-block mr-1" /> Place Saint-Julien
                        </a>
                    </div>
                </div>
            </div>

            <div className="bg-white p-8 border-l-4 border-green-600 shadow-sm">
                <div id="whatsapp" className="flex items-start mb-4">
                    <MessageCircle className="w-6 h-6 text-green-600 mr-3 mt-1" />
                    <h3 className="text-xl font-serif font-bold text-gray-800">Communauté WhatsApp</h3>
                </div>
                <p className="text-gray-600 mb-6 text-sm">
                    Rejoignez le groupe pour recevoir les annonces importantes et partager vos photos le jour J.
                </p>
                <a
                    href="https://chat.whatsapp.com/FigUWasGyNaBu6RbnX8yB3"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block bg-green-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-green-700 transition"
                >
                    Rejoindre le groupe
                </a>
                <div id="photos" className="flex items-start mb-4 border-t border-wedding-sage/20 mt-4 pt-4">
                    <Camera className="w-6 h-6 text-green-600 mr-3 mt-1" />
                    <h3 className="text-xl font-serif font-bold text-gray-800">Photos</h3>
                </div>
                <p className="text-gray-600 text-sm">
                    Un photographe professionnel sera présent, mais n'hésitez pas à partager vos clichés par
                    <a href="https://fromsmash.com" target="_blank" rel="noreferrer" className="inline-block text-wedding-sage hover:underline font-semibold">
                    Smash
                    </a>
                    ou
                    <a href="https://swisstransfer.com" target="_blank" rel="noreferrer" className="inline-block text-wedding-sage hover:underline font-semibold">
                    SwissTransfer
                    </a>
                    à l'adresse email suivante :
                </p>
                <a
                    href="mailto:photos@pauline-et-arthur.fr"
                    className="inline-block mt-2 text-wedding-sage hover:underline font-semibold"
                >
                    photos@pauline-et-arthur.fr
                </a>
            </div>
        </div>

        {/* Accommodation */}
        <div id="hebergement" className="bg-wedding-cream p-8 rounded-sm text-center">
          <BedDouble className="w-8 h-8 text-wedding-charcoal mx-auto mb-4" />
          <h3 className="text-xl font-serif font-bold text-gray-800 mb-4">Où dormir ?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Nous avons recensé pour vous une liste d'hébergements (hôtels, gîtes, chambres d'hôtes) situés autour du lieu de réception.
          </p>
          <a
            href="https://docs.google.com/document/d/1zjQpUpOVl205SnDJV98gJbzNruiNWC3i-VxYHfIebwY/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="inline-block border-b-2 border-wedding-charcoal pb-1 text-wedding-charcoal hover:text-wedding-gold hover:border-wedding-gold transition-colors font-serif italic text-lg"
          >
            Consulter la liste des hébergements
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Info;
