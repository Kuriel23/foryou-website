import { Flex, Text } from '@chakra-ui/react';

import { Banner } from './Banner';
import { Information } from './Information';
import { Married } from './Married';

type IntrinsicAttributes = {
  user: null;
  loading: boolean;
};

interface ProfileProps {
  user: IntrinsicAttributes['user'];
  isLoading: IntrinsicAttributes['loading'];
}

export function Profile({ user, isLoading }: ProfileProps): JSX.Element {
  if (isLoading) return <Text>Carregando...</Text>;

  return (
    <Flex flexDir="column" gap={6}>
      {user}
      <Banner />
      <Information />
      <Married />
    </Flex>
  );
}
