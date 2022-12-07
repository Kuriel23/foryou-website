/**
 * FONTS
 *
 * https://fontsource.org/fonts/poppins
 */

import '@fontsource/poppins';

import { ChakraProvider } from '@chakra-ui/react';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';

import { theme } from '@theme';

const queryClient = new QueryClient();

export default function App({
  Component,
  session,
  pageProps,
}: AppProps & Record<'session', any>): JSX.Element {
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
}
