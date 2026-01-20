# Development Setup Guide

Complete guide for setting up your development environment for this portfolio.

---

## Prerequisites

- **Node.js**: Version 20 LTS (managed with nvm)
- **pnpm**: Version 10.28+ (faster than npm)
- **Git**: For version control
- **Code Editor**: VS Code recommended

---

## Installation Steps

### Step 1: Clone the Repository

```bash
git clone https://github.com/irvandandung/irvandandung.github.io.git
cd irvandandung.github.io
```

### Step 2: Setup Node.js (Recommended)

Using nvm (Node Version Manager):

```bash
# Install nvm (if not already installed)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Load nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Use Node 20
nvm use 20
```

**Or use the automated script:**
```bash
./dev.sh    # Auto-handles nvm setup
```

### Step 3: Install Dependencies

```bash
# Install pnpm globally (if not installed)
npm install -g pnpm@10

# Install project dependencies
pnpm install
```

### Step 4: Verify Installation

```bash
# Check Node version
node --version     # Should be v20.x.x

# Check pnpm version
pnpm --version     # Should be 10.28+

# Check dependencies
pnpm list          # Lists installed packages
```

---

## Development Workflow

### Start Development Server

**Option 1: Automated (Recommended)**
```bash
./dev.sh
```

**Option 2: Manual**
```bash
pnpm dev
```

Then open **http://localhost:3000** in your browser.

### Make Code Changes

Edit files in `src/` directory:
- Components: `src/app/components/`
- Pages: `src/app/page.tsx`, `src/app/projects/page.tsx`, etc.
- Styles: `src/app/globals.css`
- Translations: `src/locales/en.json`, `src/locales/id.json`

Changes will auto-reload in the browser (hot reload).

### Check Code Quality

Run linting to catch errors:
```bash
pnpm lint
```

This runs ESLint with Next.js recommended rules.

### Fix Linting Issues

```bash
# ESLint auto-fixes most issues
pnpm lint
```

If there are remaining issues, fix them manually based on the error messages.

---

## Building & Testing

### Test Build Locally

Before pushing to GitHub, test the production build:

```bash
# Build for production
pnpm build

# This creates the `out/` folder with optimized code
```

### Preview Production Build

```bash
# After building, you can preview
pnpm start
```

Then visit **http://localhost:3000**

---

## Cache Busting for Deployments

### Manual Cache Bust (Optional)

If updating favicon or static assets:

```bash
npm run cache-bust    # Increments version numbers
npm run build
```

### Automated Cache Busting

GitHub Actions handles this automatically on every push. No manual steps needed!

---

## Git Workflow

### Create a New Branch

```bash
git checkout -b feature/your-feature-name
```

Branch naming convention:
- `feature/add-new-section` - New features
- `fix/update-favicon` - Bug fixes
- `docs/update-readme` - Documentation

### Make Commits

```bash
# Stage changes
git add .

# Commit with descriptive message
git commit -m "feat: Add new section to about page"
```

Commit message format:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `test:` - Test updates

### Push to GitHub

```bash
git push origin feature/your-feature-name
```

### Create Pull Request

1. Go to GitHub repository
2. Click "New Pull Request"
3. Select your branch
4. Add description
5. Click "Create Pull Request"

---

## Environment Variables

### Optional: Create `.env.local`

```bash
# Copy example
cp .env.example .env.local  # If it exists

# Or create manually
nano .env.local
```

Add any needed environment variables (usually not required for this project).

---

## Troubleshooting

### Issue: Port 3000 Already in Use

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
pnpm dev -p 3001
```

### Issue: pnpm Not Found

```bash
# Install pnpm globally
npm install -g pnpm@10

# Verify
pnpm --version
```

### Issue: Node Version Wrong

```bash
# Check current version
node --version

# Use correct version
nvm use 20

# Or set default
nvm alias default 20
```

### Issue: Dependencies Not Installing

```bash
# Clear cache
pnpm store prune

# Reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Issue: ESLint Errors

```bash
# Run linting
pnpm lint

# Fix common issues
pnpm lint  # ESLint auto-fixes what it can

# For remaining issues, fix manually based on error location
```

---

## VS Code Setup (Recommended)

### Install Extensions

