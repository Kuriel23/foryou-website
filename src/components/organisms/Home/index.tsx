import { Flex } from '@chakra-ui/react';

import { Categories } from './Categories';
import { Main } from './Main';

export function Home(): JSX.Element {
  return (
    <Flex flexDir="column" gap={6}>
      <Main />
      <Categories />
    </Flex>
  );
}
