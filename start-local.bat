@echo off
cd /d "%~dp0"
echo Starting 2026 youth retreat local site...
echo.
echo Open this URL after the server is ready:
echo http://127.0.0.1:5173/youth-retreat-2026/#/day1
echo.
npm.cmd run dev -- --host 127.0.0.1 --port 5173
