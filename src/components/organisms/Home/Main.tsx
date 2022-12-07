import {
  Flex,
  Heading,
  Text,
  Button,
  Img,
  useColorModeValue,
} from '@chakra-ui/react';
import { useSession } from 'next-auth/react';

export function Main(): JSX.Element {
  const { data: session } = useSession();

  const theme = {
    containerBackground: useColorModeValue('gray.100', 'gray.700'),
  };

  return (
    <Flex w="100%" maxW={1240} px={10} m="0 auto" justify="space-between">
      <Flex
        w="100%"
        flexDir="column"
        px={12}
        py={32}
        borderRadius={12}
        bgColor={theme.containerBackground}
      >
        <Flex w="100%" h="100%" align="center" justify="space-between">
          <Flex flexDir="column" align="flex-start" maxW={400} gap={6}>
            <Heading sx={{ span: { color: 'green.300' } }}>
              Um <span>simples</span> bot <span>otaku</span> do Discord
            </Heading>

            <Text>
              A simplicidade, o amor e o carinho num só bot. Feito especialmente
              para os mais diversos otakus do servidor Animes Online Games, com
              um sistema de economia e reputação viciantes.
            </Text>

            <Button
              px={10}
              width="150px"
              borderRadius={12}
              bgColor="green.200"
              color="gray.800"
            >
              {session ? 'Se aventurar' : 'Entrar'}
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
