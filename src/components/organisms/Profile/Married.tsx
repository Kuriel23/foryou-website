import { Avatar, HStack, VStack, Image, Text } from '@chakra-ui/react';

export function Married(): JSX.Element {
  return (
    <VStack mb="20px" justifyContent="center">
      <Text color="green.200" size="2xl" as="b">
        Kuriel#1411 é casado com Izak#1954
      </Text>
      <HStack>
        <Avatar size="xl" borderColor="white" borderWidth="3px" />
        <Image src="/images/illustrations/ring.svg" w="120px" />
        <Avatar size="xl" borderColor="white" borderWidth="3px" />
      </HStack>
    </VStack>
  );
}
