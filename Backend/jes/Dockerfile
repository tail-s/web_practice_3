# 기반이 될 이미지 선택 (Ubuntu 이미지 사용)
FROM ubuntu:latest

# JDK 경로 설정 (Jenkins의 tools에서 설정한 경로 사용)
ENV JAVA_HOME=/usr/lib/jvm/java-1.17.0-openjdk-amd64
ENV PATH=$PATH:$JAVA_HOME/bin

# 작업 디렉토리를 /app으로 설정합니다.
WORKDIR /app

# 호스트의 Backend/jes 디렉토리에 있는 모든 파일을 컨테이너의 /app 디렉토리로 복사합니다.
# Gradle 빌드로 생성된 JAR 파일을 포함시킵니다.
COPY Backend/jes /app

ENV JAR_FILE_NAME=jes.jar

# 도커 컨테이너가 실행될 때 실행될 명령어를 지정합니다.
CMD ["java", "-jar", "${JAR_FILE_NAME}"]
