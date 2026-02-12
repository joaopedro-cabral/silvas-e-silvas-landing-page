import React from 'react';
import { COMPANY_INFO } from '../constants';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">
              Silvas <span className="text-brand-orange">&</span> Silvas
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 font-light">
              Desde 2014 sendo a referência em materiais de construção e ferramentas em Santo Amaro. Qualidade técnica e compromisso com sua obra.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-brand-orange transition-colors"><Instagram className="w-6 h-6" /></a>
              <a href="#" className="text-gray-500 hover:text-brand-orange transition-colors"><Facebook className="w-6 h-6" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Navegação</h4>
            <ul className="space-y-3 text-gray-400 text-sm font-medium">
              <li><a href="#beneficios" className="hover:text-white transition-colors">A Empresa</a></li>
              <li><a href="#produtos" className="hover:text-white transition-colors">Produtos</a></li>
              <li><a href="#depoimentos" className="hover:text-white transition-colors">Clientes</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Fale Conosco</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div id="localizacao">
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Atendimento</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-brand-orange flex-shrink-0 mt-0.5" />
                <a 
                  href={COMPANY_INFO.mapLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors leading-snug"
                >
                  {COMPANY_INFO.address}
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-brand-orange flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g,'')}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-brand-orange flex-shrink-0" />
                <span>contato@silvasesilvas.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-xs text-gray-600 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Silvas e Silvas Materiais. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};