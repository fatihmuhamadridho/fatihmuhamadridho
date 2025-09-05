// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { BASE_RESPONSE_CONTENT_TYPE } from '@/configs/base.config';
import { UserBEController } from '@/core/domains/controllers/user.be.controller';
import { FindOneProfileQueryParams } from '@/core/domains/types/user.type';
import type { NextApiRequest, NextApiResponse } from 'next';

const userBEController = new UserBEController();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const query = req.query as FindOneProfileQueryParams;
    const response = await userBEController.findOneProfile({ u: query?.u });
    res
      .status(200)
      .setHeader(...BASE_RESPONSE_CONTENT_TYPE)
      .send(response);
  } catch (error: any) {
    res.status(404).json(error);
  }
}
