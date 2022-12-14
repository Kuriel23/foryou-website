import { Routes, type APIUser } from 'discord-api-types/v10';

import { getRest } from './getRest';
import { UserInfo, type UserInfoToObject } from './structures/UserInfo';

export async function getUserInfo(
  id: string,
): Promise<UserInfoToObject | null> {
  const data = <APIUser>await getRest().get(Routes.user(id));

  if (!data) {
    return null;
  }

  const userInfoStructure = new UserInfo(data);

  return userInfoStructure.toObject();
}
