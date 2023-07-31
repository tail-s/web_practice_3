# 기반이 될 이미지 선택 (Ubuntu 이미지 사용)
FROM openjdk:17

# 작업 디렉토리를 /app으로 설정합니다.
WORKDIR /app

COPY build/libs/*.jar jes.jar

# 도커 컨테이너가 실행될 때 실행될 명령어를 지정합니다.
CMD ["java", "-jar", "jes.jar"]
