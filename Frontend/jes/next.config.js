/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

// const isProd = process.env.NODE_ENV === 'production';

// module.exports = {
//     assetPrefix: isProd ? 'http://sojin.ddns.net' : '',
// };

module.exports = {
    // 프론트엔드에서 사용되는 정적 파일(이미지, CSS 등)의 경로를 설정합니다.
    // 이 설정은 Next.js가 자동으로 생성하는 경로에만 적용되어야 합니다.
    // 이 설정을 사용할 때는 정적 파일을 '/public' 디렉토리에 위치시키는 것이 좋습니다.
    // 예: public/images/logo.png 파일은 '/images/logo.png'로 접근할 수 있습니다.
    // assetPrefix 설정은 자동 생성 경로에만 영향을 미치므로 정적 파일은 제대로 로드될 것입니다.
    // 하지만 서버 측 렌더링에서 사용하는 다른 자원에는 영향을 미치지 않습니다.
    basePath: '',
  
    // 프론트엔드에서 사용되는 이미지 등의 경로를 설정합니다.
    // 이 설정은 Next.js가 자동으로 생성하는 경로에만 적용되어야 합니다.
    // 이 설정을 사용할 때는 정적 파일을 '/public' 디렉토리에 위치시키는 것이 좋습니다.
    // 예: public/images/logo.png 파일은 '/images/logo.png'로 접근할 수 있습니다.
    // assetPrefix 설정은 자동 생성 경로에만 영향을 미치므로 정적 파일은 제대로 로드될 것입니다.
    // 하지만 서버 측 렌더링에서 사용하는 다른 자원에는 영향을 미치지 않습니다.
    assetPrefix: '',
  
    // 웹팩에서 정적 자원에 대한 경로를 설정합니다.
    // assetPrefix 설정이 웹팩에 영향을 미치므로, assetPrefix를 사용할 때는 웹팩 설정도 함께 수정해야 합니다.
    // 이 설정은 다른 자원(이미지, CSS 등)의 경로에 영향을 미칩니다.
    // 이 설정을 사용하면 웹팩의 output.publicPath를 변경하여 정적 자원이 제대로 로드될 수 있습니다.
    // 웹팩 설정 파일에서 아래와 같이 사용하세요:
    // output: {
    //   publicPath: 'http://sojin.ddns.net/',
    // },
  };