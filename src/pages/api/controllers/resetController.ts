import { testModel } from "../models/testModel";
import { portofolioModel } from "../models/portofolioModel";

export class ResetController {
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

  static async getAll() {
    const testData = await testModel.deleteMany();
    const portofolioData = await portofolioModel.deleteMany();

    return {
      status: true,
      testData,
      portofolioData,
    };
  }

  static async getOne() {
    return {
      status: true,
    };
  }

  static async post() {
    return {
      status: true,
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
