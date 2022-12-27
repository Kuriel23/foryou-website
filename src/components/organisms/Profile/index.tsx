import { Flex } from '@chakra-ui/react';

import { Badges } from './Badges';
import { Banner } from './Banner';
import { Biography } from './Biography';
import { Level } from './Level';
import { Married } from './Married';
import { Statistics } from './Statistics';
import { UserInfo } from './UserInfo';

export function Profile(): JSX.Element {
  return (
    <Flex flexDir="column">
      <Banner />

      <Flex w="100%" maxW={1240} px={10} py={10} m="0 auto">
        <Flex w="100%" gap={12}>
          <Flex flexDir="column" gap={8}>
            <UserInfo />
            <Level />
            <Badges />
          </Flex>

          <Flex w="750px" position="relative" flexDir="column" gap={8}>
            <Biography />
            <Statistics />
            <Married />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
