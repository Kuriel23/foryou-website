import { Box, Text, HStack, VStack, Avatar, Heading } from '@chakra-ui/react';

export function Information(): JSX.Element {
  return (
    <VStack maxW={1240} px={10} m="0 auto " justify="space-between">
      <HStack>
        <Avatar size="lg"></Avatar>
        <Text size="xl" align="center">
          Kuriel#1411
        </Text>
      </HStack>
      <Box bg="green.200" w="1240px" p="10px" borderRadius={12}>
        <Heading textAlign="center" as="h3" size="lg">
          Informações do Usuário
        </Heading>
        <Heading textAlign="center" as="h4" size="md">
          Informações do Usuário
        </Heading>
      </Box>
    </VStack>
  );
}
