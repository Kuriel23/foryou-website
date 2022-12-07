import { Avatar, HStack, Image } from '@chakra-ui/react';

export function Married(): JSX.Element {
  return (
    <HStack justifyContent="center" mb="20px">
      <Avatar size="xl" />
      <Image src="/images/illustrations/ring.svg" w="120px" />
      <Avatar size="xl" />
    </HStack>
  );
}
