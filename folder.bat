@echo off
echo 📁 Spring Boot + MyBatis 기본 폴더 구조 생성 중...

REM === Java 패키지 경로 ===
set BASE_DIR=src\main\java\org\example\project_board_pjw

mkdir %BASE_DIR%\config
mkdir %BASE_DIR%\controller
mkdir %BASE_DIR%\service
mkdir %BASE_DIR%\mapper
mkdir %BASE_DIR%\domain
mkdir %BASE_DIR%\dto
mkdir %BASE_DIR%\exception

REM === Resources 경로 ===
mkdir src\main\resources\mapper
mkdir src\main\resources\templates
mkdir src\main\resources\static

echo ✅ 폴더 구조 생성 완료!
echo ----------------------------
echo java/
echo   ├─ config/
echo   ├─ controller/
echo   ├─ service/
echo   ├─ mapper/
echo   ├─ domain/
echo   ├─ dto/
echo   └─ exception/
echo resources/
echo   ├─ mapper/
echo   ├─ templates/
echo   └─ static/
pause