import { Flex } from '@chakra-ui/react';

import { FirstUsers } from './FirstUsers';
import { ScoreBoard } from './ScoreBoard';

import type { GetUsersRanking } from '@services/getUsersRanking';

interface RankingProps {
  firstUsers: GetUsersRanking;
  allUsers: GetUsersRanking;
}

export function Ranking({ firstUsers, allUsers }: RankingProps): JSX.Element {
  return (
    <Flex w="100%" h="100%" flexDir="column" position="relative">
      <FirstUsers firstUsers={firstUsers} />
      <ScoreBoard allUsers={allUsers} />
    </Flex>
  );
}
