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
    usersData.map(
      async ({
        userID,
        xp,
        level,
      }: {
        userID: string;
        xp: number;
        level: number;
      }) => {
        const userInfo = await getUserInfo(userID);

        return {
          id: userInfo.id,
          username: userInfo.username,
          discriminator: userInfo.discriminator,
          tag: userInfo.tag,
          avatar: userInfo.displayAvatar,
          helpers: {
            level,
            xp,
          },
        };
      },
    ),
  );

  return usersLevelList;
}
