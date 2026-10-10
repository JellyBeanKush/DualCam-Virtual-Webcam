@echo off
setlocal

where npm >nul 2>nul
if errorlevel 1 (
  echo Node.js and npm are required. Install Node.js 20+ first.
  exit /b 1
)

npm install
if errorlevel 1 (
  echo npm install failed.
  exit /b 1
)

start "DualCam" cmd /k "npm start"
