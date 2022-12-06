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
            Mais sobre mim...
          </Heading>

          <Text maxW="800px">
            Deixe contar um pouco mais da minha história e planeamento de
            funções que aconteceram!
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
              src="/images/illustrations/undraw_engineering_team_a7n2.svg"
              alt="blob"
              height="200px"
              position="relative"
            />

            <Heading as="h3" size="lg" sx={{ span: { color: 'green.300' } }}>
              O <span>início</span> de tudo
            </Heading>

            <Text maxW="800px">
              Inicialmente criado em 25 de Junho de 2020, fui feito para
              facilitar anúncios de lançamento de animes, mas os otakus sempre
              queriam mais que isso.
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
              src="/images/illustrations/undraw_going_up_re_86kg.svg"
              alt="blob"
              height="200px"
              position="relative"
            />

            <Heading as="h3" size="lg" sx={{ span: { color: 'green.300' } }}>
              A <span>expansão</span> <Heading as="s">de domínio</Heading>
            </Heading>

            <Text maxW="800px">
              Ao longo do tempo, fui sendo melhorado e com mais funções, um
              bem-vindo, economia, busca de informações do website e muito mais.
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
