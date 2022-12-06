/**
 * FONTS
 *
 * https://fontsource.org/fonts/poppins
 */

import '@fontsource/poppins';

import { ChakraProvider } from '@chakra-ui/react';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';

import { theme } from '@theme';

export default function App({
  Component,
  session,
  pageProps,
}: AppProps & Record<'session', any>): JSX.Element {
  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <title>Animes Online Games - Discord Bot</title>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  );
}
