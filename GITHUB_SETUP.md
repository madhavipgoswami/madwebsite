# GitHub Setup Guide

Your local Git repository is now initialized and ready to push to GitHub!

## Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name**: `MadWebsite` (or your preferred name)
   - **Description**: "Personal website built with React and Vite"
   - **Visibility**: Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click **"Create repository"**

## Step 2: Connect Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these:

### Option A: If you haven't created the repo yet
```powershell
# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/MadWebsite.git

# Push your code
git branch -M main
git push -u origin main
```

### Option B: If you already created the repo
GitHub will show you the exact commands. They'll look like:
```powershell
git remote add origin https://github.com/YOUR_USERNAME/MadWebsite.git
git branch -M main
git push -u origin main
```

## Step 3: Verify

1. Go to your GitHub repository page
2. You should see all your files there
3. Your code is now backed up and version controlled!

## Future Updates

Whenever you make changes to your website:

```powershell
# Stage all changes
git add .

# Commit with a message
git commit -m "Description of your changes"

# Push to GitHub
git push
```

## Deploying to Vercel from GitHub

Once your code is on GitHub:

1. Go to [Vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click **"Add New Project"**
4. Import your `MadWebsite` repository
5. Vercel will auto-detect Vite configuration
6. Click **"Deploy"**
7. Your site will be live in minutes!

## Useful Git Commands

```powershell
# Check status
git status

# See commit history
git log

# Create a new branch
git checkout -b feature-name

# Switch branches
git checkout main

# Pull latest changes
git pull
```
