import type { NextApiRequest, NextApiResponse } from 'next';
import { downloadResumePdf, RxresuConfigurationError } from '@/core/infrastructures/services/rxresu.service';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const resumeId = process.env.RXRESU_RESUME_ID;
  if (!resumeId) {
    return res.status(503).json({ error: 'CV download is not configured' });
  }

  try {
    const upstream = await downloadResumePdf(resumeId);
    if (!upstream.ok || !upstream.headers.get('content-type')?.includes('application/pdf')) {
      return res.status(502).json({ error: 'CV download is temporarily unavailable' });
    }
    const pdf = Buffer.from(await upstream.arrayBuffer());
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="fatih-muhamad-ridho-resume.pdf"');
    return res.status(200).send(pdf);
  } catch (error) {
    if (error instanceof RxresuConfigurationError) {
      return res.status(503).json({ error: 'CV download is not configured' });
    }
    return res.status(502).json({ error: 'CV download is temporarily unavailable' });
  }
}
