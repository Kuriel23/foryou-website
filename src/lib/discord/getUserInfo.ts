import { Routes, type APIUser } from 'discord-api-types/v10';

import { getRest } from './getRest';
import { User } from './structures/User';

export async function getUserInfo(id: string): Promise<User> {
  const rest = getRest();

  try {
    const data = <APIUser>await rest.get(Routes.user(id));

    const user = new User(data);

    return user;
  } catch (error) {
    throw new Error('User not found.');
  }
}
