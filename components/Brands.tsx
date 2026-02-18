import React from 'react';

const BRAND_LOGOS = [
  { name: "Tramontina", url: "/img/tramontina-seeklogo.png" },
  { name: "Tigre", url: "/img/tigre-logo.png" },
  { name: "Lorenzetti", url: "/img/lorenzetti-logo.png" },
  { name: "Bosch", url: "/img/bosch-logo.png" },
  { name: "Amanco", url: "/img/amanco-wavin-logo-1.png" },
  { name: "Gerdau", url: "/img/gerdau-logo.png" }
];

export const Brands: React.FC = () => {
  return (
    <section id="marcas" className="py-12 bg-white border-y-4 border-brand-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="flex flex-col items-center lg:items-start">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-1">Garantia de</span>
              <p className="text-xs font-[900] text-brand-black uppercase tracking-[0.1em] whitespace-nowrap border-b-4 border-brand-green pb-1">
                Marcas Líderes
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 w-full lg:w-auto">
            {BRAND_LOGOS.map((brand, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center justify-center transition-all duration-500 hover:scale-110"
                >
                  <img 
                      src={brand.url} 
                      alt={brand.name} 
                      className="h-7 md:h-9 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
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