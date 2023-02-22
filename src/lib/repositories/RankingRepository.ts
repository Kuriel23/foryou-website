import { UserRepository } from './UserRepository';

import type { RankingType } from '@interfaces/services';
import { prisma } from '@lib/prisma';

const RANKING_LIMIT_OF_USERS = 15;

export class RankingRepository {
  async findUsersByCoins(): Promise<any> {
    const usersData = await prisma.users.findMany({
      select: {
        id: true,
        coins: true,
      },
      orderBy: {
        coins: 'desc',
      },
      take: RANKING_LIMIT_OF_USERS,
    });

    const usersResponse = await this.parseList(usersData, 'coins');

    return usersResponse;
  }

  async findUsersByLevels(): Promise<any> {
    const usersData = await prisma.levels.findMany({
      select: {
        id: true,
        level: true,
        userID: true,
        xp: true,
      },
      orderBy: {
        level: 'desc',
      },
      take: RANKING_LIMIT_OF_USERS,
    });

    const usersResponse = await this.parseList(usersData, 'level');

    return usersResponse;
  }

  async findUsersByReputations(): Promise<any> {
    const usersData = await prisma.users.findMany({
      select: {
        id: true,
        rep: true,
      },
      orderBy: {
        rep: 'desc',
      },
      take: RANKING_LIMIT_OF_USERS,
    });

    const usersResponse = await this.parseList(usersData, 'rep');

    return usersResponse;
  }

  async parseList(users: any, type: RankingType): Promise<any> {
    const usersRepList = await Promise.all(
      users.map(async (database: any) => ({
        user: await new UserRepository().findInfoById(
          type === 'level' ? database.userID : database.id,
        ),
        database,
      })),
    );

    return usersRepList;
  }
}
