export class BaseController {
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
    return {
      status: true,
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
