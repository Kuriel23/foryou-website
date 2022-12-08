/* eslint-disable no-nested-ternary */

import { Flex } from '@chakra-ui/react';

import { FirstUsers } from './FirstUsers';
import { ScoreBoard } from './ScoreBoard';

import { useRanking } from '@hooks/useRanking';
import type { GetUsersRanking } from '@services/getUsersRanking';

interface RankingProps {
  usersCoinsRanking: GetUsersRanking;
  usersLevelRanking: GetUsersRanking;
  usersRepRanking: GetUsersRanking;
}

export function Ranking({
  usersCoinsRanking,
  usersLevelRanking,
  usersRepRanking,
}: RankingProps): JSX.Element {
  const { rankingType } = useRanking();

  const users =
    rankingType === 'coins'
      ? usersCoinsRanking
      : rankingType === 'level'
      ? usersLevelRanking
      : usersRepRanking;

  const firstUsers = users.slice(0, 3);
  const allUsers = users.slice(3, users.length);

  return (
    <Flex w="100%" h="100%" flexDir="column" position="relative">
      <FirstUsers firstUsers={firstUsers} />
      <ScoreBoard allUsers={allUsers} />
    </Flex>
  );
}
