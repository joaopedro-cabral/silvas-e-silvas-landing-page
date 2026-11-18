import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

interface HeaderProps {
  isElectricalPage?: boolean;
}

const homeLinks = [
  { id: 'sobre', label: 'A Empresa' },
  { id: 'categorias', label: 'Produtos' },
  { id: 'depoimentos', label: 'Depoimentos' },
];

export const Header: React.FC<HeaderProps> = ({ isElectricalPage = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  const homeSection = (id: string) => isElectricalPage ? `/#${id}` : `#${id}`;
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`site-header fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md border-b-2 border-brand-black py-3 shadow-lg' : 'bg-white/95 py-8'}`}>
      <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center gap-5">
          <a href="/" aria-label="Silvas e Silvas — início" className="flex flex-col items-start flex-shrink-0 group">
            <div className="brush-highlight px-3 py-0.5">
              <span className="text-2xl font-[900] text-brand-black uppercase tracking-tighter block leading-none">
                Silvas <span className="text-brand-black">&</span> Silvas
              </span>
            </div>
            <span className="mt-1 text-[8px] font-black tracking-[0.2em] text-brand-black uppercase border-t pt-1 w-full text-center">
              Materiais de Construção
            </span>
          </a>

          <nav aria-label="Navegação principal" className="hidden lg:flex items-center gap-5 xl:gap-7">
            {homeLinks.map(({ id, label }) => (
              <a key={id} href={homeSection(id)} className="text-brand-black font-black text-[10px] uppercase tracking-widest hover:text-brand-green transition-colors relative group">
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-green group-hover:w-full transition-all" />
              </a>
            ))}
            <a href="/produtos-eletricos" aria-current={isElectricalPage ? 'page' : undefined} className="electrical-nav-link">
              <Zap size={14} aria-hidden="true" /> Elétrica
            </a>
            <a href={homeSection('contato')} className="text-brand-black px-5 py-2.5 font-[900] uppercase text-[10px] bg-brand-green transition-all border-2 border-brand-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-0.5 active:translate-y-0.5">
              Lojas
            </a>
            <a href={isElectricalPage ? '#como-comprar' : '#whatsapp-final'} className="bg-brand-black text-brand-green px-5 py-2.5 font-[900] uppercase text-[10px] hover:bg-brand-green hover:text-brand-black transition-all border-2 border-brand-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-0.5 active:translate-y-0.5">
              Orçamento
            </a>
          </nav>

          <button onClick={() => setIsMenuOpen(open => !open)} aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={isMenuOpen} aria-controls="mobile-menu" className="lg:hidden text-brand-black p-2 bg-brand-green border-2 border-brand-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            {isMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav id="mobile-menu" aria-label="Navegação mobile" className="lg:hidden bg-white border-b-4 border-brand-black p-6 space-y-4 shadow-2xl">
          {homeLinks.map(({ id, label }) => (
            <a key={id} href={homeSection(id)} onClick={closeMenu} className="block w-full text-left text-brand-black font-black uppercase text-lg border-b border-gray-100 pb-2">{label}</a>
          ))}
          <a href="/produtos-eletricos" onClick={closeMenu} aria-current={isElectricalPage ? 'page' : undefined} className="electrical-nav-link"><Zap size={18} aria-hidden="true" /> Produtos elétricos</a>
          <a href={homeSection('contato')} onClick={closeMenu} className="block w-full text-left text-brand-black font-black uppercase text-lg border-b border-gray-100 pb-2">Lojas</a>
          <a href={isElectricalPage ? '#como-comprar' : '#whatsapp-final'} onClick={closeMenu} className="block text-center w-full bg-brand-green text-brand-black py-4 font-black uppercase text-lg border-2 border-brand-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Orçamento</a>
        </nav>
      )}
    </header>
  );
};
