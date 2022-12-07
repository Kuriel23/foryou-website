import type { NextApiRequest, NextApiResponse } from 'next';

import { getUsersCoinsList } from '@lib/prisma/getUsersCoinsList';
import { getUsersLevelList } from '@lib/prisma/getUsersLevelList';
import { getUsersRepList } from '@lib/prisma/getUsersRepList';

export default async function ranking(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  let { type = 'coins' } = req.query as Record<
    'type',
    'coins' | 'level' | 'rep'
  >;

  if (!['coins', 'level', 'rep'].includes(type)) {
    type = 'coins';
  }

  switch (type) {
    case 'coins': {
      const usersCoinsList = await getUsersCoinsList();

      res.json(usersCoinsList);

      break;
    }

    case 'level': {
      const usersLevelList = await getUsersLevelList();

      res.json(usersLevelList);

      break;
    }

    case 'rep': {
      const usersRepList = await getUsersRepList();

      res.json(usersRepList);

      break;
    }

    default: {
      type = 'coins';

      break;
    }
  }
}
