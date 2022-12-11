import {
  Flex,
  Text,
  Avatar,
  Heading,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  Box,
  MenuItem,
  MenuDivider,
  useTheme,
  Icon,
  MenuGroup,
  useColorModeValue,
} from '@chakra-ui/react';
import { ChartLineUp, Coins, Funnel, Medal } from 'phosphor-react';

import { useRanking } from '@hooks/useRanking';
import type { UsersRanking } from '@services/getUsersRanking';

interface ScoreBoardProps {
  allUsers: UsersRanking;
}
export function ScoreBoard({ allUsers }: ScoreBoardProps): JSX.Element {
  const { colors } = useTheme();

  const { rankingType, updateRankingType } = useRanking();

  const theme = {
    filterBackground: useColorModeValue('gray.400', 'gray.700'),
  };

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

                {rankingType === 'coins' && (
                  <Flex align="center" gap={1}>
                    <Text fontWeight={600}>
                      {user.helpers.animecoins.toLocaleString()}
                    </Text>
                    <Text fontWeight={400}>Coins</Text>
                  </Flex>
                )}

                {rankingType === 'level' && (
                  <Flex align="center" gap={1}>
                    <Text fontWeight={400}>Nível</Text>
                    <Text fontWeight={600}>{user.helpers.level}</Text>
                  </Flex>
                )}

                {rankingType === 'rep' && (
                  <Flex align="center" gap={1}>
                    <Text fontWeight={600}>{user.helpers.rep}</Text>
                    <Text fontWeight={400}>
                      {user.helpers.rep < 1 ? 'Reputação' : 'Reputações'}
                    </Text>
                  </Flex>
                )}
              </Flex>
            </Flex>
          </Flex>
        ))}
      </Flex>

      <Menu isLazy>
        {({ isOpen }) => (
          <>
            <MenuButton
              as={Flex}
              isActive={isOpen}
              position="relative"
              top="-70px"
              right="-60px"
            >
              <IconButton
                aria-label="Change Ranking Type"
                icon={<Funnel size={28} color={colors.white} />}
                size="lg"
                bgColor={theme.filterBackground}
                _hover={{}}
                _active={{}}
                _focus={{}}
              />
            </MenuButton>

            <MenuList>
              <MenuGroup title="Filtrar por">
                <MenuDivider />

                <MenuItem
                  alignItems="center"
                  justifyContent="space-between"
                  onClick={() => updateRankingType('coins')}
                >
                  <Flex gap="0.3rem">
                    <Icon
                      as={Coins}
                      w="25px"
                      h="25px"
                      weight="fill"
                      color="yellow.200"
                    />

                    <Text as="span" fontWeight="300">
                      Coins
                    </Text>
                  </Flex>

                  {rankingType === 'coins' && (
                    <Box
                      w="10px"
                      h="10px"
                      borderRadius="full"
                      bgColor="red.200"
                    />
                  )}
                </MenuItem>

                <MenuItem
                  alignItems="center"
                  justifyContent="space-between"
                  onClick={() => updateRankingType('level')}
                >
                  <Flex gap="0.3rem">
                    <Icon
                      as={ChartLineUp}
                      w="25px"
                      h="25px"
                      weight="fill"
                      color="blue.200"
                    />

                    <Text as="span" fontWeight="300">
                      Níveis
                    </Text>
                  </Flex>

                  {rankingType === 'level' && (
                    <Box
                      w="10px"
                      h="10px"
                      borderRadius="full"
                      bgColor="red.200"
                    />
                  )}
                </MenuItem>

                <MenuItem
                  alignItems="center"
                  justifyContent="space-between"
                  onClick={() => updateRankingType('rep')}
                >
                  <Flex gap="0.3rem">
                    <Icon
                      as={Medal}
                      w="25px"
                      h="25px"
                      weight="fill"
                      color="red.200"
                    />

                    <Text as="span" fontWeight="300">
                      Reputações
                    </Text>
                  </Flex>

                  {rankingType === 'rep' && (
                    <Box
                      w="10px"
                      h="10px"
                      borderRadius="full"
                      bgColor="red.200"
                    />
                  )}
                </MenuItem>
              </MenuGroup>
            </MenuList>
          </>
        )}
      </Menu>
    </Flex>
  );
}
