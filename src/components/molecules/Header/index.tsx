import {
  Image,
  Button,
  Flex,
  Heading,
  Menu,
  Text,
  Icon,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  Switch,
  MenuDivider,
  useColorMode,
} from '@chakra-ui/react';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  CaretDown,
  CaretUp,
  SignOut,
  UserCircle,
  Gear,
  Moon,
  Sun,
} from 'phosphor-react';

import { Navigation } from './Navigation';

export function Header(): JSX.Element {
  const router = useRouter();

  const { data: session } = useSession();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      w="100%"
      h={20}
      maxW={1240}
      px={10}
      m="0 auto"
      align="center"
      justify="space-between"
    >
      <Link href="/">
        <Flex align="center" gap={3}>
          <Image
            src="/logo.png"
            w={8}
            h={8}
            borderRadius="full"
            bgColor="green.200"
          />

          <Heading fontWeight={600} fontSize="3xl">
            AOG
          </Heading>
        </Flex>
      </Link>

      <Navigation />

      {session ? (
        <Menu isLazy placement="bottom-end">
          {({ isOpen }) => (
            <>
              <MenuButton as={Flex} isActive={isOpen}>
                <Flex align="center" gap={2}>
                  <Avatar
                    src={session.user?.image?.toString()}
                    w={10}
                    h={10}
                    bgColor="green.200"
                  />

                  <Text fontWeight={600}>{session.user?.name}</Text>

                  {isOpen ? <CaretUp size={22} /> : <CaretDown size={22} />}
                </Flex>
              </MenuButton>

              <MenuList maxW="160px">
                <MenuItem
                  onClick={() => {
                    router.push('/profile/'+session.user?.id);
                  }}
                  gap="0.3rem"
                >
                  <Icon as={UserCircle} w="25px" h="25px" />

                  <Text as="span" fontWeight="300">
                    Meu Perfil
                  </Text>
                </MenuItem>

                <MenuItem gap="0.3rem">
                  <Icon as={Gear} w="25px" h="25px" />

                  <Text as="span" fontWeight="300">
                    Configurações
                  </Text>
                </MenuItem>

                <MenuDivider />

                <MenuItem
                  alignItems="center"
                  justifyContent="space-between"
                  _selected={{}}
                  _focus={{}}
                  _hover={{}}
                  _active={{}}
                  onClick={toggleColorMode}
                >
                  <Flex gap="0.3rem">
                    <Icon
                      as={colorMode === 'dark' ? Moon : Sun}
                      w="25px"
                      h="25px"
                    />

                    <Text as="span" fontWeight="300">
                      {colorMode === 'dark' ? 'Light Mode' : 'Dark Mode'}
                    </Text>
                  </Flex>

                  <Switch
                    defaultChecked={colorMode === 'dark'}
                    onFocus={() => toggleColorMode()}
                  />
                </MenuItem>

                <MenuDivider />

                <MenuItem gap="0.3rem" onClick={() => signOut()}>
                  <Icon as={SignOut} w="25px" h="25px" />

                  <Text as="span" fontWeight="300">
                    Sair
                  </Text>
                </MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
      ) : (
        <Button px={10} borderRadius={12} onClick={() => signIn('discord')}>
          Entrar
        </Button>
      )}
    </Flex>
  );
}
