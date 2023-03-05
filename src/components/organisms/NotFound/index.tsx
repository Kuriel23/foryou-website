import { Flex, Box, Img, Heading, Text, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export function NotFound(): JSX.Element {
  const router = useRouter();

  return (
    <Flex
      bgImage="https://i.imgur.com/8Ms8lMR.png"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPos="center"
      w="100vw"
      h="100vh"
    >
      <Flex w="100vw" h="100vh" align="center" justify="center">
        <Box
          p={3}
          w={{ base: '90%', xl: '35%' }}
          bg="rgba(0,0,0, 0.5)"
          borderRadius={12}
          textAlign="center"
        >
          <Img
            src="/images/illustrations/undraw_by_the_road_re_vvs7.svg"
            alt="blob"
            w="70%"
            m={{ base: '10px auto', xl: '50px auto' }}
          />

          <Heading
            color="gray.400"
            sx={{ span: { color: 'orange.300' } }}
            fontSize={{ base: '2xl', xl: '5xl' }}
            mb="15px"
          >
            Isto parece ser <span>perigoso</span>!
          </Heading>

          <Text
            color="gray.300"
            m="15px auto"
            maxW="93%"
            fontSize={{ base: 'md', xl: 'xl' }}
          >
            Isto não estava previsto no meu mapa, parece que é melhor voltarmos
            antes que encontremos alguns perigos dos quais não gostariamos de
            encarar.
          </Text>

          <Button
            borderRadius={12}
            bgColor="orange.400"
            color="white"
            _active={{ bg: 'orange.500' }}
            _hover={{ bg: 'orange.500' }}
            fontSize={{ base: 'md', xl: 'xl' }}
            onClick={() => router.push('/')}
          >
            Voltar a um lugar seguro
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
}
