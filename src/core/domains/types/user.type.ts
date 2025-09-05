export type FindOneProfileQueryParams = {
  u?: string;
};

export type GetProfileUserQueryParams = FindOneProfileQueryParams;

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

export interface User {
  detail: FindOneProfileDatabaseItemDetailResponse;
  user_id: string;
  username: string;
  email: string;
  password: string;
  fullname: string;
  phone: string;
}

export interface FindOneProfileDatabaseItemDetailResponse {
  role: string;
  short_description: string;
  long_description: string;
  social_media: Array<{
    icon: string;
    url: string;
  }>;
}
