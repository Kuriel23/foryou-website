/**
 * FONTS
 *
 * https://fontsource.org/fonts/m-plus-2
 * https://fontsource.org/fonts/figtree
 */

import '@fontsource/m-plus-2';
import '@fontsource/figtree';

import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

import { theme } from '@theme';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
