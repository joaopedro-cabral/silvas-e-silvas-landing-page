import React from 'react';
import { Send, Clock, PackageCheck } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-brand-dark border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">Processo de Compra <span className="text-brand-orange">Simplificado</span></h2>
          <div className="h-1 w-24 bg-brand-orange mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Step 1 */}
          <div className="relative group">
            <div className="bg-brand-card p-8 border border-white/5 hover:border-brand-orange transition-colors duration-300 h-full">
                <div className="w-16 h-16 bg-brand-dark border border-white/10 text-brand-orange rounded flex items-center justify-center mb-6 text-2xl font-black group-hover:bg-brand-orange group-hover:text-white transition-colors">
                    1
                </div>
                <div className="mb-4 text-brand-orange">
                    <Send className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 uppercase">Envie sua Lista</h3>
                <p className="text-gray-500">
                Tire uma foto da sua lista de materiais ou mande um áudio no nosso WhatsApp.
                </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative group">
            <div className="bg-brand-card p-8 border border-white/5 hover:border-brand-orange transition-colors duration-300 h-full">
                <div className="w-16 h-16 bg-brand-dark border border-white/10 text-brand-orange rounded flex items-center justify-center mb-6 text-2xl font-black group-hover:bg-brand-orange group-hover:text-white transition-colors">
                    2
                </div>
                <div className="mb-4 text-brand-orange">
                    <Clock className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 uppercase">Orçamento Rápido</h3>
                <p className="text-gray-500">
                Nossa equipe técnica analisa e retorna com os melhores preços e marcas disponíveis.
                </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative group">
            <div className="bg-brand-card p-8 border border-white/5 hover:border-brand-orange transition-colors duration-300 h-full">
                <div className="w-16 h-16 bg-brand-dark border border-white/10 text-brand-orange rounded flex items-center justify-center mb-6 text-2xl font-black group-hover:bg-brand-orange group-hover:text-white transition-colors">
                    3
                </div>
                <div className="mb-4 text-brand-orange">
                    <PackageCheck className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 uppercase">Entrega na Obra</h3>
                <p className="text-gray-500">
                Aprovou? Receba em até 1 hora em Santo Amaro ou retire no nosso balcão express.
                </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};