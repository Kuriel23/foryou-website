import { Flex, Text, Grid, useColorModeValue } from '@chakra-ui/react';

import { useProfile } from '@hooks/useProfile';

export function Backpack(): JSX.Element {
  const { profile } = useProfile();

  const theme = {
    cardBackground: useColorModeValue('gray.200', 'gray.700'),
    badgeBackground: useColorModeValue('gray.300', 'gray.800'),
  };

  return (
    <Flex
      w="100%"
      gap={4}
      p={8}
      flexDir="column"
      borderRadius={12}
      bgColor={theme.cardBackground}
    >
      <Flex align="center" justify="space-between">
        <Text fontSize="sm" fontWeight="bold" textTransform="uppercase">
          Itens na mochila
        </Text>

        <Text fontSize="sm" fontWeight="bold" textTransform="uppercase">
          {profile?.database.loja &&
            Object.values(profile?.database.loja as any).filter(
              status => status === 'Comprado.',
            ).length}
        </Text>
      </Flex>

      <Grid templateColumns="repeat(auto-fit, minmax(60px, 1fr))" gap={4}>
        {profile?.database.loja &&
          Object.keys(profile?.database.loja as any).map(item => (
            <Flex
              key={item as string}
              w="66px"
              h="66px"
              align="center"
              justify="center"
              borderRadius={16}
              bgColor={theme.badgeBackground}
            />
          ))}
      </Grid>
    </Flex>
  );
}
