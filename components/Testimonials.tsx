import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-black text-center text-white mb-16 uppercase tracking-tight">
          A palavra de quem <span className="text-brand-orange">Constrói</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-brand-card p-8 relative group border border-white/5 hover:border-white/10 transition-all">
              <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity">
                <Quote className="w-10 h-10 text-brand-orange transform rotate-180" />
              </div>

              <div className="flex text-brand-orange mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-300 mb-8 italic leading-relaxed relative z-10 font-light">"{t.content}"</p>
              
              <div className="flex items-center mt-auto border-t border-white/5 pt-6">
                <div className="w-10 h-10 bg-brand-orange text-white rounded font-bold flex items-center justify-center mr-4 uppercase">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm uppercase tracking-wide">{t.name}</h4>
                  <span className="text-xs text-brand-orange font-bold uppercase tracking-wider">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};