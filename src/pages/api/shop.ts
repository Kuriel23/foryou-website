import type { NextApiRequest, NextApiResponse } from 'next';
import NextCors from 'nextjs-cors';

import { Shop } from '@data/shop';
import { UserRepository } from '@lib/repositories/UserRepository';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
): Promise<void> {
  await NextCors(request, response, {
    methods: ['POST'],
    origin: '*',
    optionsSuccessStatus: 200,
  });

  const userRepository = new UserRepository();

  if (request.method === 'POST') {
    const { userId, productType, productCode } = request.body as Record<
      'userId' | 'productType' | 'productCode',
      string
    >;

    const userDatabase = await userRepository.findDatabaseById(userId);

    if (!userDatabase) {
      response.status(400).json({ error: 'User not found' });

      return;
    }

    if (productType === 'banner') {
      const banner = Shop.getBannerByCode(productCode);

      if (!banner) {
        response.status(400).json({ error: 'Banner not found' });

        return;
      }

      const [_bannerData, bannerState] = Object.entries(userDatabase.loja).find(
        ([bannerCode]) => bannerCode === banner.code,
      ) as [string, boolean];

      if (bannerState) {
        response.status(400).json({ error: 'Banner already bought' });

        return;
      }

      await userRepository.saveDatabase(userId, {
        loja: {
          update: {
            [banner.code]: true,
          },
        },
      });

      response.status(200).json({ success: true });

      return;
    }

    response.status(400).json({ error: 'Product type not found' });

    return;
  }

  response.status(405).end();
}
