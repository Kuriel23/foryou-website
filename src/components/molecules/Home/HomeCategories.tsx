'use client';

import { Info, Bank, Cat } from '@phosphor-icons/react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '400'],
});

export function HomeCategories(): JSX.Element {
  return (
    <div className="w-full max-w-7xl m-auto">
      <div className="w-full flex flex-col p-12 space-y-8 rounded-lg bg-orange-200">
        <div className="flex flex-col space-y-2">
          <h3
            className={`${poppins.className} text-3xl font-bold text-gray-700`}
          >
            Quer saber mais?
          </h3>
          <p className={`${poppins.className} text-gray-700`}>
            Abaixo, apresento algumas funções que possuo. Dê uma olhada:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8">
          <div className="flex flex-col space-y-2">
            <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-orange-500">
              <Cat size={32} color="#FFFFFF" />
            </div>
            <h4
              className={`${poppins.className} text-lg font-bold text-gray-700`}
            >
              Entretenimento
            </h4>
            <p className={`${poppins.className} text-sm text-gray-700`}>
              Desfrute de todo o seu entretenimento com apenas simples comandos
              neste servidor. Aqui você pode encontrar gatos e muitas outras
              coisas para se divertir.
            </p>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-blue-500">
              <Bank size={32} color="#FFFFFF" />
            </div>
            <h4
              className={`${poppins.className} text-lg font-bold text-gray-700`}
            >
              Economia
            </h4>
            <p className={`${poppins.className} text-sm text-gray-700`}>
              Desfrute de uma economia altamente viciante com uma variedade de
              comandos totalmente gratuitos, como roletas. Acumule dinheiro e
              use-o para adquirir novos produtos, como assinaturas. Experimente
              agora mesmo!
            </p>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-purple-500">
              <Info size={32} color="#FFFFFF" />
            </div>
            <h4
              className={`${poppins.className} text-lg font-bold text-gray-700`}
            >
              Informações
            </h4>
            <p className={`${poppins.className} text-sm text-gray-700`}>
              A informação é fundamental e, como este bot é destinado a um
              servidor com suporte a site de notícias de jogos e animes, estamos
              aqui para facilitar o acesso às informações que você precisa.
              Estamos aqui para fornecer informações de maneira simples, rápida
              e fácil!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
