import {
  Flex,
  Skeleton,
  SkeletonText,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import { useProfile } from '@hooks/useProfile';

export function Biography(): JSX.Element {
  const { profile, isLoading } = useProfile();

  const theme = {
    cardBackground: useColorModeValue('gray.200', 'gray.700'),
    buttonBackground: useColorModeValue('gray.100', 'gray.600'),
  };

  return (
    <Flex
      minH="250px"
      gap={2}
      p={8}
      flexDir="column"
      borderRadius={12}
      bgColor={theme.cardBackground}
    >
      {isLoading ? (
        <>
          <Skeleton
            h="20px"
            w="100px"
            startColor="gray.300"
            endColor="gray.400"
          />

          <SkeletonText
            mt="4"
            noOfLines={4}
            spacing="4"
            skeletonHeight="4"
            startColor="gray.300"
            endColor="gray.400"
          />
        </>
      ) : (
        <>
          <Text fontSize="lg" fontWeight="bold" textTransform="uppercase">
            Biografia
          </Text>

          <Text fontSize="sm" fontWeight="400">
            {profile?.database.biografia
              .replace('&nbsp;', ' ')
              .substring(0, 700)}
          </Text>
        </>
      )}
    </Flex>
  );
}
