import { prisma } from './getPrisma';

import { getUserInfo } from '@lib/discord/getUserInfo';

type GetUsersCoinsList = {
  id: string;
  username: string;
  discriminator: string;
  tag: string;
  avatar: string;
  helpers: {
    animecoins: number;
  };
}[];

export async function getUsersCoinsList(): Promise<GetUsersCoinsList> {
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

      return {
        id: userInfo.id,
        username: userInfo.username,
        discriminator: userInfo.discriminator,
        tag: userInfo.tag,
        avatar: userInfo.displayAvatar,
        helpers: {
          animecoins: userData.animecoins as number,
        },
      };
    }),
  );

  return usersRepList;
}
