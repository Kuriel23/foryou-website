import '@/styles/global.css';

import type { Metadata } from 'next';

import { Roboto } from 'next/font/google';

interface RootLayoutProps {
  children: React.ReactNode;
}

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

export const metadata: Metadata = {
  title: 'For You - Discord Bot & Community',
  description:
    'Conheça o For You, um bot do Discord e comunidade que oferece recursos incríveis para melhorar sua experiência no Discord. Junte-se à nossa comunidade e descubra tudo o que o For You pode fazer por você!',
  themeColor: '#ed8936',
  openGraph: {
    images: ['/logo.png'],
    url: '/',
    type: 'website',
  },
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
