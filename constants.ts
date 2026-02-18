import { Clock, Wrench, ShieldCheck, Home, Zap, Droplet, Hammer, BrickWall } from "lucide-react";
import { Benefit, FaqItem, Testimonial } from "./types";

export const COMPANY_INFO = {
  name: "Silvas e Silvas",
  phone: "(11) 5681-7300",
  whatsapp: "5511986516849",
  yearsInBusiness: 10,
  productsCount: "10.000"
};

export const STORES = [
  {
    id: 1,
    name: "Loja 01 - Cerqueira César",
    address: "R. Cerqueira César, 31 - Santo Amaro, São Paulo - SP, 04750-080",
    mapLink: "https://www.google.com/maps/place/Silvas+e+Silvas+Casa+e+Constru%C3%A7%C3%A3o/@-23.6496129,-46.7066609,17z/data=!3m1!5s0x94ce505585648ce5:0xe47848b4ddc1b562!4m15!1m8!3m7!1s0x94ce505581b4ff2d:0xa209300e3fdd414c!2sR.+Cerqueira+C%C3%A9sar,+31+-+Santo+Amaro,+S%C3%A3o+Paulo+-+SP,+04750-080!3b1!8m2!3d-23.6496129!4d-46.7066609!16s%2Fg%2F11crs2012r!3m5!1s0x94ce51f5a18fb65b:0x8b1acb39027a6cf1!8m2!3d-23.6496129!4d-46.7066609!16s%2Fg%2F11p3jkywnp?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D",
    embedMap: "https://maps.google.com/maps?q=R.%20Cerqueira%20César,%2031%20-%20Santo%20Amaro&t=&z=15&ie=UTF8&iwloc=&output=embed"
  },
  {
    id: 2,
    name: "Loja 02 - Bandeira de Mello",
    address: "Rua Desembargador Bandeira de Mello, 94 - Santo Amaro, São Paulo - SP, 04743-000",
    mapLink: "https://www.google.com/maps/place/Silvas+e+Silvas+II+-+Casa+%7C+Constru%C3%A7%C3%A3o+%7C+El%C3%A9trica+%7C+Hidr%C3%A1ulica/@-23.6543345,-46.7059172,17z/data=!4m15!1m8!3m7!1s0x94ce50538e8dec1d:0x7509ed5c1507172a!2sRua+Desembargador+Bandeira+de+Mello,+94+-+Santo+Amaro,+S%C3%A3o+Paulo+-+SP,+04743-000!3b1!8m2!3d-23.6543345!4d-46.7059172!16s%2Fg%2F11c5m5pzm9!3m5!1s0x94ce5137d2dc6f63:0x92d516030551e92d!8m2!3d-23.6543345!4d-46.7059172!16s%2Fg%2F11jsksj4rx?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D",
    embedMap: "https://maps.google.com/maps?q=Rua%20Desembargador%20Bandeira%20de%20Mello,%2094%20-%20Santo%20Amaro&t=&z=15&ie=UTF8&iwloc=&output=embed"
  }
];

export const HERO_VARIANTS = {
  benefit: {
    headline: "Tudo para sua casa, obra e manutenção em um só lugar",
    subhead: "Há mais de 10 anos oferecendo variedade, qualidade e confiança em Santo Amaro."
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
    icon: Clock
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Vanderlei Silva de Souza",
    profile: "/public/img/materiais-construcao-01.png",
    content: "Eu recomendo, ótimo atendimento, bom preço, produto de qualidade.",
    rating: 5
  },
  {
    id: 2,
    name: "Marcia Christina Machado",
    profile: "/public/img/loja-construcao.png",
    content: "Ótimo atendimento, grande variedade de produtos!",
    rating: 5
  },
  {
    id: 3,
    name: "Luciana Andrade",
    profile: "/public/img/material-construcao.png",
    content: "Ótimo atendimento,bons descontos gente como a gente.",
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
    answer: "Sim! Temos duas lojas em Santo Amaro. Você pode comprar pelo WhatsApp e retirar no balcão da unidade de sua preferência."
  },
  {
    question: "Vocês vendem materiais básicos (areia/pedra)?",
    answer: "Sim! Atendemos todas as fases da obra, do básico ao acabamento, incluindo elétrica e hidráulica."
  }
];