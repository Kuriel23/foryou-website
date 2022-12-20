import {
  Flex,
  Text,
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

export function FilterButton(): JSX.Element {
  const { colors } = useTheme();

  const { rankingType, updateRankingType } = useRanking();

  const theme = {
    filterBackground: useColorModeValue('gray.400', 'gray.700'),
  };

  return (
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
  );
}
