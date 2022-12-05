import { Flex } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

import { Footer } from '@components/molecules/Footer';
import { Header } from '@components/molecules/Header';

export function DefaultLayout({ children }: PropsWithChildren): JSX.Element {
  return (
    <Flex as="main" flexDir="column">
      <Header />

      {children}

      {/* 

      <Footer /> */}
    </Flex>
  );
}
