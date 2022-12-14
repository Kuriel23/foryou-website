import { prisma } from './getPrisma';

import { getUserInfo } from '@lib/discord/getUserInfo';
import type { UserInfoToObject } from '@lib/discord/structures/UserInfo';

type UsersLevelList = (UserInfoToObject & {
  helpers: {
    level: number;
    xp: number;
  };
})[];

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

      return Object.assign(userInfo as UserInfoToObject, {
        helpers: {
          level: userData.level,
          xp: userData.xp,
        },
      });
    }),
  );

  return usersLevelList;
}
