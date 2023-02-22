import {
  Flex,
  Grid,
  Icon,
  Skeleton,
  SkeletonCircle,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { ChartLineUp, Coins, Medal } from 'phosphor-react';

import { useProfile } from '@hooks/useProfile';

export function Statistics(): JSX.Element {
  const { profile, isLoading } = useProfile();

  const theme = {
    cardBackground: useColorModeValue('gray.200', 'gray.700'),
  };

  return (
    <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={4}>
      <Flex
        py={8}
        gap={4}
        align="center"
        justify="center"
        borderRadius={12}
        bgColor={theme.cardBackground}
      >
        {isLoading ? (
          <SkeletonCircle
            h="50px"
            w="50px"
            startColor="gray.300"
            endColor="gray.400"
          />
        ) : (
          <Icon as={Coins} w="50px" h="50px" weight="fill" color="yellow.300" />
        )}

        <Flex flexDir="column">
          {isLoading ? (
            <>
              <Skeleton
                h="20px"
                w="150px"
                mb={2}
                startColor="gray.300"
                endColor="gray.400"
              />

              <Skeleton
                h="20px"
                w="50px"
                startColor="gray.300"
                endColor="gray.400"
              />
            </>
          ) : (
            <>
              <Text fontSize="2xl" fontWeight="bold" textTransform="uppercase">
                {profile?.database && profile?.database?.coins.toLocaleString()}
              </Text>

              <Text fontSize="sm" fontWeight="400" textTransform="uppercase">
                Coins
              </Text>
            </>
          )}
        </Flex>
      </Flex>

      <Flex
        py={8}
        gap={4}
        align="center"
        justify="center"
        borderRadius={12}
        bgColor={theme.cardBackground}
      >
        {isLoading ? (
          <SkeletonCircle
            h="50px"
            w="50px"
            startColor="gray.300"
            endColor="gray.400"
          />
        ) : (
          <Icon
            as={ChartLineUp}
            w="50px"
            h="50px"
            weight="fill"
            color="blue.300"
          />
        )}

        <Flex flexDir="column">
          {isLoading ? (
            <>
              <Skeleton
                h="20px"
                w="60px"
                mb={2}
                startColor="gray.300"
                endColor="gray.400"
              />

              <Skeleton
                h="20px"
                w="30px"
                startColor="gray.300"
                endColor="gray.400"
              />
            </>
          ) : (
            <>
              <Text fontSize="sm" fontWeight="400" textTransform="uppercase">
                Nível
              </Text>

              <Text fontSize="2xl" fontWeight="bold" textTransform="uppercase">
                {profile?.database.level.toLocaleString()}
              </Text>
            </>
          )}
        </Flex>
      </Flex>

      <Flex
        py={8}
        gap={4}
        align="center"
        justify="center"
        borderRadius={12}
        bgColor={theme.cardBackground}
      >
        {isLoading ? (
          <SkeletonCircle
            h="50px"
            w="50px"
            startColor="gray.300"
            endColor="gray.400"
          />
        ) : (
          <Icon as={Medal} w="50px" h="50px" weight="fill" color="red.300" />
        )}

        <Flex flexDir="column">
          {isLoading ? (
            <>
              <Skeleton
                h="20px"
                w="150px"
                mb={2}
                startColor="gray.300"
                endColor="gray.400"
              />

              <Skeleton
                h="20px"
                w="50px"
                startColor="gray.300"
                endColor="gray.400"
              />
            </>
          ) : (
            <>
              <Text fontSize="2xl" fontWeight="bold" textTransform="uppercase">
                {profile?.database.rep.toLocaleString()}
              </Text>

              <Text fontSize="sm" fontWeight="400" textTransform="uppercase">
                Reputações
              </Text>
            </>
          )}
        </Flex>
      </Flex>
    </Grid>
  );
}
