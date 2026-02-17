import React from 'react';
import { MessageCircle, Phone, MapPin, Clock, Navigation } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

export const ContactForm: React.FC = () => {
  return (
    <section id="contato" className="py-24 bg-brand-black text-white relative border-t-[16px] border-brand-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            
            <div className="flex flex-col justify-center">
                <h2 className="text-6xl md:text-8xl font-[900] uppercase tracking-tighter leading-[0.85] mb-12">
                  Visite <br />Nossa <br /><span className="text-brand-green">Loja</span>
                </h2>

                <div className="space-y-6 mb-16">
                    <div className="flex items-center bg-white/5 border-l-8 border-brand-green p-6 group hover:bg-white/10 transition-colors">
                        <MapPin size={32} className="text-brand-green mr-6 flex-shrink-0" />
                        <div>
                            <p className="text-brand-green font-black uppercase text-[10px] tracking-widest mb-1">Endereço</p>
                            <h4 className="font-black uppercase text-sm md:text-base leading-tight">{COMPANY_INFO.address}</h4>
                        </div>
                    </div>
                    
                    <div className="flex items-center bg-white/5 border-l-8 border-brand-green p-6 group hover:bg-white/10 transition-colors">
                        <Phone size={32} className="text-brand-green mr-6 flex-shrink-0" />
                        <div>
                            <p className="text-brand-green font-black uppercase text-[10px] tracking-widest mb-1">Televendas</p>
                            <h4 className="font-black uppercase text-xl">{COMPANY_INFO.phone}</h4>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <a 
                        href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
                        className="flex items-center justify-center bg-brand-green text-brand-black py-8 text-3xl font-[900] uppercase hover:bg-white transition-all border-b-8 border-green-700 active:translate-y-1 active:border-b-0"
                    >
                        <MessageCircle className="mr-4 w-10 h-10" />
                        WhatsApp Agora
                    </a>
                    <div className="grid grid-cols-2 gap-4">
                        <a href={`tel:${COMPANY_INFO.phone}`} className="bg-white text-brand-black py-5 font-black uppercase text-center text-sm hover:bg-brand-green transition-colors">Ligar para Loja</a>
                        <a href={COMPANY_INFO.mapLink} target="_blank" rel="noreferrer" className="bg-brand-gray/10 text-white py-5 font-black uppercase text-center text-sm border-2 border-white/20 hover:bg-white hover:text-brand-black transition-all">Como Chegar</a>
                    </div>
                </div>
            </div>

            <div className="h-[400px] lg:h-auto border-[12px] border-brand-green shadow-[20px_20px_0px_0px_rgba(255,255,255,0.1)]">
                <iframe 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, filter: 'grayscale(1) contrast(1.5) invert(0.1)' }} 
                    loading="lazy" 
                    allowFullScreen 
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(COMPANY_INFO.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                    title="Mapa de Localização"
                ></iframe>
            </div>
        </div>
      </div>
    </section>
  );
};