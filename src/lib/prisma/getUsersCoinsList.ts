import { Prisma } from '@prisma/client';

import { prisma } from './getPrisma';

import { getUserInfo } from '@lib/discord/getUserInfo';

type UsersCoinsList = {
  id: string;
  username: string;
  discriminator: string;
  tag: string;
  avatar: string;
  helpers: {
    animecoins: number;
  };
}[];

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
    usersData.map(
      async ({
        id,
        animecoins,
      }: {
        id: string;
        animecoins: Prisma.JsonValue;
      }) => {
        const userInfo = await getUserInfo(id);

        return {
          id: userInfo.id,
          username: userInfo.username,
          discriminator: userInfo.discriminator,
          tag: userInfo.tag,
          avatar: userInfo.displayAvatar,
          helpers: {
            animecoins: animecoins as number,
          },
        };
      },
    ),
  );

  return usersRepList;
}
