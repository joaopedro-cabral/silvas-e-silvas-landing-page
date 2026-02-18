import React from 'react';
import { HERO_VARIANTS } from '../constants';
import { Button } from './Button';
import { MessageCircle, HardHat, ShieldCheck, Trophy, Package, Home, Handshake } from 'lucide-react';

export const Hero: React.FC = () => {
  const content = HERO_VARIANTS.benefit;

  const checklistItems = [
    { icon: Trophy, text: "+10 anos de mercado" },
    { icon: Package, text: "+10.000 itens disponíveis" },
    { icon: Home, text: "Casa, obra e indústria" },
    { icon: Handshake, text: "Atendimento especializado" },
  ];

  return (
    <section className="relative min-h-[80vh] flex items-center pt-32 lg:pt-36 pb-16 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Coluna Texto - Foco em Conversão e Equilíbrio */}
          <div className="lg:col-span-7 flex flex-col items-start z-20">
            <div className="flex items-center gap-2 mb-6 bg-brand-black text-brand-green px-3 py-1.5 border-l-4 border-brand-green shadow-sm">
              <HardHat size={18} />
              <span className="font-black uppercase text-[10px] tracking-[0.2em]">
                Santo Amaro • Varejo Técnico
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-[900] text-brand-black leading-[1.1] mb-6 uppercase tracking-tighter">
              Tudo para sua <span className="brush-highlight px-2 text-brand-black">casa</span>, obra e manutenção.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg font-bold leading-tight border-l-8 border-brand-black pl-6 italic">
              {content.subhead}
            </p>

            {/* Checklist de Autoridade */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mb-10 w-full">
              {checklistItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 group">
                  <div className="bg-brand-green/10 p-2 rounded-sm group-hover:bg-brand-green transition-colors">
                    <item.icon size={18} className="text-brand-black" />
                  </div>
                  <span className="text-[11px] font-[900] uppercase tracking-wider text-brand-black">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <Button 
                variant="primary" 
                isWhatsApp 
                className="w-full sm:w-auto px-8 py-5 gap-3 text-lg border-2 border-brand-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
              >
                <img src="/img/whatsapp-icon.webp" className="md:w-10 md:h-10" alt="" />
                Cotação WhatsApp
              </Button>
              
              <div className="flex items-center gap-3 px-6 py-4 border-2 border-dashed border-gray-300 bg-gray-50">
                <ShieldCheck className="text-brand-green" size={24} />
                <div>
                  <p className="text-[9px] font-black uppercase text-gray-400 tracking-widest leading-none mb-1">Procedência</p>
                  <p className="text-xs font-bold uppercase text-brand-black leading-none">Marcas Líderes</p>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Imagem - Escala Realista */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0 flex items-center">
            <div className="relative w-full">
              <div className="border-4 border-brand-black p-1 bg-white shadow-[12px_12px_0px_0px_rgba(135,212,75,1)]">
                <div className="aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
                  <img 
                    src="/public/img/loja-materiais-construcao_(19).jpeg" 
                    alt="Materiais de Construção Silvas" 
                    className="w-full h-full object-cover grayscale brightness-95 contrast-110 hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-brand-black text-white p-4 border-2 border-brand-green shadow-xl z-20">
                 <h4 className="text-2xl font-[900] leading-none mb-1">+{HERO_VARIANTS.benefit.headline.includes('10.000') ? '10K' : '10K'}</h4>
                 <p className="text-[8px] font-black uppercase tracking-[0.2em] text-brand-green">Itens em Estoque</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute top-0 right-0 w-1/4 h-full bg-brand-gray/5 -z-10 translate-x-1/2 -skew-x-12"></div>
    </section>
  );
};