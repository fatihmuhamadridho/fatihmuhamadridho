import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  devIndicators: false,
  env: {
    APP_VERSION: process.env.npm_package_version,
    BASE_API_URL: process.env.BASE_API_URL,
    CONST_PROFILE_USERNAME: process.env.CONST_PROFILE_USERNAME,
    ENABLE_ENCODING: process.env.ENABLE_ENCODING,
    WEBHOOK_API_URL: process.env.WEBHOOK_API_URL,
  },
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dummyimage.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        port: '',
        pathname: '**',
      },
    ],
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['id', 'en'],
  },
};

export default nextConfig;
