/**
 * FONTS
 *
 * https://fontsource.org/fonts/poppins
 */

import '@fontsource/poppins';
import { ChakraProvider } from '@chakra-ui/react';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { theme } from '@theme';

const queryClient = new QueryClient();

export default function App({
  Component,
  session,
  pageProps,
}: AppProps & Record<'session', any>): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <ChakraProvider theme={theme}>
          <NextNProgress
            color="var(--chakra-colors-green-200)"
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
            showOnShallow
            options={{ showSpinner: false }}
          />

          <Component {...pageProps} />
        </ChakraProvider>
      </SessionProvider>

      <ReactQueryDevtools position="bottom-left" />
    </QueryClientProvider>
  );
}
