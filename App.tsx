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
  Check
} from 'lucide-react';
import { Button } from './components/Button';
import { Accordion } from './components/Accordion';
import { APP_CONTENT, TESTIMONIALS, BONUSES, HOW_IT_WORKS, FAQS } from './constants';

const App: React.FC = () => {
  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      
      {/* 1️⃣ HERO SECTION */}
      <header className="relative bg-[linear-gradient(180deg,#1e3a8a_0%,#1F4FD8_100%)] overflow-hidden pt-2 pb-24 lg:pt-4 lg:pb-48">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-white blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-brand-yellow blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-20 text-center text-white flex flex-col items-center">
          
          {/* Top Badge - Urgency */}
          <div className="inline-block bg-brand-yellow text-brand-blue px-4 py-1.5 rounded-full mb-6 font-bold text-xs md:text-sm tracking-wide shadow-[0_0_15px_rgba(255,217,102,0.6)] animate-pulse border-2 border-yellow-200">
            ⚠️ Restam Apenas 57 Acessos
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold leading-tight mb-4 max-w-4xl mx-auto">
            📱 1.500 ATIVIDADES INTERATIVAS <br className="hidden md:block"/>
            <span className="text-brand-yellow">para reforçar e acelerar</span> o aprendizado
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg text-blue-50 max-w-2xl mx-auto mb-6 leading-relaxed">
            Tenha acesso ao <strong className="text-brand-yellow font-bold">APP EDUCACIONAL MAIS COMPLETO DO BRASIL</strong>, com mais de 1.500 atividades infantis organizadas, prontas para baixar direto no seu celular.
          </p>

          {/* Hero Image */}
          <img 
            src="https://res.cloudinary.com/dvg6hojfs/image/upload/v1770579744/atv01__1_-removebg-preview_raacoh.png" 
            alt="Prévia das atividades educativas no celular e impressas" 
            className="w-full max-w-[280px] sm:max-w-sm md:max-w-md mx-auto mb-8 object-contain"
          />

          <div className="flex flex-col items-center w-full">
            <Button onClick={scrollToOffer} className="shadow-brand-green/40 shadow-xl text-base md:text-lg px-8 py-3 md:px-10 md:py-4 w-full max-w-sm md:w-auto animate-bounce-subtle transform hover:scale-105 transition-transform duration-200">
              ⬇️ QUERO ACESSAR O APP AGORA
            </Button>
            <p className="mt-3 text-xs text-blue-200 opacity-90 font-medium tracking-wide">
              🔒 Compra 100% segura • Acesso imediato
            </p>
          </div>

          {/* Feature Pills - Tight row */}
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 mt-6 text-xs font-semibold text-white/90">
            <div className="flex items-center gap-1.5 bg-blue-900/30 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
              <Smartphone className="w-3.5 h-3.5 text-brand-yellow" />
              <span className="whitespace-nowrap">Tudo no app</span>
            </div>
            <div className="flex items-center gap-1.5 bg-blue-900/30 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
              <FileText className="w-3.5 h-3.5 text-brand-yellow" />
              <span className="whitespace-nowrap">Sem bagunça</span>
            </div>
            <div className="flex items-center gap-1.5 bg-blue-900/30 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
              <Download className="w-3.5 h-3.5 text-brand-yellow" />
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

      {/* 2️⃣ VALUE & ORGANIZATION */}
      <section className="pt-8 pb-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-blue mb-3">
              🎯 Aprender nunca foi tão fácil (e organizado)
            </h2>
            <p className="text-gray-600 text-sm md:text-lg">
              O aplicativo reúne mais de <strong className="text-brand-blue">80 apostilas</strong>, somando +1.500 atividades, para crianças de 3 a 8 anos. Tudo na palma da sua mão.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "Separado por Temas", desc: "Encontre exatamente o que seu filho precisa em segundos.", icon: CheckCircle2 },
              { title: "Acesso Rápido", desc: "Não perca tempo procurando arquivos em pastas perdidas.", icon: Smartphone },
              { title: "Download em PDF", desc: "Baixe e imprima quantas vezes quiser.", icon: Download },
              { title: "Sempre Disponível", desc: "Seu material vitalício, sem mensalidades.", icon: Clock },
            ].map((item, idx) => (
              <div key={idx} className="bg-[#F8FAFC] p-5 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-3 shadow-sm text-brand-blue border border-blue-50">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold mb-1 text-gray-800">{item.title}</h3>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
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

            <div className="flex-1 bg-white p-6 md:p-8 rounded-2xl shadow-lg border-2 border-green-500/10 w-full relative overflow-hidden">
               <div className="absolute top-0 right-0 w-20 h-20 bg-green-500/5 rounded-bl-full -mr-4 -mt-4"></div>
               <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold mb-4 uppercase tracking-wider relative z-10">
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
           <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-blue mb-16">
            📲 Como funciona o acesso ao aplicativo
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {HOW_IT_WORKS.map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="w-20 h-20 mx-auto bg-brand-yellow rounded-2xl rotate-3 group-hover:rotate-6 transition-transform flex items-center justify-center mb-6 shadow-md z-10 relative">
                   <step.icon className="w-10 h-10 text-brand-blue -rotate-3 group-hover:-rotate-6 transition-transform" />
                   <div className="absolute -top-3 -right-3 w-8 h-8 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold border-4 border-white shadow-sm">
                     {step.step}
                   </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{step.title}</h3>
                <p className="text-sm text-gray-500 px-4 leading-relaxed">{step.desc}</p>
                
                {/* Connector Line (Desktop) */}
                {idx < HOW_IT_WORKS.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-1/2 w-full h-1 bg-dashed border-t-2 border-brand-lightBlue -z-0"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5️⃣ APP CONTENT */}
      <section className="py-20 bg-brand-lightBlue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4">
              🧠 O que você encontra dentro do app
            </h2>
            <p className="text-gray-600">Material didático completo para o desenvolvimento infantil.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
            {APP_CONTENT.map((content, idx) => (
              <div key={idx} className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-blue-50 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                <div className="p-3 bg-brand-lightBlue rounded-full mb-3 md:mb-4 text-brand-blue">
                  <content.icon className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h3 className="text-sm md:text-base font-semibold text-gray-800">{content.title}</h3>
              </div>
            ))}
            {/* "And much more" card */}
            <div className="bg-brand-blue p-4 md:p-6 rounded-xl shadow-sm flex flex-col items-center justify-center text-center text-white transform hover:scale-105 transition-transform">
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
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-blue mb-4">
              ❤️ Quem baixou o app, amou
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-gray-50 p-6 md:p-8 rounded-2xl relative border border-gray-100">
                <div className="flex text-brand-yellow mb-4">
                  {[...Array(t.stars)].map((_, i) => <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-current" />)}
                </div>
                <p className="text-gray-700 italic mb-6 text-sm md:text-base">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center font-bold text-brand-blue">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7️⃣ BONUS */}
      <section className="py-20 bg-[#F0F7FF] overflow-hidden">
        <div className="container mx-auto px-4">
           <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-2">
              🎁 E não para por aí...
            </h2>
            <p className="text-gray-600">Receba esses bônus exclusivos gratuitamente hoje.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
            {BONUSES.map((bonus, idx) => (
              <div key={idx} className="bg-white p-4 md:p-6 rounded-xl border border-blue-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                <div className="bg-red-50 p-3 rounded-lg">
                  <Gift className="w-6 h-6 text-brand-red" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm md:text-base">{bonus.title}</h4>
                  <p className="text-xs md:text-sm text-gray-500">Valor separado: <span className="line-through">{bonus.price}</span></p>
                  <p className="text-[10px] md:text-xs font-bold text-brand-green uppercase mt-1 bg-green-50 inline-block px-2 py-0.5 rounded">Grátis hoje</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8️⃣ OFFER SECTION */}
      <section id="offer" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-md md:max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-brand-yellow relative transform hover:scale-[1.01] transition-transform duration-500">
            
            {/* Header Badge */}
            <div className="bg-brand-yellow p-4 text-center">
              <span className="font-heading font-bold text-brand-blue tracking-wide text-sm md:text-base">⭐ A MELHOR OFERTA PARA VOCÊ</span>
            </div>

            <div className="p-6 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Acesso Vitalício ao App</h3>
              <p className="text-gray-500 mb-8 text-sm md:text-base">+1.500 Atividades + Todos os Bônus</p>

              <div className="flex flex-col items-center justify-center mb-8">
                <span className="text-gray-400 text-base md:text-lg line-through decoration-red-500 mb-1">De R$ 197,00</span>
                <div className="flex items-center gap-2">
                  <span className="text-5xl md:text-6xl font-extrabold text-brand-red">R$ 47</span>
                  <div className="text-left leading-tight text-gray-600 text-xs md:text-sm font-medium">
                    <span className="block">à vista</span>
                    <span className="block">pagamento único</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-8 text-left max-w-xs mx-auto">
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="bg-green-100 rounded-full p-0.5"><Check className="w-3 h-3 text-green-600" /></div>
                  <span className="text-sm font-medium">Acesso imediato ao App</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="bg-green-100 rounded-full p-0.5"><Check className="w-3 h-3 text-green-600" /></div>
                  <span className="text-sm font-medium">+1.500 Atividades PDF</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="bg-green-100 rounded-full p-0.5"><Check className="w-3 h-3 text-green-600" /></div>
                  <span className="text-sm font-medium">5 Bônus Exclusivos</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="bg-green-100 rounded-full p-0.5"><Check className="w-3 h-3 text-green-600" /></div>
                  <span className="text-sm font-medium">Garantia de 7 dias</span>
                </div>
              </div>

              <Button onClick={() => alert("Redirect to checkout")} fullWidth className="text-lg py-4 md:py-5 shadow-brand-green/50 animate-pulse">
                👉 SIM! QUERO ACESSAR O APP AGORA
              </Button>
              <div className="mt-4 flex items-center justify-center gap-2 text-gray-400 text-[10px] md:text-xs">
                <ShieldCheck className="w-3 h-3 md:w-4 md:h-4" />
                <span>Pagamento Processado com Segurança</span>
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
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center text-brand-blue mb-12">
            Perguntas Frequentes
          </h2>
          <Accordion items={FAQS} />
        </div>
      </section>

      {/* 11️⃣ FOOTER */}
      <footer className="bg-brand-blue text-white py-12 border-t border-white/10">
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
          <p className="text-xs md:text-sm text-blue-200">
            Copyright © 2026 EduKids App. Todos os direitos reservados.
          </p>
          <p className="text-[10px] text-blue-300/50 mt-4 max-w-2xl mx-auto leading-relaxed">
            Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Uma vez que você sai do Facebook, a responsabilidade não é deles e sim do nosso site.
          </p>
        </div>
      </footer>

    </div>
  );
};

export default App;