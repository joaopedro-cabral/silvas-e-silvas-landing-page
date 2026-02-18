import React, { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

export const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleClick = () => {
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=Olá, estou no site e preciso de materiais.`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 flex items-center gap-2 group animate-bounce-subtle"
      aria-label="Falar no WhatsApp"
    >
      <img src="/img/whatsapp-icon.webp" className="md:w-10 md:h-10" alt="" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-bold">
        Orçamento Rápido
      </span>
    </button>
  );
};