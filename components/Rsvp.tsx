import React, { useState } from 'react';
import Section from './Section';
import { RsvpFormData } from '../types';
import { Send, Gift } from 'lucide-react';

const Rsvp: React.FC = () => {
  const [formData, setFormData] = useState<RsvpFormData>({
    fullName: '',
    partnerName: '',
    isAttending: 'oui',
    comment: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct Mailto Link
    const subject = encodeURIComponent(`RSVP Mariage - ${formData.fullName}`);
    const body = encodeURIComponent(
      `Bonjour Pauline et Arthur,\n\nVoici ma réponse pour votre mariage :\n\n` +
      `Nom : ${formData.fullName}\n` +
      `Accompagnant(e) : ${formData.partnerName || "Aucun"}\n` +
      `Présence : ${formData.isAttending === 'oui' ? 'Oui, avec plaisir !' : 'Non, malheureusement'}\n` +
      `Commentaire : ${formData.comment}\n`
    );

    window.location.href = `mailto:rsvp@pauline-et-arthur.fr?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-stone-100 pb-20">
        {/* Registry Link Section inserted before RSVP form visually */}
        <div id="liste" className="py-20 bg-white text-center px-4">
             <div className="max-w-2xl mx-auto">
                <Gift className="w-10 h-10 text-wedding-gold mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-serif text-wedding-charcoal mb-6 italic">Liste de Mariage</h2>
                <p className="text-gray-600 mb-8">
                    Votre présence est notre plus beau cadeau. Si vous souhaitez néanmoins nous gâter, nous avons déposé une liste sur Millemercis Mariage.
                </p>
                <a 
                    href="https://www.millemercismariage.com/pauline-et-arthur-26/liste.html"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block bg-wedding-charcoal text-white px-8 py-3 rounded-sm font-sans uppercase tracking-widest text-xs hover:bg-gray-700 transition"
                >
                    Voir la liste
                </a>
            </div>
        </div>

        <Section id="rsvp" className="">
            <div className="bg-white p-8 md:p-12 shadow-lg max-w-3xl mx-auto -mt-10 relative z-10">
                <h2 className="text-3xl md:text-4xl font-serif text-center text-wedding-charcoal mb-2 italic">
                    R.S.V.P.
                </h2>
                <p className="text-center text-gray-500 mb-10 text-sm uppercase tracking-wide">
                    Avant le 25 Février 2026
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Votre Nom et Prénom</label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                required
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-full border-b border-gray-300 focus:border-wedding-gold outline-none py-2 transition-colors bg-transparent"
                                placeholder="ex: Jean Dupont"
                            />
                        </div>
                        <div>
                            <label htmlFor="partnerName" className="block text-sm font-medium text-gray-700 mb-1">Nom de votre conjoint(e)</label>
                            <input
                                type="text"
                                id="partnerName"
                                name="partnerName"
                                value={formData.partnerName}
                                onChange={handleChange}
                                className="w-full border-b border-gray-300 focus:border-wedding-gold outline-none py-2 transition-colors bg-transparent"
                                placeholder="Facultatif"
                            />
                        </div>
                    </div>

                    <div>
                        <span className="block text-sm font-medium text-gray-700 mb-2">Serez-vous présent ?</span>
                        <div className="flex space-x-6">
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="isAttending"
                                    value="oui"
                                    checked={formData.isAttending === 'oui'}
                                    onChange={handleChange}
                                    className="text-wedding-gold focus:ring-wedding-gold"
                                />
                                <span className="ml-2 text-gray-700">Oui, avec plaisir</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="isAttending"
                                    value="non"
                                    checked={formData.isAttending === 'non'}
                                    onChange={handleChange}
                                    className="text-wedding-gold focus:ring-wedding-gold"
                                />
                                <span className="ml-2 text-gray-700">Non, malheureusement</span>
                            </label>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">Un commentaire, une allergie, une chanson ?</label>
                        <textarea
                            id="comment"
                            name="comment"
                            rows={3}
                            value={formData.comment}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-sm p-3 focus:border-wedding-gold outline-none transition-colors"
                        ></textarea>
                    </div>

                    <div className="text-center pt-4">
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center bg-wedding-gold text-white px-10 py-3 rounded-sm font-sans uppercase tracking-widest text-xs hover:bg-yellow-600 transition shadow-md w-full md:w-auto"
                        >
                            Envoyer ma réponse <Send className="ml-2 w-4 h-4" />
                        </button>
                        <p className="mt-4 text-xs text-gray-400 italic">
                            En cliquant, votre client mail s'ouvrira pour envoyer la réponse à rsvp@pauline-et-arthur.fr
                        </p>
                    </div>
                </form>
            </div>
        </Section>
    </div>
  );
};

export default Rsvp;