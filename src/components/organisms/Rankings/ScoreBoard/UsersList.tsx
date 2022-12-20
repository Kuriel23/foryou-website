import {
  Flex,
  Text,
  Avatar,
  Heading,
  Skeleton,
  SkeletonCircle,
} from '@chakra-ui/react';
import { useMemo } from 'react';

import { useRanking } from '@hooks/useRanking';
import type { UserRankingData } from '@interfaces/services';

interface UserCardProps {
  ranking: UserRankingData;
  position: number;
}

function UserCard({ ranking, position }: UserCardProps): JSX.Element {
  const { rankingType } = useRanking();

  return (
    <Flex w="100%" align="center" gap={4}>
      <Text w="40px" fontSize="2xl" fontWeight="bold">
        {position + 4}
      </Text>

      <Flex align="center" gap={6}>
        <Avatar w="65px" h="65px" src={ranking.user.avatar} />

        <Flex flexDir="column">
          <Heading as="h3" fontSize="xl">
            {ranking.user.username}
          </Heading>

          {rankingType === 'coins' && (
            <Flex align="center" gap={1}>
              <Text fontWeight={600}>
                {ranking.database.animecoins.toLocaleString()}
              </Text>
              <Text fontWeight={400}>Coins</Text>
            </Flex>
          )}

          {rankingType === 'level' && (
            <Flex align="center" gap={1}>
              <Text fontWeight={400}>Nível</Text>
              <Text fontWeight={600}>{ranking.database.level}</Text>
            </Flex>
          )}

          {rankingType === 'rep' && (
            <Flex align="center" gap={1}>
              <Text fontWeight={600}>
                {ranking.database.rep.toLocaleString()}
              </Text>
              <Text fontWeight={400}>
                {ranking.database.rep < 1 ? 'Reputação' : 'Reputações'}
              </Text>
            </Flex>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}

function UserCardShimmer(): JSX.Element {
  return (
    <Flex w="100%" align="center" gap={4}>
      <Skeleton h="20px" w="20px" startColor="green.300" endColor="green.400" />

      <Flex align="center" gap={6}>
        <SkeletonCircle
          w="65px"
          h="65px"
          startColor="green.300"
          endColor="green.400"
        />

        <Flex flexDir="column" gap={2}>
          <Skeleton
            h="20px"
            w="120px"
            startColor="green.300"
            endColor="green.400"
          />

          <Skeleton
            h="15px"
            w="40px"
            startColor="green.300"
            endColor="green.400"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}

const usersLoader = Array.from({ length: 10 }, (_, i) => i).map(key => (
  <UserCardShimmer key={key} />
));

export function UsersList(): JSX.Element {
  const { allUsers, isLoading } = useRanking();

  const usersElements = useMemo(() => {
    if (isLoading) {
      return (
        <Flex w="100%" flexDir="column" align="center" gap={8}>
          {usersLoader}
        </Flex>
      );
    }

    return (
      <Flex w="100%" flexDir="column" align="center" gap={8}>
        {allUsers?.map((ranking, position) => {
          return (
            <UserCard
              key={ranking.user.id}
              ranking={ranking}
              position={position}
            />
          );
        })}
      </Flex>
    );
  }, [allUsers, isLoading]);

  return usersElements;
}
