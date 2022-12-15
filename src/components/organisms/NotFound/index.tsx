import { Flex } from '@chakra-ui/react';

import { Information } from './Information';

export function NotFound(): JSX.Element {
  return (
    <Flex flexDir="column" gap={6}>
      <Information />
    </Flex>
  );
}
