# 기반이 될 이미지 선택 (OpenJDK 이미지 사용)
FROM adoptopenjdk:17-jdk-hotspot

# 작업 디렉토리 생성
WORKDIR /app

# Gradle Wrapper 파일을 먼저 복사하여 Gradle 설치 및 캐시 사용
COPY Backend/gradlew ./
COPY Backend/gradle ./gradle
RUN ./gradlew --version

# 백엔드 프로젝트 의존성을 먼저 복사하여 캐시 사용
COPY Backend/build.gradle Backend/settings.gradle ./
RUN ./gradlew resolveDependencies

# 소스 코드 복사 및 빌드
COPY Backend/src ./src
RUN ./gradlew clean build

# 빌드된 JAR 파일을 컨테이너로 복사
COPY Backend/build/libs/your-application.jar ./app.jar

# 컨테이너 실행 시 실행될 명령어 설정
CMD ["java", "-jar", "app.jar"]