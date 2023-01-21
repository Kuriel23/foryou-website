import { Flex, Heading, Img, Text, useColorModeValue } from '@chakra-ui/react';

export function Information(): JSX.Element {
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
            Mais sobre mim...
          </Heading>

          <Text maxW="800px" color={theme.textColor}>
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
            bgColor={theme.cardBackground}
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

            <Heading
              as="h3"
              size="lg"
              color={theme.textColor}
              sx={{ span: { color: 'orange.300' } }}
            >
              O <span>início</span> de tudo
            </Heading>

            <Text maxW="800px" color={theme.textColor}>
              Inicialmente criado em 8 de Junho de 2022, fui feito para
              facilitar os sistemas do próprio servidor, mas os membros sempre
              queriam mais que isso.
            </Text>
          </Flex>

          <Flex
            w="100%"
            flexDir="column"
            p={12}
            borderRadius={12}
            bgColor={theme.cardBackground}
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

            <Heading
              as="h3"
              size="lg"
              color={theme.textColor}
              sx={{ span: { color: 'orange.300' } }}
            >
              A <span>expansão</span>{' '}
              <Heading as="s" size="lg" color={theme.textColor}>
                de domínio
              </Heading>
            </Heading>

            <Text maxW="800px" color={theme.textColor}>
              Ao longo do tempo, fui sendo melhorado e com mais funções, uma
              economia, informar notícias, entretenimento, parcerias e muito
              mais.
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
