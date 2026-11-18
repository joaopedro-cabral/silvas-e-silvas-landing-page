import React from 'react';
import { ArrowDown, ArrowUpRight, Check, MapPin, MessageCircle, Send, ShieldCheck, Store, Truck, Zap } from 'lucide-react';
import { COMPANY_INFO, STORES } from '../constants';
import './electrical.css';

const whatsappUrl = (message: string) => `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
const listUrl = whatsappUrl('Olá! Vim pela página de produtos elétricos da Silvas e Silvas e gostaria de enviar a lista do meu eletricista para orçamento.');
const pickupUrl = whatsappUrl('Olá! Gostaria de comprar materiais elétricos pelo WhatsApp e retirar na loja em até 30 minutos. Podemos confirmar os itens e a unidade?');
const deliveryUrl = whatsappUrl('Olá! Gostaria de comprar materiais elétricos e receber em até 2 horas. Podemos confirmar a disponibilidade e a entrega no meu endereço?');

const products = [
  { title: 'Fios e cabos por metro', label: 'Linha SIL', image: '/img/eletrica/sil-cabos-flexiveis.jpg', alt: 'Cabo flexível SIL azul com condutor de cobre', description: 'A metragem que a sua lista pede. Consulte as cores e bitolas disponíveis.', message: 'Olá! Gostaria de um orçamento de fios e cabos SIL por metro.' },
  { title: 'Rolos de fios e cabos', label: 'Linha SIL', image: '/img/eletrica/sil-rolo.jpg', alt: 'Rolos de cabos SIL com embalagem da marca', description: 'Para a reforma ou a instalação completa, com a qualidade da marca SIL.', message: 'Olá! Gostaria de um orçamento de rolos de fios e cabos SIL.' },
  { title: 'Carretéis', label: 'Linha SIL', image: '/img/eletrica/sil-carreteis.jpg', alt: 'Carretéis de cabos SIL em diferentes cores', description: 'Mais praticidade para a sua obra. Envie as quantidades para consultar.', message: 'Olá! Gostaria de consultar fios e cabos SIL em carretéis.' },
  { title: 'Disjuntores e acessórios', label: 'Complete sua lista', image: '/img/eletrica/disjuntores.svg', alt: 'Ilustração de disjuntores para quadro elétrico', description: 'Os complementos para o seu pedido, conforme a especificação do eletricista.', message: 'Olá! Gostaria de um orçamento de disjuntores e acessórios elétricos.' },
];

const neighborhoods = ['Brooklin', 'Campo Belo', 'Ibirapuera', 'Moema', 'Vila Santa Catarina', 'Vila Mascote'];
const steps = [
  { title: 'Envie a lista', description: 'Pode ser foto, áudio ou mensagem. Não precisa entender de elétrica para comprar.', icon: Send },
  { title: 'Confirme seu pedido', description: 'Nossa equipe confere os itens e combina com você o valor, a retirada ou a entrega.', icon: Check },
  { title: 'Pronto. Pode deixar com a gente.', description: 'Retire em até 30 minutos ou receba no seu endereço em até 2 horas.*', icon: Truck },
];

interface WhatsAppLinkProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
}

const WhatsAppLink: React.FC<WhatsAppLinkProps> = ({ children, href = listUrl, className = '' }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={`electric-button ${className}`}>
    <MessageCircle size={21} aria-hidden="true" />
    {children}
    <ArrowUpRight size={19} aria-hidden="true" />
  </a>
);

export const ElectricalProducts: React.FC = () => (
  <div className="electrical-page">
    <section className="electric-hero" aria-labelledby="electric-title">
      <div className="electric-container">
        <nav className="electric-breadcrumb" aria-label="Caminho da página">
          <a href="/">Início</a><span aria-hidden="true">/</span><span aria-current="page">Produtos elétricos</span>
        </nav>
        <div className="electric-hero-grid">
          <div className="electric-hero-copy">
            <p className="electric-eyebrow"><Zap size={16} aria-hidden="true" /> Elétrica com praticidade</p>
            <h1 id="electric-title">Fios e cabos SIL.<br />Sua obra não<br />precisa <span className="brush-highlight">esperar.</span></h1>
            <p className="electric-intro">Recebeu a lista do eletricista? Envie pelo WhatsApp. A gente separa tudo para você retirar ou receber em casa.</p>
            <div className="electric-hero-deadlines">
              <span><Store size={15} aria-hidden="true" /> Retire em até <strong>30 min</strong></span>
              <span><Truck size={16} aria-hidden="true" /> Receba em até <strong>2 h*</strong></span>
            </div>
            <p className="electric-hero-cutoff">*Entrega para pedidos até as 14h. Consulte seu endereço.</p>
            <div className="electric-hero-actions">
              <WhatsAppLink>Enviar minha lista</WhatsAppLink>
              <a href="#portfolio-eletrico" className="electric-text-link">Conhecer os produtos <ArrowDown size={15} aria-hidden="true" /></a>
            </div>
            <p className="electric-hero-note"><Check size={15} aria-hidden="true" /> Você manda a lista. A gente facilita a compra.</p>
          </div>

          <div className="electric-showcase">
            <div className="electric-showcase-top">
              <span><ShieldCheck size={17} aria-hidden="true" /> Revendedor oficial</span>
              <img src="/img/sil-logo.png" alt="SIL Fios e Cabos Elétricos" width="100" height="37" />
            </div>
            <div className="electric-showcase-image">
              <img src="/img/eletrica/sil-cabo-hero.jpg" alt="Cabo FlexSil 750 V azul com os fios de cobre em destaque" width="1350" height="430" fetchPriority="high" />
              <span className="electric-product-caption">Fios e cabos elétricos</span>
            </div>
            <div className="electric-showcase-bottom">
              <span className="electric-quality-mark"><ShieldCheck size={28} aria-hidden="true" /></span>
              <div><strong>Qualidade SIL.</strong><span>Confiança em cada conexão.</span></div>
              <span className="electric-showcase-number" aria-hidden="true">01</span>
            </div>
            <div className="electric-showcase-tab"><Zap size={15} aria-hidden="true" /> Sua lista. Nossa especialidade.</div>
          </div>
        </div>
      </div>
    </section>

    <section className="electric-service" aria-label="Opções de retirada e entrega">
      <div className="electric-container electric-service-grid">
        <article className="electric-service-option">
          <Store size={30} strokeWidth={1.7} aria-hidden="true" />
          <div>
            <p className="electric-eyebrow">Compre e retire na loja</p>
            <h2>Em até <strong>30</strong> minutos<span>*</span></h2>
            <p>Seu pedido separado. Sua rotina sem espera.</p>
            <a href={pickupUrl} target="_blank" rel="noopener noreferrer">Quero retirar na loja <ArrowUpRight size={17} aria-hidden="true" /></a>
          </div>
        </article>
        <article className="electric-service-option">
          <Truck size={32} strokeWidth={1.7} aria-hidden="true" />
          <div>
            <p className="electric-eyebrow">Receba no seu endereço</p>
            <h2>Em até <strong>2</strong> horas<span>*</span></h2>
            <p>Para pedidos realizados até as 14h.</p>
            <a href={deliveryUrl} target="_blank" rel="noopener noreferrer">Quero receber em casa <ArrowUpRight size={17} aria-hidden="true" /></a>
          </div>
        </article>
      </div>
      <p className="electric-service-terms">*Prazos após a confirmação do pedido. Consulte disponibilidade, cobertura de entrega e frete pelo WhatsApp.</p>
    </section>

    <section id="portfolio-eletrico" className="electric-catalog" aria-labelledby="electric-catalog-title">
      <div className="electric-container">
        <div className="electric-section-heading">
          <div>
            <p className="electric-eyebrow"><Zap size={15} aria-hidden="true" /> O essencial para sua instalação</p>
            <h2 id="electric-catalog-title">Da sua lista<br /><span>para a sua obra.</span></h2>
          </div>
          <p>Do fio por metro ao rolo completo.<br />Conte com a gente para organizar seu pedido.</p>
        </div>
        <div className="electric-product-grid">
          {products.map((product, index) => (
            <article className="electric-product-card" key={product.title}>
              <div className="electric-card-image">
                <span className="electric-card-index">0{index + 1}</span>
                <img src={product.image} alt={product.alt} width="244" height="147" loading="lazy" />
              </div>
              <div className="electric-card-copy">
                <span className="electric-card-label">{product.label}</span>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <a href={whatsappUrl(product.message)} target="_blank" rel="noopener noreferrer" aria-label={`Cotar ${product.title.toLowerCase()} pelo WhatsApp`}>Pedir orçamento <ArrowUpRight size={19} aria-hidden="true" /></a>
              </div>
            </article>
          ))}
        </div>
        <p className="electric-catalog-note">Imagens ilustrativas. Cores, bitolas, embalagens e disponibilidade confirmadas no atendimento.</p>
      </div>
    </section>

    <section id="como-comprar" className="electric-order" aria-labelledby="electric-order-title">
      <div className="electric-container">
        <div className="electric-order-grid">
          <div>
            <p className="electric-eyebrow"><MessageCircle size={16} aria-hidden="true" /> Simples do começo ao fim</p>
            <h2 id="electric-order-title">Mande a lista.<br /><span>A gente cuida<br />do resto.</span></h2>
            <p className="electric-order-intro">Sem precisar decifrar nomes, bitolas ou quantidades. Envie o que o seu eletricista pediu e fale com quem entende.</p>
            <WhatsAppLink>Comprar pelo WhatsApp</WhatsAppLink>
          </div>
          <ol className="electric-steps">
            {steps.map((step, index) => (
              <li key={step.title}>
                <span className="electric-step-number">0{index + 1}</span>
                <div><h3>{step.title}</h3><p>{step.description}</p></div>
                <step.icon size={22} aria-hidden="true" />
              </li>
            ))}
          </ol>
        </div>

        <div className="electric-region">
          <div className="electric-region-heading"><MapPin size={21} aria-hidden="true" /><h3>Mais perto de você.</h3></div>
          <p>Atendimento e entrega para a sua região. Consulte seu endereço pelo WhatsApp.</p>
          <ul className="electric-neighborhoods">{neighborhoods.map(name => <li key={name}>{name}</li>)}</ul>
          <div className="electric-pickup-stores">
            <span>Prefere retirar em Santo Amaro?</span>
            {STORES.map(store => <a key={store.id} href={store.mapLink} target="_blank" rel="noopener noreferrer" aria-label={`Ver endereço da ${store.name} no Google Maps`}>{store.name} <ArrowUpRight size={14} aria-hidden="true" /></a>)}
          </div>
          <p className="electric-order-terms">*Retirada em até 30 minutos após a confirmação do pedido. Entrega em até 2 horas para pedidos realizados até as 14h, após confirmação. Consulte disponibilidade dos itens, cobertura e frete no atendimento.</p>
        </div>
      </div>
    </section>

    <div className="electric-mobile-cta"><WhatsAppLink>Enviar lista pelo WhatsApp</WhatsAppLink></div>
  </div>
);
