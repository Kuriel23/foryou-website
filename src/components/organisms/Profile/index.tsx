import { Flex } from '@chakra-ui/react';

import { Information } from './Information';
import { Married } from './Married';
import { Banner } from './Banner';

export function Profile(): JSX.Element {
  return (
    <Flex flexDir="column" gap={6}>
      <Banner />
      <Information />
      <Married />
    </Flex>
  );
}
