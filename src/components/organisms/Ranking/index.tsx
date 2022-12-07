import { Flex } from '@chakra-ui/react';

import { Leading } from './Leading';
import { ScoreBoard } from './ScoreBoard';

export function Ranking(): JSX.Element {
  return (
    <Flex w="100%" h="100%" flexDir="column">
      <Leading />
      <ScoreBoard />
    </Flex>
  );
}
