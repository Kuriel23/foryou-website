import { Poppins } from 'next/font/google';
import Image from 'next/image';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '400'],
});

export function HomeExamples(): JSX.Element {
  return (
    <div className="w-full max-w-7xl m-auto">
      <div className="w-full flex flex-col py-10 space-y-8">
        <div className="w-full flex flex-col items-center justify-center space-y-8 text-center">
          <h2 className={`${poppins.className} text-4xl font-bold text-white`}>
            Quer ver um pouco das minhas funções?
          </h2>
          <p className={`${poppins.className} max-w-5xl text-white`}>
            Deixa eu te dar o cheirinho de algumas das minhas funções através de
            imagens e explicando melhor elas por texto, que tal? Se você descer
            um pouco você encontrará algumas imagens dos meus comandos feitos
            pelos meus desenvolvedores.
          </p>
        </div>
        <div className="flex flex-col w-full space-y-8">
          <div className="w-full p-12 flex items-center space-x-12">
            <Image
              src="/images/examples/entretenimento.png"
              alt="blob"
              height={400}
              width={800}
              style={{ width: 'auto', maxHeight: '400px' }}
              className="rounded-lg"
            />
            <div className="flex flex-col space-y-4">
              <span
                className={`${poppins.className} max-w-max text-gray-200 text-md bg-[#cee8f0]/[.16] rounded-sm px-1`}
              >
                Entretenimento
              </span>
              <h3
                className={`${poppins.className} text-4xl font-bold text-white`}
              >
                O <span className="text-orange-300">entretenimento</span> é
                tudo, ainda mais com fofura
              </h3>
              <p className={`${poppins.className} text-white`}>
                Você não possui um gato ou um cachorro? Não se preocupe!
                Desfrute de momentos de carinho com esses adoráveis animais por
                meio dos comandos de gato ou cachorro. E se estiver se sentindo
                carente, experimente um abraço virtual com o comando
                correspondente. Permita-se desfrutar dessas interações
                reconfortantes!
              </p>
            </div>
          </div>
          <div className="w-full p-12 flex items-center space-x-12">
            <div className="flex flex-col space-y-4">
              <span
                className={`${poppins.className} max-w-max text-gray-200 text-md bg-[#cee8f0]/[.16] rounded-sm px-1`}
              >
                Economia
              </span>
              <h3
                className={`${poppins.className} text-4xl font-bold text-white`}
              >
                Ser rico em <span className="text-orange-300">moedas</span>,
                claro!
              </h3>
              <p className={`${poppins.className} text-white`}>
                Experimente a emoção viciante de jogar roletas, dar reputações,
                acompanhar constantemente seu banco, coletar a recompensa
                diária, realizar atividades criminosas e adquirir novos fundos
                para aprimorar seu perfil, tudo isso com comandos simples.
                Prepare-se para se sentir atraído por essas funcionalidades
                viciantes, que estão ao seu alcance. Desfrute de uma experiência
                envolvente e cheia de possibilidades!
              </p>
            </div>
            <Image
              src="/images/examples/economia.png"
              alt="blob"
              height={500}
              width={800}
              style={{ width: 'auto', maxHeight: '500px' }}
              className="rounded-lg"
            />
          </div>
          <div className="w-full p-12 flex items-center space-x-12">
            <Image
              src="/images/examples/informacao.png"
              alt="blob"
              height={400}
              width={800}
              style={{ width: 'auto', maxHeight: '400px' }}
              className="rounded-lg"
            />
            <div className="flex flex-col space-y-4">
              <span
                className={`${poppins.className} max-w-max text-gray-200 text-md bg-[#cee8f0]/[.16] rounded-sm px-1`}
              >
                Informação
              </span>
              <h3
                className={`${poppins.className} text-4xl font-bold text-white`}
              >
                A <span className="text-orange-300">informação</span> é
                importante!
              </h3>
              <p className={`${poppins.className} text-white`}>
                A informação é essencial no mundo atual. Sem ela, seria difícil
                sobreviver em um ambiente cada vez mais informado. Felizmente,
                as novas tecnologias tornaram o acesso à informação mais fácil e
                rápido do que nunca. Você como um entusiasta de anime e jogos,
                compreende a importância de se manter atualizado sobre as
                últimas notícias. Assim como um sistema automático de notícias,
                estou aqui para fornecer informações atualizadas sobre novidades
                do mundo otaku e gamer. Estou pronta para mantê-lo informado e
                entretido com as notícias mais recentes!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
