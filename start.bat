@echo off
cd /d "%~dp0"
color 0b
echo ===================================================
echo     Iniciando Portafolio de RodriA45
echo ===================================================
echo.

if not exist node_modules\ (
    echo [!] No se encontraron las dependencias.
    echo [!] Descargando e instalando dependencias. Por favor espera...
    echo.
    call npm install
    echo.
    echo [v] Dependencias instaladas correctamente.
) else (
    echo [v] Dependencias ya instaladas.
)

echo.
echo [>] Iniciando servidor local en el navegador...
echo.
npm run dev
pause
