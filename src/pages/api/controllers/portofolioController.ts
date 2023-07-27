import { NextApiRequest, NextApiResponse } from "next";
import { portofolioModel } from "../models/portofolioModel";

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

  static async get(req?: NextApiRequest, res?: NextApiResponse) {
    const data = await portofolioModel.find({})

    return {
      status: true,
      data
    };
  }

  static async post(req?: NextApiRequest, res?: NextApiResponse) {
    const test = await portofolioModel.create({})

    return {
      status: true,
      test
    };
  }

  static async update(req?: NextApiRequest, res?: NextApiResponse) {
    return {
      status: true,
    };
  }

  static async delete(req?: NextApiRequest, res?: NextApiResponse) {
    return {
      status: true,
    };
  }
}