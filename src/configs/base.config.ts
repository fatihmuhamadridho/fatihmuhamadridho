export const APP_VERSION: string | undefined = process.env.NEXT_PUBLIC_APP_VERSION ?? process.env.APP_VERSION;
export const BASE_API_URL: string | undefined = process.env.NEXT_PUBLIC_BASE_API_URL ?? process.env.BASE_API_URL;
export const WEBHOOK_API_URL: string | undefined = process.env.NEXT_WEBHOOK_API_URL ?? process.env.WEBHOOK_API_URL;
export const BASE_RESPONSE_CONTENT_TYPE: [string, string] = ['Content-Type', 'application/json; charset=utf-8'];
export const CONST_PROFILE_USERNAME: string | undefined =
  process.env.NEXT_PUBLIC_CONST_PROFILE_USERNAME ?? process.env.CONST_PROFILE_USERNAME;
export const ENABLE_ENCODING: boolean =
  (process.env.NEXT_PUBLIC_ENABLE_ENCODING ?? process.env.ENABLE_ENCODING) === 'true' ? true : false;
