/* eslint-disable react/jsx-no-useless-fragment */

import 'react-circular-progressbar/dist/styles.css';

import {
  Flex,
  Avatar,
  Text,
  Divider,
  Box,
  Img,
  useTheme,
  useColorMode,
  useColorModeValue,
  SkeletonCircle,
  Skeleton,
} from '@chakra-ui/react';
import { useMemo } from 'react';
import {
  CircularProgressbarWithChildren,
  buildStyles as circularProgressbarBuildStyles,
} from 'react-circular-progressbar';

import { useProfile } from '@hooks/useProfile';

const ALLOWD_FLAGS = [
  { flagName: 'ActiveDeveloper', fileName: 'active_developer.svg' },
  { flagName: 'HypeSquadOnlineHouse1', fileName: 'hypesquad_bravery.svg' },
  { flagName: 'HypeSquadOnlineHouse2', fileName: 'hypesquad_brilliance.svg' },
  { flagName: 'HypeSquadOnlineHouse3', fileName: 'hypesquad_balance.svg' },
];

export function UserInfo(): JSX.Element {
  const { profile, isLoading } = useProfile();

  const { colors } = useTheme();
  const { colorMode } = useColorMode();

  const theme = {
    cardBackground: useColorModeValue('gray.200', 'gray.700'),
  };

  const currentLevel = Number(profile?.database.level);

  const levelXp = currentLevel * currentLevel * 100;

  const currentXp = Number(profile?.database.xp) - levelXp;

  const nextLevelXp = (currentLevel + 1) * (currentLevel + 1) * 100 - levelXp;
  const percentToNextLevel = currentXp / (nextLevelXp / 100);

  const userFlags = useMemo(
    () =>
      profile?.user.publicFlags?.map(name => {
        const flag = ALLOWD_FLAGS.find(flg => flg.flagName === name);

        if (!flag) return <></>;

        return (
          <Img
            key={name}
            src={`/images/flags/${flag.fileName}`}
            alt="blob"
            height="30px"
          />
        );
      }),
    [profile?.user.publicFlags],
  );

  return (
    <Flex
      mt="-28"
      w="350px"
      gap={4}
      flexDir="column"
      align="center"
      borderRadius={12}
      bgColor={theme.cardBackground}
    >
      <Flex flexDir="column" align="center" justify="center" pt={12} px={12}>
        {isLoading ? (
          <SkeletonCircle
            w="190px"
            h="190px"
            startColor="gray.300"
            endColor="gray.400"
          />
        ) : (
          <Box h="190px" w="190px">
            <CircularProgressbarWithChildren
              value={percentToNextLevel}
              strokeWidth={4}
              styles={circularProgressbarBuildStyles({
                rotation: 0.5,
                pathColor: profile?.database.cor || 'orange.300',
                trailColor:
                  colorMode === 'dark'
                    ? colors.gray['600']
                    : colors.gray['300'],
              })}
            >
              <Avatar src={profile?.user.avatar} h="150px" w="150px" />
            </CircularProgressbarWithChildren>
          </Box>
        )}

        <Flex mt={4} align="flex-end">
          {isLoading ? (
            <Skeleton
              h="22px"
              w="100px"
              startColor="gray.300"
              endColor="gray.400"
            />
          ) : (
            <>
              <Text fontWeight="bold" fontSize="2xl">
                {profile?.user.username}
              </Text>
              <Text lineHeight="2" color="gray.500">
                #{profile?.user.discriminator}
              </Text>
            </>
          )}
        </Flex>

        <Flex align="center" gap={0}>
          {isLoading ? (
            <Skeleton
              h="20px"
              w="50px"
              mt="8px"
              startColor="gray.300"
              endColor="gray.400"
            />
          ) : (
            userFlags
          )}
        </Flex>
      </Flex>

      <Divider
        w="100%"
        orientation="horizontal"
        borderColor={
          colorMode === 'dark' ? colors.gray['600'] : colors.gray['300']
        }
      />

      {isLoading ? (
        <Flex pt={2} pb={6}>
          <Skeleton
            h="20px"
            w="150px"
            startColor="gray.300"
            endColor="gray.400"
          />
        </Flex>
      ) : (
        <Text
          pt={2}
          pb={6}
          fontSize="sm"
          color="gray.500"
          fontWeight="bold"
          textTransform="uppercase"
        >
          Membro desde 2022
        </Text>
      )}
    </Flex>
  );
}
