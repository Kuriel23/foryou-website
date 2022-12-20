import {
  HStack,
  Text,
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import Link from 'next/link';
import { List } from 'phosphor-react';

const navigation = [
  {
    name: 'blog',
    title: 'Blog',
    href: '/blog',
  },
  {
    name: 'about',
    title: 'Sobre',
    href: '/about',
  },
  {
    name: 'rank',
    title: 'Rankings',
    href: '/rankings',
  },
  {
    name: 'contributors',
    title: 'Contribuidores',
    href: '/contributors',
  },
];

export function Navigation(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <HStack spacing={6} display={{ base: 'none', xl: 'inherit' }}>
        {navigation.map(item => (
          <Link href={item.href} key={item.name}>
            <Text transition="0.2s all" _hover={{ color: 'green.200' }}>
              {item.title}
            </Text>
          </Link>
        ))}
      </HStack>
      <Button onClick={onOpen} display={{ base: 'inherit', xl: 'none' }}>
        <List size={32} weight="thin" />
      </Button>
      <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            {navigation.map(item => (
              <Link href={item.href} key={item.name}>
                <Text
                  transition="0.2s all"
                  my="15px"
                  textAlign="center"
                  _hover={{ color: 'green.200' }}
                >
                  {item.title}
                </Text>
              </Link>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
