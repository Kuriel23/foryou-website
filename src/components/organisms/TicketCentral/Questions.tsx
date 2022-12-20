import {
  Flex,
  Text,
  Heading,
  Button,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { CircleWavyQuestion, PaperPlaneTilt } from 'phosphor-react';

export function Questions(): JSX.Element {
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
      <Icon as={CircleWavyQuestion} color="blue.300" w={120} h={120} m="auto" />
      <Heading textAlign="center">Dúvidas</Heading>
      <Text textAlign="center">
        Fique á vontade e pergunte tudo o que você quiser dentro de nosso
        website, e mais tarde nossa equipe responderá.
      </Text>
      <Button leftIcon={<PaperPlaneTilt />}>Abrir Ticket</Button>
    </Flex>
  );
}
