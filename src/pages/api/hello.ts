// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const payload = [['000000', 'Success'], ['123', 'fatih@example.com'], new Date().toISOString()];
  res.status(200).send(")]}',\n" + JSON.stringify(payload));
}
