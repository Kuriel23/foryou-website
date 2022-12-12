import { getApi } from './getApi';

export type RankingType = 'coins' | 'level' | 'rep';

export interface User {
  id: string;
  username: string;
  discriminator: string;
  tag: string;
  avatar: string;
  helpers: Record<string, any>;
}

export type UsersRanking = User[];

export async function getUsersRanking(
  type: RankingType,
): Promise<UsersRanking> {
  const { data } = await getApi().get<UsersRanking>('ranking', {
    params: { type },
  });

  return data;
}
