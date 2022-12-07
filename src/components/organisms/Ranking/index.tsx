import { Flex } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';

import { FirstUsers } from './FirstUsers';
import { ScoreBoard } from './ScoreBoard';

import type { RankingType, GetUsersRanking } from 'services/getUsersRanking';

interface RankingProps {
  firstUsers: GetUsersRanking;
  allUsers: GetUsersRanking;
  rankingType: RankingType;
  setRankingType: Dispatch<SetStateAction<RankingType>>;
}

export function Ranking({
  firstUsers,
  allUsers,
  rankingType,
  setRankingType,
}: RankingProps): JSX.Element {
  return (
    <Flex w="100%" h="100%" flexDir="column">
      <FirstUsers rankingType={rankingType} firstUsers={firstUsers} />
      <ScoreBoard rankingType={rankingType} allUsers={allUsers} />
    </Flex>
  );
}
