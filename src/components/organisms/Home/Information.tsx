import { Flex, Heading, Img, Text } from '@chakra-ui/react';

export function Information(): JSX.Element {
  return (
    <Flex w="100%" maxW={1240} m="0 auto " justify="space-between">
      <Flex w="100%" flexDir="column" p={12} gap={8}>
        <Flex
          w="100%"
          flexDir="column"
          align="center"
          justify="center"
          gap={8}
          textAlign="center"
        >
          <Heading as="h2" size="xl">
            Dolore hic aliquid omnis consectetur ait
          </Heading>

          <Text maxW="800px">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            autem accusantium sint enim molestias harum animi velit recusandae
            dolor, aut cupiditate. Dolorum repudiandae corrupti voluptatibus
            quod quam facere dolore modi..
          </Text>
        </Flex>

        <Flex w="100%" gap={8} align="center" justify="space-between">
          <Flex
            w="100%"
            flexDir="column"
            p={12}
            borderRadius={12}
            bgColor="gray.200"
            align="center"
            justify="center"
            gap={4}
            textAlign="center"
          >
            <Img
              src="/images/illustrations/undraw_having_fun_re_vj4h.svg"
              alt="blob"
              height="200px"
              position="relative"
            />

            <Heading as="h3" size="lg" sx={{ span: { color: 'green.300' } }}>
              Dolore hic <span>aliquid omnis</span> consectetur ait
            </Heading>

            <Text maxW="800px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem autem accusantium sint enim molestias.
            </Text>
          </Flex>

          <Flex
            w="100%"
            flexDir="column"
            p={12}
            borderRadius={12}
            bgColor="gray.200"
            align="center"
            justify="center"
            gap={4}
            textAlign="center"
          >
            <Img
              src="/images/illustrations/undraw_into_the_night_vumi.svg"
              alt="blob"
              height="200px"
              position="relative"
            />

            <Heading as="h3" size="lg" sx={{ span: { color: 'green.300' } }}>
              Dolore hic <span>aliquid omnis</span> consectetur ait
            </Heading>

            <Text maxW="800px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem autem accusantium sint enim molestias.
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
