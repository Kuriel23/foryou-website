import { SimpleGrid, Flex } from '@chakra-ui/react';

import { AskAnime } from './AskAnime';
import { Questions } from './Questions';
import { ReportError } from './ReportError';

export function Ticket(): JSX.Element {
  return (
    <Flex mb={{ base: '70px', xl: '0px' }}>
      <SimpleGrid
        columns={{ base: 1, xl: 3 }}
        w="90%"
        spacingX="5%"
        spacingY="2%"
        my={{ base: '17px', xl: '17px' }}
        mx="auto"
      >
        <ReportError />
        <Questions />
        <AskAnime />
      </SimpleGrid>
    </Flex>
  );
}
