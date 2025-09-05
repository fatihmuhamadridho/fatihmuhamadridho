import { ENABLE_ENCODING } from '@/configs/base.config';
import { UserModelData } from '../types/user.type';

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

  static encodeValue(value: string): string {
    if (ENABLE_ENCODING) {
      return Buffer.from(Buffer.from(value).toString('base64')).toString('hex');
    } else {
      return value;
    }
  }

  static decodeValue(value: string): string {
    if (ENABLE_ENCODING) {
      return Buffer.from(Buffer.from(value, 'hex').toString('utf-8'), 'base64').toString('utf-8');
    } else {
      return value;
    }
  }

  static toModelData(data: UserModelData): User {
    const id = data.id || '',
      username = data.username || '',
      email = data.email || '',
      password = data.password || '',
      fullname = data.fullname || '',
      phone = data.phone || '',
      detail = data.detail || {
        role: '',
        short_description: { id: '' },
        long_description: { id: '' },
        social_media: '',
      };
    return new User(id, username, email, password, fullname, phone, detail);
  }

  static toTupleData(data: User): string {
    const response = [
      data.id,
      data.username,
      data.email,
      data.password,
      data.fullname,
      data.phone,
      [
        data.detail.role,
        [data.detail.short_description.id, data.detail.short_description.en],
        [data.detail.long_description.id, data.detail.long_description.en],
        [data.detail.social_media.map((item) => [item.icon, item.url])],
      ],
    ];
    return ")]}',\n" + JSON.stringify(response);
  }

  static fromTupleData(response: any) {
    if (!String(response).startsWith(")]}',")) {
      throw new Error('Something went wrong!');
    }
    const rawData = JSON.parse(String(response).slice(5));
    return rawData;
  }
}
