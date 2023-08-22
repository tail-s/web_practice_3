/** @type {import('next').NextConfig} */
const nextConfig = {}

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    assetPrefix: isProd ? `${process.env.FRONT_URL}` : '',
};

module.exports = nextConfig
