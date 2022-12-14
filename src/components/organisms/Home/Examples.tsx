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
    <Flex
      w="100%"
      maxW={1240}
      m="0 auto"
      flexDir="column"
      align="center"
      justify="center"
      gap={8}
      textAlign="center"
    >
      <Heading as="h2" size="xl" color={theme.textColor}>
        Quer ver um pouco das minhas funções?
      </Heading>

      <Text maxW="800px" color={theme.textColor}>
        Deixa eu te dar o cheirinho de algumas das minhas funções através de
        imagens e explicando melhor elas por texto, que tal? Se você descer um
        pouco você encontrará algumas imagens dos meus comandos feitos pelos
        meus desenvolvedores.
      </Text>

      <Flex
        w="100%"
        p={12}
        align="center"
        gap={12}
        flexDir={['column', 'row']}
        alignItems={['center', 'stretch']}
      >
        <Img
          src="/images/examples/entretenimento.png"
          alt="blob"
          maxHeight="400px"
          borderRadius={12}
        />

        <Flex flexDir="column" gap={4} w={['100%', '50%']} alignItems="center">
          <Badge maxW="max-content">Entretenimento</Badge>

          <Heading
            as="h3"
            size="xl"
            color={theme.textColor}
            sx={{ span: { color: 'green.300' } }}
          >
            O <span>entretenimento</span> é tudo, ainda mais com fofura
          </Heading>

          <Text color={theme.textColor}>
            Você não tem um gato nem um cachorro? Sem problemas, seja mimado por
            esses bixinhos fofos através dos comandos de gato ou de cachorro. Ou
            se sente carente? Abrace alguém virtualmente, com o comando de
            abraço.
          </Text>
        </Flex>
      </Flex>

      <Flex w="100%" p={12} align="center" gap={12} flexDir={['column', 'row']}>
        <Flex flexDir="column" gap={4}>
          <Badge maxW="max-content">Economia</Badge>

          <Heading
            as="h3"
            size="xl"
            color={theme.textColor}
            sx={{ span: { color: 'green.300' } }}
          >
            Ser rico em <span>animecoins</span>, claro!
          </Heading>

          <Text color={theme.textColor}>
            Seja viciado em roletas, dar reputações, e ficar sempre olhando o
            seu banco, pegando o daily, crime, pegar alguns fundos novos para o
            seu perfil e muito mais apenas com simples comandos porém que você
            facilmente é atraído ao ponto de serem viciantes.
          </Text>
        </Flex>

        <Img
          src="/images/examples/economia.png"
          alt="blob"
          maxHeight="500px"
          borderRadius={12}
        />
      </Flex>

      <Flex w="100%" p={12} align="center" gap={12}>
        <Img
          src="/images/examples/informacao.png"
          alt="blob"
          maxHeight="400px"
          borderRadius={12}
        />

        <Flex flexDir="column" gap={4}>
          <Badge maxW="max-content">Informação</Badge>

          <Heading
            as="h3"
            size="xl"
            color={theme.textColor}
            sx={{ span: { color: 'green.300' } }}
          >
            A <span>informação</span> é importante, principalmente para Otakus
          </Heading>

          <Text color={theme.textColor}>
            A informação é a base do mundo, sem ela seria quase impossível de
            sobreviver neste mundo informado, principalmente as novas
            tecnologias facilitam o recebimento de informação. Mas você é um
            otaku, logo gosta de ficar informado quanto a comandos como o de
            anime nos quais informam episódios, status, gêneros e até informa se
            está disponível no website do Animes Online Games.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
