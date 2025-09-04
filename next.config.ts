import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  devIndicators: false,
  env: {
    ENABLE_ENCODING: process.env.ENABLE_ENCODING,
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
    ],
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['id', 'en'],
  },
};

export default nextConfig;
