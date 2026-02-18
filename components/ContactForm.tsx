import React from 'react';
import { MessageCircle, Phone, MapPin, Navigation, Map as MapIcon } from 'lucide-react';
import { COMPANY_INFO, STORES } from '../constants';

export const ContactForm: React.FC = () => {
  // Query combinada para mostrar a região das lojas em Santo Amaro
  const centralMapUrl = "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14619.664446549214!2d-46.71185447155048!3d-23.64315277443831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSilvas%20e%20Silvas%20Santo%20Amaro!5e0!3m2!1spt-BR!2sbr!4v1710345678901!5m2!1spt-BR!2sbr";

  return (
    <section id="contato" className="py-24 bg-brand-black text-white relative border-t-[16px] border-brand-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-green text-brand-black px-4 py-1 mb-6 font-black uppercase text-[10px] tracking-[0.2em]">
            <MapIcon size={14} /> Unidades Físicas
          </div>
          <h2 className="text-5xl md:text-8xl font-[900] uppercase tracking-tighter leading-none mb-4">
            Visite nossas <br /><span className="text-brand-green">Lojas</span>
          </h2>
          <p className="text-gray-400 font-black uppercase tracking-[0.3em] text-xs">Tradição e estoque a pronta entrega em Santo Amaro</p>
        </div>

        {/* Grade de Endereços */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
            {STORES.map((store) => (
              <div key={store.id} className="bg-white/5 border-2 border-white/10 p-8 hover:border-brand-green transition-all group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-brand-green text-brand-black flex items-center justify-center font-black text-xs">
                    0{store.id}
                  </div>
                  <h3 className="text-xl font-[900] uppercase tracking-tighter">{store.name}</h3>
                </div>
                
                <p className="font-bold text-gray-400 leading-tight mb-6 text-sm">
                  {store.address}
                </p>

                <a 
                  href={store.mapLink} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-brand-green font-black uppercase text-[10px] tracking-widest hover:text-white transition-colors"
                >
                  <Navigation size={14} />
                  Abrir no Google Maps
                </a>
              </div>
            ))}
        </div>

        {/* Mapa Unificado */}
        <div className="mb-16 border-4 border-white/10 p-2 bg-white/5 grayscale hover:grayscale-0 transition-all duration-700">
            <iframe 
                src={centralMapUrl}
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa das Unidades Silvas e Silvas"
                className="filter invert-[0.9] hue-rotate-180 contrast-125"
            ></iframe>
        </div>

        <div className="max-w-4xl mx-auto">
            {/* Bloco de Ligação */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
                <a 
                  href={`tel:${COMPANY_INFO.phone.replace(/\D/g,'')}`}
                  className="w-full sm:w-auto flex items-center justify-center bg-white/5 border-2 border-white/10 px-8 py-6 hover:bg-white/10 transition-all group"
                >
                    <Phone size={32} className="text-brand-green mr-4 group-hover:scale-110 transition-transform" />
                    <div className="text-left">
                        <p className="text-gray-500 font-black uppercase text-[10px] tracking-widest mb-1">Televendas / Fixo</p>
                        <h4 className="font-black uppercase text-2xl">{COMPANY_INFO.phone}</h4>
                    </div>
                </a>
            </div>

            {/* Botão de WhatsApp Principal */}
            <a 
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Olá, estou no site e preciso de materiais.`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 bg-brand-green text-brand-black py-8 px-4 text-2xl md:text-3xl font-[900] uppercase hover:bg-white transition-all border-b-8 border-green-700 active:translate-y-1 active:border-b-0 shadow-2xl text-center"
            >
                <img src="/img/whatsapp-icon.webp" className="h-auto w-10 md:h-10" alt="" />
                Falar com Vendedor agora
            </a>
            <p className="text-center mt-6 text-gray-500 font-black uppercase text-[10px] tracking-[0.3em]">
              Resposta imediata em horário comercial
            </p>
        </div>
      </div>
    </section>
  );
};