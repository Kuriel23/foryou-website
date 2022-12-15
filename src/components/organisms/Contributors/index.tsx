import {
  Avatar,
  AvatarBadge,
  Divider,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';

import type { ContributorData } from '@services/getContributors';
import type { TeamData } from '@services/getTeam';

interface ContributorsProps {
  team: TeamData[];
  contributors: ContributorData[];
}

function getStatus(status: string | null): string {
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

export function Contributors({
  team,
  contributors,
}: ContributorsProps): JSX.Element {
  return (
    <Flex w="100%" maxW={1240} px={10} pb={10} m="0 auto">
      <Flex w="100%" flexDir="column" gap={6}>
        <Heading as="h3" size="md">
          Nossa Equipe
        </Heading>

        <Divider />

        <Flex w="100%" align="center" flexDir="column" gap={6}>
          {team?.map(role => (
            <Flex
              key={role.id}
              w="100%"
              align="center"
              flexDir="column"
              gap={4}
            >
              <Heading as="h4" size="md" color={role.hexColor}>
                {role.name}
              </Heading>

              <Flex align="center" gap={6}>
                {role.members.map(user => (
                  <Flex key={user.id} flexDir="column" align="center" gap={4}>
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
                ))}
              </Flex>
            </Flex>
          ))}
        </Flex>

        <Heading as="h3" size="lg">
          Contribuidores
        </Heading>

        <Divider />

        <Flex w="100%" align="center" flexDir="column" gap={6}>
          <Flex align="center" gap={6}>
            {contributors?.map(user => (
              <Flex key={user.id} flexDir="column" align="center" gap={4}>
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
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
