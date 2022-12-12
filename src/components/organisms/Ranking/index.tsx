import { Flex } from '@chakra-ui/react';

import { FirstUsers } from './FirstUsers';
import { ScoreBoard } from './ScoreBoard';

export function Ranking(): JSX.Element {
  return (
    <Flex w="100%" h="100%" flexDir="column" position="relative">
      <FirstUsers />
      <ScoreBoard />
    </Flex>
  );
}
