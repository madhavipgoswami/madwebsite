# Quick start script for development server

Write-Host "Starting development server..." -ForegroundColor Cyan
Write-Host ""

# Check if node_modules exists
if (-not (Test-Path "node_modules")) {
    Write-Host "Dependencies not found. Installing..." -ForegroundColor Yellow
    npm install
    Write-Host ""
}

Write-Host "Starting Vite development server..." -ForegroundColor Green
Write-Host "The website will be available at http://localhost:5173" -ForegroundColor Yellow
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Gray
Write-Host ""

npm run dev
