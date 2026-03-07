import React from 'react';
import { 
  Smartphone, 
  FileText, 
  CheckCircle2, 
  Download, 
  XCircle, 
  Clock, 
  Search, 
  ShieldCheck, 
  Star,
  Gift,
  Menu,
  Check,
  Users,
  BookOpen
} from 'lucide-react';
import { Button } from './components/Button';
import { Accordion } from './components/Accordion';
import { SalesNotification } from './components/SalesNotification';
import { APP_CONTENT, BONUSES, HOW_IT_WORKS, FAQS } from './constants';

const App: React.FC = () => {
  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      
      {/* Componente de Notificação de Vendas */}
      <SalesNotification />
      
      {/* 1️⃣ HERO SECTION */}
      <header className="relative bg-gradient-to-b from-[#F3E8FF] to-[#E9D5FF] overflow-hidden pt-2 pb-24 lg:pt-4 lg:pb-48">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-50 pointer-events-none">
          <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-brand-purple/20 blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-brand-yellow/30 blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-20 text-center text-gray-900 flex flex-col items-center">
          
          {/* Top Badge - Urgency */}
          <div className="inline-block bg-brand-yellow text-brand-purpleDark px-4 py-1.5 rounded-full mb-6 font-bold text-xs md:text-sm tracking-wide shadow-[0_0_15px_rgba(255,215,0,0.4)] animate-pulse border-2 border-yellow-200">
            ⚠️ Restam Apenas 57 Acessos
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold leading-tight mb-4 max-w-4xl mx-auto">
            📱 1.500 ATIVIDADES INTERATIVAS <br className="hidden md:block"/>
            <span className="text-brand-purple">para reforçar e acelerar</span> o aprendizado
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-800 max-w-2xl mx-auto mb-6 leading-relaxed">
            Tenha acesso ao <strong className="text-brand-purple font-bold">APP EDUCACIONAL MAIS COMPLETO DO BRASIL</strong>, com mais de 1.500 atividades infantis organizadas, prontas para baixar direto no seu celular.
          </p>

          {/* Hero Image */}
          <img 
            src="https://res.cloudinary.com/dvg6hojfs/image/upload/v1770581055/image_1770580969083_35hlbs_dt4f28.png" 
            alt="Prévia das atividades educativas no celular e impressas" 
            className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto mb-8 object-contain"
          />

          <div className="flex flex-col items-center w-full">
            <Button onClick={scrollToOffer} className="shadow-brand-green/20 shadow-xl text-base md:text-lg px-8 py-3 md:px-10 md:py-4 w-full max-w-sm md:w-auto animate-bounce-subtle transform hover:scale-105 transition-transform duration-200">
              ⬇️ QUERO ACESSAR O APP AGORA
            </Button>
            <p className="mt-3 text-xs text-gray-500 opacity-90 font-medium tracking-wide">
              🔒 Compra 100% segura • Acesso imediato
            </p>
          </div>

          {/* Feature Pills - Tight row */}
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 mt-6 text-xs font-semibold text-gray-600">
            <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-purple-100 shadow-sm">
              <Smartphone className="w-3.5 h-3.5 text-brand-purple" />
              <span className="whitespace-nowrap">Tudo no app</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-purple-100 shadow-sm">
              <FileText className="w-3.5 h-3.5 text-brand-purple" />
              <span className="whitespace-nowrap">Sem bagunça</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-purple-100 shadow-sm">
              <Download className="w-3.5 h-3.5 text-brand-purple" />
              <span className="whitespace-nowrap">Acesso rápido</span>
            </div>
          </div>
        </div>

        {/* Smooth Wave Transition - Facing Down */}
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0] z-10">
          <svg className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[120px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" className="fill-white"></path>
          </svg>
        </div>
      </header>

      {/* 2️⃣ STATS SECTION (Replacement for Value & Organization) */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            
            {/* Stat 1 */}
            <div className="flex flex-col items-center group">
              <Users className="w-10 h-10 md:w-12 md:h-12 text-brand-purple mb-3 md:mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl md:text-4xl font-heading font-extrabold text-gray-900 mb-1">
                Mais de <br className="md:hidden" /> 12.000
              </h3>
              <p className="text-gray-500 font-medium text-sm md:text-base">Famílias Satisfeitas</p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center group">
              <BookOpen className="w-10 h-10 md:w-12 md:h-12 text-brand-purple mb-3 md:mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl md:text-4xl font-heading font-extrabold text-gray-900 mb-1">
                1500+
              </h3>
              <p className="text-gray-500 font-medium text-sm md:text-base">Atividades Prontas</p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center group">
              <Star className="w-10 h-10 md:w-12 md:h-12 text-brand-yellow mb-3 md:mb-4 group-hover:scale-110 transition-transform fill-brand-yellow/20" />
              <h3 className="text-2xl md:text-4xl font-heading font-extrabold text-gray-900 mb-1">
                4,9/5
              </h3>
              <p className="text-gray-500 font-medium text-sm md:text-base">Avaliação Média</p>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center group">
              <Download className="w-10 h-10 md:w-12 md:h-12 text-brand-purple mb-3 md:mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl md:text-4xl font-heading font-extrabold text-gray-900 mb-1">
                100%
              </h3>
              <p className="text-gray-500 font-medium text-sm md:text-base">Digital e Imediato</p>
            </div>

          </div>
        </div>
      </section>

      {/* 3️⃣ PAIN POINTS - Subtle Gray Background */}
      <section className="py-16 md:py-20 bg-[#F8FAFC]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-start md:items-center">
            <div className="flex-1 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-red-50 w-full">
              <div className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-bold mb-4 uppercase tracking-wider">
                O Problema
              </div>
              <h2 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-6">
                ❌ Chega de perder horas procurando atividades
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-gray-600">
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm">Arquivos desorganizados e de baixa qualidade visual.</p>
                </div>
                <div className="flex items-start gap-3 text-gray-600">
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm">Links quebrados e sites cheios de vírus e anúncios.</p>
                </div>
                <div className="flex items-start gap-3 text-gray-600">
                  <Search className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm">Perda de tempo filtrando o que é realmente bom.</p>
                </div>
              </div>
            </div>

            {/* Setas ou Divider no mobile */}
            <div className="md:hidden w-full flex justify-center -my-4 z-10">
               <div className="bg-gray-200 p-2 rounded-full">
                 <div className="w-1 h-8 bg-gray-300"></div>
               </div>
            </div>

            <div className="flex-1 bg-white p-6 md:p-8 rounded-2xl shadow-lg border-2 border-brand-green/10 w-full relative overflow-hidden">
               <div className="absolute top-0 right-0 w-20 h-20 bg-brand-green/5 rounded-bl-full -mr-4 -mt-4"></div>
               <div className="inline-block bg-green-100 text-brand-green px-3 py-1 rounded-full text-xs font-bold mb-4 uppercase tracking-wider relative z-10">
                A Solução
              </div>
              <h2 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-6 relative z-10">
                ✅ Tenha tudo pronto em um só lugar
              </h2>
               <div className="space-y-4 relative z-10">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <p className="text-sm font-medium text-gray-800">Tudo centralizado no app</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <p className="text-sm font-medium text-gray-800">Conteúdo organizado por fase</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <p className="text-sm font-medium text-gray-800">Acesso imediato e vitalício</p>
                </div>
                 <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <p className="text-sm font-medium text-gray-800">Sempre à mão no celular</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4️⃣ HOW IT WORKS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
           <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-purple mb-16">
            📲 Como funciona o acesso ao aplicativo
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {HOW_IT_WORKS.map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="w-20 h-20 mx-auto bg-brand-yellow rounded-2xl rotate-3 group-hover:rotate-6 transition-transform flex items-center justify-center mb-6 shadow-md z-10 relative">
                   <step.icon className="w-10 h-10 text-brand-purple -rotate-3 group-hover:-rotate-6 transition-transform" />
                   <div className="absolute -top-3 -right-3 w-8 h-8 bg-brand-purple text-white rounded-full flex items-center justify-center font-bold border-4 border-white shadow-sm">
                     {step.step}
                   </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{step.title}</h3>
                <p className="text-sm text-gray-500 px-4 leading-relaxed">{step.desc}</p>
                
                {/* Connector Line (Desktop) */}
                {idx < HOW_IT_WORKS.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-1/2 w-full h-1 bg-dashed border-t-2 border-brand-purpleLight -z-0"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5️⃣ APP CONTENT */}
      <section className="py-20 bg-brand-purpleLight">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4">
              🧠 O que você encontra dentro do app
            </h2>
            <p className="text-gray-600">Material didático completo para o desenvolvimento infantil.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {APP_CONTENT.map((content: any, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-purple-50 overflow-hidden flex flex-col hover:shadow-md transition-shadow group">
                {/* Image Container */}
                <div className="h-40 md:h-48 w-full overflow-hidden bg-white relative">
                   {content.image ? (
                     <img 
                       src={content.image} 
                       alt={content.title} 
                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                     />
                   ) : (
                      <div className="w-full h-full flex items-center justify-center bg-purple-50 text-brand-purple">
                         <content.icon className="w-12 h-12 opacity-50" />
                      </div>
                   )}
                </div>
                {/* Title Container */}
                <div className="bg-brand-purple p-2 md:p-3 flex items-center justify-center flex-grow min-h-[3rem]">
                   <h3 className="text-xs md:text-sm font-semibold text-white text-center leading-tight">{content.title}</h3>
                </div>
              </div>
            ))}
            
            {/* "And much more" card */}
            <div className="bg-brand-purple rounded-xl shadow-sm flex flex-col items-center justify-center text-center text-white transform hover:scale-105 transition-transform overflow-hidden min-h-[12rem] p-4">
              <span className="text-2xl md:text-3xl font-bold mb-1">+1.400</span>
              <p className="font-medium text-xs md:text-sm opacity-90">Atividades disponíveis</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6️⃣ SOCIAL PROOF */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-purple mb-4">
              ❤️ Quem baixou o app, amou
            </h2>
          </div>

          <div className="max-w-4xl mx-auto w-full px-4 md:px-0">
             <iframe 
               src="https://cozy-video-box.lovable.app/embed/25a5f57b-1fe7-42e9-b2bb-ada7c345bf8b?color=%239F21E3&progress=%239F21E3&controls=false&autoplay=false&loop=false" 
               width="100%" 
               height="450" 
               frameBorder="0" 
               allowFullScreen 
               allow="autoplay; fullscreen"
               className="rounded-2xl shadow-xl w-full"
             ></iframe>
          </div>
        </div>
      </section>

      {/* 7️⃣ BONUS */}
      <section className="py-20 bg-[#F8F5FC] overflow-hidden">
        <div className="container mx-auto px-4">
           <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-2">
              🎁 E não para por aí...
            </h2>
            <p className="text-gray-600">Receba esses bônus exclusivos gratuitamente hoje.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
            {BONUSES.map((bonus: any, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-purple-100 flex flex-col hover:shadow-md transition-shadow h-full overflow-hidden relative group">
                
                {/* Yellow Ribbon Header */}
                <div className="absolute top-0 left-0 right-0 bg-brand-yellow py-3 px-3 z-10 flex items-center justify-center gap-2 shadow-sm">
                  <Gift className="w-5 h-5 text-gray-900 flex-shrink-0" />
                  <span className="font-heading font-bold text-gray-900 text-xs md:text-sm uppercase tracking-wide truncate">
                    BÔNUS {idx + 1} - {bonus.title}
                  </span>
                </div>

                {/* Image Top (Full Bleed) */}
                {bonus.image && (
                  <div className="w-full">
                     <img 
                       src={bonus.image} 
                       alt={bonus.title} 
                       className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500" 
                     />
                  </div>
                )}
                
                {/* Content Area */}
                <div className="p-5 flex flex-col flex-grow items-center justify-center text-center">
                  
                  {/* Footer Info Centered */}
                  <div className="mt-auto pt-2">
                    <p className="text-xs text-gray-500 leading-tight mb-2">
                      Valor separado: <span className="line-through">{bonus.price}</span>
                    </p>
                    <p className="text-xs font-bold text-brand-green uppercase bg-green-50 inline-block px-3 py-1 rounded-full border border-green-100">
                      GRÁTIS HOJE
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8️⃣ OFFER SECTION */}
      <section id="offer" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Escolha o melhor plano para você
            </h2>
            <p className="text-gray-600">Comece hoje mesmo a transformar o aprendizado do seu filho.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-center max-w-5xl mx-auto">
            
            {/* BASIC OFFER CARD */}
            <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden relative flex flex-col">
              <div className="p-6 md:p-8 flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Acesso Anual</h3>
                <p className="text-gray-500 text-sm mb-6">Para quem quer começar agora</p>
                
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-sm text-gray-400">R$</span>
                  <span className="text-4xl font-extrabold text-gray-900">19,90</span>
                  <span className="text-sm text-gray-400">/ano</span>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" />
                    <span className="text-sm">+1.500 Atividades PDF</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" />
                    <span className="text-sm">Acesso Imediato</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" />
                    <span className="text-sm">12 Meses de Acesso</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <XCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm line-through">Sem Bônus Exclusivos</span>
                  </div>
                   <div className="flex items-center gap-3 text-gray-400">
                    <XCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm line-through">Sem Acesso Vitalício</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6 pt-0 mt-auto">
                <Button 
                  onClick={() => window.location.href = "https://go.pepperpay.com.br/gk3rj"} 
                  variant="secondary" 
                  fullWidth 
                  className="border-2 border-brand-green text-brand-green hover:bg-green-50"
                >
                  Começar com Básico
                </Button>
              </div>
            </div>

            {/* PREMIUM OFFER CARD */}
            <div className="w-full max-w-sm bg-white rounded-3xl shadow-2xl border-2 border-brand-yellow overflow-hidden relative transform md:-translate-y-4 md:scale-105 z-10 flex flex-col">
              
              {/* Badge */}
              <div className="bg-brand-yellow py-2 text-center">
                <span className="text-brand-purpleDark font-bold text-xs uppercase tracking-wider">⭐ Mais Vendido • Melhor Custo-Benefício</span>
              </div>

              <div className="p-6 md:p-8 flex-grow">
                <h3 className="text-2xl font-bold text-brand-green mb-2">Acesso Vitalício</h3>
                <p className="text-gray-500 text-sm mb-6">Completo + Bônus + Garantia</p>
                
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-sm text-gray-400">R$</span>
                  <span className="text-5xl font-extrabold text-brand-green">37,00</span>
                  <span className="text-sm text-gray-400">/único</span>
                </div>
                <p className="text-xs text-green-600 font-bold bg-green-50 inline-block px-2 py-1 rounded mb-6">
                  Economize com pagamento único
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="bg-brand-green/10 p-1 rounded-full"><Check className="w-4 h-4 text-brand-green" /></div>
                    <span className="text-sm font-bold">Acesso Imediato</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="bg-brand-green/10 p-1 rounded-full"><Check className="w-4 h-4 text-brand-green" /></div>
                    <span className="text-sm font-bold">Tudo do plano básico</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="bg-brand-green/10 p-1 rounded-full"><Check className="w-4 h-4 text-brand-green" /></div>
                    <span className="text-sm font-bold">Acesso Vitalício (Para Sempre)</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="bg-brand-green/10 p-1 rounded-full"><Check className="w-4 h-4 text-brand-green" /></div>
                    <span className="text-sm font-bold">Todos os Bônus Exclusivos</span>
                  </div>
                  
                  {/* Detailed Bonus List */}
                  <div className="pl-2 space-y-2 mb-2">
                    {BONUSES.map((bonus: any, idx: number) => (
                      <div key={idx} className="flex items-center gap-2 text-gray-600">
                         <div className="bg-green-50 p-0.5 rounded-full flex-shrink-0"><Check className="w-3 h-3 text-brand-green" /></div>
                         <span className="text-xs font-medium">Bônus {idx + 1} - {bonus.title}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="bg-brand-green/10 p-1 rounded-full"><Check className="w-4 h-4 text-brand-green" /></div>
                    <span className="text-sm font-bold">Atualizações Gratuitas</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="bg-brand-green/10 p-1 rounded-full"><Check className="w-4 h-4 text-brand-green" /></div>
                    <span className="text-sm font-bold">Garantia de 7 Dias</span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 mt-auto">
                <Button 
                  onClick={() => window.location.href = "https://go.pepperpay.com.br/gk3rj"} 
                  fullWidth 
                  className="py-4 text-lg shadow-brand-green/40 animate-pulse"
                >
                  QUERO ACESSO COMPLETO
                </Button>
                <div className="mt-4 flex items-center justify-center gap-2 text-gray-400 text-[10px]">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Pagamento 100% Seguro</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9️⃣ GUARANTEE */}
      <section className="py-16 bg-green-50/50">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <ShieldCheck className="w-12 h-12 md:w-16 md:h-16 text-brand-green mx-auto mb-4 md:mb-6" />
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4">
            Satisfação garantida ou seu dinheiro de volta
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-0 leading-relaxed">
            Você tem <strong>7 dias</strong> para testar o app e o material. Se não gostar, por qualquer motivo, nós devolvemos 100% do seu dinheiro. Sem perguntas.
          </p>
        </div>
      </section>

      {/* 🔟 FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center text-brand-purple mb-12">
            Perguntas Frequentes
          </h2>
          <Accordion items={FAQS} />
        </div>
      </section>

      {/* 11️⃣ FOOTER */}
      <footer className="bg-brand-purple text-white py-12 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8 mb-8 text-sm opacity-90">
             <a href="#" className="hover:text-brand-yellow transition-colors">contato@seudominio.com</a>
             <span className="hidden md:inline">•</span>
             <a href="#" className="hover:text-brand-yellow transition-colors">WhatsApp Suporte</a>
             <span className="hidden md:inline">•</span>
             <span className="flex items-center justify-center gap-1">
               <ShieldCheck className="w-4 h-4" /> Site Seguro
             </span>
          </div>
          <p className="text-xs md:text-sm text-purple-200">
            Copyright © 2026 EduKids App. Todos os direitos reservados.
          </p>
          <p className="text-[10px] text-purple-300/50 mt-4 max-w-2xl mx-auto leading-relaxed">
            Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Uma vez que você sai do Facebook, a responsabilidade não é deles e sim do nosso site.
          </p>
        </div>
      </footer>

    </div>
  );
};

export default App;