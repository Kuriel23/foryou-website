import { Flex, Text, Avatar, Heading, Progress } from '@chakra-ui/react';

import type { RankingType, GetUsersRanking } from 'services/getUsersRanking';

interface ScoreBoardProps {
  rankingType: RankingType;
  allUsers: GetUsersRanking;
}
export function ScoreBoard({
  rankingType,
  allUsers,
}: ScoreBoardProps): JSX.Element {
  return (
    <Flex w="100%" maxW={1240} px={28} py={12} m="0 auto">
      <Flex w="100%" flexDir="column" align="center" gap={8}>
        {allUsers.map((user, position) => (
          <Flex key={user.id} w="100%" align="center" gap={4}>
            <Text w="40px" fontSize="2xl" fontWeight="bold">
              {position + 4}
            </Text>

            <Flex align="center" gap={6}>
              <Avatar w="65px" h="65px" src={user.avatar} />

              <Flex flexDir="column">
                <Heading as="h3" fontSize="xl">
                  {user.username}
                </Heading>

                <Text>#{user.discriminator}</Text>

                {rankingType === 'coins' && (
                  <Flex align="center" gap={1}>
                    <Text fontWeight={900}>{user.helpers.animecoins}</Text>
                    <Text>Coins</Text>
                  </Flex>
                )}

                {rankingType === 'level' && (
                  <Progress
                    mt={2}
                    w="200px"
                    value={20}
                    size="sm"
                    color="green.200"
                    bgColor="gray.200"
                  />
                )}
              </Flex>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
