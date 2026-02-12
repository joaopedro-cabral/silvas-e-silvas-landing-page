import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../constants';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-brand-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-center text-white mb-12 uppercase">
          Dúvidas Frequentes
        </h2>
        
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="bg-brand-card border border-white/5 overflow-hidden group">
              <button
                onClick={() => toggle(idx)}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-white/5 transition-colors text-left"
              >
                <span className="font-bold text-white uppercase text-sm tracking-wide">{faq.question}</span>
                {openIndex === idx ? (
                  <Minus className="w-5 h-5 text-brand-orange flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-500 group-hover:text-white flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-gray-400 leading-relaxed text-sm font-light border-t border-white/5 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};