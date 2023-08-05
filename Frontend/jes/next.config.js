/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

const isProd = process.env.NODE_ENV === 'production';

// module.exports = {
//     assetPrefix: isProd ? 'http://sojin.ddns.net:13000' : '',
// };

module.exports = {
  assetPrefix: isProd ? 'http://sojin.ddns.net:13000' : '',
  webpack: (config, { isServer }) => {
    // isServer가 true인 경우 서버 측 렌더링에 사용되는 웹팩 설정입니다.
    // isServer가 false인 경우 클라이언트 측 렌더링에 사용되는 웹팩 설정입니다.

    // 프로덕션 환경인 경우 output.publicPath를 설정합니다.
    if (isProd) {
      config.output.publicPath = 'http://sojin.ddns.net:13000' + config.output.publicPath;
    }

    return config;
  },
};