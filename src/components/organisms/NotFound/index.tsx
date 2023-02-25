import {
  Flex,
  Box,
  Img,
  Heading,
  Text,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

export function NotFound(): JSX.Element {
  const router = useRouter();

  const theme = {
    containerBackground: useColorModeValue('gray.100', 'gray.700'),
    textColor: useColorModeValue('gray.700', 'white'),
  };

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
          p={12}
          w="60%"
          bg={theme.containerBackground}
          borderRadius={12}
          textAlign="center"
        >
          <Img
            src="/images/illustrations/undraw_by_the_road_re_vvs7.svg"
            alt="blob"
            w="400px"
            m={{ base: '10px auto', xl: '50px auto' }}
          />

          <Heading
            color={theme.textColor}
            sx={{ span: { color: 'orange.300' } }}
            fontSize={{ base: '2xl', xl: '5xl' }}
            mb="15px"
          >
            Isto parece ser <span>perigoso</span>!
          </Heading>

          <Text
            color={theme.textColor}
            m="15px auto"
            maxW={{ base: '90%', xl: '60%' }}
            fontSize={{ base: 'md', xl: 'xl' }}
          >
            Isto não estava previsto no meu mapa, parece que é melhor voltarmos
            antes que encontremos alguns perigos dos quais não gostariamos de
            encarar.
          </Text>

          <Button
            borderRadius={12}
            bgColor="orange.200"
            color="gray.700"
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
