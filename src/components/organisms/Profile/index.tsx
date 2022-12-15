import {
  Flex,
  Heading,
  VStack,
  CircularProgress,
  useColorModeValue,
} from '@chakra-ui/react';

import { Banner } from './Banner';
import { Information } from './Information';
import { Married } from './Married';

type IntrinsicAttributes = {
  user: Record<string, any>;
  loading: boolean;
};

interface ProfileProps {
  user: IntrinsicAttributes['user'] | null | never;
  isLoading: IntrinsicAttributes['loading'];
}

export function Profile({ user, isLoading }: ProfileProps): JSX.Element {
  const theme = {
    color: useColorModeValue('gray.700', 'gray.200'),
    trackColor: useColorModeValue('gray.200', 'gray.700'),
  };
  if (isLoading)
    return (
      <VStack m="13.1vh 0" maxH="max-content">
        <CircularProgress
          isIndeterminate
          color="green.200"
          trackColor={theme.trackColor}
          capIsRound
          size="sm"
        />
        <Heading size="3xl" textAlign="center" color={theme.color} p="15">
          Carregando...
        </Heading>
      </VStack>
    );

  return (
    <Flex flexDir="column" gap={6}>
      <Banner />
      <Information user={user} />
      {(user?.helpers.casado as string) ? (
        <Married user={user} />
      ) : (
        <VStack mb="20px" justifyContent="center" />
      )}
    </Flex>
  );
}
