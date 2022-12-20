import {
  Flex,
  Text,
  Heading,
  Button,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { WarningOctagon, PaperPlaneTilt } from 'phosphor-react';

export function ReportError(): JSX.Element {
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
      <Icon as={WarningOctagon} color="red.800" w={120} h={120} m="auto" />
      <Heading textAlign="center">Reportar Erros</Heading>
      <Text textAlign="center">
        Encontrou um erro em algum episódio? Abra um ticket para que nossa
        equipe arrume!
      </Text>
      <Button leftIcon={<PaperPlaneTilt />}>Abrir Ticket</Button>
    </Flex>
  );
}
