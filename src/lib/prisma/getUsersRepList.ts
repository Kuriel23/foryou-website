import { prisma } from './getPrisma';

import { getUserInfo } from '@lib/discord/getUserInfo';
import type { UserInfoToObject } from '@lib/discord/structures/UserInfo';

type UsersRepList = (UserInfoToObject & {
  helpers: {
    rep: number;
  };
})[];

export async function getUsersRepList(): Promise<UsersRepList> {
  const usersData = await prisma.users.findMany({
    select: {
      id: true,
      rep: true,
    },
    orderBy: {
      rep: 'desc',
    },
    take: 10,
  });

  const usersRepList = await Promise.all(
    usersData.map(async userData => {
      const userInfo = await getUserInfo(userData.id);

      return Object.assign(userInfo as UserInfoToObject, {
        helpers: {
          rep: userData.rep as number,
        },
      });
    }),
  );

  return usersRepList;
}
