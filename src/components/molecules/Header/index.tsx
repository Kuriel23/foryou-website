import {
  Box,
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
  MenuDivider,
} from '@chakra-ui/react';
import { signIn, signOut, useSession } from 'next-auth/react';
import {
  CaretDown,
  CaretUp,
  SignOut,
  User,
  UserCircle,
  Gear,
} from 'phosphor-react';

import { Navigation } from './Navigation';

export function Header(): JSX.Element {
  const { data: session } = useSession();

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
      <Flex align="center" gap={3}>
        <Box w={8} h={8} borderRadius="full" bgColor="green.200" />

        <Heading fontWeight={600} fontSize="3xl">
          aog
        </Heading>
      </Flex>

      <Navigation />

      {session ? (
        <Menu isLazy placement="bottom-end">
          {({ isOpen }) => (
            <>
              <MenuButton as={Flex} isActive={isOpen}>
                <Flex align="center" gap={2}>
                  <Avatar w={10} h={10} bgColor="green.200" icon={<User />} />

                  <Text fontWeight={600}>{session.user?.name}</Text>

                  {isOpen ? <CaretUp size={22} /> : <CaretDown size={22} />}
                </Flex>
              </MenuButton>

              <MenuList maxW="160px">
                <MenuItem gap="0.3rem">
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