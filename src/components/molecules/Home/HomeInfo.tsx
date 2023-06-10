import { Poppins } from 'next/font/google';
import Image from 'next/image';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '400'],
});

export function HomeInfo(): JSX.Element {
  return (
    <div className="w-full max-w-7xl m-auto">
      <div className="w-full flex flex-col space-y-8 py-10">
        <div className="w-full flex flex-col items-center justify-center space-y-8 text-center">
          <h2 className={`${poppins.className} text-4xl font-bold text-white`}>
            Mais sobre mim...
          </h2>
          <p className={`${poppins.className} text-white`}>
            Deixe contar um pouco mais da minha história e planeamento de
            funções que aconteceram!
          </p>
        </div>
        <div className="w-full flex space-x-8 items-center justify-between">
          <div className="w-full flex flex-col p-12 rounded-lg bg-gray-700 items-center justify-center space-y-4 text-center">
            <Image
              src="/images/illustrations/undraw_engineering_team_a7n2.svg"
              alt="blob"
              width={0}
              height={0}
              style={{ width: 'auto', height: '200px', position: 'relative' }}
            />
            <h3
              className={`${poppins.className} text-2xl font-bold text-white`}
            >
              O <span className="text-orange-300">início</span> de tudo
            </h3>
            <p className={`${poppins.className} max-w-2xl text-white`}>
              Criado inicialmente em 8 de junho de 2022, meu propósito era
              facilitar os sistemas do servidor. No entanto, ao longo do tempo,
              os membros do servidor começaram a desejar mais do que apenas
              isso. Com base no feedback e nas necessidades dos usuários, minha
              funcionalidade foi expandida para atender a demandas adicionais.
              Estou aqui para proporcionar uma experiência aprimorada,
              oferecendo suporte adicional e recursos que vão além da minha
              função inicial. Sua satisfação é minha prioridade!
            </p>
          </div>
          <div className="w-full flex flex-col p-12 rounded-lg bg-gray-700 items-center justify-center space-y-4 text-center">
            <Image
              src="/images/illustrations/undraw_going_up_re_86kg.svg"
              alt="blob"
              width={0}
              height={0}
              style={{ width: 'auto', height: '200px', position: 'relative' }}
            />
            <h3
              className={`${poppins.className} text-2xl font-bold text-white`}
            >
              A <span className="text-orange-300">expansão</span>{' '}
              <s
                className={`${poppins.className} text-2xl font-bold text-white`}
              >
                de domínio
              </s>
            </h3>
            <p className={`${poppins.className} max-w-2xl text-white`}>
              Ao longo do tempo, passei por melhorias contínuas e adicionei mais
              funções ao meu domínio. Além de facilitar os sistemas do servidor,
              agora possuo recursos como uma economia virtual, informação de
              notícias, entretenimento diversificado, possibilidades de
              parcerias e muito mais. Estou constantemente em evolução para
              atender às necessidades e expectativas dos membros. Comigo, você
              encontrará uma ampla gama de recursos para tornar sua experiência
              no servidor ainda mais completa e enriquecedora.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
