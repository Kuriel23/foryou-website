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
};

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
