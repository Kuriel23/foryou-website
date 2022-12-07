import { HStack, Link } from '@chakra-ui/react';

const navigation = [
  {
    name: 'blog',
    title: 'Blog',
    tag: '#blog',
  },
  {
    name: 'about',
    title: 'Sobre',
    tag: '#about',
  },
  {
    name: 'rank',
    title: 'Rank',
    href: '/ranking',
  },
];

export function Navigation(): JSX.Element {
  return (
    <HStack spacing={6}>
      {navigation.map(item => (
        <Link
          href={item.href || '/' + item.tag}
          key={item.name}
          _hover={{ color: 'green.200' }}
        >
          {item.title}
        </Link>
      ))}
    </HStack>
  );
}
