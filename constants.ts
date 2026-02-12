import { Clock, Wrench, ShieldCheck, Home, Zap, Droplet, Hammer, BrickWall } from "lucide-react";
import { Benefit, FaqItem, Testimonial } from "./types";

export const COMPANY_INFO = {
  name: "Silvas e Silvas",
  phone: "(11) 99999-9999",
  whatsapp: "5511999999999",
  address: "Av. Santo Amaro, 1234 - Santo Amaro, São Paulo - SP",
  mapLink: "https://maps.google.com/?q=Silvas+e+Silvas+Santo+Amaro",
  yearsInBusiness: 10,
  productsCount: "10.000"
};

export const HERO_VARIANTS = {
  // Option 3: Benefit/Result (Hybrid with Client Request)
  benefit: {
    headline: "Tudo para Casa, Obra e Manutenção em Santo Amaro",
    subhead: "Há mais de 10 anos oferecendo variedade, qualidade e confiança. Mais de 10.000 itens com entrega rápida ou retirada na loja."
  }
};

export const CATEGORIES = [
  {
    id: 1,
    title: "Casa & Utilidades",
    description: "Organização, limpeza e conforto.",
    icon: Home
  },
  {
    id: 2,
    title: "Construção",
    description: "Materiais para pequenas e grandes obras.",
    icon: BrickWall
  },
  {
    id: 3,
    title: "Elétrica",
    description: "Fios, cabos, disjuntores e iluminação.",
    icon: Zap
  },
  {
    id: 4,
    title: "Hidráulica",
    description: "Tubos, conexões e registros.",
    icon: Droplet
  },
  {
    id: 5,
    title: "Ferramentas",
    description: "Manuais e elétricas para profissionais.",
    icon: Hammer
  }
];

export const BENEFITS: Benefit[] = [
  {
    id: 1,
    title: "+10 Anos de Mercado",
    description: "Uma década de experiência atendendo Santo Amaro com seriedade e compromisso.",
    icon: ShieldCheck
  },
  {
    id: 2,
    title: "+10.000 Itens",
    description: "Variedade imbatível. De parafusos a ferramentas pesadas, temos o que você precisa.",
    icon: Wrench
  },
  {
    id: 3,
    title: "Atendimento Especializado",
    description: "Nossa equipe técnica entende de obra e ajuda você a escolher o produto certo.",
    icon: Clock // Using Clock as a placeholder, contextually implies saving time via expertise
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Carlos Mendes",
    role: "Eletricista Autônomo",
    content: "A variedade de material elétrico é a melhor da região. Sempre acho o que preciso e o atendimento técnico faz toda a diferença.",
    rating: 5
  },
  {
    id: 2,
    name: "Mariana Souza",
    role: "Dona de Casa",
    content: "Moro aqui em Santo Amaro e adoro a loja. Comprei itens de utilidade para o lar e fui muito bem atendida. Entrega super rápida.",
    rating: 5
  },
  {
    id: 3,
    name: "Eng. Roberto Dias",
    role: "Construtor",
    content: "Parceria de confiança há anos. Para minhas obras, a agilidade na entrega e a qualidade das marcas (Tramontina, Tigre) são essenciais.",
    rating: 5
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "Vocês entregam em quais bairros?",
    answer: "Focamos na região de Santo Amaro e Zona Sul de SP para garantir agilidade. Consulte seu CEP no WhatsApp."
  },
  {
    question: "Vocês trabalham com quais formas de pagamento?",
    answer: "Aceitamos Pix, cartões de crédito e débito, e dinheiro. Faturamos para empresas mediante cadastro."
  },
  {
    question: "Posso retirar na loja?",
    answer: "Sim! Temos loja física em Santo Amaro. Você pode comprar pelo WhatsApp e retirar no balcão."
  },
  {
    question: "Vocês vendem materiais básicos (areia/pedra)?",
    answer: "Sim! Atendemos todas as fases da obra, do básico ao acabamento, incluindo elétrica e hidráulica."
  }
];