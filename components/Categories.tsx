import React from 'react';
import { CATEGORIES } from '../constants';
import { ArrowRight, Hammer } from 'lucide-react';

export const Categories: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
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
    <section id="categorias" className="py-24 bg-brand-black text-white relative border-y-8 border-brand-green">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center space-x-2 mb-3 text-brand-green">
              <Hammer size={20} />
              <span className="font-black uppercase tracking-[0.3em] text-[10px]">Catálogo Técnico</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-[900] uppercase tracking-tighter leading-tight">
              Tudo o que você <br /><span className="text-brand-green">precisa</span>.
            </h2>
          </div>
          <div className="hidden md:block h-1 w-24 bg-brand-green mb-3"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-2 border-white/20">
          {CATEGORIES.map((cat, idx) => (
            <div 
              key={cat.id} 
              onClick={scrollToContact}
              className={`p-8 hover:bg-brand-green hover:text-brand-black transition-all duration-300 group cursor-pointer border-white/10 border-b-2 md:border-b-2 ${idx % 3 !== 2 ? 'lg:border-r-2' : ''} ${idx < 3 ? 'lg:border-b-2' : ''} last:border-b-0`}
            >
              <div className="w-12 h-12 bg-white/10 text-brand-green flex items-center justify-center mb-6 group-hover:bg-brand-black transition-all">
                <cat.icon size={28} />
              </div>
              
              <h3 className="text-2xl font-[900] uppercase mb-3 tracking-tighter transition-transform group-hover:translate-x-1">{cat.title}</h3>
              <p className="text-gray-400 font-bold mb-6 uppercase text-[10px] tracking-widest leading-relaxed group-hover:text-brand-black/80">
                {cat.description}
              </p>
              
              <button 
                className="inline-flex items-center border-b-2 border-brand-green py-1 font-black uppercase text-[10px] tracking-widest group-hover:border-brand-black transition-all outline-none"
              >
                Ver Estoque <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};