import { prisma } from './getPrisma';

import { getUserInfo } from '@lib/discord/getUserInfo';

type UsersLevelList = {
  id: string;
  username: string;
  discriminator: string;
  tag: string;
  avatar: string;
  helpers: {
    level: number;
    xp: number;
  };
}[];

export async function getUsersLevelList(): Promise<UsersLevelList> {
  const usersData = await prisma.levels.findMany({
    select: {
      id: true,
      level: true,
      userID: true,
      xp: true,
    },
    orderBy: {
      level: 'desc',
    },
    take: 10,
  });

  const usersLevelList = await Promise.all(
    usersData.map(async userData => {
      const userInfo = await getUserInfo(userData.userID);

      return {
        id: userInfo.id,
        username: userInfo.username,
        discriminator: userInfo.discriminator,
        tag: userInfo.tag,
        avatar: userInfo.displayAvatar,
        helpers: {
          level: userData.level,
          xp: userData.xp,
        },
      };
    }),
  );

  return usersLevelList;
}
