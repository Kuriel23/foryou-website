import { HStack, Text } from '@chakra-ui/react';
import Link from 'next/link';

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
  return (
    <HStack spacing={6}>
      {navigation.map(item => (
        <Link href={item.href} key={item.name}>
          <Text transition="0.2s all" _hover={{ color: 'orange.200' }}>
            {item.title}
          </Text>
        </Link>
      ))}
    </HStack>
  );
}
