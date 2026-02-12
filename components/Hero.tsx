import React from 'react';
import { HERO_VARIANTS, COMPANY_INFO } from '../constants';
import { Button } from './Button';
import { MessageCircle, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const content = HERO_VARIANTS.benefit;

  const scrollToForm = () => {
    const el = document.getElementById('contato');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-brand-dark">
      {/* Background Image with Strong Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop" 
          alt="Loja de materiais de construção e ferramentas" 
          className="w-full h-full object-cover scale-105"
        />
        {/* Heavy Industrial Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/95 to-brand-dark/40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-16">
        <div className="lg:w-3/4">
          {/* Badge */}
          <div className="inline-flex flex-wrap gap-2 mb-8">
             <div className="inline-flex items-center bg-brand-orange text-white px-4 py-1.5 rounded text-xs font-bold tracking-widest uppercase shadow-lg shadow-orange-900/50">
              <CheckCircle2 className="w-3 h-3 mr-2" />
              +{COMPANY_INFO.yearsInBusiness} Anos de Excelência
            </div>
            <div className="inline-flex items-center border border-white/20 rounded px-4 py-1.5 text-xs font-bold text-gray-300 tracking-widest uppercase bg-black/30 backdrop-blur-sm">
              <MapPin className="w-3 h-3 text-brand-orange mr-2" />
              Santo Amaro - SP
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 uppercase tracking-tight">
            Tudo para <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-500">Casa</span>,<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-500">Obra</span> e Manutenção
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed font-light border-l-4 border-brand-orange pl-6">
            {content.subhead}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="primary" 
              isWhatsApp 
              icon={<MessageCircle className="w-5 h-5" />}
              className="w-full sm:w-auto text-base px-8 py-4 uppercase tracking-wider"
            >
              Orçamento no WhatsApp
            </Button>
            
            <Button 
              variant="outline" 
              onClick={scrollToForm}
              className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-brand-dark uppercase tracking-wider text-base"
              icon={<ChevronRight className="w-5 h-5" />}
            >
              Nossos Produtos
            </Button>
          </div>

          {/* Stats/Footer of Hero */}
          <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
               <h4 className="text-2xl font-black text-white">10k+</h4>
               <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Itens em Estoque</p>
            </div>
            <div>
               <h4 className="text-2xl font-black text-white">1h</h4>
               <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Entrega Expressa</p>
            </div>
            <div>
               <h4 className="text-2xl font-black text-white">2</h4>
               <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Lojas Físicas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};