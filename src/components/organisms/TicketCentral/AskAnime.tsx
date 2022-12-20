import {
  Flex,
  Text,
  Heading,
  Button,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { Television, PaperPlaneTilt } from 'phosphor-react';

export function AskAnime(): JSX.Element {
  const theme = {
    cardBackground: useColorModeValue('gray.200', 'gray.700'),
  };
  return (
    <Flex
      flexDir="column"
      gap={6}
      w="100%"
      bg={theme.cardBackground}
      p={5}
      borderRadius={12}
    >
      <Icon as={Television} color="yellow.400" w={120} h={120} m="auto" />
      <Heading textAlign="center">Solicitar Animes</Heading>
      <Text textAlign="center">
        Solicite animes que não estão disponíveis nos websites das franquias
        Animes Online Games.
      </Text>
      <Button leftIcon={<PaperPlaneTilt />}>Abrir Ticket</Button>
    </Flex>
  );
}
