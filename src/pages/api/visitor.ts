import { BASE_RESPONSE_CONTENT_TYPE } from '@/configs/base.config';
import { VisitorBEController } from '@/core/domains/controllers/visitor.be.controller';
import { CreateVisitPayload } from '@/core/domains/types/visitor.type';
import type { NextApiRequest, NextApiResponse } from 'next';

const visitorBEController = new VisitorBEController();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ code: 'METHOD_NOT_ALLOWED', message: 'Method not allowed' });
    return;
  }

  try {
    const body = req.body as CreateVisitPayload;
    const ip =
      (req.headers['x-forwarded-for'] as string)?.split(',')?.[0]?.trim() ||
      req.socket.remoteAddress ||
      body.ip ||
      undefined;
    const payload: CreateVisitPayload = {
      ...body,
      ip,
      path: body.path || req.url || '',
    };
    const response = await visitorBEController.createVisit(payload);
    res
      .status(200)
      .setHeader(...BASE_RESPONSE_CONTENT_TYPE)
      .send(response);
  } catch (error: any) {
    const statusCode = error?.statusCode || 500;
    delete error?.statusCode;
    res.status(statusCode).json(error);
  }
}
