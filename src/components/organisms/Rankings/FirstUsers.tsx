/* eslint-disable no-nested-ternary */

import {
  Box,
  Flex,
  Avatar,
  Text,
  useTheme,
  Icon,
  Skeleton,
  SkeletonCircle,
} from '@chakra-ui/react';
import { CrownSimple } from 'phosphor-react';
import { useMemo } from 'react';

import { useRanking } from '@hooks/useRanking';
import type { UserRankingData } from '@interfaces/services';
import { reduceString } from '@utils/string';

interface UserCardProps {
  ranking: UserRankingData;
  position: number;
}

interface UserCardShimmerProps {
  position: number;
}

function getColor(index: number): string {
  return index === 1 ? 'yellow.200' : index === 2 ? 'gray.200' : 'orange.400';
}

function UserCard({ ranking, position }: UserCardProps): JSX.Element {
  const { colors } = useTheme();

  const { rankingType } = useRanking();

  return (
    <Flex flexDir="column" align="center" gap={2}>
      <Flex flexDir="column" align="center" gap={2}>
        <Flex flexDir="column" align="center" position="relative">
          {position === 1 && (
            <Icon
              as={CrownSimple}
              w="32px"
              h="32px"
              position="absolute"
              top="-65px"
              weight="fill"
              color={colors.yellow['200']}
            />
          )}

          <Flex
            w="30px"
            h="30px"
            borderRadius="full"
            justify="center"
            align="center"
            bgColor={getColor(position)}
            position="absolute"
            top="-25px"
          >
            <Text fontSize="md" fontWeight={900} color="gray.700">
              {position}
            </Text>
          </Flex>

          <Avatar
            w="100px"
            h="100px"
            src={ranking.user.avatar}
            borderWidth="5px"
            borderStyle="solid"
            borderColor={getColor(position)}
          />
        </Flex>

        <Text fontSize="sm" color="gray.700">
          {reduceString(ranking.user.username)}
        </Text>

        {rankingType === 'coins' && (
          <Flex flexDir="column" align="center" color="gray.700" gap={1}>
            <Text fontWeight={600}>
              {ranking.database.coins.toLocaleString()}
            </Text>
            <Text fontWeight={400}>Coins</Text>
          </Flex>
        )}

        {rankingType === 'level' && (
          <Flex align="center" color="gray.700" gap={1}>
            <Text fontWeight={400}>Nível</Text>
            <Text fontSize="xl" fontWeight={600}>
              {ranking.database.level}
            </Text>
          </Flex>
        )}

        {rankingType === 'rep' && (
          <Flex flexDir="column" align="center" color="gray.700" gap={1}>
            <Text fontSize="xl" fontWeight={600}>
              {ranking.database.rep.toLocaleString()}
            </Text>
            <Text fontWeight={400}>Reputações</Text>
          </Flex>
        )}
      </Flex>

      <Flex
        w="90px"
        h={position === 1 ? '200px' : position === 2 ? '140px' : '80px'}
        align="center"
        justify="center"
        bgColor={getColor(position)}
      >
        <Text fontSize="2xl" fontWeight={900} color="gray.700">
          {position}
        </Text>
      </Flex>
    </Flex>
  );
}

function UserCardShimmer({ position }: UserCardShimmerProps): JSX.Element {
  return (
    <Flex flexDir="column" align="center" gap={4}>
      <Flex flexDir="column" align="center" gap={2}>
        <SkeletonCircle
          w="100px"
          h="100px"
          startColor="orange.300"
          endColor="orange.400"
        />

        <Skeleton
          h="15px"
          w="100%"
          startColor="orange.300"
          endColor="orange.400"
        />

        <Skeleton
          h="15px"
          w="80%"
          startColor="orange.300"
          endColor="orange.400"
        />

        <Skeleton
          h="15px"
          w="60%"
          startColor="orange.300"
          endColor="orange.400"
        />
      </Flex>

      <Skeleton
        w="90px"
        h={position === 1 ? '200px' : position === 2 ? '140px' : '80px'}
        startColor="orange.300"
        endColor="orange.400"
      />
    </Flex>
  );
}

const usersLoader = Array.from({ length: 3 }, (_, i) => i).map((key, index) => {
  const position = index + 1;

  return <UserCardShimmer key={key} position={position} />;
});

export function FirstUsers(): JSX.Element {
  const { firstUsers, isLoading } = useRanking();

  const usersElements = useMemo(() => {
    if (isLoading) {
      return (
        <Flex w="100%" h="500px" align="flex-end" justify="center" gap={20}>
          {usersLoader}
        </Flex>
      );
    }

    return (
      <Flex w="100%" h="500px" align="flex-end" justify="center" gap={20}>
        {firstUsers?.map((ranking, index) => {
          const position = index + 1;

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
  }, [firstUsers, isLoading]);

  return (
    <Box bgColor="orange.200">
      <Flex w="100%" maxW={1240} px={10} m="0 auto">
        {usersElements}
      </Flex>
    </Box>
  );
}
