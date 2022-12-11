import { prisma } from './getPrisma';

import { getUserInfo } from '@lib/discord/getUserInfo';

export type UsersRepList = {
  id: string;
  username: string;
  discriminator: string;
  tag: string;
  avatar: string;
  helpers: {
    rep: number;
  };
}[];

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
    usersData.map(async ({ id, rep }: { id: string; rep: number }) => {
      const userInfo = await getUserInfo(id);

      return {
        id: userInfo.id,
        username: userInfo.username,
        discriminator: userInfo.discriminator,
        tag: userInfo.tag,
        avatar: userInfo.displayAvatar,
        helpers: {
          rep: rep as number,
        },
      };
    }),
  );

  return usersRepList;
}
