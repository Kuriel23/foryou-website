import { Flex, Text, VStack } from '@chakra-ui/react';

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
  if (isLoading) return <Text>Carregando...</Text>;

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
