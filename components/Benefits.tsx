import React from 'react';
import { BENEFITS } from '../constants';

export const Benefits: React.FC = () => {
  return (
    <section id="beneficios" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue mb-4">
            Por que escolher a Silvas e Silvas?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mais do que uma loja de materiais, somos parceiros da sua obra. Resolvemos seu problema com rapidez e técnica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {BENEFITS.map((benefit) => (
            <div 
              key={benefit.id} 
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
            >
              <div className="w-14 h-14 bg-brand-blue/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300 text-brand-blue">
                <benefit.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};