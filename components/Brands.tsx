import React from 'react';

const BRAND_LOGOS = [
  { name: "Makita", url: "/img/makita-logo.png" },
  { name: "Tigre", url: "/img/tigre-logo.png" },
  { name: "Lorenzetti", url: "/img/lorenzetti-logo.png" },
  { name: "3M", url: "/img/3m-logo.png" },
  { name: "Sil", url: "/img/sil-logo.png" },
  { name: "Steck", url: "/img/steck-logo.png" }
];

export const Brands: React.FC = () => {
  return (
    <section id="marcas" className="py-12 bg-white border-y-4 border-brand-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="flex flex-col items-center lg:items-start">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-1">Garantia de</span>
              <p className="text-xs font-[900] text-brand-black uppercase tracking-[0.1em] whitespace-nowrap border-b-4 border-brand-green pb-1">
                Marcas Qualificadas
              </p>
            </div>

            <div className="flex flex-nowrap items-center justify-between w-full lg:w-auto gap-8 md:gap-12  no-scrollbar pb-2 lg:pb-0">
            {BRAND_LOGOS.map((brand, idx) => (
                <div 
                  key={idx} 
                  className="flex-shrink-0 flex items-center justify-center transition-all duration-500 hover:scale-110"
                >
                  <img 
                      src={brand.url} 
                      alt={brand.name} 
                      className="h-6 md:h-8 lg:h-10 w-auto max-w-[120px] object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
                      loading="lazy"
                  />
                </div>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
};