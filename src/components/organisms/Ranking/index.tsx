import { Flex } from '@chakra-ui/react';

import { Listings } from './Listings';
import { Options } from './Options';

export function Ranking(): JSX.Element {
  return (
    <Flex flexDir="column" gap={6}>
      <Options />
      <Listings />
    </Flex>
  );
}
