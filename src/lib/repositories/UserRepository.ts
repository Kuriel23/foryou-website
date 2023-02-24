import { Prisma } from '@prisma/client';
import { Routes, type APIUser } from 'discord-api-types/v10';

import { discord } from '../discord';
import { UserDatabase, type IUserDatabase } from '../entities/UserDatabase';
import { UserInfo, type IUserInfo } from '../entities/UserInfo';
import { prisma } from '../prisma';

export class UserRepository {
  async findInfoById(userId: string): Promise<IUserInfo | null> {
    const userData = (await discord.get(Routes.user(userId))) as APIUser;

    if (!userData) {
      return null;
    }

    if (userData.bot) {
      return null;
    }

    const user = new UserInfo(userData);

    return user.toObject();
  }

  async findDatabaseById(userId: string): Promise<IUserDatabase | null> {
    const userData = await prisma.users.findFirst({
      where: {
        id: userId,
      },
    });

    if (!userData) {
      return null;
    }

    const levelData = await prisma.levels.findFirst({
      where: {
        userID: userId,
      },
      select: {
        level: true,
        xp: true,
      },
    });

    if (!levelData) {
      return null;
    }

    const userDatabase = await new UserDatabase({
      ...userData,
      level: levelData.level,
      xp: levelData.xp,
    });

    return userDatabase.toObject();
  }

  async saveDatabase(
    userId: string,
    data: Prisma.usersUpdateInput | Prisma.usersUncheckedUpdateInput,
  ): Promise<void> {
    await prisma.users.update({
      where: {
        id: userId,
      },
      data,
    });
  }
}

/* eslint import/no-cycle: off */
