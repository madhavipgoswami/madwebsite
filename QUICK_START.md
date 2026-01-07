# Quick Start Guide

## Prerequisites

You need **Node.js** installed on your computer. If you don't have it:

1. **Download Node.js:**
   - Visit: https://nodejs.org/
   - Download the **LTS version** (recommended)
   - Run the installer and follow the instructions

2. **Verify Installation:**
   - Close and reopen your terminal/PowerShell
   - Run: `node --version` (should show something like v18.x.x or v20.x.x)
   - Run: `npm --version` (should show something like 9.x.x or 10.x.x)

## Setup & Run

### Option 1: Using the Setup Script (Recommended)

1. Open PowerShell in this directory
2. Run the setup script:
   ```powershell
   .\setup.ps1
   ```
   This will check for Node.js and install all dependencies.

3. Start the development server:
   ```powershell
   .\start-dev.ps1
   ```
   Or manually:
   ```powershell
   npm run dev
   ```

### Option 2: Manual Setup

1. Install dependencies:
   ```powershell
   npm install
   ```

2. Start the development server:
   ```powershell
   npm run dev
   ```

3. Open your browser and go to:
   ```
   http://localhost:5173
   ```

## Troubleshooting

### "npm is not recognized"
- Node.js is not installed or not in your PATH
- Install Node.js from https://nodejs.org/
- **Restart your terminal** after installation

### "Cannot find module" errors
- Run `npm install` again
- Delete `node_modules` folder and `package-lock.json`, then run `npm install`

### Port 5173 already in use
- Vite will automatically try the next available port (5174, 5175, etc.)
- Check the terminal output for the actual URL

## Available Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Next Steps

After the site is running:
1. Open `http://localhost:5173` in your browser
2. Customize the content in the component files
3. See the README.md for customization details
