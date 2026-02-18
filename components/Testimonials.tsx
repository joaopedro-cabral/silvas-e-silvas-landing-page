import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-32 bg-brand-gray border-y-8 border-brand-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between mb-20 gap-8">
            <div className="text-center md:text-left">
                <h2 className="text-5xl md:text-7xl font-[900] text-brand-black uppercase tracking-tighter leading-none mb-6">
                  Avaliações no <br /><span className="text-[#4285F4]">G</span><span className="text-[#EA4335]">o</span><span className="text-[#FBBC05]">o</span><span className="text-[#4285F4]">g</span><span className="text-[#34A853]">l</span><span className="text-[#EA4335]">e</span>
                </h2>
                <div className="flex items-center justify-center md:justify-start gap-4">
                    <div className="flex text-[#FBBC05]">
                        {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="#FBBC05" />)}
                    </div>
                    <span className="text-brand-black font-black text-xl">4.9 / 5.0</span>
                </div>
            </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white p-8 border-2 border-gray-200 relative hover:border-[#4285F4] transition-all flex flex-col h-full shadow-sm hover:shadow-xl group">
              
              {/* Google Header Style */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4 border border-gray-200 font-black text-gray-400 group-hover:bg-[#4285F4] group-hover:text-white transition-colors">
                 <img 
                    src={t.profile} 
                    alt="Materiais de Construção Silvas" 
                    className=""
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <h4 className="font-bold text-brand-black text-sm">{t.name}</h4>
                    <CheckCircle2 size={12} className="text-[#4285F4] fill-[#4285F4] text-white" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span className="text-[10px] text-[#FBBC05] font-black">Local Guide</span>
                  </div>
                </div>
              </div>

              {/* Stars */}
              <div className="flex text-[#FBBC05] mb-4 gap-0.5">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#FBBC05" className="stroke-[#FBBC05]" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-gray-700 text-sm leading-relaxed mb-8 flex-grow">
                "{t.content}"
              </p>

              {/* Verified Badge */}
              <div className="absolute top-4 right-4 bg-green-50 text-green-700 text-[8px] font-black px-2 py-1 rounded-full uppercase tracking-tighter">
                Compra Verificada
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <a 
              href="https://www.google.com/search?sca_esv=a914a348ef903fd6&cs=0&output=search&kgmid=/g/11p3jkywnp&q=Silvas+e+Silvas+Casa+e+Constru%C3%A7%C3%A3o&shndl=30&source=sh/x/loc/uni/m1/1&kgs=58412264321ef213&shem=shrtsdl&utm_source=shrtsdl,sh/x/loc/uni/m1/1#lrd=0x94ce51f5a18fb65b:0x8b1acb39027a6cf1,1,,,," 
              target="_blank" 
              className="inline-flex items-center gap-3 bg-white border-4 border-brand-black px-10 py-5 font-black uppercase text-xs tracking-widest hover:bg-brand-black hover:text-white transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:shadow-none"
            >
              Ver Todas as Avaliações no Google
            </a>
        </div>
      </div>
    </section>
  );
};