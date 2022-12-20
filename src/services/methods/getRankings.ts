import type { RankingType, UserRankingData } from '@interfaces/services';
import { api } from '@services/api';

export async function getRankings(
  type: RankingType,
): Promise<UserRankingData[]> {
  const { data } = await api.get<UserRankingData[]>('rankings', {
    params: { type },
  });

  return data;
}
