import React from 'react';

const BRAND_LOGOS = [
  { name: "Lorenzetti", url: "https://logo.clearbit.com/lorenzetti.com.br" },
  { name: "Tramontina", url: "https://logo.clearbit.com/tramontina.com.br" },
  { name: "Sil Fios", url: "https://logo.clearbit.com/sil.com.br" },
  { name: "Fame", url: "https://logo.clearbit.com/fame.com.br" },
  { name: "Tigre", url: "https://logo.clearbit.com/tigre.com.br" }
];

export const Brands: React.FC = () => {
  return (
    <section id="marcas" className="py-12 bg-white border-y-4 border-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <p className="text-xs font-[900] text-brand-black uppercase tracking-[0.3em] whitespace-nowrap border-b-4 border-brand-green pb-1">
            Marcas Parceiras
            </p>
            <div className="flex flex-wrap justify-center md:justify-end items-center gap-12 w-full">
            {BRAND_LOGOS.map((brand, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center justify-center grayscale contrast-150 hover:grayscale-0 hover:contrast-100 transition-all duration-300"
                >
                  <img 
                      src={brand.url} 
                      alt={brand.name} 
                      className="h-8 md:h-10 w-auto object-contain opacity-80 hover:opacity-100" 
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if(parent) parent.innerHTML = `<span class="font-black uppercase text-brand-black text-xs">${brand.name}</span>`;
                      }}
                  />
                </div>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
};