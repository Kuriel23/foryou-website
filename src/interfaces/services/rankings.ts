import type { IUserDatabase } from '@lib/entities/UserDatabase';
import type { IUserInfo } from '@lib/entities/UserInfo';

export type RankingType = 'coins' | 'level' | 'rep';

export interface UserRankingData {
  user: IUserInfo;
  database: IUserDatabase & { level: number; xp: number };
}
