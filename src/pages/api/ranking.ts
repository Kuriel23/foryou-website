import type { NextApiRequest, NextApiResponse } from 'next';

import { getUsersCoinsList } from '@lib/prisma/getUsersCoinsList';
import { getUsersLevelList } from '@lib/prisma/getUsersLevelList';
import { getUsersRepList } from '@lib/prisma/getUsersRepList';

export default async function ranking(
  request: NextApiRequest,
  response: NextApiResponse,
): Promise<void> {
  if (request.method !== 'GET') {
    response.status(400).end();

    return;
  }

  let { type = 'coins' } = request.query as Record<
    'type',
    'coins' | 'level' | 'rep'
  >;

  if (!['coins', 'level', 'rep'].includes(type)) {
    type = 'coins';
  }

  switch (type) {
    case 'coins': {
      const usersCoinsList = await getUsersCoinsList();

      response.json(usersCoinsList);

      break;
    }

    case 'level': {
      const usersLevelList = await getUsersLevelList();

      response.json(usersLevelList);

      break;
    }

    case 'rep': {
      const usersRepList = await getUsersRepList();

      response.json(usersRepList);

      break;
    }

    default: {
      type = 'coins';

      break;
    }
  }
}
