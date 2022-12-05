import { Flex, Heading, Text, SimpleGrid, useTheme } from '@chakra-ui/react';
import { Alien, AndroidLogo, Basketball } from 'phosphor-react';

export function Categories(): JSX.Element {
  const { colors } = useTheme();

  return (
    <Flex w="100%" maxW={1240} px={10} m="0 auto " justify="space-between">
      <Flex
        w="100%"
        flexDir="column"
        p={12}
        gap={8}
        borderRadius={12}
        bgColor="green.200"
      >
        <Flex flexDir="column" gap={2}>
          <Heading as="h3" size="lg">
            Dolore hic aliquid omnis consectetur ait
          </Heading>

          <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Text>
        </Flex>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <Flex flexDir="column" gap={2}>
            <Flex
              w={16}
              h={16}
              borderRadius={12}
              align="center"
              justify="center"
              bgColor="orange.300"
            >
              <Basketball size={32} color={colors.white} />
            </Flex>

            <Heading as="h4" size="md">
              Sit amet consectetur
            </Heading>

            <Text fontSize="sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
              voluptates non nemo.
            </Text>
          </Flex>

          <Flex flexDir="column" gap={2}>
            <Flex
              w={16}
              h={16}
              borderRadius={12}
              align="center"
              justify="center"
              bgColor="blue.300"
            >
              <AndroidLogo size={32} color={colors.white} />
            </Flex>

            <Heading as="h4" size="md">
              Sit amet consectetur
            </Heading>

            <Text fontSize="sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
              voluptates non nemo.
            </Text>
          </Flex>

          <Flex flexDir="column" gap={2}>
            <Flex
              w={16}
              h={16}
              borderRadius={12}
              align="center"
              justify="center"
              bgColor="purple.300"
            >
              <Alien size={32} color={colors.white} />
            </Flex>

            <Heading as="h4" size="md">
              Sit amet consectetur
            </Heading>

            <Text fontSize="sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
              voluptates non nemo.
            </Text>
          </Flex>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
