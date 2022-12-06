import { Flex } from '@chakra-ui/react';

import { Categories } from './Categories';
import { Information } from './Information';
import { Main } from './Main';

export function Home(): JSX.Element {
  return (
    <Flex flexDir="column" gap={6}>
      <Main />
      <Categories />
      <Information />
    </Flex>
  );
}