import { Flex, Heading, Text, Button } from '@chakra-ui/react';
import { signIn, useSession } from 'next-auth/react';
export function Home(): JSX.Element {
  const { data: session } = useSession();
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
            Um <span>simples</span> bot <span>otaku</span> do Discord
          </Heading>

          <Text>
            A simplicidade, o amor e o carinho num só bot. Feito especialmente
            para os mais diversos otakus do servidor Animes Online Games, com um
            sistema de economia e reputação viciantes.
          </Text>

          {session ? (
            <Button px={10} width="150px" borderRadius={12} bgColor="green.200">
              Se aventurar
            </Button>
          ) : (
            <Button
              px={10}
              width="150px"
              borderRadius={12}
              bgColor="green.200"
              onClick={() => signIn('discord')}
            >
              Entrar
            </Button>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}
