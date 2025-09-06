import { User } from '../models/user.model';
import { BaseResponse } from './base.type';

export type FindOneProfileQueryParams = {
  u?: string;
};

export type GetProfileUserQueryParams = FindOneProfileQueryParams;

export type GetProfileUserResponseDTO = BaseResponse<User>;

export type UserModelData = {
  readonly id: string;
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
  experiences?: Array<{
    readonly id: string;
    company: string;
    role: string;
    type: string;
    description: string;
    tools: string[];
    start_date: string;
    end_date: string;
    is_present: boolean;
    is_show: boolean;
  }>;
};
