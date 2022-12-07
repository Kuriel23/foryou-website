import { chakra, Box, Flex, Avatar, Text, useTheme } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { CrownSimple } from 'phosphor-react';

import type { RankingType, GetUsersRanking } from 'services/getUsersRanking';

const _BoxAnimated = chakra(motion.div);

interface FirstUsersProps {
  rankingType: RankingType;
  firstUsers: GetUsersRanking<{
    animecoins: string;
    level: string;
    rep: string;
  }>;
}

export function FirstUsers({
  rankingType,
  firstUsers,
}: FirstUsersProps): JSX.Element {
  const { colors } = useTheme();

  const [firstUser, secondUser, thridUser] = firstUsers;

  return (
    <Box bgColor="green.200">
      <Flex w="100%" maxW={1240} px={10} m="0 auto">
        <Flex w="100%" h="450px" align="flex-end" justify="center" gap={20}>
          <Flex flexDir="column" align="center" position="relative">
            <Flex
              flexDir="column"
              align="center"
              gap={2}
              position="absolute"
              top="-140px"
            >
              <Text fontSize="2xl" fontWeight={900} color="white">
                2
              </Text>

              <Text fontSize="sm" color="white">
                {secondUser.tag}
              </Text>

              <Avatar
                w="100px"
                h="100px"
                src={secondUser.avatar}
                borderWidth="5px"
                borderStyle="solid"
                borderColor="gray.200"
              />
            </Flex>

            <Flex
              w="90px"
              h="150px"
              align="center"
              justify="center"
              bgColor="gray.200"
            >
              {rankingType === 'coins' && (
                <Flex flexDir="column" align="center">
                  <Text fontWeight={900}>{secondUser.helpers.animecoins}</Text>
                  <Text>Coins</Text>
                </Flex>
              )}
            </Flex>
          </Flex>

          <Flex flexDir="column" align="center" position="relative">
            <Flex
              flexDir="column"
              align="center"
              gap={2}
              position="absolute"
              top="-180px"
            >
              <Text fontSize="2xl" fontWeight={900} color="white">
                1
              </Text>

              <Text fontSize="sm" color="white">
                {firstUser.tag}
              </Text>

              <CrownSimple
                size={32}
                weight="fill"
                color={colors.yellow['200']}
              />

              <Avatar
                w="100px"
                h="100px"
                src={firstUser.avatar}
                borderWidth="5px"
                borderStyle="solid"
                borderColor="yellow.200"
              />
            </Flex>

            <Flex
              w="90px"
              h="220px"
              align="center"
              justify="center"
              bgColor="yellow.200"
            >
              {rankingType === 'coins' && (
                <Flex flexDir="column" align="center">
                  <Text fontWeight={900}>{firstUser.helpers.animecoins}</Text>
                  <Text>Coins</Text>
                </Flex>
              )}
            </Flex>
          </Flex>

          <Flex flexDir="column" align="center" position="relative">
            <Flex
              flexDir="column"
              align="center"
              gap={4}
              position="absolute"
              top="-160px"
            >
              <Text fontSize="2xl" fontWeight={900} color="white">
                3
              </Text>

              <Text fontSize="sm" color="white">
                {thridUser.tag}
              </Text>

              <Avatar
                w="100px"
                h="100px"
                src={thridUser.avatar}
                borderWidth="5px"
                borderStyle="solid"
                borderColor="orange.200"
              />
            </Flex>

            <Flex
              w="90px"
              h="100px"
              align="center"
              justify="center"
              bgColor="orange.200"
            >
              {rankingType === 'coins' && (
                <Flex
                  flexDir="column"
                  align="center"
                  position="absolute"
                  top="40px"
                >
                  <Text lineHeight="1" fontWeight={900}>
                    {thridUser.helpers.animecoins}
                  </Text>
                  <Text>Coins</Text>
                </Flex>
              )}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
