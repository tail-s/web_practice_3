# 도커 이미지의 기본 이미지로 젠킨스에서 등록한 JDK를 사용합니다.
FROM jdk-17

# 작업 디렉토리를 /app으로 설정합니다.
WORKDIR /app

# 호스트의 Backend/jes 디렉토리에 있는 모든 파일을 컨테이너의 /app 디렉토리로 복사합니다.
# Gradle 빌드로 생성된 JAR 파일을 포함시킵니다.
COPY Backend/jes /app

# JAR 파일 이름을 여기에 입력해주세요 (예: jes.jar)
ENV JAR_FILE_NAME=<JAR 파일 이름>

# 도커 컨테이너가 실행될 때 실행될 명령어를 지정합니다.
CMD ["java", "-jar", "${JAR_FILE_NAME}"]
