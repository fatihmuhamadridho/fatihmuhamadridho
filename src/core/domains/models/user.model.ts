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

  static toTupleData(data: User): any {
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
    return response;
  }
}
