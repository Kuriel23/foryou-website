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
  Tooltip,
} from '@chakra-ui/react';
import {
  ChatText,
  Door,
  Money,
  ShieldCheck,
  UserPlus,
  ShieldPlus,
} from 'phosphor-react';

type IntrinsicAttributes = {
  user: Record<string, any>;
};

interface InformationProps {
  user: IntrinsicAttributes['user'] | null | never;
}

export function Information({ user }: InformationProps): JSX.Element {
  const { colors } = useTheme();
  const theme = {
    cardBackground: useColorModeValue('gray.700', 'gray.200'),
    color: useColorModeValue('white', 'gray.700'),
  };

  return (
    <VStack maxW={1240} px={10} m="0 auto " justify="space-between">
      <Box bg="green.200" w="1240px" p={12} borderRadius={12}>
        <VStack
          justify="center"
          backgroundColor="gray.700"
          p="3"
          borderRadius={12}
          w="max-content"
          m="auto"
          mb="10"
          boxShadow="5px 5px #edf2f7"
        >
          <Avatar size="xl" src={user?.avatar} />
          <Text color="gray.200" size="xl" as="b" align="center">
            {user?.tag}{' '}
          </Text>
          {user?.helpers.rep >= 300 ? (
            <Tooltip
              label="O usuário demonstra ser confiável"
              placement="auto"
              hasArrow
            >
              <ShieldPlus color="green" size={32} />
            </Tooltip>
          ) : (
            <Text />
          )}
        </VStack>
        <Heading color="gray.700" textAlign="center" as="h3" size="lg">
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
              <Text color={theme.color}>
                {user?.helpers.animecoins.toLocaleString('pt-BR')} animecoins
              </Text>
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
              <Text color={theme.color}>{user?.helpers.rep}</Text>
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
            <Text color={theme.color}>{user?.helpers.biografia}</Text>
          </Box>
        </VStack>
      </Box>
    </VStack>
  );
}
