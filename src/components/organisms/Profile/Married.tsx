import {
  Avatar,
  HStack,
  VStack,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

type IntrinsicAttributes = {
  user: Record<string, any>;
};

interface MarriedProps {
  user: IntrinsicAttributes['user'] | null | never;
}

export function Married({ user }: MarriedProps): JSX.Element {
  const router = useRouter();
  const theme = {
    border: useColorModeValue('gray.700', 'white'),
  };
  return (
    <VStack mb="20px" justifyContent="center">
      <Text color="green.200" size="2xl" as="b">
        {user?.tag} é casado com {user?.helpers.casado.tag}
      </Text>
      <HStack>
        <Avatar
          src={user?.avatar}
          size="xl"
          borderColor={theme.border}
          borderWidth="3px"
        />
        <Image src="/images/illustrations/ring.svg" w="120px" />
        <Avatar
          src={user?.helpers.casado.avatar}
          cursor="pointer"
          onClick={() => router.push(`/profile/${user?.helpers.casado.id}`)}
          size="xl"
          borderColor={theme.border}
          borderWidth="3px"
        />
      </HStack>
    </VStack>
  );
}
