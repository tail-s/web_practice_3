/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    assetPrefix: isProd ? 'http://sojin.ddns.net:3000' : '',
}