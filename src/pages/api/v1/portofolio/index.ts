import { createRouter } from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next";
import { mongooseMiddleware } from "../../middleware/mongooseMiddleware";
import { PortofolioController } from "../../controllers/portofolioController";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.use(async (req, res, next) => {
  await mongooseMiddleware();
  await next();
});

router.get(async (req, res) => {
  try {
    const getAllData = await PortofolioController.get();
    res.status(200).json(getAllData);
  } catch (error: any) {
    res.status(500).json({ error: error.stack });
  }
});

router.post(async (req, res) => {
  try {
    const postData = await PortofolioController.post();
    const getAllData = await PortofolioController.get();
    res.status(200).json({ ...postData, ...getAllData });
  } catch (error: any) {
    res.status(500).json({ error: error.stack });
  }
});

export default router.handler({
  onError: (err: any, req, res) => {
    res.status(500).json({ error: err.stack });
  },
});
