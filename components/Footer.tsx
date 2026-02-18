import React from 'react';
import { COMPANY_INFO } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black py-16 border-t-8 border-brand-green">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          
          <div className="max-w-md">
            <div className="brush-highlight px-6 py-1.5 mb-6 bg-brand-green">
                <span className="text-3xl font-[900] text-brand-black uppercase tracking-tighter block leading-none">
                Silvas <span className="text-white">&</span> Silvas
                </span>
            </div>
            <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest leading-relaxed mb-8">
                Referência em Santo Amaro para materiais elétricos, hidráulicos e ferramentas. Atendimento técnico especializado.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
             <div>
                <h5 className="text-brand-green font-black uppercase text-[10px] tracking-widest mb-6 text-opacity-80">Navegação</h5>
                <ul className="space-y-3">
                   {['Sobre', 'Categorias', 'Depoimentos'].map(item => (
                     <li key={item}><a href={`#${item.toLowerCase()}`} className="text-white/40 hover:text-brand-green text-[10px] font-black uppercase tracking-tight transition-colors">{item}</a></li>
                   ))}
                </ul>
             </div>
             <div>
                <h5 className="text-brand-green font-black uppercase text-[10px] tracking-widest mb-6 text-opacity-80">Contato</h5>
                <ul className="space-y-3">
                   <li className="text-white/40 text-[10px] font-black uppercase tracking-tight">{COMPANY_INFO.phone}</li>
                </ul>
             </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[8px] font-black uppercase tracking-[0.3em] text-white/10 text-center">
               &copy; {new Date().getFullYear()} Silvas & Silvas - Todos os direitos reservados
            </p>
        </div>
      </div>
    </footer>
  );
};