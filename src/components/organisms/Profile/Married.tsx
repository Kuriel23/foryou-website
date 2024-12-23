/* eslint-disable no-nested-ternary */

import {
  Flex,
  Text,
  Avatar,
  useColorModeValue,
  Icon,
  Skeleton,
  SkeletonCircle,
} from '@chakra-ui/react';
import { Heart } from 'phosphor-react';

import { useProfile } from '@hooks/useProfile';

export function Married(): JSX.Element {
  const { profile, isLoading } = useProfile();

  const theme = {
    cardBackground: useColorModeValue('gray.200', 'gray.700'),
  };

  return (
    <Flex
      w="100%"
      gap={4}
      flexDir="column"
      align="center"
      p={8}
      borderRadius={12}
      bgColor={theme.cardBackground}
    >
      {isLoading ? (
        <>
          <Flex w="100%" gap={4} align="center" justify="center">
            <SkeletonCircle
              w="100px"
              h="100px"
              startColor="gray.300"
              endColor="gray.400"
            />

            <SkeletonCircle
              w="70px"
              h="70px"
              startColor="gray.300"
              endColor="gray.400"
            />

            <SkeletonCircle
              w="100px"
              h="100px"
              startColor="gray.300"
              endColor="gray.400"
            />
          </Flex>

          <Skeleton
            h="20px"
            w="200px"
            startColor="gray.300"
            endColor="gray.400"
          />
        </>
      ) : profile?.database.casado ? (
        <>
          <Flex w="100%" gap={4} align="center" justify="center">
            <Avatar src={profile?.user.avatar} w="100px" h="100px" />

            <Icon as={Heart} w="90px" h="90px" weight="fill" color="red.500" />

            <Avatar
              src={profile?.database.casado?.avatar}
              w="100px"
              h="100px"
            />
          </Flex>

          <Text as="p">
            <Text as="strong">{profile?.user.username}</Text> está casado com{' '}
            <Text as="strong">{profile?.database.casado?.username}</Text>
          </Text>
        </>
      ) : (
        <Text as="p">Você não se encontra casado(a) no momento.</Text>
      )}
    </Flex>
  );
}
