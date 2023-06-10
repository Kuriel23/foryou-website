import { Poppins } from 'next/font/google';
import Image from 'next/image';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '400'],
});

export function HomeMain(): JSX.Element {
  const session = {
    status: 'authenticated',
  };
  return (
    <div className="w-full max-w-7xl pb-10 m-auto">
      <div className="w-full flex flex-col px-12 py-48 rounded-lg bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50">
        <div className="w-full h-full flex items-center justify-between">
          <div className="flex flex-col items-start max-w-lg space-y-6">
            <h1
              className={`${poppins.className} text-white font-bold text-4xl`}
            >
              Um <span className="text-orange-300">simples</span> bot{' '}
              <span className="text-orange-300">otaku</span> do Discord
            </h1>
            <p className={`${poppins.className} text-white`}>
              A simplicidade, o amor e o carinho num só bot. Feito especialmente
              para os mais diversos otakus e gamers do servidor For You, com um
              sistema de economia e reputação viciantes.
            </p>
            <button
              type="button"
              className={`${poppins.className} px-10 py-3 w-auto rounded-lg bg-orange-200 text-gray-700 font-bold`}
            >
              {session.status === 'authenticated' ? 'Aventurar-se' : 'Entrar'}
            </button>
          </div>
          <Image
            src="/images/illustrations/undraw_artificial_intelligence_re_enpp.svg"
            alt="blob"
            width={0}
            height={0}
            style={{ width: 'auto', height: '280px', position: 'relative' }}
          />
        </div>
      </div>
    </div>
  );
}
