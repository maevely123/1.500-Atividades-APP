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
      <header className="relative bg-[linear-gradient(180deg,#1e3a8a_0%,#1F4FD8_30%,#1F4FD8_90%,#EAF0FF_100%)] overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-white blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-brand-yellow blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 backdrop-blur-sm border border-white/20">
            <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse"></span>
            <span className="text-sm font-semibold tracking-wide">NOVIDADE EXCLUSIVA</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-tight mb-6">
            📱 1.500 ATIVIDADES INTERATIVAS <br className="hidden md:block"/>
            <span className="text-brand-yellow">para reforçar e acelerar</span> o aprendizado
          </h1>
          
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
            Tenha acesso ao <strong className="text-white">APP EDUCACIONAL MAIS COMPLETO DO BRASIL</strong>, com mais de 1.500 atividades infantis organizadas, prontas para baixar direto no seu celular.
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10 text-sm md:text-base font-medium">
            <div className="flex items-center gap-2 bg-blue-800/50 px-4 py-2 rounded-lg">
              <Smartphone className="w-5 h-5 text-brand-yellow" />
              <span>Tudo no app</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-800/50 px-4 py-2 rounded-lg">
              <FileText className="w-5 h-5 text-brand-yellow" />
              <span>Sem bagunça</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-800/50 px-4 py-2 rounded-lg">
              <Download className="w-5 h-5 text-brand-yellow" />
              <span>Acesso rápido</span>
            </div>
          </div>

          <div className="flex flex-col items-center animate-bounce-subtle">
            <Button onClick={scrollToOffer} className="shadow-brand-yellow/30 shadow-lg text-lg px-12 py-5 w-full md:w-auto">
              ⬇️ QUERO ACESSAR O APP AGORA
            </Button>
            <p className="mt-4 text-sm text-blue-200 opacity-80">Compra 100% segura • Acesso imediato</p>
          </div>
        </div>
      </header>

      {/* 2️⃣ VALUE & ORGANIZATION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-blue mb-4">
              🎯 Aprender nunca foi tão fácil (e organizado)
            </h2>
            <p className="text-gray-600 text-lg">
              O aplicativo reúne mais de <strong className="text-brand-blue">80 apostilas</strong>, somando +1.500 atividades, para crianças de 3 a 8 anos. Tudo na palma da sua mão.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Separado por Temas", desc: "Encontre exatamente o que seu filho precisa em segundos.", icon: CheckCircle2 },
              { title: "Acesso Rápido", desc: "Não perca tempo procurando arquivos em pastas perdidas.", icon: Smartphone },
              { title: "Download em PDF", desc: "Baixe e imprima quantas vezes quiser.", icon: Download },
              { title: "Sempre Disponível", desc: "Seu material vitalício, sem mensalidades.", icon: Clock },
            ].map((item, idx) => (
              <div key={idx} className="bg-brand-lightBlue p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 border border-blue-100">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-brand-blue">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3️⃣ PAIN POINTS */}
      <section className="py-20 bg-brand-lightBlue">
        <div className="container mx-auto px-4">
          {/* Removido o card bg-white e sombras, mantendo a estrutura flex */}
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="inline-block bg-brand-red/10 text-brand-red px-4 py-1 rounded-full text-sm font-bold mb-4">
                O PROBLEMA
              </div>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                ❌ Chega de perder horas procurando atividades na internet
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-gray-600">
                  <XCircle className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                  <p>Arquivos desorganizados e de baixa qualidade.</p>
                </div>
                <div className="flex items-start gap-3 text-gray-600">
                  <XCircle className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                  <p>Links quebrados e sites cheios de vírus.</p>
                </div>
                <div className="flex items-start gap-3 text-gray-600">
                  <Search className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                  <p>Perda de tempo filtrando o que é bom.</p>
                </div>
              </div>
            </div>

            {/* Ajustado cor do divider para aparecer no fundo azul */}
            <div className="hidden md:block w-px h-64 bg-brand-blue/20"></div>

            <div className="flex-1">
               <div className="inline-block bg-brand-green/10 text-brand-green px-4 py-1 rounded-full text-sm font-bold mb-4">
                A SOLUÇÃO
              </div>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                ✅ Tenha tudo pronto em um só lugar
              </h2>
               <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                  <p className="font-medium text-gray-800">Tudo centralizado no app</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                  <p className="font-medium text-gray-800">Conteúdo organizado por fase</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                  <p className="font-medium text-gray-800">Acesso imediato e vitalício</p>
                </div>
                 <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                  <p className="font-medium text-gray-800">Sempre à mão no celular</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4️⃣ HOW IT WORKS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
           <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-blue mb-16">
            📲 Como funciona o acesso ao aplicativo
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {HOW_IT_WORKS.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="w-20 h-20 mx-auto bg-brand-yellow rounded-2xl rotate-3 flex items-center justify-center mb-6 shadow-md z-10 relative">
                   <step.icon className="w-10 h-10 text-brand-blue -rotate-3" />
                   <div className="absolute -top-3 -right-3 w-8 h-8 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold border-4 border-white">
                     {step.step}
                   </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600 px-4">{step.desc}</p>
                
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
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              🧠 O que você encontra dentro do app
            </h2>
            <p className="text-gray-600">Material didático completo para o desenvolvimento infantil.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {APP_CONTENT.map((content, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-blue-50 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                <div className="p-3 bg-brand-lightBlue rounded-full mb-4 text-brand-blue">
                  <content.icon className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-gray-800">{content.title}</h3>
              </div>
            ))}
            {/* "And much more" card */}
            <div className="bg-brand-blue p-6 rounded-xl shadow-sm flex flex-col items-center justify-center text-center text-white">
              <span className="text-3xl font-bold mb-2">+1.400</span>
              <p className="font-medium text-sm opacity-90">Atividades disponíveis</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6️⃣ SOCIAL PROOF */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-blue mb-4">
              ❤️ Quem baixou o app, amou
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-2xl relative">
                <div className="flex text-brand-yellow mb-4">
                  {[...Array(t.stars)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-gray-700 italic mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-blue/20 flex items-center justify-center font-bold text-brand-blue">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7️⃣ BONUS */}
      <section className="py-20 bg-brand-lightBlue overflow-hidden">
        <div className="container mx-auto px-4">
           <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-2">
              🎁 E não para por aí...
            </h2>
            <p className="text-gray-600">Receba esses bônus exclusivos gratuitamente hoje.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {BONUSES.map((bonus, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-blue-100 flex items-center gap-4">
                <div className="bg-brand-red/10 p-3 rounded-lg">
                  <Gift className="w-6 h-6 text-brand-red" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{bonus.title}</h4>
                  <p className="text-sm text-gray-500">Valor separado: <span className="line-through">{bonus.price}</span></p>
                  <p className="text-xs font-bold text-brand-green uppercase mt-1">Grátis hoje</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8️⃣ OFFER SECTION */}
      <section id="offer" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-md md:max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-brand-yellow relative">
            
            {/* Header Badge */}
            <div className="bg-brand-yellow p-4 text-center">
              <span className="font-heading font-bold text-brand-blue tracking-wide">⭐ A MELHOR OFERTA PARA VOCÊ</span>
            </div>

            <div className="p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Acesso Vitalício ao App</h3>
              <p className="text-gray-600 mb-8">+1.500 Atividades + Todos os Bônus</p>

              <div className="flex flex-col items-center justify-center mb-8">
                <span className="text-gray-400 text-lg line-through decoration-red-500">De R$ 197,00</span>
                <div className="flex items-center gap-2">
                  <span className="text-5xl md:text-6xl font-extrabold text-brand-red">R$ 47</span>
                  <div className="text-left leading-tight text-gray-600 text-sm">
                    <span className="block">à vista</span>
                    <span className="block">pagamento único</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-8 text-left max-w-xs mx-auto">
                <div className="flex items-center gap-2 text-gray-700">
                  <Check className="w-5 h-5 text-brand-green" />
                  <span>Acesso imediato ao App</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Check className="w-5 h-5 text-brand-green" />
                  <span>+1.500 Atividades PDF</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Check className="w-5 h-5 text-brand-green" />
                  <span>5 Bônus Exclusivos</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Check className="w-5 h-5 text-brand-green" />
                  <span>Garantia de 7 dias</span>
                </div>
              </div>

              <Button onClick={() => alert("Redirect to checkout")} fullWidth className="text-lg py-5 shadow-brand-yellow/50 animate-pulse">
                👉 SIM! QUERO ACESSAR O APP AGORA
              </Button>
              <div className="mt-4 flex items-center justify-center gap-2 text-gray-400 text-xs">
                <ShieldCheck className="w-4 h-4" />
                <span>Pagamento Processado com Segurança</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9️⃣ GUARANTEE */}
      <section className="py-16 bg-brand-green/10">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <ShieldCheck className="w-16 h-16 text-brand-green mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4">
            Satisfação garantida ou seu dinheiro de volta
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            Você tem <strong>7 dias</strong> para testar o app e o material. Se não gostar, por qualquer motivo, nós devolvemos 100% do seu dinheiro. Sem perguntas.
          </p>
        </div>
      </section>

      {/* 🔟 FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-heading font-bold text-center text-brand-blue mb-12">
            Perguntas Frequentes
          </h2>
          <Accordion items={FAQS} />
        </div>
      </section>

      {/* 11️⃣ FOOTER */}
      <footer className="bg-brand-blue text-white py-12 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-8 text-sm md:text-base opacity-90">
             <a href="#" className="hover:text-brand-yellow transition-colors">contato@seudominio.com</a>
             <span className="hidden md:inline">•</span>
             <a href="#" className="hover:text-brand-yellow transition-colors">WhatsApp Suporte</a>
             <span className="hidden md:inline">•</span>
             <span className="flex items-center justify-center gap-1">
               <ShieldCheck className="w-4 h-4" /> Site Seguro
             </span>
          </div>
          <p className="text-sm text-blue-200">
            Copyright © 2026 EduKids App. Todos os direitos reservados.
          </p>
          <p className="text-xs text-blue-300/50 mt-4 max-w-2xl mx-auto">
            Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Uma vez que você sai do Facebook, a responsabilidade não é deles e sim do nosso site.
          </p>
        </div>
      </footer>

    </div>
  );
};

export default App;