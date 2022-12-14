import type { users } from '@prisma/client';

import { getUserInfo } from '@lib/discord/getUserInfo';
import type { UserInfoToObject } from '@lib/discord/structures/UserInfo';

export type UserDataToObject = Omit<users, 'casado'> & {
  casado: UserInfoToObject | null;
};

export class UserData {
  constructor(public user: users) {}

  public async getMarried(): Promise<UserInfoToObject | null> {
    if (
      this.user.casado.find(v => v === 'Não casado.') ||
      !this.user.casado.length
    ) {
      return null;
    }

    const [marriedId] = this.user.casado.map(cId =>
      cId.replace(/[<@!?>]/g, ''),
    );

    const userInfo = await getUserInfo(marriedId);

    return userInfo;
  }

  public async toObject(): Promise<UserDataToObject> {
    const casado = await this.getMarried();

    return Object.assign(this.user, { casado });
  }
}

/* eslint no-useless-constructor: off */
