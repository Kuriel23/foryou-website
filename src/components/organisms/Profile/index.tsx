import { Flex } from '@chakra-ui/react';

import { Information } from './Information';
import { Married } from './Married';

export function Profile(): JSX.Element {
  return (
    <Flex flexDir="column" gap={6}>
      <Information />
      <Married />
    </Flex>
  );
}
