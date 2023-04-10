import type { users } from '@prisma/client';

import { IUserInfo } from './UserInfo';
import { UserRepository } from '../repositories/UserRepository';

export type IUserDatabase = Omit<users, 'casado'> & {
  casado: IUserInfo | null;
};

export class UserDatabase {
  constructor(public user: users & { level: number; xp: number }) {}

  async getMarried(): Promise<IUserInfo | null> {
    if (this.user.casado === 'Solteiro') {
      return null;
    }

    const marriedId = this.user.casado.replace(/[<@!?>]/g, '');

    const userInfo = await new UserRepository().findInfoById(marriedId);

    return userInfo;
  }

  async toObject(): Promise<IUserDatabase> {
    const casado = await this.getMarried();

    return Object.assign(this.user, { casado });
  }
}

/* eslint no-useless-constructor: off, import/no-cycle: off */
