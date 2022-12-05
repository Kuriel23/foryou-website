import { HStack, Text } from '@chakra-ui/react';

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
        <Text key={item.name}>{item.title}</Text>
      ))}
    </HStack>
  );
}
