# Portfolio Website - Muhamad Irvan Dandung

A modern, responsive portfolio website showcasing professional work and experience. Built with **Next.js 14**, **React 18**, **TypeScript**, and **Tailwind CSS** with full internationalization (English & Indonesian).

**Live**: https://irvandandung.github.io | **GitHub**: https://github.com/irvandandung

---

## Features

- ✅ **Fully Responsive**: Mobile-first design with dark theme and purple accent (#C778DD)
- ✅ **Internationalization (i18n)**: English & Indonesian language support with localStorage persistence
- ✅ **3 Main Pages**:
  - **Home**: Hero section with gradient text, featured projects, skills, and testimonial quote
  - **Projects**: Showcase of professional projects with status tags (Live, Development, etc.)
  - **About Me**: Full biography, education, experience, and downloadable resume
- ✅ **Performance Optimized**: Static generation, optimized bundles, minimal CSS
- ✅ **TypeScript**: Full type safety with zero errors
- ✅ **SEO Ready**: Metadata optimization and semantic HTML
- ✅ **Clean Code**: Component-based architecture with reusable components

## Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Next.js** | 14.2 | React framework with App Router |
| **React** | 18.3 | UI library |
| **TypeScript** | 5.4 | Type safety |
| **Tailwind CSS** | 3.4 | Utility-first styling |
| **Node.js** | 20 LTS | Runtime environment |
| **pnpm** | 10.28+ | Package manager (faster than npm) |

## Quick Start

### Prerequisites

- Node.js 20+ (managed with nvm)
- pnpm 10.28+ (or npm)

### Installation & Setup

**Option 1: Automated (Recommended)**
```bash
./dev.sh    # Auto-handles nvm setup + starts dev server
```

**Option 2: Manual Setup**
```bash
# Setup Node.js version
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use 20

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Then open **http://localhost:3000** in your browser.

## Available Commands

```bash
./dev.sh              # Start dev server (auto nvm setup)
pnpm dev              # Development server with hot reload
pnpm build            # Production build
pnpm start            # Run production server
pnpm lint             # Check code quality with ESLint
```

## Project Structure

```
/var/www/irvandandung.github.io/
├── src/
│   ├── app/
│   │   ├── layout.tsx                     # Root layout with I18nProvider
│   │   ├── page.tsx                       # Home page (123 lines)
│   │   ├── globals.css                    # Global styles & Tailwind
│   │   ├── projects/page.tsx              # Projects page (56 lines)
│   │   ├── about-me/page.tsx              # About page (102 lines)
│   │   ├── components/
│   │   │   ├── Navigation.tsx             # Sidebar + Nav bar
│   │   │   ├── Hero.tsx                   # Hero section
│   │   │   ├── Footer.tsx                 # Footer with social links
│   │   │   └── LanguageSwitcher.tsx       # Language selector (EN/ID)
│   │   ├── contexts/
│   │   │   └── I18nContext.tsx            # i18n state management
│   │   └── hooks/
│   │       └── useTitleAnimation.ts       # Browser tab title animation
│   └── locales/
│       ├── en.json                        # English translations (complete)
│       └── id.json                        # Indonesian translations (complete)
├── public/                                # Static assets
├── docs/                                  # Detailed documentation
│   ├── ARCHITECTURE.md
│   ├── CUSTOMIZATION.md
│   ├── DEPLOYMENT.md
│   ├── DESIGN_UPDATES.md
│   ├── GETTING_STARTED.md
│   └── USING_PNPM.md
├── tailwind.config.ts                    # Theme colors & Tailwind config
├── next.config.js                        # Next.js configuration
├── tsconfig.json                         # TypeScript configuration
├── package.json                          # Dependencies
├── pnpm-lock.yaml                        # Lock file (use pnpm)
├── README.md                             # This file
├── QUICKSTART.md                         # Quick reference guide
└── dev.sh                                # Dev startup script
```

## Pages & Routes

### Home Page (`/`)
- **Hero Section**: Gradient text with "Hello, I'm Muhamad Irvan Dandung"
- **Featured Projects**: 3 selected projects from the full projects list
- **Skills Table**: 6 categories of skills with proficiency details
- **Quote Section**: Inspirational message
- **Call-to-Action**: Links to explore projects and about page

### Projects Page (`/projects`)
- **Project Grid**: Cards showcasing all professional projects
- **Project Details**: Title, description, technologies used
- **Status Tags**: Live, Development, Planning, Archived, Cached
- **Color-Coded**: Different background colors for visual appeal
- **Responsive**: 1-2 columns on mobile, 3 on desktop

### About Me Page (`/about-me`)
- **Biography**: 3-paragraph personal introduction
- **Experience**: Professional work history with companies and roles
- **Education**: Degrees, institutions, and achievements
- **Resume Download**: PDF resume download button
- **Contact Links**: Email, social media, messaging platforms

## Internationalization (i18n) System

### Supported Languages
- **English (EN)**: Default language
- **Indonesian (ID)**: Bahasa Indonesia

### How It Works

1. **Context-Based**: `useI18n()` hook provides translations globally
2. **localStorage**: Language preference persists across sessions
3. **Automatic**: Default language set to browser locale or EN
4. **Hydration Safe**: Built-in guards prevent hydration mismatches

### Using i18n in Components

```tsx
import { useI18n } from '@/app/contexts/I18nContext';

export default function MyComponent() {
  const { t, locale, setLocale, isReady } = useI18n();

  // Prevent hydration errors
  if (!isReady || !t) return null;

  return (
    <div>
      <h1>{t.pages.home.hero.title1}</h1>
      <button onClick={() => setLocale('id')}>
        Switch to {locale === 'en' ? 'Indonesian' : 'English'}
      </button>
    </div>
  );
}
```

### Content Structure (`src/locales/*.json`)

```json
{
  "header": {
    "logo": "MID",
    "nav": { "home": "Home", "projects": "Projects", "about": "About" }
  },
  "nav": { "home": "Home", "projects": "Projects", "aboutMe": "About Me" },
  "pages": {
    "home": {
      "hero": { "title1": "Hello", "title2": "I'm Muhamad Irvan Dandung" },
      "projects": { "title": "Featured Projects", "viewAll": "View All Projects" }
    },
    "projects": { "title": "My Projects", "viewProject": "View Project" },
    "aboutMe": { "title": "About Me", "bio": "Biography text..." }
  },
  "footer": { "social": "Follow Me", "links": {} }
}
```

## Design System

### Colors

| Color | Hex | Usage |
|-------|-----|-------|
| **Primary Purple** | `#C778DD` | Accents, hover states, active links |
| **Primary Light** | `#E8C4F0` | Hover effects |
| **Dark Background** | `#1A1F2E` | Main page background |
| **Dark Secondary** | `#242D3D` | Card backgrounds |
| **Dark Tertiary** | `#2D3A4F` | Borders, subtle elements |
| **Text Default** | `gray-100` | Primary text |
| **Text Secondary** | `gray-300` | Secondary text |
| **Text Muted** | `gray-400` | Muted text |

### Typography

- **Font Family**: Fira Code (monospace)
- **Weights**: 300, 400, 500, 600, 700
- **Headings**: 600-700 weight
- **Body**: 400 weight
- **Small Text**: 300 weight

### Components

- **Navigation.tsx**: Responsive sidebar + navbar with active state highlighting
- **Hero.tsx**: Animated hero section with gradient text
- **Footer.tsx**: Social links and contact information
- **LanguageSwitcher.tsx**: Language selection dropdown

## Customization Guide

### Update Personal Information

All content is stored in `src/locales/{en,id}.json`. Edit these files to update:
- Name and title
- Bio and experience
- Projects and skills
- Social media links
- Contact information

**Never hardcode text** - use the i18n system for all content.

### Add New Projects

1. Open `src/locales/en.json` and `src/locales/id.json`
2. Add to `pages.projects.items` array:

```json
{
  "id": 7,
  "title": "Project Title",
  "description": "Project description",
  "technologies": ["Tech1", "Tech2"],
  "status": "Live",
  "bgColor": "bg-blue-900",
  "link": "https://project-link.com"
}
```

### Update Colors

Edit `tailwind.config.ts`:

```typescript
theme: {
  colors: {
    'primary-purple': '#C778DD',      // Change primary color
    'dark-bg': '#1A1F2E',              // Change background
    // ... other colors
  }
}
```

Then update all page references and rebuild.

### Add New Pages

1. Create `src/app/[page-name]/page.tsx`
2. Import and use the `useI18n()` hook
3. Add content to `src/locales/*.json`
4. Update navigation in `Navigation.tsx`

### Change Fonts

In `src/app/layout.tsx`, replace the font import:

```tsx
import { Fira_Code } from 'next/font/google';

const firaCode = Fira_Code({
  subsets: ['latin'],
  weights: ['300', '400', '500', '600', '700'],
});
```

## Performance Metrics

| Metric | Value |
|--------|-------|
| **Home Bundle** | 2.11 kB |
| **Projects Bundle** | 903 B |
| **About Bundle** | 1.14 kB |
| **Shared JS** | 87.2 kB |
| **TypeScript Errors** | 0 |
| **Build Time** | ~5-10 seconds |
| **Pages Generated** | 7 (3 main + 4 system) |

## Deployment

### Option 1: Vercel (Recommended)

1. Push code to GitHub: https://github.com/irvandandung/irvandandung.github.io
2. Connect repo to **Vercel** at https://vercel.com
3. Click "Deploy"
4. Configure domain (if using custom domain)

**Deployment Docs**: See `docs/DEPLOYMENT.md`

### Option 2: Netlify

1. Connect GitHub repository
2. Build command: `pnpm build`
3. Publish directory: `.next`
4. Deploy

### Option 3: GitHub Pages

1. Push to GitHub
2. Enable GitHub Pages in repository settings
3. Select `gh-pages` branch (auto-created by deploy workflow)

## GitHub Actions & Automation

This portfolio uses **3 automated GitHub Actions workflows** for testing, building, and deployment:

### 1. **Build and Deploy** (Automatic)
- **Trigger**: Every push to `master` branch
- **Actions**: Cache busting → Build → Deploy to GitHub Pages
- **File**: `.github/workflows/nextjs.yml`

### 2. **Test and Lint** (Automatic)
- **Trigger**: Every push and pull request
- **Actions**: Lint code → Test build → Verify cache busting
- **File**: `.github/workflows/test.yml`

### 3. **Manual Cache Bust** (On-Demand)
- **Trigger**: Manual dispatch from GitHub Actions UI
- **Actions**: Force cache refresh + rebuild + redeploy
- **File**: `.github/workflows/manual-cache-bust.yml`
- **How to use**: Actions tab → Manual Cache Bust → Run workflow

### Why Automated Workflows?

✅ **Automatic cache busting** - No manual version incrementing needed  
✅ **Continuous deployment** - Code pushed = live in minutes  
✅ **Quality checks** - Linting and build tests before deployment  
✅ **Zero-downtime** - Deploy while users browse the site  

**Read more**: See `GITHUB_ACTIONS.md` for complete workflow documentation

## Environment Variables

`.env.local` (optional):

```
NEXT_PUBLIC_SITE_URL=https://irvandandung.github.io
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

**Note**: Not required for basic functionality.

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome | ✅ Latest |
| Firefox | ✅ Latest |
| Safari | ✅ Latest |
| Edge | ✅ Latest |
| Mobile (iOS/Android) | ✅ Latest |

## Development Workflow

### Adding a Feature

1. Create a new branch: `git checkout -b feature/your-feature`
2. Make changes and test locally: `./dev.sh`
3. Build for production: `pnpm build`
4. Commit changes: `git commit -m "feat: your feature description"`
5. Push: `git push origin feature/your-feature`
6. Create a pull request on GitHub

### Code Standards

- ✅ TypeScript strict mode enabled
- ✅ No ESLint warnings
- ✅ Tailwind CSS only (no custom CSS except globals.css)
- ✅ Component-based architecture
- ✅ Hydration-safe React components
- ✅ Responsive design (mobile-first)

## Git Workflow

**Recent Commits:**
1. `91d56b2` - Improve: Lighten background colors and increase text contrast
2. `d577eda` - Fix: Active navigation link highlighting with usePathname
3. `1684735` - Refactor: Extract Navigation, Hero, and Footer components
4. `682a440` - Fix hydration error: Add isReady checks to all pages
5. `670e9d6` - Update i18n: Support English and Indonesian only
6. `2e2120e` - Initial commit: Personalized portfolio with i18n

**Repository Configuration:**
```
User: Muhamad Irvan Dandung
Email: irvandandung1@gmail.com
Default Branch: master
```

## Troubleshooting

### Port 3000 Already in Use

```bash
# Find process on port 3000
lsof -i :3000

# Kill process
kill -9 <PID>

# Or use different port
pnpm dev -p 3001
```

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
pnpm install

# Rebuild
pnpm build
```

### Hydration Errors

- Check that `isReady` is true before rendering
- Use `useEffect` for client-only code
- See example in `src/app/page.tsx`

### i18n Not Working

- Verify `src/locales/en.json` and `src/locales/id.json` exist
- Check browser console for errors
- Clear localStorage: `localStorage.clear()`
- Check `I18nContext.tsx` is properly configured in `layout.tsx`

## Documentation

See the `docs/` folder for detailed guides:

- **GETTING_STARTED.md** - Setup and first steps
- **ARCHITECTURE.md** - Technical overview and design decisions
- **CUSTOMIZATION.md** - How to modify and extend
- **DEPLOYMENT.md** - Production deployment options
- **DESIGN_UPDATES.md** - Recent design improvements
- **USING_PNPM.md** - pnpm vs npm comparison

## Contact & Links

- **Email**: irvandandung1@gmail.com
- **GitHub**: https://github.com/irvandandung
- **LinkedIn**: https://www.linkedin.com/in/irvandandung/
- **Instagram**: https://www.instagram.com/irvandandung/
- **Discord**: irvandandung

## License

This project is open source and available for personal use.

## Contributing

Found a bug? Have a suggestion? Feel free to:
1. Check existing issues
2. Create a new issue with details
3. Submit a pull request

---

**Status**: ✅ Production Ready  
**Version**: 2.0.0  
**Last Updated**: January 2026  
**Maintained by**: Muhamad Irvan Dandung

Built with ❤️ using Next.js, React, TypeScript, and Tailwind CSS
