import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md border-b-2 border-brand-black py-3 shadow-lg' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo - Rigid & Technical */}
          <div className="flex flex-col items-start cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="brush-highlight px-3 py-0.5">
              <span className="text-2xl font-[900] text-brand-black uppercase tracking-tighter block leading-none">
                Silvas <span className="text-white">&</span> Silvas
              </span>
            </div>
            <div className="mt-1 text-[8px] font-black tracking-[0.2em] text-brand-black uppercase border-t border-brand-black pt-1 w-full">
              Materiais de Construção
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {['sobre', 'categorias', 'depoimentos'].map((id) => (
              <button 
                key={id}
                onClick={() => scrollToSection(id)} 
                className="text-brand-black font-black text-[10px] uppercase tracking-widest hover:text-brand-green transition-colors relative group"
              >
                {id === 'sobre' ? 'A Empresa' : id === 'categorias' ? 'Produtos' : 'Depoimentos'}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-green group-hover:w-full transition-all"></span>
              </button>
            ))}
            
            <button 
              onClick={() => scrollToSection('contato')}
              className="bg-brand-black text-brand-green px-6 py-2.5 font-[900] uppercase text-[10px] hover:bg-brand-green hover:text-brand-black transition-all border-2 border-brand-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-0.5 active:translate-y-0.5"
            >
              Orçamento
            </button>
          </nav>

          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-black p-2 bg-brand-green border-2 border-brand-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-b-4 border-brand-black p-6 space-y-4 shadow-2xl">
          <button onClick={() => scrollToSection('sobre')} className="block w-full text-left font-black uppercase text-lg border-b border-gray-100 pb-2">A Empresa</button>
          <button onClick={() => scrollToSection('categorias')} className="block w-full text-left font-black uppercase text-lg border-b border-gray-100 pb-2">Produtos</button>
          <button onClick={() => scrollToSection('depoimentos')} className="block w-full text-left font-black uppercase text-lg border-b border-gray-100 pb-2">Depoimentos</button>
          <button onClick={() => scrollToSection('contato')} className="w-full bg-brand-green text-brand-black py-4 font-black uppercase text-lg border-2 border-brand-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">WhatsApp</button>
        </div>
      )}
    </header>
  );
};