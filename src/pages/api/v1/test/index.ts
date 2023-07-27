import { createRouter } from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next";
import { testModel } from "../../models/testModel";
import { mongooseMiddleware } from "../../middleware/mongooseMiddleware";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.use(async (req, res, next) => {
  await mongooseMiddleware();
  await next();
})

router.get(async (req, res) => {
  try {
    await testModel.create({ name: "awda" })
    const data = await testModel.find();
    res.status(200).json({ status: true, data });
  } catch (error: any) {
    res.status(500).json({ error: error.stack });
  }
});

export default router.handler({
  onError: (err: any, req, res) => {
    res.status(500).json({ error: err.stack });
  },
});
