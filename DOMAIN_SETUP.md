# Setting Up Custom Domain (madhavigoswami.com) with Vercel

## Step 1: Add Domain in Vercel

1. Go to your Vercel dashboard: https://vercel.com/dashboard
2. Click on your **madwebsite** project
3. Go to **Settings** → **Domains**
4. In the "Domains" section, enter: `madhavigoswami.com`
5. Click **Add**
6. Vercel will show you the DNS records you need to configure

## Step 2: Configure DNS in GoDaddy

Vercel will provide you with DNS records. Here's what you typically need:

### Option A: Using A Record (Recommended)
- **Type**: A
- **Name**: @ (or leave blank for root domain)
- **Value**: Vercel's IP address (Vercel will show this)
- **TTL**: 600 (or default)

### Option B: Using CNAME (Easier)
- **Type**: CNAME
- **Name**: @ (or leave blank for root domain)
- **Value**: `cname.vercel-dns.com` (Vercel will provide the exact value)
- **TTL**: 600 (or default)

**Note**: Some registrars don't allow CNAME on root domain (@). If GoDaddy doesn't allow it, use Option A with A records.

### Option C: Using Vercel Nameservers (Best for full control)
1. In Vercel, go to **Settings** → **Domains**
2. Click on your domain
3. Look for "Nameservers" section
4. Copy the nameservers (usually 4 nameservers like `ns1.vercel-dns.com`)
5. In GoDaddy, update your nameservers to point to Vercel's

## Step 3: Update DNS in GoDaddy

1. Log in to **GoDaddy**: https://www.godaddy.com
2. Go to **My Products** → Find **madhavigoswami.com** → Click **DNS** or **Manage DNS**
3. You'll see your current DNS records

### If using A Records:
- Find any existing A records for @ (root domain)
- Delete old A records if they exist
- Click **Add** → Select **A**
- **Name**: @ (or leave blank)
- **Value**: The IP address Vercel provided
- **TTL**: 600
- Click **Save**

### If using CNAME:
- Find any existing A or CNAME records for @
- Delete them
- Click **Add** → Select **CNAME**
- **Name**: @ (or leave blank)
- **Value**: The CNAME value Vercel provided (e.g., `cname.vercel-dns.com`)
- **TTL**: 600
- Click **Save**

### If using Nameservers:
1. In GoDaddy, go to **Domain Settings** → **Nameservers**
2. Click **Change**
3. Select **Custom**
4. Delete existing nameservers
5. Add Vercel's nameservers (one per line)
6. Click **Save**

## Step 4: Wait for DNS Propagation

- DNS changes can take **5 minutes to 48 hours** to propagate
- Usually takes **15-30 minutes** for most changes
- Vercel will show the status in the dashboard

## Step 5: Verify in Vercel

1. Go back to Vercel dashboard
2. Check **Settings** → **Domains**
3. You should see:
   - ✅ Green checkmark when DNS is configured correctly
   - ⚠️ Warning if still propagating
   - ❌ Error if misconfigured

## Step 6: SSL Certificate (Automatic)

- Vercel automatically provisions SSL certificates via Let's Encrypt
- Once DNS is verified, SSL will be active within minutes
- Your site will be accessible at `https://madhavigoswami.com`

## Troubleshooting

### Domain not connecting?
1. **Check DNS records**: Make sure they match exactly what Vercel shows
2. **Wait longer**: DNS can take up to 48 hours (usually much faster)
3. **Clear DNS cache**: 
   - Windows: `ipconfig /flushdns` in PowerShell
   - Or use: https://www.whatsmydns.net to check propagation

### Still showing as not configured?
1. Double-check the DNS values in GoDaddy match Vercel exactly
2. Make sure you removed old DNS records
3. Try using Vercel's nameservers instead

### Want www subdomain too?
1. In Vercel, add both:
   - `madhavigoswami.com`
   - `www.madhavigoswami.com`
2. Vercel will automatically redirect www to root (or vice versa)

## Quick Reference

**Vercel Dashboard**: https://vercel.com/dashboard
**GoDaddy DNS**: https://www.godaddy.com → My Products → DNS

## After Setup

Once configured:
- Your site will be live at: `https://madhavigoswami.com`
- Vercel handles SSL automatically
- All future deployments will update the live site automatically
