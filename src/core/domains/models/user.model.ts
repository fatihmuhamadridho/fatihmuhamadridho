import { UserProfileWebResponseDTO } from '../types/user.type';

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
      short_description: string;
      long_description: string;
      social_media: Array<{ icon: string; url: string }>;
    },
  ) {}

  static encodeData(value: string): string {
    return btoa(value);
  }

  static decodeData(value: string): string {
    return atob(value);
  }

  static toResponseApi(response: UserProfileWebResponseDTO): any {
    return ")]}',\n" + JSON.stringify(response);
  }

  static fromApiForProfileWeb(response: string): User {
    if (!String(response).startsWith(")]}',")) {
      throw new Error('Something went wrong!');
    }
    const rawData = JSON.parse(String(response).slice(5));
    const data = new User(
      User.decodeData(rawData[1][0]),
      undefined as any,
      '',
      undefined as any,
      User.decodeData(rawData[1][1]),
      '',
      {
        role: User.decodeData(rawData[1][2][0]),
        short_description: 'I build accessible, pixel-perfect digital experiences for the web.',
        long_description: '',
        social_media: [],
      },
    );
    return data;
  }
}
