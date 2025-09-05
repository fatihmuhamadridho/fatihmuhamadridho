import { ENABLE_ENCODING } from '@/configs/base.config';

export class Security {
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

  static toXXSIProtection(value: any): string {
    return ")]}',\n" + JSON.stringify(value);
  }

  static fromXXSIProtection(value: string): any {
    if (!String(value).startsWith(")]}',")) {
      throw new Error('Data is not XXSI Protection Format');
    }
    return JSON.parse(String(value).slice(5));
  }
}
