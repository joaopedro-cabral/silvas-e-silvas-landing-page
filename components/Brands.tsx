import React from 'react';

const BRAND_LOGOS = [
  { name: "Tramontina", url: "https://logodownload.org/wp-content/uploads/2018/07/tramontina-logo-0.png" },
  { name: "Tigre", url: "https://logodownload.org/wp-content/uploads/2017/10/tigre-logo-2.png" },
  { name: "Lorenzetti", url: "https://logodownload.org/wp-content/uploads/2018/10/lorenzetti-logo-0.png" },
  { name: "Bosch", url: "https://logodownload.org/wp-content/uploads/2014/04/bosch-logo-0.png" },
  { name: "Amanco", url: "https://logodownload.org/wp-content/uploads/2018/10/amanco-logo-0.png" },
  { name: "Gerdau", url: "https://logodownload.org/wp-content/uploads/2014/10/gerdau-logo-0.png" }
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