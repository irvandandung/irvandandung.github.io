# Cache Busting Guide

This document explains how cache busting works in this portfolio and how to use it.

## What is Cache Busting?

Cache busting forces browsers to download the latest version of files by adding a version query parameter or changing file names. Without it, users may see outdated content from their browser cache.

## Current Implementation

### 1. **Query Parameters for Static Assets**
All key assets now have version query parameters:

```
/favicon.svg?v=2    # Currently at version 2
/globals.css        # Automatically handled by Next.js
/images/*.png       # Automatically handled by Next.js
```

### 2. **Next.js Build Configuration** (`next.config.js`)
- Hash-based versioning for JavaScript chunks
- Unique build IDs generated on each build
- Automatic cache busting for CSS and JS files

### 3. **Cache Control Headers** (`public/_headers`)
- HTML: `max-age=0, must-revalidate` (Always fetch fresh)
- CSS/JS/Fonts/Images: `max-age=31536000, immutable` (Cache for 1 year)
- Static assets with version numbers stay cached longer

### 4. **HTML Meta Tags** (`src/app/layout.tsx`)
Added cache control meta tags:
```html
<meta httpEquiv="Cache-Control" content="public, max-age=0, must-revalidate" />
<meta httpEquiv="Pragma" content="no-cache" />
<meta httpEquiv="Expires" content="0" />
```

## How to Use

### Regular Development & Builds
```bash
pnpm build    # Normal build (Next.js handles JS/CSS cache busting automatically)
```

### When Updating Favicons or Assets
Before deploying when you update favicon or other static assets:

```bash
npm run cache-bust    # Increments version numbers
npm run build         # Builds the project
git add .
git commit -m "chore: Increment cache buster versions for updated assets"
git push
```

### Or Use the Combined Command
```bash
npm run deploy    # Automatically runs cache-bust then build
```

## What Gets Cache Busted

### Automatic (Handled by Next.js)
- ✅ JavaScript bundles (`.js` files)
- ✅ CSS files (`.css` files)
- ✅ Images in components (`<Image>` component)

### Manual (Use `npm run cache-bust`)
- ⚠️ Favicon (`/favicon.svg?v=X`)
- ⚠️ Public images (`/Dandung-removebg-preview.png`)
- ⚠️ Other static assets in `public/` folder

## Deployment Workflow

### Step 1: Make Changes
```bash
# Edit files, add features, etc.
```

### Step 2: Increment Cache Busters (if updating assets)
```bash
npm run cache-bust
```

### Step 3: Build
```bash
npm run build
```

### Step 4: Verify
```bash
# Check that build passes
# Verify files in ./out directory
```

### Step 5: Commit & Deploy
```bash
git add .
git commit -m "feat: Update portfolio with new changes"
git push origin master
```

## Monitoring Cache Busting

### Check Current Versions
```bash
grep -r "?v=" src/    # Show all versioned assets
```

### Browser DevTools
1. Open your portfolio in browser
2. Press F12 (Dev Tools)
3. Go to Network tab
4. Check URL query strings for version numbers
5. Refresh the page - should see new versions being fetched

### GitHub Pages
1. Go to repository settings
2. Check "Enforce HTTPS"
3. Files should have proper cache headers in responses

## Version Numbering Scheme

When you run `npm run cache-bust`:
- `?v=2` becomes `?v=3`
- `?v=10` becomes `?v=11`
- Automatically increments by 1

**Why not reset to 1?** Because old `?v=2` might still be cached. Incrementing ensures no collisions.

## Example Scenarios

### Scenario 1: Update Favicon
```bash
# Edit public/favicon.svg with new design
npm run cache-bust          # Changes ?v=2 to ?v=3
npm run build
git add .
git commit -m "design: Update favicon"
git push
# Users see new favicon immediately ✅
```

### Scenario 2: Update Hero Image
```bash
# Replace /public/Dandung-removebg-preview.png
# (No cache-bust needed for images in next/image - handled automatically)
npm run build
git add .
git commit -m "assets: Update hero image"
git push
# Users see new image immediately ✅
```

### Scenario 3: Update Styles
```bash
# Edit src/app/globals.css
npm run build    # Next.js auto-handles CSS versioning
git add .
git commit -m "styles: Update colors"
git push
# Users see new styles immediately ✅
```

## Troubleshooting

### Users Still See Old Version
**Problem:** Users report old content after deployment

**Solution:**
```bash
# Hard refresh in browser (Ctrl+Shift+R on Windows/Linux, Cmd+Shift+R on Mac)
# Or clear browser cache for the domain
# Increment cache busters again if needed:
npm run cache-bust && npm run build && git add . && git commit -m "chore: Force cache refresh"
```

### Cache Buster Script Not Finding Files
**Problem:** Cache buster shows "No version found"

**Solution:**
Edit `scripts/cache-buster.js` and add more patterns to the `files` array for assets that need manual versioning.

## Best Practices

1. ✅ Always run `npm run cache-bust` before deploying asset updates
2. ✅ Commit cache buster version increments with the asset changes
3. ✅ Use `npm run deploy` for convenience
4. ✅ Test locally with `pnpm build && pnpm start` before deploying
5. ❌ Don't manually edit version numbers - use the script
6. ❌ Don't push without committing cache buster changes

## Technical Details

### Hash Function
- Uses `xxhash64` for faster hashing of webpack assets
- Generates unique hashes for every build

### Build ID
- Generated as Unix timestamp on each build
- Different every time, forces JavaScript re-fetch

### Static Export
- Portfolio uses `output: 'export'` for static hosting on GitHub Pages
- Cache headers work via `_headers` file (Netlify format, works with GitHub Pages)

### ESLint Configuration
- Uses `.eslintrc.json` with Next.js recommended rules
- Runs on every push via GitHub Actions
- Ensures code quality and best practices
- See GITHUB_ACTIONS.md for workflow details

---

**Last Updated:** 2026-01-20
**Next.js Version:** 14.2.35
**Node Version:** 20.20.0
**ESLint Version:** 8.56.0
