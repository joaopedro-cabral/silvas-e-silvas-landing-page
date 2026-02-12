import React from 'react';

const BRAND_LOGOS = [
  { name: "Lorenzetti", url: "https://logo.clearbit.com/lorenzetti.com.br" },
  { name: "Tramontina", url: "https://logo.clearbit.com/tramontina.com.br" },
  { name: "Sil Fios", url: "https://logo.clearbit.com/sil.com.br" },
  { name: "Fame", url: "https://logo.clearbit.com/fame.com.br" },
  { name: "Tigre", url: "https://logo.clearbit.com/tigre.com.br" },
  { name: "Bellota", url: "https://logo.clearbit.com/bellota.com" }
];

export const Brands: React.FC = () => {
  return (
    <section id="marcas" className="py-10 bg-black border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="text-sm font-bold text-gray-500 uppercase tracking-widest whitespace-nowrap">
            Nossos Parceiros:
            </p>
            <div className="flex flex-wrap justify-center md:justify-end items-center gap-8 w-full">
            {BRAND_LOGOS.map((brand, idx) => (
                <div 
                key={idx} 
                className="flex items-center justify-center w-24 h-12 grayscale opacity-50 hover:opacity-100 transition-all duration-300"
                >
                <img 
                    src={brand.url} 
                    alt={`Logo ${brand.name}`} 
                    className="max-h-full max-w-full object-contain brightness-0 invert" 
                    loading="lazy"
                    onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.parentElement) {
                        target.parentElement.classList.remove('grayscale', 'opacity-50');
                        target.parentElement.innerText = brand.name;
                        target.parentElement.className += " text-lg font-black text-gray-500 hover:text-white cursor-default select-none uppercase";
                    }
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