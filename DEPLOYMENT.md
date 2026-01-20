# Deployment Guide

Complete guide for deploying your portfolio to GitHub Pages with automated workflows.

---

## Quick Start Deployment

### 1. Make Your Changes

Edit files in the `src/` directory:
- Update content
- Fix bugs
- Add features

### 2. Commit Changes

```bash
git add .
git commit -m "feat: Your feature description"
```

### 3. Push to GitHub

```bash
git push origin master
```

### 4. That's It! 🎉

GitHub Actions automatically:
- ✅ Runs ESLint checks
- ✅ Runs tests
- ✅ Increments cache buster versions
- ✅ Builds production code
- ✅ Deploys to GitHub Pages

**Live at**: https://irvandandung.github.io

---

## Deployment Workflow

### What Happens Behind the Scenes

```
1. You push to master
   ↓
2. GitHub detects push
   ↓
3. nextjs.yml workflow triggers
   ├─ Setup Node.js & pnpm
   ├─ Install dependencies
   ├─ Run ESLint (code quality)
   ├─ Run cache-buster.js (increment versions)
   ├─ Build with Next.js
   └─ Deploy to GitHub Pages
   ↓
4. Portfolio goes live
   ↓
5. Users see fresh content (no cache issues!)
```

### Automated Steps Explained

#### Step 1: ESLint Check
- Runs code quality checks
- Catches errors and warnings
- If it fails, deployment stops
- **Fix**: Run `pnpm lint` locally before pushing

#### Step 2: Build Test
- Tests that production build works
- Catches TypeScript errors
- Checks for missing dependencies
- **Fix**: Run `pnpm build` locally before pushing

#### Step 3: Cache Buster
- Automatically increments version numbers
- Ensures users get fresh content
- Prevents browser caching issues
- **No action needed** - automatic!

#### Step 4: Deploy
- Uploads build to GitHub Pages
- Goes live immediately
- **Time**: 2-3 minutes total

---

## Deployment Status Tracking

### Monitor Workflow Progress

1. Go to your GitHub repository
2. Click **Actions** tab
3. See list of workflow runs
4. Click on your deployment to see details

### Workflow Status Indicators

| Status | Meaning | Action |
|--------|---------|--------|
| 🟠 In Progress | Currently deploying | Wait for completion |
| 🟢 Success | Deployed successfully | Check live site |
| 🔴 Failed | Deployment failed | Check logs for errors |

### Check Deployment Environment

1. Go to repository
2. Click **Settings**
3. Go to **Environments**
4. Click **github-pages**
5. See deployment history and current URL

---

## Pre-Deployment Checklist

### Before Pushing Code

```bash
# 1. Pull latest changes
git pull origin master

# 2. Check for linting errors
pnpm lint

# 3. Test build locally
pnpm build

# 4. Verify build (optional)
pnpm start
# Visit http://localhost:3000
# Verify everything looks correct
```

### If Tests Fail

```bash
# ESLint errors
pnpm lint        # Shows errors
# Fix errors manually based on messages

# Build errors
pnpm build       # Shows compilation errors
# Check error messages and fix code

# Only push after tests pass!
```

---

## Updating Static Assets

### Regular Code Changes

```bash
# Just push normally
git add .
git commit -m "feat: Update content"
git push origin master
# Automatic cache busting happens! ✅
```

### Favicon or Static Files

```bash
# Option 1: Automatic (Recommended)
# Just push - GitHub Actions handles cache busting
git add .
git commit -m "feat: Update favicon"
git push origin master

# Option 2: Force Cache Refresh (if needed)
# Go to Actions tab
# Select "Manual Cache Bust"
# Run workflow
```

---

## Handling Deployment Failures

### If Workflow Fails

1. Go to **Actions** tab
2. Click the failed workflow run
3. Click the failed job
4. Scroll to see error message
5. Note the error
6. Fix the issue locally
7. Push again

### Common Errors & Solutions

| Error | Cause | Solution |
|-------|-------|----------|
| ESLint failed | Code quality issues | Run `pnpm lint` and fix errors |
| Build failed | TypeScript/compilation error | Run `pnpm build` and fix |
| Cache buster failed | Script issue | Check `scripts/cache-buster.js` exists |
| Deploy failed | GitHub Pages issue | Check repository settings |

### Debug Steps

```bash
# 1. Check your branch
git status
git branch

# 2. Verify on master branch
git checkout master

# 3. Run same checks as workflow
pnpm lint
pnpm build

# 4. If successful locally, try pushing again
git add .
git commit -m "fix: Resolve deployment issue"
git push origin master
```

---

## Manual Deployment Options

### Option 1: GitHub Actions (Recommended - Automatic)

Just push to master. Workflows handle everything!

```bash
git push origin master
# Automatic! ✅
```

### Option 2: Manual Cache Bust + Deploy

If you need to force a fresh deployment:

1. Go to **Actions** tab
2. Select **"Manual Cache Bust"**
3. Click **"Run workflow"**
4. Enter reason (e.g., "Updated favicon")
5. Click **"Run workflow"**

