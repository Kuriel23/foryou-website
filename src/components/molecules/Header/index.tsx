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
import { signIn, signOut } from 'next-auth/react';
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
import { useCallback } from 'react';

import { Navigation } from './Navigation';

import { useSession } from '@hooks/useSession';

export function Header(): JSX.Element {
  const router = useRouter();

<<<<<<< HEAD
  const { data: session } = useSession();
=======
  const session = useSession();

>>>>>>> 2239464 (feat: create user page)
  const { colorMode, toggleColorMode } = useColorMode();

  const goToProfile = useCallback(() => {
    router.push(`/profile/${session.data.user?.id}`);
  }, [router, session?.data?.user?.id]);

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

      {session.status === 'authenticated' ? (
        <Menu isLazy placement="bottom-end">
          {({ isOpen }) => (
            <>
              <MenuButton as={Flex} isActive={isOpen}>
                <Flex align="center" gap={2}>
                  <Avatar
                    src={session.data?.user?.image?.toString()}
                    w={10}
                    h={10}
                    bgColor="green.200"
                  />

                  <Text fontWeight={600}>{session.data?.user?.name}</Text>

                  {isOpen ? <CaretUp size={22} /> : <CaretDown size={22} />}
                </Flex>
              </MenuButton>

              <MenuList maxW="160px">
<<<<<<< HEAD
                <MenuItem
                  onClick={() => {
                    router.push('/profile/'+session.user?.id);
                  }}
                  gap="0.3rem"
                >
=======
                <MenuItem onClick={() => goToProfile()} gap="0.3rem">
>>>>>>> 2239464 (feat: create user page)
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
