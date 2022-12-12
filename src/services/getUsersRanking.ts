import { getApi } from './getApi';

export type RankingType = 'coins' | 'level' | 'rep';

export interface UserRankingData {
  id: string;
  username: string;
  discriminator: string;
  tag: string;
  avatar: string;
  helpers: Record<string, any>;
}

export async function getUsersRanking(
  type: RankingType,
): Promise<UserRankingData[]> {
  const { data } = await getApi().get<UserRankingData[]>('ranking', {
    params: { type },
  });

  return data;
}
