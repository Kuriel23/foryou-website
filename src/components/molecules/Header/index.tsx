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
  MenuDivider,
} from '@chakra-ui/react';
import { signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  CaretDown,
  CaretUp,
  SignOut,
  UserCircle,
  Ticket,
} from 'phosphor-react';
import { useCallback } from 'react';

import { Navigation } from './Navigation';

import { useSession } from '@hooks/useSession';

export function Header(): JSX.Element {
  const router = useRouter();

  const session = useSession();

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
            bgColor="orange.200"
          />

          <Heading fontWeight={600} fontSize="3xl">
            For You
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
                    bgColor="orange.200"
                  />

                  <Text fontWeight={600}>{session.data?.user?.name}</Text>

                  {isOpen ? <CaretUp size={22} /> : <CaretDown size={22} />}
                </Flex>
              </MenuButton>

              <MenuList maxW="160px">
                <MenuItem onClick={() => goToProfile()} gap="0.3rem">
                  <Icon as={UserCircle} w="25px" h="25px" />

                  <Text as="span" fontWeight="300">
                    Meu Perfil
                  </Text>
                </MenuItem>

                <MenuItem onClick={() => router.push('/ticket')} gap="0.3rem">
                  <Icon as={Ticket} w="25px" h="25px" />

                  <Text as="span" fontWeight="300">
                    Criar Ticket
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
