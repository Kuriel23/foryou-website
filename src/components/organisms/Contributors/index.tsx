import { Avatar, AvatarBadge, Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

import type { MemberStatus, ContributorData } from '@interfaces/services';

interface ContributorsProps {
  contributors: ContributorData[];
}

function getStatus(status?: MemberStatus): string {
  switch (status) {
    case 'dnd': {
      return 'red.400';
    }

    case 'online': {
      return 'green.400';
    }

    case 'idle': {
      return 'yellow.400';
    }

    case 'offline':
    case null: {
      return 'gray.400';
    }

    default: {
      return 'gray.400';
    }
  }
}

export function Contributors({ contributors }: ContributorsProps): JSX.Element {
  return (
    <Flex w="100%" maxW={1240} py={12} m="0 auto">
      <Flex w="100%" align="center" flexDir="column" gap={12}>
        {contributors.map(role => (
          <Flex key={role.id} w="100%" align="center" flexDir="column" gap={8}>
            <Heading as="h4" size="lg" color={role.hexColor}>
              {role.name}
            </Heading>

            <Flex align="center" gap={8}>
              {role.members.map(user => (
                <Link key={user.id} href={`/profile/${user.id}`}>
                  <Flex flexDir="column" align="center" gap={4}>
                    <Avatar src={user.avatar} size="2xl" position="relative">
                      <AvatarBadge
                        position="absolute"
                        right="5px"
                        boxSize="40px"
                        bg={getStatus(user.status)}
                      />
                    </Avatar>

                    <Flex>
                      <Text as="p" fontSize="lg" fontWeight="600">
                        {user.username}
                      </Text>
                      <Text as="span" fontSize="lg" color="gray.600">
                        #{user.discriminator}
                      </Text>
                    </Flex>
                  </Flex>
                </Link>
              ))}
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
