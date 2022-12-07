import { getApi } from './getApi';

export type RankingType = 'coins' | 'level' | 'rep';

export type GetUsersRanking<H = Record<string, any>> = {
  id: string;
  username: string;
  discriminator: string;
  tag: string;
  avatar: string;
  helpers: H;
}[];

export async function getUsersRanking(
  type: RankingType,
): Promise<GetUsersRanking> {
  const { data } = await getApi().get<GetUsersRanking>('ranking', {
    params: { type },
  });

  return data;
}
