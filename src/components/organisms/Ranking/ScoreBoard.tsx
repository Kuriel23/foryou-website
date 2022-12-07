import { Flex, Text, Avatar, Heading, Progress } from '@chakra-ui/react';

export function ScoreBoard(): JSX.Element {
  return (
    <Flex w="100%" maxW={1240} px={28} py={12} m="0 auto">
      <Flex flexDir="column" align="center" gap={8}>
        {Array.from(Array(15).keys()).map((_, i) => (
          <Flex key={i + 3} align="center" gap={6}>
            <Text fontSize="2xl" fontWeight="bold">
              {i + 3}
            </Text>

            <Avatar w="65px" h="65px" />

            <Flex flexDir="column">
              <Heading as="h3" fontSize="xl">
                User
              </Heading>

              <Text>#0000</Text>

              <Progress
                mt={2}
                w="200px"
                value={20}
                size="sm"
                color="green.200"
                bgColor="gray.200"
              />
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
