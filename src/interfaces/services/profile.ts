import type { IUserDatabase } from '@lib/entities/UserDatabase';
import type { IUserInfo } from '@lib/entities/UserInfo';

export interface ProfileData {
  user: IUserInfo;
  database: IUserDatabase & { level: number; xp: number };
}
