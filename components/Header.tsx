import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-dark/95 shadow-lg backdrop-blur-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="flex flex-col">
              <h1 className="text-2xl font-black text-white tracking-tighter uppercase leading-none">
                Silvas <span className="text-brand-orange">&</span> Silvas
              </h1>
              <span className="text-[10px] text-gray-400 font-bold tracking-[0.2em] uppercase mt-1">Materiais de Construção</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <button onClick={() => scrollToSection('sobre')} className="text-gray-300 hover:text-white font-medium text-sm uppercase tracking-wide transition-colors">A Empresa</button>
            <button onClick={() => scrollToSection('categorias')} className="text-gray-300 hover:text-white font-medium text-sm uppercase tracking-wide transition-colors">Produtos</button>
            <button onClick={() => scrollToSection('depoimentos')} className="text-gray-300 hover:text-white font-medium text-sm uppercase tracking-wide transition-colors">Clientes</button>
            
            <a 
              href={`tel:${COMPANY_INFO.phone.replace(/\D/g,'')}`}
              className="flex items-center text-brand-orange font-bold hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              {COMPANY_INFO.phone}
            </a>

            <button 
              onClick={() => scrollToSection('contato')}
              className="bg-brand-orange text-white px-6 py-2 rounded font-bold uppercase text-sm hover:bg-orange-600 transition-all shadow-lg shadow-orange-900/20"
            >
              Orçamento
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
             <a 
              href={`tel:${COMPANY_INFO.phone.replace(/\D/g,'')}`}
              className="mr-4 p-2 bg-white/10 rounded-full text-brand-orange"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-brand-orange focus:outline-none"
            >
              {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-brand-card border-t border-white/10 absolute w-full left-0 top-full shadow-2xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <button onClick={() => scrollToSection('sobre')} className="block w-full text-left px-3 py-4 text-base font-bold text-gray-200 hover:bg-white/5 border-b border-white/5">A EMPRESA</button>
            <button onClick={() => scrollToSection('categorias')} className="block w-full text-left px-3 py-4 text-base font-bold text-gray-200 hover:bg-white/5 border-b border-white/5">PRODUTOS</button>
            <button onClick={() => scrollToSection('depoimentos')} className="block w-full text-left px-3 py-4 text-base font-bold text-gray-200 hover:bg-white/5 border-b border-white/5">CLIENTES</button>
            <button onClick={() => scrollToSection('contato')} className="block w-full text-left px-3 py-4 text-base font-bold text-gray-200 hover:bg-white/5 border-b border-white/5">LOCALIZAÇÃO</button>
            <div className="pt-4 px-3">
              <button 
                onClick={() => scrollToSection('contato')}
                className="w-full bg-brand-orange text-white px-5 py-4 rounded font-bold text-center text-lg uppercase tracking-wide"
              >
                Solicitar Orçamento
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};