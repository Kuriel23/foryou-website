import type { NextApiRequest, NextApiResponse } from 'next';

import { getUserInfo } from '@lib/discord/getUserInfo';
import { getUserData } from '@lib/prisma/getUserData';

export default async function profile(
  request: NextApiRequest,
  response: NextApiResponse,
): Promise<void> {
  if (request.method !== 'GET') {
    response.status(400).end();

    return;
  }

  const { id } = request.query as Record<'id', string>;

  const user = await getUserInfo(id);

  if (!user) {
    response.status(400).json({ message: 'User not found.' });

    return;
  }

  const helpers = await getUserData(id);

  if (!helpers) {
    response.status(400).json({ message: 'User not found.' });

    return;
  }

  response.json(Object.assign(user, { helpers }));
}
