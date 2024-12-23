import {
  Flex,
  Heading,
  Text,
  Button,
  Img,
  useColorModeValue,
} from '@chakra-ui/react';

import { useSession } from '@hooks/useSession';

export function Main(): JSX.Element {
  const session = useSession();

  const theme = {
    containerBackground: useColorModeValue('gray.100', 'gray.700'),
    textColor: useColorModeValue('gray.700', 'white'),
  };

  return (
    <Flex w="100%" maxW={1240} px={10} pb={10} m="0 auto">
      <Flex
        w="100%"
        flexDir="column"
        px={12}
        py={48}
        borderRadius={12}
        bgColor={theme.containerBackground}
      >
        <Flex w="100%" h="100%" align="center" justify="space-between">
          <Flex flexDir="column" align="flex-start" maxW={400} gap={6}>
            <Heading
              color={theme.textColor}
              sx={{ span: { color: 'orange.300' } }}
            >
              Um <span>simples</span> bot <span>otaku</span> do Discord
            </Heading>

            <Text color={theme.textColor}>
              A simplicidade, o amor e o carinho num só bot. Feito especialmente
              para os mais diversos otakus e gamers do servidor For You, com um
              sistema de economia e reputação viciantes.
            </Text>

            <Button
              px={10}
              width="150px"
              borderRadius={12}
              bgColor="orange.200"
              color="gray.700"
            >
              {session.status === 'authenticated' ? 'Se aventurar' : 'Entrar'}
            </Button>
          </Flex>

          <Img
            src="/images/illustrations/undraw_artificial_intelligence_re_enpp.svg"
            alt="blob"
            height="240px"
            position="relative"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
