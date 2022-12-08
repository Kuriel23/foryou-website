import {
  Box,
  Text,
  VStack,
  Avatar,
  Heading,
  SimpleGrid,
  useColorModeValue,
  useTheme,
  Flex,
} from '@chakra-ui/react';
import { ChatText, Door, Money, ShieldCheck, UserPlus } from 'phosphor-react';

export function Information(): JSX.Element {
  const { colors } = useTheme();
  const theme = {
    cardBackground: useColorModeValue('gray.700', 'gray.200'),
    color: useColorModeValue('white', 'gray.700'),
  };

  return (
    <VStack maxW={1240} px={10} m="0 auto " justify="space-between">
      <Box bg="green.200" w="1240px" p={12} borderRadius={12}>
        <Heading color="gray.700" textAlign="center" as="h3" size="lg">
          Informações do Usuário
        </Heading>
        <VStack justify="center" mt="10" mb="10">
          <Avatar size="xl" />
          <Text color="gray.700" size="xl" as="b" align="center">
            Kuriel#1411
          </Text>
        </VStack>
        <SimpleGrid columns={2} mt="5" mb="5" spacing="40px">
          <VStack>
            <Flex
              w={16}
              h={16}
              borderRadius={12}
              align="center"
              justify="center"
              bgColor="yellow.500"
            >
              <UserPlus size={32} color={colors.white} />
            </Flex>
            <Heading color="gray.700" textAlign="left" as="h4" size="md">
              Conta criada em:
            </Heading>
            <Box bg={theme.cardBackground} p={3} borderRadius={12}>
              <Text color={theme.color}>25 de Junho de 2020</Text>
            </Box>
          </VStack>
          <VStack>
            <Flex
              w={16}
              h={16}
              borderRadius={12}
              align="center"
              justify="center"
              bgColor="blue.700"
            >
              <Door size={32} color={colors.white} />
            </Flex>
            <Heading color="gray.700" textAlign="left" as="h4" size="md">
              Conta entrou a:
            </Heading>
            <Box bg={theme.cardBackground} p={3} borderRadius={12}>
              <Text color={theme.color}>25 de Junho de 2020</Text>
            </Box>
          </VStack>
          <VStack>
            <Flex
              w={16}
              h={16}
              borderRadius={12}
              align="center"
              justify="center"
              bgColor="green.700"
            >
              <Money size={32} color={colors.white} />
            </Flex>
            <Heading color="gray.700" textAlign="left" as="h4" size="md">
              Dinheiro:
            </Heading>
            <Box bg={theme.cardBackground} p={3} borderRadius={12}>
              <Text color={theme.color}>100.000 animecoins</Text>
            </Box>
          </VStack>
          <VStack>
            <Flex
              w={16}
              h={16}
              borderRadius={12}
              align="center"
              justify="center"
              bgColor="green"
            >
              <ShieldCheck size={32} color={colors.white} />
            </Flex>
            <Heading color="gray.700" textAlign="left" as="h4" size="md">
              Reputação:
            </Heading>
            <Box bg={theme.cardBackground} p={3} borderRadius={12}>
              <Text color={theme.color}>100</Text>
            </Box>
          </VStack>
        </SimpleGrid>
        <VStack>
          <Flex
            w={16}
            h={16}
            borderRadius={12}
            align="center"
            justify="center"
            bgColor="orange.500"
          >
            <ChatText size={32} color={colors.white} />
          </Flex>
          <Heading color="gray.700" textAlign="center" as="h4" size="md">
            Biografia:
          </Heading>
          <Box bg={theme.cardBackground} w="95%" p={12} borderRadius={12}>
            <Text color={theme.color}>
              Inicialmente criado em 25 de Junho de 2020, fui feito para
              facilitar anúncios de lançamento de animes, mas os otakus sempre
              queriam mais que isso.
            </Text>
          </Box>
        </VStack>
      </Box>
    </VStack>
  );
}
