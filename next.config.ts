import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: '/radical-minds',
  assetPrefix: isProd ? '/radical-minds/' : '',
  output: 'export',
};

export default nextConfig;


