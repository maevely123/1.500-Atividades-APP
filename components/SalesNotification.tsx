import React, { useState, useEffect } from 'react';
import { CheckCircle2, MapPin } from 'lucide-react';

const FEMALE_NAMES = [
  "Ana Paula", "Mariana", "Fernanda", "Juliana", "Bruna",
  "Camila", "Patrícia", "Aline", "Jéssica", "Beatriz",
  "Larissa", "Vanessa", "Cristiane", "Daniela", "Letícia",
  "Luana", "Amanda", "Gabriela", "Rafaela", "Carolina",
  "Priscila", "Débora", "Tatiane", "Renata", "Bianca"
];

const MALE_NAMES = [
  "Carlos", "Rafael", "João", "Pedro", "Lucas",
  "Marcos", "Gabriel", "Felipe", "Thiago", "Rodrigo"
];

const SURNAMES = [
  "Silva", "Santos", "Oliveira", "Souza", "Rodrigues",
  "Ferreira", "Alves", "Pereira", "Lima", "Gomes",
  "Costa", "Ribeiro", "Martins", "Carvalho", "Almeida",
  "Lopes", "Soares", "Fernandes", "Vieira", "Barbosa"
];

const LOCATIONS = [
  "São Paulo, SP", "Rio de Janeiro, RJ", "Belo Horizonte, MG", 
  "Curitiba, PR", "Porto Alegre, RS", "Salvador, BA", 
  "Recife, PE", "Fortaleza, CE", "Brasília, DF", "Goiânia, GO",
  "Manaus, AM", "Belém, PA", "Vitória, ES", "Florianópolis, SC"
];

export const SalesNotification: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [buyer, setBuyer] = useState({ name: "", location: "" });

  const generateBuyer = () => {
    // 80% chance de ser nome feminino
    const isFemale = Math.random() < 0.8;
    const nameList = isFemale ? FEMALE_NAMES : MALE_NAMES;
    
    const firstName = nameList[Math.floor(Math.random() * nameList.length)];
    const lastName = SURNAMES[Math.floor(Math.random() * SURNAMES.length)];
    const location = LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)];

    return {
      name: `${firstName} ${lastName}`,
      location
    };
  };

  useEffect(() => {
    // Primeira aparição rápida para engajamento
    const initialTimeout = setTimeout(() => {
      setBuyer(generateBuyer());
      setIsVisible(true);
      setTimeout(() => setIsVisible(false), 4000); // Fica visível por 4s
    }, 2000);

    // Ciclo a cada 8 segundos (incluindo o tempo de exibição)
    const interval = setInterval(() => {
      setBuyer(generateBuyer());
      setIsVisible(true);
      
      // Esconde após 4 segundos (ficando 4s oculto até completar os 8s do intervalo)
      setTimeout(() => {
        setIsVisible(false);
      }, 4000);

    }, 8000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div 
      className={`fixed bottom-4 left-4 z-50 max-w-[90%] md:max-w-sm transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-4 flex items-center gap-4 relative overflow-hidden">
        {/* Barra lateral verde para destaque */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-green"></div>
        
        <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
          <CheckCircle2 className="w-6 h-6 text-brand-green" />
        </div>
        
        <div className="flex flex-col">
          <p className="text-xs text-gray-500 font-medium mb-0.5">Alguém acabou de comprar!</p>
          <p className="text-sm font-bold text-gray-800 leading-tight">
            {buyer.name}
          </p>
          <div className="flex items-center gap-1 mt-1">
             <MapPin className="w-3 h-3 text-gray-400" />
             <span className="text-[10px] text-gray-500">{buyer.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};