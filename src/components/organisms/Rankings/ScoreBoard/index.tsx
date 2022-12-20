import { Flex } from '@chakra-ui/react';

import { FilterButton } from './FilterButton';
import { UsersList } from './UsersList';

export function ScoreBoard(): JSX.Element {
  return (
    <Flex w="100%" maxW={1240} px={28} py={12} m="0 auto">
      <UsersList />
      <FilterButton />
    </Flex>
  );
}
