import { Flex } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

import { Header } from '@components/molecules/Header';

export function DefaultLayout({ children }: PropsWithChildren): JSX.Element {
  return (
    <Flex as="main" flexDir="column">
      <Header />

      {children}
    </Flex>
  );
}
