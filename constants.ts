import { 
  BookOpen, 
  Tent, 
  Pencil, 
  Calculator, 
  Speaker, 
  Type, 
  Puzzle,
  Star,
  Smartphone,
  Download,
  Printer,
  Smile
} from 'lucide-react';

export const APP_CONTENT = [
  { 
    title: "Separando as Sílabas", 
    icon: BookOpen,
    image: "https://res.cloudinary.com/dvg6hojfs/image/upload/v1770685545/ChatGPT_Image_9_de_fev._de_2026_22_05_14_ginkaq.png"
  },
  { 
    title: "Barraquinha das Sílabas", 
    icon: Tent,
    image: "https://res.cloudinary.com/dvg6hojfs/image/upload/v1770686452/ChatGPT_Image_9_de_fev._de_2026_22_15_28_z9x1xd.png"
  },
  { 
    title: "Formando Palavras", 
    icon: Pencil,
    image: "https://placehold.co/600x400/EAF0FF/1F4FD8?text=Palavras"
  },
  { 
    title: "Matemática para Alfabetização", 
    icon: Calculator,
    image: "https://placehold.co/600x400/EAF0FF/1F4FD8?text=Matemática"
  },
  { 
    title: "Alfabeto Fônico", 
    icon: Speaker,
    image: "https://placehold.co/600x400/EAF0FF/1F4FD8?text=Alfabeto"
  },
  { 
    title: "Aprendendo as Vogais", 
    icon: Type,
    image: "https://placehold.co/600x400/EAF0FF/1F4FD8?text=Vogais"
  },
  { 
    title: "Sílabas Simples", 
    icon: Puzzle,
    image: "https://placehold.co/600x400/EAF0FF/1F4FD8?text=Sílabas"
  },
];

export const TESTIMONIALS = [
  {
    name: "Mariana S.",
    role: "Mãe de aluno (5 anos)",
    text: "Agora tenho tudo organizado no celular. Acabou a bagunça de folhas soltas pela casa.",
    stars: 5
  },
  {
    name: "Fernanda L.",
    role: "Professora",
    text: "Meu filho aprende brincando. O material é muito didático e as ilustrações são lindas.",
    stars: 5
  },
  {
    name: "Carla D.",
    role: "Mãe (4 anos)",
    text: "Aplicativo simples e prático. Em dois cliques já estou com a atividade pronta para usar.",
    stars: 5
  }
];

export const BONUSES = [
  { 
    title: "Cenário 3D", 
    price: "R$ 27,00",
    image: "https://res.cloudinary.com/dvg6hojfs/image/upload/v1770598326/cigarra_3d_vmreid.png"
  },
  { 
    title: "Brincadeiras Interativas", 
    price: "R$ 27,00",
    image: "https://res.cloudinary.com/dvg6hojfs/image/upload/v1770599925/jogo_int._e6nvoy.png"
  },
  { 
    title: "Leiturinhas", 
    price: "R$ 17,00",
    image: "https://res.cloudinary.com/dvg6hojfs/image/upload/v1770600303/leitu._cczurf.png"
  },
  { 
    title: "Consciência Silábica", 
    price: "R$ 17,00",
    image: "https://res.cloudinary.com/dvg6hojfs/image/upload/v1770600635/silab_vmddzp.png"
  },
  { 
    title: "Interpretação e Escrita", 
    price: "R$ 17,00",
    image: "https://res.cloudinary.com/dvg6hojfs/image/upload/v1770600934/inter._escri_diynx2.png"
  },
];

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Baixe o App",
    desc: "Acesso enviado por e-mail após a compra",
    icon: Download
  },
  {
    step: 2,
    title: "Acesse pelo celular",
    desc: "Celular, tablet ou computador",
    icon: Smartphone
  },
  {
    step: 3,
    title: "Baixe ou imprima",
    desc: "PDFs ilimitados para usar quando quiser",
    icon: Printer
  },
  {
    step: 4,
    title: "Hora da diversão",
    desc: "Aplicar e aprender com seu pequeno",
    icon: Smile
  }
];

export const FAQS = [
  {
    question: "Para qual faixa etária é recomendado?",
    answer: "O material é ideal para crianças de 3 a 8 anos, cobrindo desde a coordenação motora inicial até a alfabetização e matemática básica."
  },
  {
    question: "O pagamento é único ou mensalidade?",
    answer: "Pagamento ÚNICO! Você paga apenas R$ 47,00 uma vez e tem acesso vitalício ao material adquirido, sem mensalidades surpresas."
  },
  {
    question: "Como recebo o acesso?",
    answer: "Assim que o pagamento for confirmado, você receberá um e-mail com seus dados de login e senha para baixar o aplicativo e acessar todo o material."
  },
  {
    question: "Preciso imprimir tudo de uma vez?",
    answer: "Não! Você pode baixar e imprimir apenas as atividades que for utilizar no momento. O material fica salvo no app para quando você precisar."
  },
  {
    question: "Por quanto tempo terei acesso?",
    answer: "O acesso é vitalício. Você pode entrar no aplicativo e baixar as atividades quantas vezes quiser, para sempre."
  }
];