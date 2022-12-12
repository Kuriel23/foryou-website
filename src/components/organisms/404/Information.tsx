import {
  Flex,
  VStack,
  Box,
  Text,
  Heading,
  Button,
  Img,
  useColorModeValue,
} from '@chakra-ui/react';

export function Information(): JSX.Element {
  const theme = {
    containerBackground: useColorModeValue('gray.100', 'gray.700'),
    textColor: useColorModeValue('gray.700', 'white'),
  };
  return (
    <>
      <Flex
        bgImage="https://i.imgur.com/URGcI2z.jpeg"
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPos="center"
        filter="blur(5px)"
        w="100%"
        h="100vh"
      />
      <Box bg="transparent" w="100%" mt="-100vh" zIndex={999}>
        <Box
          bg={theme.containerBackground}
          w="90%"
          h="95vh"
          p="3"
          m="auto"
          borderRadius={12}
        >
          <VStack textAlign="center">
            <Img
              src="/images/illustrations/undraw_artificial_intelligence_re_enpp.svg"
              alt="blob"
              height="340px"
              position="relative"
              mb="50px"
            />
            <Heading
              color={theme.textColor}
              sx={{ span: { color: 'green.300' } }}
            >
              Isto parece ser <span>perigoso</span>!
            </Heading>

            <Text color={theme.textColor}>
              A simplicidade, o amor e o carinho num só bot. Feito especialmente
              para os mais diversos otakus do servidor Animes Online Games, com
              um sistema de economia e reputação viciantes.
            </Text>

            <Button
              px={10}
              width="220px"
              borderRadius={12}
              bgColor="green.200"
              color="gray.700"
            >
              Voltar a um lugar seguro
            </Button>
          </VStack>
        </Box>
      </Box>
    </>
  );
}
