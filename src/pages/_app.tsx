import '@fontsource/poppins';

import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import NextNProgress from 'nextjs-progressbar';

import { theme } from '@theme';

export default function App({
  Component,
  session,
  pageProps,
}: AppProps & Record<'session', any>): JSX.Element {
  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        <NextNProgress
          color="var(--chakra-colors-orange-200)"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow
          options={{ showSpinner: false }}
        />

        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  );
}
