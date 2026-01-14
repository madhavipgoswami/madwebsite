# How to Access and Edit Your Website in Vercel

## Accessing Vercel Dashboard

1. **Go to Vercel Website:**
   - Visit: https://vercel.com
   - Click "Log In" (top right)

2. **Sign In Options:**
   - If you connected via GitHub, click "Continue with GitHub"
   - Use the same GitHub account that has your repository: `madhavipgoswami/madwebsite`

3. **Find Your Project:**
   - Once logged in, you'll see your dashboard
   - Look for a project named "madhavi-personal-website" or "madwebsite"
   - Click on it to open the project

## Making Edits in Vercel

### Option 1: Edit via GitHub (Recommended)
1. **Make changes locally** (on your computer)
2. **Commit and push to GitHub:**
   ```powershell
   git add .
   git commit -m "Your change description"
   git push
   ```
3. **Vercel auto-deploys** - Changes appear on your site within 1-2 minutes

### Option 2: Edit Directly in Vercel (Limited)
- Vercel doesn't have a built-in code editor
- You can only edit environment variables and settings
- For code changes, use GitHub or local editing

## Checking Your Website URL

### Your Domain:
- **Custom Domain:** https://madhavigoswami.com
- **Vercel URL:** Check in your Vercel dashboard (usually something like `madwebsite-xxxxx.vercel.app`)

### If URL Not Opening:

1. **Check Deployment Status:**
   - Go to Vercel Dashboard → Your Project → "Deployments" tab
   - Look for the latest deployment
   - Status should be "Ready" (green checkmark)
   - If it says "Error" or "Building", click on it to see details

2. **Check Domain Configuration:**
   - Go to: Settings → Domains
   - Verify `madhavigoswami.com` is listed
   - Status should be "Valid Configuration"
   - If it shows an error, you may need to update DNS settings

3. **Trigger a New Deployment:**
   - If domain is connected but site not showing:
   - Go to: Deployments tab
   - Click "Redeploy" on the latest deployment
   - Or make a small change and push to GitHub

## Common Issues & Solutions

### Issue: "DEPLOYMENT_NOT_FOUND" Error
**Solution:**
1. Verify domain in Vercel Settings → Domains
2. Check deployment status
3. Trigger a new deployment

### Issue: Site Shows Old Content
**Solution:**
1. Hard refresh browser: `Ctrl + F5` (Windows) or `Cmd + Shift + R` (Mac)
2. Clear browser cache
3. Check if latest deployment is "Ready" in Vercel

### Issue: Build Fails
**Solution:**
1. Check build logs in Vercel (Deployments → Click on failed deployment)
2. Test build locally: `npm run build`
3. Fix any errors shown in logs

### Issue: Can't Access Vercel Dashboard
**Solution:**
1. Make sure you're using the correct GitHub account
2. Try incognito/private browsing mode
3. Clear browser cookies for vercel.com
4. Visit: https://vercel.com/login

## Quick Commands for Local Development

```powershell
# Start development server
npm run dev

# Build for production (test locally)
npm run build

# Preview production build
npm run preview
```

## Need Help?

- **Vercel Support:** https://vercel.com/support
- **Vercel Docs:** https://vercel.com/docs
- **Check Build Logs:** Vercel Dashboard → Deployments → Click deployment → View logs