1. **ESLint** - for linting errors
2. **Prettier** - for code formatting
3. **Tailwind CSS IntelliSense** - for Tailwind classes
4. **TypeScript Vue Plugin** - for TypeScript support

### VS Code Settings

Create `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ]
}
```

---

## Project Structure Overview

```
src/
├── app/
│   ├── layout.tsx              # Root layout & metadata
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles
│   ├── components/
│   │   ├── Navigation.tsx       # Header navigation
│   │   ├── Hero.tsx            # Hero section
│   │   ├── Footer.tsx          # Footer
│   │   └── LanguageSwitcher.tsx # Language selector
│   ├── contexts/
│   │   └── I18nContext.tsx     # i18n state
│   ├── hooks/
│   │   ├── useCounter.ts       # Counting animation
│   │   ├── useInView.ts        # Scroll detection
│   │   └── useTitleAnimation.ts # Tab title animation
│   ├── projects/
│   │   └── page.tsx            # Projects page
│   └── about-me/
│       └── page.tsx            # About page
├── locales/
│   ├── en.json                 # English translations
│   └── id.json                 # Indonesian translations
public/
├── favicon.svg                 # Favicon
└── Dandung-removebg-preview.png # Profile photo
```

---

## Common Development Tasks

### Add a New Page

1. Create directory: `src/app/new-page/`
2. Create file: `src/app/new-page/page.tsx`
3. Add to navigation: `src/app/components/Navigation.tsx`

### Update Translation

1. Edit `src/locales/en.json` (English)
2. Edit `src/locales/id.json` (Indonesian)
3. Changes auto-reload in development

### Update Styles

1. Edit `src/app/globals.css`
2. Or add inline Tailwind classes to components
3. Changes auto-reload

### Add New Component

1. Create: `src/app/components/MyComponent.tsx`
2. Add type: `'use client'` if using hooks
3. Import and use in pages

---

## Performance Tips

### Use Tailwind Classes

Prefer Tailwind CSS classes over custom CSS:

```tsx
// ✅ Good
<div className="flex items-center gap-4 p-6 bg-dark-secondary">

// ❌ Avoid custom CSS when Tailwind class exists
<div style={{ display: 'flex', gap: '16px' }}>
```

### Optimize Images

Always use Next.js `Image` component:

```tsx
import Image from 'next/image';

export default function Hero() {
  return (
    <Image
      src="/profile.png"
      alt="Profile"
      width={200}
      height={200}
      priority
    />
  );
}
```

### Code Splitting

Components are automatically code-split. Keep components focused and small.

---

## Production Deployment

### Before Deploying

```bash
# 1. Update cache busters (if changing static files)
npm run cache-bust

# 2. Run linting
pnpm lint

# 3. Build for production
pnpm build

# 4. Verify build
pnpm start
```

### Deploy to GitHub Pages

```bash
git add .
git commit -m "feat: Your feature description"
git push origin master
```

GitHub Actions will:
1. Run linting automatically
2. Run tests
3. Increment cache buster versions
4. Build production code
5. Deploy to GitHub Pages

Visit: https://irvandandung.github.io ✅

---

## Resources

- **Next.js Docs**: https://nextjs.org/docs
- **React Docs**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com/docs
- **TypeScript**: https://www.typescriptlang.org/docs
- **ESLint**: https://eslint.org/docs/rules/

---

## Getting Help

### Check Documentation

1. **README.md** - Project overview
2. **GITHUB_ACTIONS.md** - Workflow guide
3. **CACHE_BUSTING.md** - Cache busting guide
4. **DEPLOYMENT.md** - Deployment instructions

### Debug Issues

1. Check console for error messages
2. Run `pnpm lint` to check code quality
3. Check browser DevTools (F12)
4. Check GitHub Actions logs

### Common Commands Reference

```bash
./dev.sh              # Start development
pnpm dev              # Manual dev start
pnpm build            # Production build
pnpm lint             # Check code quality
pnpm cache-bust       # Increment versions
pnpm deploy           # cache-bust + build
git status            # Check git status
git log --oneline     # View commit history
```

---

**Last Updated:** 2026-01-20  
**Node Version:** 20 LTS  
**pnpm Version:** 10.28+  
**Next.js Version:** 14.2.35
