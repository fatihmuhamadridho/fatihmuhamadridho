import { ENABLE_ENCODING } from '@/configs/base.config';
import { UserProfileWebResponseItem, UserProfileWebResponseDTO } from '../types/user.type';

export class User {
  constructor(
    public readonly id: string,
    public username: string,
    public email: string,
    private password: string,
    public fullname: string,
    public phone: string,
    public detail: {
      role: string;
      short_description: Record<string, string>;
      long_description: Record<string, string>;
      social_media: Array<{ icon: string; url: string }>;
    },
  ) {}

  static encodeData(value: string): string {
    if (ENABLE_ENCODING) {
      return Buffer.from(value).toString('base64');
    } else {
      return value;
    }
  }

  static decodeData(value: string): string {
    if (ENABLE_ENCODING) {
      return Buffer.from(value, 'base64').toString('utf-8');
    } else {
      return value;
    }
  }

  static toResponseApi(response: UserProfileWebResponseDTO): any {
    return ")]}',\n" + JSON.stringify(response);
  }

  static fromApiForProfileWeb(response: string): User {
    if (!String(response).startsWith(")]}',")) {
      throw new Error('Something went wrong!');
    }
    const rawData: UserProfileWebResponseDTO = JSON.parse(String(response).slice(5));
    const id: User['id'] = User.decodeData(rawData[1][0]);
    const username: User['username'] | any = undefined;
    const email: User['email'] | any = undefined;
    const password: User['password'] | any = undefined;
    const fullname: User['fullname'] = User.decodeData(rawData[1][1]);
    const phone: User['phone'] | any = undefined;
    const detail: User['detail'] = {
      role: User.decodeData(rawData[1][2][0]),
      short_description: { id: User.decodeData(rawData[1][2][1][0]), en: User.decodeData(rawData[1][2][1][1]) },
      long_description: { id: User.decodeData(rawData[1][2][2][0]), en: User.decodeData(rawData[1][2][2][1]) },
      social_media: rawData[1][2][3].map((item) => ({
        icon: item[0],
        url: item[1],
      })),
    };
    const data = new User(id, username, email, password, fullname, phone, detail);
    console.log({ rawData, data });
    return data;
  }
}
