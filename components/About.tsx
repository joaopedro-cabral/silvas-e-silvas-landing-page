import React from 'react';
import { COMPANY_INFO } from '../constants';
import { History, Construction, Star, ShieldCheck } from 'lucide-react';

const HISTORY_GALLERY = [
  { year: '2014', img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop' },
  { year: '2018', img: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop' },
  { year: '2021', img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop' },
  { year: 'HOJE', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop' }
];

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-white border-b-8 border-brand-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 text-brand-green mb-4">
              <History size={24} />
              <span className="font-black uppercase tracking-[0.3em] text-[10px] text-brand-black">Nossa História</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-[900] text-brand-black uppercase tracking-tighter leading-tight">
              Cimento e <br />
              <span className="brush-highlight px-4">Respeito.</span>
            </h2>
          </div>
          <p className="text-lg text-gray-700 font-bold border-l-4 border-brand-green pl-6 italic">
            Somos uma empresa com mais de {COMPANY_INFO.yearsInBusiness} anos de atuação no mercado, oferecendo uma linha completa de produtos para casa, construção e manutenção. Trabalhamos com milhares de itens e temos como compromisso oferecer variedade, qualidade e atendimento de confiança aos nossos clientes.
          </p>
        </div>

        {/* Galeria Histórica - Equilibrada */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {HISTORY_GALLERY.map((item, idx) => (
            <div key={idx} className="group relative aspect-[3/4] bg-brand-black border-2 border-brand-black overflow-hidden shadow-md">
              <img 
                src={item.img} 
                alt={`Época ${item.year}`} 
                className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
              />
              <div className="absolute top-3 left-3">
                <span className="bg-brand-green text-brand-black px-3 py-1 text-xs font-black uppercase border border-brand-black">
                  {item.year}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Estatísticas Técnicas - Centralizadas */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-12 border-t-4 border-brand-black pt-16 justify-items-center">
            <div className="flex flex-col items-center text-center group max-w-[240px]">
                <Construction className="text-brand-green mb-4 group-hover:scale-110 transition-transform" size={48} />
                <div>
                  <h5 className="text-4xl font-[900] text-brand-black leading-none mb-2">+{COMPANY_INFO.productsCount}</h5>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Itens em nosso Catálogo</p>
                </div>
            </div>
            
            <div className="flex flex-col items-center text-center group max-w-[240px]">
                <div className="relative mb-4 group-hover:scale-110 transition-transform">
                  <Star className="text-yellow-500 fill-yellow-500" size={48} />
                  <span className="absolute inset-0 flex items-center justify-center text-[8px] font-black text-brand-black mt-0.5">G</span>
                </div>
                <div>
                  <h5 className="text-4xl font-[900] text-brand-black leading-none mb-2">4.9</h5>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Avaliação Média no Google</p>
                </div>
            </div>
            
            <div className="flex flex-col items-center text-center group max-w-[240px]">
                <ShieldCheck className="text-brand-green mb-4 group-hover:scale-110 transition-transform" size={48} />
                <div>
                  <h5 className="text-2xl font-[900] text-brand-black leading-none mb-2 uppercase tracking-tighter">Confiança</h5>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Atendimento Técnico Especializado</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};