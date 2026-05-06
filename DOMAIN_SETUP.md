# Custom Domain Setup for kelsenliu.com

## Overview
This guide will help you configure `kelsenliu.com` to point to your GitHub Pages site.

## Step 1: CNAME File ✅
The CNAME file is already configured with `kelsenliu.com` in `public/CNAME`.

## Step 2: DNS Configuration

### Option A: Apex Domain (kelsenliu.com)
Add these DNS records at your domain registrar (Namecheap, GoDaddy, Cloudflare, etc.):

#### A Records (for apex domain)
Create 4 A records pointing to GitHub Pages IPs:
```
Type: A
Name: @ (or blank)
Value: 185.199.108.153
TTL: 3600 (or default)

Type: A
Name: @ (or blank)
Value: 185.199.109.153
TTL: 3600 (or default)

Type: A
Name: @ (or blank)
Value: 185.199.110.153
TTL: 3600 (or default)

Type: A
Name: @ (or blank)
Value: 185.199.111.153
TTL: 3600 (or default)
```

#### WWW Subdomain (optional but recommended)
```
Type: CNAME
Name: www
Value: SPIKESPIGEL404.github.io
TTL: 3600 (or default)
```

### Option B: Using Cloudflare (Recommended)
If using Cloudflare for DNS:

1. Add the same A records as above
2. Set Proxy status to **DNS only** (gray cloud) - NOT Proxied (orange cloud)
3. Add CNAME for www subdomain pointing to `SPIKESPIGEL404.github.io`

**Important:** GitHub Pages doesn't work with Cloudflare proxy. Always use "DNS only" mode.

## Step 3: Configure in GitHub

### Via GitHub CLI:
```bash
gh api repos/SPIKESPIGEL404/SPIKESPIGEL404.github.io/pages \
  --method PUT \
  --field cname=kelsenliu.com \
  --field https_enforced=true
```

### Via GitHub Web UI:
1. Go to https://github.com/SPIKESPIGEL404/SPIKESPIGEL404.github.io/settings/pages
2. Under "Custom domain", enter: `kelsenliu.com`
3. Click "Save"
4. Check "Enforce HTTPS" (may take up to 24 hours to be available)

## Step 4: Update Astro Config
Update `astro.config.mjs` to use your custom domain:

```javascript
export default defineConfig({
  site: 'https://kelsenliu.com',  // Update this
  // ... rest of config
});
```

## Step 5: Verification

### Check DNS Propagation:
```bash
# Check A records
dig kelsenliu.com +short

# Should return:
# 185.199.108.153
# 185.199.109.153
# 185.199.110.153
# 185.199.111.153

# Check CNAME for www
dig www.kelsenliu.com CNAME +short
# Should return: SPIKESPIGEL404.github.io.
```

### Check GitHub Pages Status:
```bash
gh api repos/SPIKESPIGEL404/SPIKESPIGEL404.github.io/pages
```

## Timeline
- **DNS Propagation**: 5 minutes to 48 hours (usually within 1 hour)
- **HTTPS Certificate**: Up to 24 hours after DNS verification
- **Full propagation**: Can take up to 48 hours globally

## Troubleshooting

### "Domain not verified" error:
- Ensure DNS records are correctly configured
- Wait for DNS propagation (check with `dig` or https://dnschecker.org)
- Remove and re-add the custom domain in GitHub settings

### HTTPS not working:
- Wait up to 24 hours for certificate provisioning
- Ensure DNS is properly configured
- Try removing and re-adding the domain

### Site not loading:
- Check CNAME file exists in the repository
- Verify DNS records with `dig` command
- Ensure no conflicting DNS records exist
- If using Cloudflare, ensure proxy is OFF (DNS only)

## Domain Registrar-Specific Guides

### Namecheap:
1. Dashboard → Domain List → Manage
2. Advanced DNS tab
3. Add A Records and CNAME as specified above

### GoDaddy:
1. My Products → DNS → Manage DNS
2. Add records as specified above

### Cloudflare:
1. Select your domain
2. DNS → Records
3. Add records with Proxy Status = DNS only (gray cloud)

### Google Domains:
1. My domains → Manage → DNS
2. Custom records → Add records as specified above

## Need Help?
- GitHub Pages docs: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
- Check DNS status: https://dnschecker.org/#A/kelsenliu.com
- GitHub Pages troubleshooting: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/troubleshooting-custom-domains-and-github-pages