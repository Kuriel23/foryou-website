import { prisma } from './getPrisma';

import { getUserInfo } from '@lib/discord/getUserInfo';

export type GetUsersRepList = {
  id: string;
  username: string;
  discriminator: string;
  tag: string;
  avatar: string;
  helpers: {
    rep: number;
  };
}[];

export async function getUsersRepList(): Promise<GetUsersRepList> {
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

      return {
        id: userInfo.id,
        username: userInfo.username,
        discriminator: userInfo.discriminator,
        tag: userInfo.tag,
        avatar: userInfo.displayAvatar,
        helpers: {
          rep: userData.rep as number,
        },
      };
    }),
  );

  return usersRepList;
}
