import { createRouter } from "next-connect";
import { mongooseMiddleware } from "../../middleware/mongooseMiddleware";
import { PortofolioController } from "../../controllers/portofolioController";

import type { NextApiRequest, NextApiResponse } from "next";
import type { portofolioModelProps } from "../../models/portofolioModel";
import type { paginationQueyrProps } from "../../libs/paginationType";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.use(async (req: NextApiRequest, res: NextApiResponse, next) => {
  await mongooseMiddleware();
  await next();
});

router.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const { page, limit }: paginationQueyrProps = req.query;
  try {
    const getAllData = await PortofolioController.getAll({
      page: Number(page),
      limit: Number(limit),
    });
    res.status(200).json(getAllData);
  } catch (error: any) {
    res.status(500).json({ error: error.stack });
  }
});

router.post(async (req: NextApiRequest, res: NextApiResponse) => {
  const { title, description, skills, banner }: portofolioModelProps = req.body;
  try {
    const postData = await PortofolioController.post({ title, description, skills, banner });

    if (postData) return res.status(200).json(postData);
  } catch (error: any) {
    res.status(500).json({ error: error.stack });
  }
});

export default router.handler({
  onError: (err: any, req: NextApiRequest, res: NextApiResponse) => {
    res.status(500).json({ error: err.stack });
  },
});
