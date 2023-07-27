import { createRouter } from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next";
import { testModel } from "../../models/testModel";
import { mongooseMiddleware } from "../../middleware/mongooseMiddleware";
import { portofolioModel } from "../../models/portofolioModel";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.use(async (req: NextApiRequest, res: NextApiResponse, next) => {
  await mongooseMiddleware();
  await next();
});

router.get(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const reset = await testModel.deleteMany();
    const portofolio = await portofolioModel.deleteMany();
    res.status(200).json({ reset, portofolio });
  } catch (error: any) {
    res.status(500).json({ error: error.stack });
  }
});

export default router.handler({
  onError: (err: any, req: NextApiRequest, res: NextApiResponse) => {
    res.status(500).json({ error: err.stack });
  },
});
