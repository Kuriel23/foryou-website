import {
  Badge,
  Flex,
  Heading,
  Img,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export function Examples(): JSX.Element {
  const theme = {
    cardBackground: useColorModeValue('gray.100', 'gray.700'),
    textColor: useColorModeValue('gray.700', 'white'),
  };

  return (
    <Flex w="100%" maxW={1240} m="0 auto">
      <Flex w="100%" flexDir="column" p={10} gap={8}>
        <Flex
          w="100%"
          flexDir="column"
          align="center"
          justify="center"
          gap={8}
          textAlign="center"
        >
          <Heading as="h2" size="xl" color={theme.textColor}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Heading>

          <Text maxW="800px" color={theme.textColor}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            quis tenetur nobis sapiente hic, blanditiis corrupti quidem esse
            libero obcaecati laudantium quam culpa, eveniet, in adipisci eos
            aperiam. Odit, mollitia.
          </Text>
        </Flex>

        <Flex flexDir="column" w="100%" gap={8}>
          <Flex w="100%" p={12} align="center" gap={12}>
            <Img
              src="/images/examples/example_ping.png"
              alt="blob"
              maxHeight="400px"
              borderRadius={12}
            />

            <Flex flexDir="column" gap={4}>
              <Badge w="46px">Music</Badge>

              <Heading
                as="h3"
                size="xl"
                color={theme.textColor}
                sx={{ span: { color: 'green.300' } }}
              >
                Quam culpa, eveniet in adipisci.
              </Heading>

              <Text color={theme.textColor}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                commodi repellat error alias dicta aut, nam eligendi cupiditate
                dolorem placeat vel hic in distinctio ducimus nesciunt, debitis
                architecto maxime laborum!
              </Text>
            </Flex>
          </Flex>

          <Flex w="100%" p={12} align="center" gap={12}>
            <Flex flexDir="column" gap={4}>
              <Badge w="46px">Music</Badge>

              <Heading
                as="h3"
                size="xl"
                color={theme.textColor}
                sx={{ span: { color: 'green.300' } }}
              >
                Quam culpa, eveniet in adipisci.
              </Heading>

              <Text color={theme.textColor}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                commodi repellat error alias dicta aut, nam eligendi cupiditate
                dolorem placeat vel hic in distinctio ducimus nesciunt, debitis
                architecto maxime laborum!
              </Text>
            </Flex>

            <Img
              src="/images/examples/example_help.png"
              alt="blob"
              maxHeight="500px"
              borderRadius={12}
            />
          </Flex>

          <Flex w="100%" p={12} align="center" gap={12}>
            <Img
              src="/images/examples/example_ping.png"
              alt="blob"
              maxHeight="400px"
              borderRadius={12}
            />

            <Flex flexDir="column" gap={4}>
              <Badge w="46px">Music</Badge>

              <Heading
                as="h3"
                size="xl"
                color={theme.textColor}
                sx={{ span: { color: 'green.300' } }}
              >
                Quam culpa, eveniet in adipisci.
              </Heading>

              <Text color={theme.textColor}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                commodi repellat error alias dicta aut, nam eligendi cupiditate
                dolorem placeat vel hic in distinctio ducimus nesciunt, debitis
                architecto maxime laborum!
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