Workflow will:
- Increment cache buster versions
- Rebuild
- Redeploy
- All done!

### Option 3: Emergency Force Refresh

If users still see old content:

1. Use Manual Cache Bust (see above)
2. OR ask users to hard refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)

---

## Verifying Deployment

### Check Live Site

```bash
# Visit your portfolio
https://irvandandung.github.io

# Check that latest changes are visible
# Look for new content/fixes
```

### Verify Cache Busting

1. Open your portfolio in browser
2. Press F12 (DevTools)
3. Go to **Network** tab
4. Refresh the page
5. Look for query parameters: `?v=2`, `?v=3`, etc.
6. Should see new versions being fetched

### Check GitHub Pages Status

1. Go to repository
2. **Settings** → **Pages**
3. See current deployment URL
4. Verify it's pointing to master branch

---

## Rollback / Revert Deployment

### If You Need to Undo Changes

```bash
# Option 1: Revert last commit
git revert HEAD
git push origin master

# Option 2: Reset to previous state
git log --oneline          # See commit history
git reset --hard <commit>  # Go back to that commit
git push -f origin master  # Force push
```

**Note**: Force push should be used carefully. Better to revert normally.

### Revert a Specific Commit

```bash
# See the commit ID
git log --oneline

# Revert that commit
git revert <commit-id>

# This creates a new commit that undoes changes
git push origin master
```

---

## Performance Metrics

### Build Time

- **First build**: ~2-3 minutes
- **Subsequent builds**: ~1-2 minutes (cached)

### Deployment Time

- **GitHub Actions**: ~2-3 minutes total
- **Live time**: Instant after workflow completes

### Bundle Size

```
✓ Home page: 3.09 kB
✓ Projects page: 871 B  
✓ About page: 1.21 kB
✓ Total JS: ~110 kB
```

All optimized for fast loading!

---

## Troubleshooting

### Workflow Not Running

**Problem**: Push doesn't trigger workflow

**Solutions**:
1. Check branch is `master` (not `main`)
2. Verify `.github/workflows/nextjs.yml` exists
3. Wait 1-2 minutes (GitHub needs time)
4. Check repository settings for workflow permissions

### Workflow Hangs/Stuck

**Problem**: Workflow stuck in progress

**Solution**:
1. Wait 30 minutes (might just be slow)
2. If still stuck, cancel workflow
3. Go to Actions → Click workflow → Cancel
4. Push a new commit to retry

### Changes Not Live

**Problem**: Pushed changes but still don't see them

**Solutions**:
1. Wait 2-3 minutes for workflow to complete
2. Check Actions tab - is it still running?
3. Hard refresh browser: `Ctrl+Shift+R` or `Cmd+Shift+R`
4. Check GitHub Pages settings
5. Verify you pushed to `master` branch

### Cache Not Updated

**Problem**: Users still see old version

**Solutions**:
1. Manually run "Manual Cache Bust" workflow
2. Ask users to hard refresh: `Ctrl+Shift+R`
3. Clear browser cookies/cache for the site
4. Try again in 1 hour (CDN might be caching)

---

## Advanced: Custom Domain

If using custom domain (not required):

1. Go to **Settings** → **Pages**
2. Under "Custom domain", enter your domain
3. Create DNS records (follow GitHub's instructions)
4. GitHub automatically gets SSL certificate

---

## Security & Permissions

### GitHub Permissions

Workflows have these permissions:
- `contents: read` - Read repository files
- `pages: write` - Write to GitHub Pages
- `id-token: write` - Deploy to pages

These are minimal and secure. No access to secrets or sensitive data.

### Secrets & Environment Variables

Not used in deployment workflows. All configuration is public.

If you need to add secrets later:
1. **Settings** → **Secrets and variables** → **Actions**
2. Create new secret
3. Use in workflow: `${{ secrets.SECRET_NAME }}`

---

## Documentation

For more detailed information:

- **SETUP.md** - Development environment setup
- **GITHUB_ACTIONS.md** - Workflow documentation
- **CACHE_BUSTING.md** - Cache busting guide
- **README.md** - Project overview

---

## Quick Reference

| Task | Command |
|------|---------|
| Deploy | `git push origin master` |
| Check status | Go to Actions tab |
| View live site | https://irvandandung.github.io |
| Check logs | Actions → [Workflow] → Logs |
| Manual cache bust | Actions → Manual Cache Bust → Run |
| Test locally | `pnpm build && pnpm start` |
| Revert changes | `git revert <commit-id>` |

---

## Contact & Support

For issues or questions:

1. Check documentation files (README, SETUP, etc.)
2. Review GitHub Actions logs for error details
3. Check GitHub status: https://www.githubstatus.com/
4. Review workflow files in `.github/workflows/`

---

**Last Updated:** 2026-01-20  
**Deployment Method:** GitHub Actions + GitHub Pages  
**Build Time:** 2-3 minutes  
**Live URL:** https://irvandandung.github.io
