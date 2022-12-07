/* eslint-disable no-nested-ternary */

import { Box, Flex, Avatar, Text, useTheme } from '@chakra-ui/react';
import { CrownSimple } from 'phosphor-react';

import type { GetUsersRanking } from '@services/getUsersRanking';
import { reduceString } from '@utils/string';

interface FirstUsersProps {
  firstUsers: GetUsersRanking;
}

function getColor(index: number): string {
  return index === 1 ? 'yellow.200' : index === 2 ? 'gray.200' : 'orange.200';
}

export function FirstUsers({ firstUsers }: FirstUsersProps): JSX.Element {
  const { colors } = useTheme();

  return (
    <Box bgColor="green.200">
      <Flex w="100%" maxW={1240} px={10} m="0 auto">
        <Flex w="100%" h="450px" align="flex-end" justify="center" gap={20}>
          {firstUsers.map((user, index) => {
            const position = index + 1;

            return (
              <Flex key={user.id} flexDir="column" align="center" gap={2}>
                <Flex flexDir="column" align="center" gap={2}>
                  <Flex flexDir="column" align="center" position="relative">
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
                      src={user.avatar}
                      borderWidth="5px"
                      borderStyle="solid"
                      borderColor={getColor(position)}
                    />
                  </Flex>

                  <Text fontSize="sm" color="gray.700">
                    {reduceString(user.username)}
                  </Text>

                  <Flex align="center" color="gray.700" gap={1}>
                    <Text fontWeight={600}>
                      {user.helpers.animecoins.toLocaleString()}
                    </Text>
                    <Text fontWeight={400}>Coins</Text>
                  </Flex>
                </Flex>

                <Flex
                  w="90px"
                  h={
                    position === 1 ? '200px' : position === 2 ? '140px' : '80px'
                  }
                  align="center"
                  justify="center"
                  bgColor={getColor(position)}
                >
                  <Text fontSize="xl" fontWeight={900} color="gray.700">
                    {position}
                  </Text>
                </Flex>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </Box>
  );
}
