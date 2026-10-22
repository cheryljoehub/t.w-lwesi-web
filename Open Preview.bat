@echo off
setlocal
pushd "%~dp0"

call npm run build
if errorlevel 1 (
  echo.
  echo Preview build failed. Make sure Node.js and project dependencies are installed.
  pause
  popd
  exit /b 1
)

start "" "%~dp0dist\index.html"
popd
