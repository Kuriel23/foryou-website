import {
  Flex,
  Box,
  Text,
  Heading,
  Button,
  Img,
  useColorModeValue,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

export function Information(): JSX.Element {
  const theme = {
    containerBackground: useColorModeValue('gray.100', 'gray.700'),
    textColor: useColorModeValue('gray.700', 'white'),
  };
  const router = useRouter();
  return (
    <>
      <Flex
        bgImage="https://i.imgur.com/URGcI2z.jpeg"
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPos="center"
        filter="blur(3px)"
        w="100%"
        h="100vh"
      />
      <Box bg="transparent" w="100%" mt="-100vh" zIndex={999}>
        <Box
          bg={theme.containerBackground}
          w={{ base: '90%', xl: '55%' }}
          h="95vh"
          p={{ base: '1', xl: '3' }}
          m="auto"
          borderRadius={12}
          textAlign="center"
        >
          <Box m="auto" pt={{ base: '5vh', xl: '1vh' }}>
            <Img
              src="/images/illustrations/undraw_by_the_road_re_vvs7.svg"
              alt="blob"
              height={{ base: '25vh', xl: '35vh' }}
              m={{ base: '10px auto', xl: '50px auto' }}
            />
            <Heading
              color={theme.textColor}
              sx={{ span: { color: 'green.300' } }}
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
              Isto não estava previsto no meu mapa, parece que é melhor
              voltarmos antes que encontremos alguns perigos dos quais não
              gostariamos de encarar.
            </Text>

            <Button
              borderRadius={12}
              bgColor="green.200"
              color="gray.700"
              fontSize={{ base: 'md', xl: 'xl' }}
              onClick={() => router.push('/')}
            >
              Voltar a um lugar seguro
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
