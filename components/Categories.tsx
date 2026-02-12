import React from 'react';
import { CATEGORIES } from '../constants';
import { ArrowRight } from 'lucide-react';

export const Categories: React.FC = () => {
  return (
    <section id="categorias" className="py-20 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
                <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-2">
                Categorias de <span className="text-brand-orange">Produtos</span>
                </h2>
                <div className="h-1 w-20 bg-brand-orange"></div>
            </div>
            <p className="text-gray-400 max-w-md text-right hidden md:block">
                Encontre tudo o que sua obra precisa em um só lugar. Variedade e qualidade técnica.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {CATEGORIES.map((cat) => (
            <div 
              key={cat.id} 
              className="bg-brand-card border border-white/5 p-6 hover:border-brand-orange/50 transition-all duration-300 group cursor-pointer relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="w-5 h-5 text-brand-orange" />
              </div>
              
              <div className="w-14 h-14 bg-brand-dark rounded flex items-center justify-center mb-6 text-brand-orange border border-white/5 group-hover:bg-brand-orange group-hover:text-white transition-colors">
                <cat.icon className="w-7 h-7" />
              </div>
              
              <h3 className="font-bold text-white text-lg mb-2 uppercase tracking-wide group-hover:text-brand-orange transition-colors">{cat.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-300 transition-colors">
                {cat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};