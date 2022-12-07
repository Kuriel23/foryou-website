import { Box, Flex, Link, Text, useColorModeValue } from '@chakra-ui/react';

export function Footer(): JSX.Element {
  const theme = {
    containerBackground: useColorModeValue('gray.200', 'gray.700'),
  };

  return (
    <Box bgColor={theme.containerBackground}>
      <Flex
        w="100%"
        h={20}
        maxW={1240}
        px={10}
        m="0 auto"
        align="center"
        justify="space-between"
      >
        <Text as="p">
          Site desenvolvidor com muito ❤️ por{' '}
          <Link href="https://izak.tech/" fontWeight="bold" isExternal>
            Izak
          </Link>{' '}
          e{' '}
          <Link href="https://www.kurieldev.tk/" fontWeight="bold" isExternal>
            Kuriel
          </Link>
        </Text>

        <Text as="p">
          Copyright © 2020 - {new Date().getFullYear()} Panda. Todos os direitos
          reservados.
        </Text>
      </Flex>
    </Box>
  );
}
