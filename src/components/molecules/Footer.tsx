import {
  Box,
  IconButton,
  Flex,
  Link,
  Text,
  useColorModeValue,
  useColorMode,
  Icon,
} from '@chakra-ui/react';
import { Moon, Sun } from 'phosphor-react';

export function Footer(): JSX.Element {
  const { colorMode, toggleColorMode } = useColorMode();

  const theme = {
    containerBackground: useColorModeValue('gray.200', 'gray.700'),
  };

  return (
    <Box bgColor={theme.containerBackground}>
      <Flex
        w="100%"
        p={10}
        gap={8}
        maxW={1240}
        px={10}
        m="0 auto"
        flexDir="column"
      >
        <Flex w="100%" align="center" justify="space-between">
          <Text as="p">
            Site desenvolvido com muito ❤️ por{' '}
            <Link href="https://izak.tech/" fontWeight="bold" isExternal>
              Izak
            </Link>{' '}
            e{' '}
            <Link href="https://www.kurieldev.tk/" fontWeight="bold" isExternal>
              Kuriel
            </Link>
          </Text>

          <Flex>
            <Flex flexDir="column" textAlign="end">
              <Text as="p">
                Copyright © 2020 - {new Date().getFullYear()} Animes Online
                Games.
              </Text>

              <Text as="p" fontSize="sm" fontWeight="300" color="gray.600">
                Todos os direitos reservados.
              </Text>
            </Flex>

            <IconButton
              ml={6}
              colorScheme="orange"
              aria-label="Search database"
              size="lg"
              icon={
                <Icon
                  as={colorMode === 'dark' ? Moon : Sun}
                  w="24px"
                  h="24px"
                />
              }
              onClick={toggleColorMode}
            />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
