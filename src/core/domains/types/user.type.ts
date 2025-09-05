import { User } from '../models/user.model';
import { BaseResponse } from './base.type';

export type FindOneProfileQueryParams = {
  u?: string;
};

export type GetProfileUserQueryParams = FindOneProfileQueryParams;

export type GetProfileUserResponseDTO = BaseResponse<User>;

export type UserModelData = {
  id: string;
  username: string;
  email: string;
  password: string;
  fullname: string;
  phone: string;
  detail: {
    role: string;
    short_description: Record<string, string>;
    long_description: Record<string, string>;
    social_media: Array<{ icon: string; url: string }>;
  };
};
