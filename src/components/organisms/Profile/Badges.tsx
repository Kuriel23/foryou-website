import { Flex, Text, Grid, Img, useColorModeValue } from '@chakra-ui/react';

import { useProfile } from '@hooks/useProfile';

export function Badges(): JSX.Element {
  const { profile } = useProfile();

  const theme = {
    cardBackground: useColorModeValue('gray.200', 'gray.700'),
    badgeBackground: useColorModeValue('gray.300', 'gray.800'),
  };

  return (
    <Flex
      w="350px"
      gap={4}
      p={8}
      flexDir="column"
      borderRadius={12}
      bgColor={theme.cardBackground}
    >
      <Flex align="center" justify="space-between">
        <Text fontSize="sm" fontWeight="bold" textTransform="uppercase">
          Insígnias
        </Text>

        <Text fontSize="sm" fontWeight="bold" textTransform="uppercase">
          {profile?.database.medalhas &&
            Object.values(profile?.database.medalhas as any).filter(
              hasBadge => hasBadge,
            ).length}
        </Text>
      </Flex>

      <Grid templateColumns="repeat(auto-fit, minmax(50px, 1fr))" gap={4}>
        <Flex
          w="66px"
          h="66px"
          align="center"
          justify="center"
          borderRadius={16}
          bgColor={theme.badgeBackground}
        >
          {profile?.database.medalhas?.natalv1 && (
            <Img src="/images/badges/natalv1.png" alt="natalv1" height="40px" />
          )}
        </Flex>

        <Flex
          w="66px"
          h="66px"
          align="center"
          justify="center"
          borderRadius={16}
          bgColor={theme.badgeBackground}
        />

        <Flex
          w="66px"
          h="66px"
          align="center"
          justify="center"
          borderRadius={16}
          bgColor={theme.badgeBackground}
        />

        <Flex
          w="66px"
          h="66px"
          align="center"
          justify="center"
          borderRadius={16}
          bgColor={theme.badgeBackground}
        />
      </Grid>
    </Flex>
  );
}
