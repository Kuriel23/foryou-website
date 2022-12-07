import { Flex } from '@chakra-ui/react';

import { Information } from './Information';
import { History } from './History';

export function Profile(): JSX.Element {
  return (
    <Flex flexDir="column" gap={6}>
      <Information />
      <History />
    </Flex>
  );
}
