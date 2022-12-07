import {
  Box,
  Text,
  HStack,
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
    color: useColorModeValue('white', 'gray.700'),
  };

  return (
    <VStack maxW={1240} px={10} m="0 auto " justify="space-between">
      <Box bg="green.200" w="1240px" p={12} borderRadius={12}>
        <HStack justify="center" mb="10">
          <Avatar size="lg" />
          <Text color={theme.color} size="xl" as="b" align="center">
            Kuriel#1411
          </Text>
        </HStack>
        <Heading color={theme.color} textAlign="center" as="h3" size="lg">
          Informações do Usuário
        </Heading>
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
            <Heading color={theme.color} textAlign="left" as="h4" size="md">
              Conta criada em:
            </Heading>
            <Box bg="gray.200" p={3} borderRadius={12}>
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
            <Heading color={theme.color} textAlign="left" as="h4" size="md">
              Conta entrou a:
            </Heading>
            <Box bg="gray.200" p={3} borderRadius={12}>
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
            <Heading color={theme.color} textAlign="left" as="h4" size="md">
              Dinheiro:
            </Heading>
            <Box bg="gray.200" p={3} borderRadius={12}>
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
            <Heading color={theme.color} textAlign="left" as="h4" size="md">
              Reputação:
            </Heading>
            <Box bg="gray.200" p={3} borderRadius={12}>
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
          <Heading color={theme.color} textAlign="center" as="h4" size="md">
            Biografia:
          </Heading>
          <Box bg="gray.200" w="95%" p={12} borderRadius={12}>
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
