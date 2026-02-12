import React from 'react';
import { BENEFITS, COMPANY_INFO } from '../constants';
import { Check } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-[#0F141E] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-card/30 -skew-x-12 transform translate-x-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Content Side */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="inline-block px-3 py-1 bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-widest mb-6">
              Nossa História
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase leading-tight">
              Excelência e <br/><span className="text-brand-orange">Tradição</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed font-light">
              Somos uma empresa familiar com mais de <span className="text-white font-bold">{COMPANY_INFO.yearsInBusiness} anos de atuação</span> em Santo Amaro. 
              Diferente dos home centers genéricos, aqui você fala com quem entende de obra. Oferecemos consultoria técnica para evitar desperdícios e garantir a segurança da sua construção.
            </p>

            <div className="grid gap-6">
              {BENEFITS.map((benefit) => (
                <div key={benefit.id} className="flex items-start bg-brand-card p-4 border-l-4 border-brand-orange shadow-lg">
                  <div className="flex-shrink-0">
                     <div className="w-8 h-8 bg-brand-orange/20 rounded flex items-center justify-center text-brand-orange">
                        <Check className="w-5 h-5" />
                     </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-base font-bold text-white uppercase tracking-wide">{benefit.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Side */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 relative">
            <div className="relative border-4 border-white/5 p-2">
                <img 
                src="https://images.unsplash.com/photo-1534237710431-e2fc698436d0?q=80&w=2070&auto=format&fit=crop" 
                alt="Fachada e Equipe Silvas e Silvas" 
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute -bottom-10 -left-10 bg-brand-orange p-8 hidden md:block shadow-2xl">
                    <p className="text-white font-black text-5xl leading-none">+{COMPANY_INFO.yearsInBusiness}</p>
                    <p className="text-black font-bold text-sm uppercase tracking-widest mt-1">Anos de<br/>Mercado</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};