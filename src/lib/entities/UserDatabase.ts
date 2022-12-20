import type { users } from '@prisma/client';

import { UserRepository } from '../repositories/UserRepository';
import { IUserInfo } from './UserInfo';

export type IUserDatabase = Omit<users, 'casado'> & {
  casado: IUserInfo | null;
};

export class UserDatabase {
  constructor(public user: users & { level: number; xp: number }) {}

  async getMarried(): Promise<IUserInfo | null> {
    if (
      this.user.casado.find(v => v === 'Solteiro' || v === 'Não casado.') ||
      !this.user.casado.length
    ) {
      return null;
    }

    const [marriedId] = this.user.casado.map(cId =>
      cId.replace(/[<@!?>]/g, ''),
    );

    const userInfo = await new UserRepository().findInfoById(marriedId);

    return userInfo;
  }

  async toObject(): Promise<IUserDatabase> {
    const casado = await this.getMarried();

    return Object.assign(this.user, { casado });
  }
}

/* eslint no-useless-constructor: off, import/no-cycle: off */
