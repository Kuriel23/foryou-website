import { prisma } from './getPrisma';

import { getUserInfo } from '@lib/discord/getUserInfo';

type GetUsersLevelList = {
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

export async function getUsersLevelList(): Promise<GetUsersLevelList> {
  const usersData = await prisma.levels.findMany({
    take: 10,
    select: {
      id: true,
      level: true,
      userID: true,
      xp: true,
    },
  });

  usersData.sort((a, b) => Number(b.level) - Number(a.level));

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
