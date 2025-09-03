// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { BASE_RESPONSE_CONTENT_TYPE } from '@/configs/base.config';
import { UserController } from '@/core/domains/controllers/user.controller';
import { UserRepositoryBackendImpl } from '@/core/infrastructures/repositories/user.repository.impl';
import type { NextApiRequest, NextApiResponse } from 'next';

const userRepositoryBackendImpl = new UserRepositoryBackendImpl();
const userController = new UserController(userRepositoryBackendImpl);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await userController.getProfileWeb();
    res
      .status(200)
      .setHeader(...BASE_RESPONSE_CONTENT_TYPE)
      .send(response);
  } catch (Errro) {}
}
