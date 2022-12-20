import {
  Flex,
  Text,
  Progress,
  useColorModeValue,
  ResponsiveValue,
} from '@chakra-ui/react';

import { useProfile } from '@hooks/useProfile';

export function Level(): JSX.Element {
  const { profile } = useProfile();

  const theme = {
    cardBackground: useColorModeValue('gray.200', 'gray.700'),
  };

  const currentLevel = Number(profile?.database.level);

  const levelXp = currentLevel * currentLevel * 100;

  const currentXp = Number(profile?.database.xp) - levelXp;

  const nextLevelXp = (currentLevel + 1) * (currentLevel + 1) * 100 - levelXp;
  const percentToNextLevel = currentXp / (nextLevelXp / 100);

  return (
    <Flex
      w="350px"
      gap={2}
      p={8}
      align="center"
      borderRadius={12}
      bgColor={theme.cardBackground}
    >
      <Flex w="100%" gap={2} flexDir="column">
        <Text fontSize="sm" fontWeight="bold" textTransform="uppercase">
          Experiência
        </Text>

        <Text
          fontSize="12px"
          fontWeight="400"
          color="gray.500"
          textTransform="uppercase"
        >
          {profile?.database.xp}/{(currentLevel + 1) * (currentLevel + 1) * 100}
        </Text>

        <Progress
          value={percentToNextLevel}
          h="11px"
          borderRadius={12}
          sx={{
            '> div': {
              bgColor:
                (profile?.database.cor as ResponsiveValue<'green.200'>) ||
                'green.300',
              borderRadius: 12,
            },
          }}
        />
      </Flex>

      <Flex
        w="100px"
        h="70px"
        borderRadius="full"
        bgColor={
          (profile?.database.cor as ResponsiveValue<'green.200'>) || 'green.300'
        }
        align="center"
        justify="center"
        flexDir="column"
      >
        <Text fontSize="10px" color="white">
          Nível
        </Text>
        <Text fontSize="20px" color="white" fontWeight="bold">
          {currentLevel}
        </Text>
      </Flex>
    </Flex>
  );
}
