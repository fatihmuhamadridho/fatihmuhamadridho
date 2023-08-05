import { createRouter } from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next";
import { testModel } from "../../models/testModel";
import { mongooseMiddleware } from "../../middleware/mongooseMiddleware";
import { portofolioModel } from "../../models/portofolioModel";
import { experienceModel } from "../../models/experienceModel";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.use(async (req: NextApiRequest, res: NextApiResponse, next) => {
  await mongooseMiddleware();
  await next();
});

router.get(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const test = await testModel.deleteMany();
    const portofolio = await portofolioModel.deleteMany();
    const experience = await experienceModel.deleteMany();
    res.status(200).json({ test, portofolio, experience });
  } catch (error: any) {
    res.status(500).json({ error: error.stack });
  }
});

router.patch(async (req: NextApiRequest, res: NextApiResponse) => {
  const portofolioPatchDummy = {
    title: "testTitle",
    description: "testDescription",
    banner: "https://dummyimage.com/600x400/fff/000",
    skills: ["ReactJs", "NextJs"],
  };

  const experiencePatchDummy = {
    image: "https://dummyimage.com/600x400/fff/000",
    title: "test",
    description: "test",
    start_from: new Date(),
    end_from: new Date(),
  };

  try {
    const portofolioPatch = await portofolioModel.insertMany([
      portofolioPatchDummy,
      portofolioPatchDummy,
      portofolioPatchDummy,
    ]);
    const experiencePatch = await experienceModel.insertMany([
      experiencePatchDummy,
      experiencePatchDummy,
      experiencePatchDummy,
    ]);
    res.status(200).json({ portofolioPatch, experiencePatch });
  } catch (error: any) {
    res.status(500).json({ error: error.stack });
  }
});

export default router.handler({
  onError: (err: any, req: NextApiRequest, res: NextApiResponse) => {
    res.status(500).json({ error: err.stack });
  },
});
