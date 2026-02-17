import React from 'react';
import { Send, Clock, PackageCheck } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 bg-brand-gray border-y-8 border-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-[900] text-brand-black uppercase tracking-tighter leading-none">
            Compra <span className="brush-highlight px-6">Rápida</span>
          </h2>
          <p className="mt-6 text-gray-800 font-bold uppercase tracking-widest text-sm">Sem burocracia, direto ao ponto</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { step: 1, icon: Send, title: "Envie sua Lista", desc: "Mande uma foto do papel ou áudio no nosso WhatsApp agora." },
            { step: 2, icon: Clock, title: "Preço em Minutos", desc: "Nossa equipe técnica cota as melhores marcas para você." },
            { step: 3, icon: PackageCheck, title: "Entrega na Obra", desc: "Aprovou? Receba em até 1 hora ou retire no balcão." }
          ].map((item) => (
            <div key={item.step} className="relative group flex flex-col h-full">
              <div className="bg-white p-10 border-[6px] border-brand-black group-hover:bg-brand-green transition-all duration-300 flex-grow shadow-xl transform group-hover:-translate-y-2">
                  <div className="w-20 h-20 bg-brand-black text-brand-green flex items-center justify-center mb-8 text-3xl font-[900] group-hover:bg-white transition-colors border-4 border-brand-black">
                      0{item.step}
                  </div>
                  <item.icon className="w-12 h-12 text-brand-black mb-6" />
                  <h3 className="text-3xl font-[900] text-brand-black mb-4 uppercase tracking-tighter leading-none">{item.title}</h3>
                  <p className="text-gray-900 font-bold leading-tight text-lg">
                    {item.desc}
                  </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};