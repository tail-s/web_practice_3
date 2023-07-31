# Node.js 버전 18.16.0을 사용하는 Docker 이미지를 선택합니다.
FROM node:18.16.0

# 작업 디렉토리를 /app으로 설정합니다.
WORKDIR /app

# 의존성 패키지를 설치하기 위해 먼저 package.json 파일을 복사합니다.
COPY package*.json ./

# npm을 사용하여 프로젝트의 의존성을 설치합니다.
RUN npm install

# 프로젝트의 소스 코드와 파일들을 현재 Docker 이미지의 작업 디렉토리에 복사합니다.
# 여기서 프로젝트 소스 코드의 경로를 정확하게 지정해야 합니다.
COPY . .

# Next.js 앱을 빌드합니다.
RUN npm run build

# 컨테이너 내부에서 Next.js 앱을 실행할 포트 번호를 지정합니다.
EXPOSE 3000

# 앱을 실행하기 위한 명령을 정의합니다.
CMD ["npm", "start"]
