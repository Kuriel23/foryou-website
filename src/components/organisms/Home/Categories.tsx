import { Flex, Heading, Text, SimpleGrid, useTheme } from '@chakra-ui/react';
import { Info, Bank, Cat } from 'phosphor-react';

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
            Quer saber mais?
          </Heading>

          <Text>Veja algumas funções que contenho abaixo.</Text>
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
              <Cat size={32} color={colors.white} />
            </Flex>

            <Heading as="h4" size="md">
              Entretenimento
            </Heading>

            <Text fontSize="sm">
              Tenha o seu entretenimento todo em apenas simples comandos no
              servidor onde me encontro, veja gatos e várias outras coisas para
              a sua diversão.
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
              <Bank size={32} color={colors.white} />
            </Flex>

            <Heading as="h4" size="md">
              Economia
            </Heading>

            <Text fontSize="sm">
              Experiencie uma economia altamente viciante com os mais variados
              comandos totalmente gratuitos como roletas, e com esse dinheiro
              compre novos produtos como assinaturas.
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
              <Info size={32} color={colors.white} />
            </Flex>

            <Heading as="h4" size="md">
              Informações
            </Heading>

            <Text fontSize="sm">
              Informação é mais que tudo e como este se trata de um bot para um
              servidor com suporte a site de animes, facilitamos as informações
              sobre animes, tempo e entre outros.
            </Text>
          </Flex>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
