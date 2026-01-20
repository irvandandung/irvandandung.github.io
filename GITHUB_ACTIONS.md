# GitHub Actions Workflows Guide

This document explains the automated workflows for this portfolio.

## Overview

Three GitHub Actions workflows are configured to automate the build, test, and cache busting process:

1. **Build and Deploy** - Automatic on every push (production)
2. **Test and Lint** - Automatic on every push/PR (quality check)
3. **Manual Cache Bust** - Manual trigger via GitHub UI

---

## 1. Build and Deploy Workflow

**File:** `.github/workflows/nextjs.yml`  
**Trigger:** `push` to `master` branch  
**Purpose:** Build and deploy the portfolio to GitHub Pages with automatic cache busting

### What It Does:
1. ✅ Checks out the code
2. ✅ Sets up Node.js v20 and pnpm
3. ✅ Installs dependencies
4. ✅ **Runs cache buster script** (increments version numbers)
5. ✅ Builds with Next.js
6. ✅ Uploads build artifacts
7. ✅ Deploys to GitHub Pages

### How It Works:
```
Push to master
    ↓
Run cache-buster.js (increments ?v=2 → ?v=3)
    ↓
Build with Next.js
    ↓
Deploy to GitHub Pages
    ↓
Users get fresh version ✅
```

### Cache Busting Step:
```yaml
- name: Increment cache buster versions
  run: node scripts/cache-buster.js
```

This automatically increments all version numbers before building, ensuring no cache issues.

---

## 2. Test and Lint Workflow

**File:** `.github/workflows/test.yml`  
**Trigger:** `push` to `master` and on `pull_request`  
**Purpose:** Quality assurance and testing

### What It Does:
1. ✅ Runs ESLint
2. ✅ Tests build process
3. ✅ Tests cache buster script
4. ✅ Verifies dependencies

### Why It's Useful:
- Catches linting errors before deployment
- Ensures build doesn't break on deployment
- Verifies cache buster script works correctly
- Runs on PRs to catch issues early

### Status Badge:
You can add to README.md:
```markdown
![Tests](https://github.com/irvandandung/irvandandung.github.io/actions/workflows/test.yml/badge.svg)
```

---

## 3. Manual Cache Bust Workflow

**File:** `.github/workflows/manual-cache-bust.yml`  
**Trigger:** Manual dispatch via GitHub Actions UI  
**Purpose:** Force cache refresh without code changes

### How to Use:

1. Go to your GitHub repository
2. Click **Actions** tab
3. Select **Manual Cache Bust** workflow
4. Click **Run workflow**
5. Enter reason (e.g., "Fixed favicon display")
6. Click **Run workflow**

### What It Does:
1. ✅ Checks out code
2. ✅ Runs cache buster script
3. ✅ Commits changes with custom message
4. ✅ Pushes to repository
5. ✅ Builds and deploys

### Input Fields:
- **reason**: Why you're busting cache (required)
  - Example: "Updated static assets"
  - Example: "Fixed favicon not showing"
  - Example: "Clear all browser caches"

---

## Workflow Status

Check the status of your workflows:

1. Go to repository → **Actions** tab
2. See list of all workflow runs
3. Click any workflow to see details
4. Green checkmark ✅ = Success
5. Red X ❌ = Failed

---

## Deployment Flow Diagram

```
Developer pushes code
        ↓
GitHub detects push to master
        ↓
nextjs.yml workflow starts
        ↓
├─ Setup Node & pnpm
├─ Install dependencies
├─ Run cache-buster.js → increments versions
├─ Build with Next.js
├─ Upload artifact
└─ Deploy to GitHub Pages
        ↓
Portfolio updated with fresh assets ✅
        ↓
Users see new content (no cache issues)
```

---

## Understanding Cache Buster in Workflows

### Before Workflows:
```
Push code
    ↓
User manual runs: npm run cache-bust
    ↓
Commits changes
    ↓
Pushes to GitHub
```

### With Workflows (Current):
```
Push code
    ↓
Workflow automatically runs cache-bust
    ↓
Builds and deploys
    ↓
No manual steps needed! ✅
```

---

## Troubleshooting

### Workflow Failed ❌

**Check the logs:**
1. Go to Actions tab
2. Click the failed workflow run
3. Click the failed job
4. Scroll to see error message

**Common Issues:**

| Issue | Solution |
|-------|----------|
| Build fails | Check build logs, fix errors, push again |
| pnpm not found | Workflow will install it automatically |
| Dependencies fail | Delete `pnpm-lock.yaml`, commit, push |
| Cache buster fails | Check `scripts/cache-buster.js` is executable |

