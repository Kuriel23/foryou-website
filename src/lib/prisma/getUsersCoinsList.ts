import { prisma } from './getPrisma';

import { getUserInfo } from '@lib/discord/getUserInfo';

type GetUsersCoinsList = {
  id: string;
  username: string;
  discriminator: string;
  avatar: string;
  helpers: {
    id: string;
    animecoins: number;
  };
}[];

export async function getUsersCoinsList(): Promise<GetUsersCoinsList> {
  const usersData = await prisma.users.findMany({
    take: 10,
    select: {
      id: true,
      animecoins: true,
    },
  });

  usersData.sort((a, b) => Number(b.animecoins) - Number(a.animecoins));

  const usersRepList = await Promise.all(
    usersData.map(async userData => {
      const userInfo = await getUserInfo(userData.id);

      return {
        id: userInfo.id,
        username: userInfo.username,
        discriminator: userInfo.discriminator,
        avatar: userInfo.displayAvatar,
        helpers: {
          id: userData.id,
          animecoins: userData.animecoins as number,
        },
      };
    }),
  );

  return usersRepList;
}
