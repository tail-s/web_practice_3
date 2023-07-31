# 기반이 될 이미지 선택 (OpenJDK 이미지 사용하지 않고 서버에 설치된 JDK 사용)
FROM ubuntu:latest

# JDK 경로 설정 (Jenkins의 tools에서 설정한 경로 사용)
ENV JAVA_HOME=/usr/lib/jvm/java-1.17.0-openjdk-amd64
ENV PATH=$PATH:$JAVA_HOME/bin

# 작업 디렉토리 생성
WORKDIR /app

# Gradle Wrapper 파일을 먼저 복사하여 Gradle 설치 및 캐시 사용
COPY Backend/gradlew ./
COPY Backend/gradle ./gradle
RUN chmod +x ./gradlew
RUN ./gradlew --version

# 백엔드 프로젝트 의존성을 먼저 복사하여 캐시 사용
COPY Backend/build.gradle Backend/settings.gradle ./
RUN ./gradlew resolveDependencies

# 소스 코드 복사
COPY Backend/src ./src

# 빌드
RUN ./gradlew clean build

# 빌드된 JAR 파일을 컨테이너로 복사 (your-application.jar에서 jes.jar로 수정)
COPY Backend/build/libs/jes.jar ./app.jar

# 컨테이너 실행 시 실행될 명령어 설정
CMD ["java", "-jar", "app.jar"]
