import React from 'react';
import { MessageCircle, Phone, MapPin, Clock, Navigation } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

export const ContactForm: React.FC = () => {
  return (
    <section id="contato" className="py-20 bg-[#0F141E] relative overflow-hidden border-t border-brand-orange/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side: Contact Info */}
            <div className="order-2 lg:order-1">
                <div className="inline-block px-3 py-1 bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-widest mb-6">
                    Localização e Contato
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight uppercase">
                    Visite nossa <br/><span className="text-brand-orange">Loja Física</span>
                </h2>
                <p className="text-lg text-gray-400 mb-8 leading-relaxed font-light">
                    Estamos localizados estrategicamente no coração de Santo Amaro. Estacionamento fácil e cafézinho quente esperando por você.
                </p>

                <div className="space-y-8 mb-10">
                    <div className="flex items-start group">
                        <div className="w-12 h-12 bg-brand-card border border-white/10 flex items-center justify-center flex-shrink-0 mr-4 group-hover:border-brand-orange transition-colors">
                            <MapPin className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <h4 className="font-bold text-white text-lg uppercase">Endereço</h4>
                            <p className="text-gray-400 leading-snug">{COMPANY_INFO.address}</p>
                        </div>
                    </div>
                    
                     <div className="flex items-start group">
                        <div className="w-12 h-12 bg-brand-card border border-white/10 flex items-center justify-center flex-shrink-0 mr-4 group-hover:border-brand-orange transition-colors">
                            <Clock className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <h4 className="font-bold text-white text-lg uppercase">Horário</h4>
                            <p className="text-gray-400">Seg a Sex: 07:00 - 18:00</p>
                            <p className="text-gray-400">Sábado: 07:00 - 13:00</p>
                        </div>
                    </div>

                     <div className="flex items-start group">
                        <div className="w-12 h-12 bg-brand-card border border-white/10 flex items-center justify-center flex-shrink-0 mr-4 group-hover:border-brand-orange transition-colors">
                            <Phone className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <h4 className="font-bold text-white text-lg uppercase">Televendas</h4>
                            <p className="text-gray-400">{COMPANY_INFO.phone}</p>
                            <p className="text-gray-500 text-sm">vendas@silvasesilvas.com.br</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <a 
                        href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Olá, gostaria de saber mais sobre materiais.`}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full bg-[#25D366] hover:bg-green-600 text-white px-6 py-4 rounded font-bold flex items-center justify-center transition-all shadow-lg uppercase tracking-wide text-lg"
                    >
                        <MessageCircle className="w-6 h-6 mr-3" />
                        Chamar no WhatsApp
                    </a>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a 
                            href={`tel:${COMPANY_INFO.phone.replace(/\D/g,'')}`}
                            className="flex-1 bg-brand-card border border-white/10 hover:border-white text-white px-6 py-3 rounded font-bold flex items-center justify-center transition-all uppercase text-sm"
                        >
                            <Phone className="w-4 h-4 mr-2" />
                            Ligar Agora
                        </a>
                        <a 
                            href={COMPANY_INFO.mapLink}
                            target="_blank"
                            rel="noreferrer"
                            className="flex-1 bg-brand-orange hover:bg-orange-600 text-white px-6 py-3 rounded font-bold flex items-center justify-center transition-all shadow-lg uppercase text-sm"
                        >
                            <Navigation className="w-4 h-4 mr-2" />
                            Traçar Rota
                        </a>
                    </div>
                </div>
            </div>

            {/* Right Side: Map */}
            <div className="order-1 lg:order-2 h-[400px] lg:h-[600px] bg-brand-card rounded overflow-hidden shadow-2xl border border-white/10 relative group">
                 <iframe 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    loading="lazy" 
                    allowFullScreen 
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(COMPANY_INFO.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                    title="Mapa de Localização"
                    className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100"
                ></iframe>
            </div>
        </div>
      </div>
    </section>
  );
};