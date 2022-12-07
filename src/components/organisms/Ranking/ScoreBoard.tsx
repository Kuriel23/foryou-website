import {
  Flex,
  Text,
  Avatar,
  Heading,
  Progress,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useTheme,
  Icon,
  MenuGroup,
} from '@chakra-ui/react';
import { ChartLineUp, Coins, Funnel, Medal } from 'phosphor-react';

import { useRanking } from '@hooks/useRanking';
import type { GetUsersRanking } from '@services/getUsersRanking';

interface ScoreBoardProps {
  allUsers: GetUsersRanking;
}
export function ScoreBoard({ allUsers }: ScoreBoardProps): JSX.Element {
  const { colors } = useTheme();

  const { rankingType, onChangeRankingType } = useRanking();

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
                bgColor="gray.700"
                _hover={{}}
                _active={{}}
                _focus={{}}
              />
            </MenuButton>

            <MenuList>
              <MenuGroup title="Filtrar por">
                <MenuDivider />

                <MenuItem
                  gap="0.3rem"
                  onClick={() => onChangeRankingType('coins')}
                >
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
                </MenuItem>

                <MenuItem
                  gap="0.3rem"
                  onClick={() => onChangeRankingType('level')}
                >
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
                </MenuItem>

                <MenuItem
                  gap="0.3rem"
                  onClick={() => onChangeRankingType('rep')}
                >
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
                </MenuItem>
              </MenuGroup>
            </MenuList>
          </>
        )}
      </Menu>
    </Flex>
  );
}