### Workflow Not Running

**Problem:** Push doesn't trigger workflow

**Solutions:**
1. Check branch is `master` (not `main`)
2. Check workflow file is in `.github/workflows/`
3. Verify YAML syntax is correct
4. Wait a few seconds (GitHub needs time to register)

### Manual Cache Bust Stuck

**Problem:** Manual workflow doesn't complete

**Solutions:**
1. Check internet connection
2. Retry manually (Actions tab → Manual Cache Bust → Run)
3. Check GitHub status: https://www.githubstatus.com/

---

## Best Practices

### ✅ Do:
1. ✅ Use automatic workflows (they handle cache busting)
2. ✅ Use manual cache bust when updating assets outside code
3. ✅ Check Actions tab after pushing to verify success
4. ✅ Use PR workflow to catch issues before merge

### ❌ Don't:
1. ❌ Manually increment versions if workflow is enabled
2. ❌ Push without checking test workflow passes
3. ❌ Run cache-bust locally and in workflow (double increment)
4. ❌ Disable or modify workflows unless you know what you're doing

---

## Environment & Permissions

### Permissions Set:
- `contents: read` - Read repository files
- `pages: write` - Write to GitHub Pages
- `id-token: write` - Deploy to GitHub Pages

### Concurrency:
- Only one deployment runs at a time
- Prevents race conditions
- Queued deployments skip previous runs

---

## Monitoring Deployments

### View Deployment History:
1. Go to repository settings
2. **Environments** section
3. Click **github-pages**
4. See all deployment history

### View Environment URL:
The portfolio is deployed at:
```
https://irvandandung.github.io
```

---

## Performance Considerations

### Build Time:
- First build: ~2-3 minutes (fresh cache)
- Subsequent builds: ~1-2 minutes (pnpm cache)

### Cache Storage:
- pnpm cache: ~500MB (stored in GitHub Actions cache)
- Build artifacts: Temporary (deleted after deployment)

### Cost:
- Free GitHub Actions for public repositories
- Uses: ~100MB per build
- Typical usage: Well within free tier

---

## Customization

### Add More Workflows:
Create new file in `.github/workflows/` with `.yml` extension

### Modify Build Steps:
Edit `nextjs.yml` steps section

### Change Trigger Conditions:
Edit `on:` section in workflow files

Example - Trigger on release:
```yaml
on:
  release:
    types: [published]
```

---

## ESLint Configuration

**File:** `.eslintrc.json`  
**Purpose:** Code quality checks and best practices

### ESLint Setup:
```json
{
  "extends": "next/core-web-vitals",
  "rules": {
    "react/no-unescaped-entities": "off",
    "@next/next/no-html-link-for-pages": "off"
  }
}
```

### What It Checks:
- ✅ React best practices
- ✅ Next.js specific rules
- ✅ Hook dependencies
- ✅ Type safety
- ✅ Performance issues

### Running ESLint Locally:
```bash
pnpm lint    # Check for linting errors
```

### Fixing Linting Issues:
```bash
# ESLint will auto-fix most issues
pnpm lint

# If needed, manually fix complex issues
# ESLint will show file names and line numbers
```

### ESLint in Workflows:
- Runs on every push (Test & Lint workflow)
- Blocks deployment if there are errors
- Helps maintain code quality across team

### Common Issues & Fixes:

| Issue | Solution |
|-------|----------|
| Ref hook warning | Store ref.current in variable before cleanup |
| Unused variables | Remove them or prefix with `_` |
| Missing dependencies | Add to useEffect dependency array |
| Type errors | Check TypeScript types are correct |

---

## Learning Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Workflow Syntax Reference](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)
- [Actions Marketplace](https://github.com/marketplace?type=actions)
- [ESLint Rules](https://eslint.org/docs/rules/)
- [Next.js ESLint Plugin](https://nextjs.org/docs/basic-features/eslint)

---

## Quick Reference

| Task | How |
|------|-----|
| View workflow status | Actions tab |
| Trigger manual cache bust | Actions → Manual Cache Bust → Run |
| Check deployment status | Settings → Environments → github-pages |
| View build logs | Actions → [Workflow] → Job details |
| Disable workflow | Disable in Actions tab or delete `.yml` file |
| Force rebuild | Push empty commit: `git commit --allow-empty` |

---

**Last Updated:** 2026-01-20  
**Workflows Count:** 3  
**Automatic Cache Busting:** Enabled ✅  
**ESLint Configuration:** Active ✅
