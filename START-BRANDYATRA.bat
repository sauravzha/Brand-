@echo off
title Brandyatra - Starting...
color 0D

echo.
echo  =========================================
echo     Brandyatra - One-Click Launcher
echo  =========================================
echo.

:: Navigate to the project directory
cd /d "%~dp0"

:: Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    color 0C
    echo  [ERROR] Node.js is not installed!
    echo  Please download and install Node.js from:
    echo  https://nodejs.org/
    echo.
    pause
    exit /b 1
)

:: Show Node.js and npm versions
echo  [OK] Node.js found:
node -v
echo  [OK] npm found:
call npm -v
echo.

:: Install dependencies if node_modules doesn't exist or is outdated
if not exist "node_modules" (
    echo  [SETUP] Installing dependencies for the first time...
    echo  This may take a few minutes, please wait...
    echo.
    call npm install
    if %errorlevel% neq 0 (
        color 0C
        echo.
        echo  [ERROR] Failed to install dependencies!
        echo  Please check your internet connection and try again.
        pause
        exit /b 1
    )
    echo.
    echo  [OK] Dependencies installed successfully!
    echo.
) else (
    echo  [OK] Dependencies already installed.
    echo.
)

:: Set the title while running
title Brandyatra - Running on http://localhost:8080

echo  =========================================
echo     Starting Brandyatra...
echo  =========================================
echo.
echo  Your site will open in the browser shortly!
echo  URL: http://localhost:8080
echo.
echo  Press Ctrl+C to stop the server.
echo  =========================================
echo.

:: Wait 2 seconds then open browser
start "" cmd /c "timeout /t 3 /nobreak >nul && start http://localhost:8080"

:: Start the dev server (this keeps running)
call npm run dev

:: If we get here, the server was stopped
echo.
echo  Server stopped. Press any key to exit...
pause >nul
