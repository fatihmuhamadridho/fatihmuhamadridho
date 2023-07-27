import { portofolioModel } from "../models/portofolioModel";

import type { portofolioModelProps } from "../models/portofolioModel";
import type { paginationQueyrProps } from "../libs/paginationType";

export class PortofolioController {
  name;

  constructor(name: any) {
    this.name = name;
  }

  static message() {
    return {
      required: ":attribute harus diisi",
      unique: ":attribute (:input) sudah ada",
      max: ":attribute maximal :max karakter",
      exists: ":attribute (:input) tidak ditemukan",
    };
  }

  static async getAll(query: paginationQueyrProps) {
    const totalData = await portofolioModel.count();
    const skip = Number(Number(query?.page) - 1) * Number(query?.limit);
    const data = await portofolioModel
      .find()
      .sort({ updatedAt: "desc" })
      .limit(Number(query?.limit || 10))
      .skip(skip || 0);

    return {
      status: true,
      data,
      metadata: {
        page: query?.page || 1,
        totalPage: Math.ceil(totalData / Number(query?.limit)) || 1,
        totalData: totalData || 1,
      },
    };
  }

  static async post({ title, description, skills, banner }: portofolioModelProps) {
    const data = await portofolioModel.create({ title, description, skills, banner });

    return {
      status: true,
      data,
    };
  }

  static async update() {
    return {
      status: true,
    };
  }

  static async delete() {
    return {
      status: true,
    };
  }
}
