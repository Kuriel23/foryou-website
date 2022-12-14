import { prisma } from './getPrisma';

import { getUserInfo } from '@lib/discord/getUserInfo';
import type { UserInfoToObject } from '@lib/discord/structures/UserInfo';

type UsersCoinsList = (UserInfoToObject & {
  helpers: {
    animecoins: number;
  };
})[];

export async function getUsersCoinsList(): Promise<UsersCoinsList> {
  const usersData = await prisma.users.findMany({
    select: {
      id: true,
      animecoins: true,
    },
    orderBy: {
      animecoins: 'desc',
    },
    take: 10,
  });

  const usersRepList = await Promise.all(
    usersData.map(async userData => {
      const userInfo = await getUserInfo(userData.id);

      return Object.assign(userInfo as UserInfoToObject, {
        helpers: {
          animecoins: userData.animecoins as number,
        },
      });
    }),
  );

  return usersRepList;
}
