import { Flex } from '@chakra-ui/react';

import { ShopItens } from './ShopItens';
import { Sort } from './Sort';

export function Shop(): JSX.Element {
  return (
    <Flex flexDir="column">
      <Flex w="100%" maxW={1240} px={10} py={5} m="0 auto">
        <Sort />
      </Flex>
      <Flex w="100%" maxW={1240} px={10} pb={10} m="0 auto">
        <ShopItens />
      </Flex>
    </Flex>
  );
}
