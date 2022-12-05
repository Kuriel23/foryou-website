import { Flex, Heading, Text, Button } from '@chakra-ui/react';

export function Home(): JSX.Element {
  return (
    <Flex
      w="100%"
      maxW={1240}
      px={48}
      m="0 auto 10rem auto"
      justify="space-between"
    >
      <Flex
        w="100%"
        flexDir="column"
        p={12}
        borderRadius={12}
        bgColor="gray.100"
      >
        <Flex w="100%" flexDir="column" align="flex-start" maxW={400} gap={6}>
          <Heading fontWeight={900} sx={{ span: { color: 'green.300' } }}>
            Lorem <span>ipsum dolor</span> sit amet consectetur
          </Heading>

          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure,
            quas! Voluptate dolore hic aliquid omnis. Autem, amet soluta vitae
            totam architecto provident magnam nam commodi error, ullam
            consectetur doloribus cumque!
          </Text>

          <Button px={10} width="150px" borderRadius={12} bgColor="green.200">
            Entrar
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
