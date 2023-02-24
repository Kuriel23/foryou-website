import type { NextApiRequest, NextApiResponse } from 'next';
import NextCors from 'nextjs-cors';

import { UserRepository } from '@lib/repositories/UserRepository';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
): Promise<void> {
  await NextCors(request, response, {
    methods: ['GET', 'PATCH'],
    origin: '*',
    optionsSuccessStatus: 200,
  });

  const { id: userId } = request.query as Record<'id', string>;

  const userRepository = new UserRepository();

  if (request.method === 'PATCH') {
    const database = await userRepository.findDatabaseById(userId);

    if (!database) {
      response.status(400).end();

      return;
    }

    await userRepository.saveDatabase(userId, request.body);

    response.status(200).end();

    return;
  }

  if (request.method === 'GET') {
    const user = await userRepository.findInfoById(userId);

    if (!user) {
      response.status(400).end();

      return;
    }

    const database = await userRepository.findDatabaseById(userId);

    if (!database) {
      response.status(400).end();

      return;
    }

    response.json({
      user,
      database,
    });

    return;
  }

  response.status(405).end();
}
