import type { NextApiRequest, NextApiResponse } from 'next';
import NextCors from 'nextjs-cors';

import { RankingRepository } from '@lib/repositories/RankingRepository';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
): Promise<void> {
  await NextCors(request, response, {
    methods: ['GET'],
    origin: '*',
    optionsSuccessStatus: 200,
  });

  let { type = 'coins' } = request.query as Record<
    'type',
    'coins' | 'level' | 'rep'
  >;

  const rankingRepository = new RankingRepository();

  if (!['coins', 'level', 'rep'].includes(type)) {
    type = 'coins';
  }

  switch (type) {
    case 'coins': {
      const usersCoinsList = await rankingRepository.findUsersByCoins();

      response.json(usersCoinsList);

      break;
    }

    case 'level': {
      const usersLevelList = await rankingRepository.findUsersByLevels();

      response.json(usersLevelList);

      break;
    }

    case 'rep': {
      const usersRepList = await rankingRepository.findUsersByReputations();

      response.json(usersRepList);

      break;
    }

    default: {
      type = 'coins';

      break;
    }
  }
}
