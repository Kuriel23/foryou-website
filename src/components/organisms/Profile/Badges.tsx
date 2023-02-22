import {
  Flex,
  Text,
  Grid,
  useColorModeValue,
  Skeleton,
} from '@chakra-ui/react';

import { useProfile } from '@hooks/useProfile';

export function Badges(): JSX.Element {
  const { profile, isLoading } = useProfile();

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
        {isLoading ? (
          <>
            <Skeleton
              h="15px"
              w="80px"
              startColor="gray.300"
              endColor="gray.400"
            />

            <Skeleton
              h="15px"
              w="10px"
              startColor="gray.300"
              endColor="gray.400"
            />
          </>
        ) : (
          <>
            <Text fontSize="sm" fontWeight="bold" textTransform="uppercase">
              Insígnias
            </Text>

            <Text fontSize="sm" fontWeight="bold" textTransform="uppercase">
              {profile?.database.medalhas &&
                Object.values(profile?.database.medalhas as any).filter(
                  hasBadge => hasBadge,
                ).length}
            </Text>
          </>
        )}
      </Flex>

      <Grid templateColumns="repeat(auto-fit, minmax(50px, 1fr))" gap={4}>
        {isLoading ? (
          Array.from(Array(4).keys()).map(id => (
            <Skeleton
              key={id}
              w="66px"
              h="66px"
              borderRadius={16}
              startColor="gray.300"
              endColor="gray.400"
            />
          ))
        ) : (
          <>
            {Array.from(Array(4).keys()).map(id => (
              <Flex
                key={id}
                w="66px"
                h="66px"
                borderRadius={16}
                bgColor={theme.badgeBackground}
              />
            ))}
          </>
        )}
      </Grid>
    </Flex>
  );
}
