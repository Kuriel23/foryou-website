import { getApi } from './getApi';

export type RankingType = 'coins' | 'level' | 'rep';

export type UsersRanking<H = Record<string, any>> = {
  id: string;
  username: string;
  discriminator: string;
  tag: string;
  avatar: string;
  helpers: H;
}[];

export async function getUsersRanking(
  type: RankingType,
): Promise<UsersRanking> {
  const { data } = await getApi().get<UsersRanking>('ranking', {
    params: { type },
  });

  return data;
}
