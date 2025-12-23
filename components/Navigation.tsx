import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Programme', href: '#programme' },
    {
      name: 'Infos Pratiques',
      href: '#infos',
      dropdown: [
        { name: 'Train', href: '#train' },
        { name: 'Covoiturage', href: '#covoiturage' },
        { name: 'Parking', href: '#parking' },
        { name: 'Whatsapp', href: '#whatsapp' },
        { name: 'Photos', href: '#photos' },
        { name: 'Hébergement', href: '#hebergement' },
      ]
    },
    { name: 'Liste de Mariage', href: '#liste' },
    { name: 'RSVP', href: '#rsvp' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#" className={`font-serif text-2xl font-semibold tracking-widest ${scrolled ? 'text-wedding-charcoal' : 'text-wedding-charcoal lg:text-white lg:shadow-black'}`}>
              P & A
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <a
                    href={link.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium uppercase tracking-widest transition-colors inline-flex items-center ${
                      scrolled ? 'text-gray-700 hover:text-wedding-gold' : 'text-gray-800 lg:text-white lg:hover:text-wedding-gold'
                    }`}
                  >
                    {link.name}
                    {link.dropdown && <ChevronDown className="ml-1 w-4 h-4" />}
                  </a>

                  {link.dropdown && (
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left">
                      <div className="py-1" role="menu" aria-orientation="vertical">
                        {link.dropdown.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-wedding-gold"
                            role="menuitem"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-gray-800' : 'text-gray-800'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            {navLinks.map((link) => (
              <div key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 rounded-md text-base font-medium text-gray-700 hover:text-wedding-gold hover:bg-gray-50 uppercase tracking-widest"
                >
                  {link.name}
                </a>
                {link.dropdown && (
                  <div className="bg-gray-50">
                    {link.dropdown.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-3 py-3 text-sm font-medium text-gray-600 hover:text-wedding-gold uppercase tracking-wide"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
