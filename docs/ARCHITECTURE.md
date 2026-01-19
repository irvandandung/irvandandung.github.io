# Architecture & Best Practices

## Project Architecture

### File Structure

```
portfolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (routes)
│   │   │   ├── page.tsx       # Home page
│   │   │   ├── layout.tsx     # Root layout
│   │   │   ├── globals.css    # Global styles
│   │   │   ├── about/
│   │   │   │   └── page.tsx   # About page
│   │   │   └── projects/
│   │   │       └── page.tsx   # Projects page
│   │   └── error.tsx          # Error boundary (future)
│   ├── components/            # Reusable components
│   │   ├── Navigation.tsx     # Navigation component
│   │   ├── Footer.tsx         # Footer component
│   │   └── ProjectCard.tsx    # Project card component
│   └── lib/                   # Utilities and helpers
│       ├── utils.ts           # Helper functions
│       └── types.ts           # TypeScript types
├── public/                    # Static assets
│   ├── favicon.ico
│   ├── images/
│   └── projects/
├── docs/                      # Documentation
├── .github/                   # GitHub workflows
├── .env.local                 # Environment variables
├── package.json
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── postcss.config.js
```

## Technology Stack

### Core Framework
- **Next.js 14**: React meta-framework with built-in optimizations
- **React 18**: UI library for component-based development
- **TypeScript**: Type safety and better developer experience

### Styling
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing with Tailwind plugin

### Build & Development
- **Node.js 20**: JavaScript runtime
- **npm**: Package manager
- **ESLint**: Code linting

## Design Patterns

### Component Structure

```typescript
// Functional Component with TypeScript
interface ComponentProps {
  title: string;
  onClick: () => void;
}

export default function MyComponent({ title, onClick }: ComponentProps) {
  return (
    <div onClick={onClick}>
      {title}
    </div>
  );
}
```

### Use Client Directive

For interactive components:

```typescript
'use client';  // Must be at top of file

import { useState } from 'react';

export default function InteractiveComponent() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

## Best Practices

### 1. Component Organization

Keep components focused and single-responsibility:

```typescript
// ❌ Bad: Too much in one component
export default function Page() {
  // Navigation logic
  // Project filtering
  // Project rendering
  // Footer
}

// ✅ Good: Separated concerns
export default function Page() {
  return (
    <>
      <Navigation />
      <ProjectsList />
      <Footer />
    </>
  );
}
```

### 2. Props & Types

Always define types for props:

```typescript
// ❌ Bad
function ProjectCard(props) {
  return <div>{props.title}</div>;
}

// ✅ Good
interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
}

function ProjectCard({ title, description, technologies }: ProjectCardProps) {
  return <div>{title}</div>;
}
```

### 3. Styling

Prefer Tailwind utility classes:

```typescript
// ❌ Bad: CSS-in-JS or global styles
const styles = { color: 'blue', padding: '16px' };

// ✅ Good: Tailwind classes
<div className="text-blue-500 p-4">Content</div>
```

### 4. Image Optimization

Always use Next.js Image component:

```typescript
// ❌ Bad
<img src="/my-image.jpg" alt="description" />

// ✅ Good
import Image from 'next/image';

<Image
  src="/my-image.jpg"
  alt="description"
  width={800}
  height={600}
  priority  // For above-the-fold images
/>
```

### 5. Link Navigation

Use Next.js Link component:

```typescript
import Link from 'next/link';

// ❌ Bad: Full page reload
<a href="/about">About</a>

// ✅ Good: Client-side navigation
<Link href="/about">About</Link>
```

### 6. SEO Best Practices

```typescript
// Update metadata in layout.tsx
export const metadata: Metadata = {
  title: 'Optimized Title - Brand Name',  // 50-60 chars
  description: 'Compelling meta description with keywords.',  // 150-160 chars
  keywords: 'relevant, keywords, for, seo',
  robots: 'index, follow',
  openGraph: {
    title: 'Title',
    description: 'Description',
    type: 'website',
  },
};
```

### 7. Performance Optimization

```typescript
// 1. Dynamic imports for heavy components
import dynamic from 'next/dynamic';

const HeavyChart = dynamic(() => import('@/components/Chart'), {
  loading: () => <p>Loading...</p>,
  ssr: false,  // Render only on client
});

// 2. Use React.memo for expensive renders
const ProjectCard = React.memo(({ project }) => {
  return <div>{project.title}</div>;
});

// 3. Lazy load images
<Image src="/image.jpg" alt="..." loading="lazy" />
```

### 8. Error Handling

```typescript
// Create error boundary
'use client';

export default function Error({ error }: { error: Error }) {
  return (
    <div className="p-6">
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
    </div>
  );
}
```

## File Naming Conventions

| File Type | Convention | Example |
|-----------|-----------|---------|
| Components | PascalCase | `ProjectCard.tsx` |
| Pages | lowercase | `page.tsx` |
| Utilities | camelCase | `formatDate.ts` |
| Types | PascalCase | `Project.ts` |
| Constants | UPPER_CASE | `COLORS.ts` |

## Directory Structure Principles

1. **Co-locate related files**: Components near their usage
2. **Keep public folder flat**: Easy static file access
3. **Group by feature**: Similar functionality together
4. **Separate concerns**: Config, types, utils distinct

## Version Control

### .gitignore

```
node_modules/
.next/
.env.local
.DS_Store
*.log
dist/
```

### Commit Messages

Follow conventional commits:

```
feat: add project filtering
fix: correct navigation link
docs: update customization guide
style: format tailwind classes
perf: optimize image loading
```

## Dependencies Management

### Regular Updates

```bash
npm outdated              # Check for updates
npm update               # Update packages
npm audit                # Check for vulnerabilities
npm audit fix            # Fix known vulnerabilities
```

### Keep Dependencies Minimal

Evaluate before adding:
- Does it solve a real problem?
- What's the bundle impact?
- Is it actively maintained?
- Alternatives available?

## Performance Metrics (Core Web Vitals)

Target metrics for optimal performance:

- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

Monitor on [PageSpeed Insights](https://pagespeed.web.dev/)

## Development Workflow

1. Create feature branch: `git checkout -b feature/feature-name`
2. Make changes with meaningful commits
3. Test locally: `npm run dev`
4. Build check: `npm run build`
5. Lint check: `npm run lint`
6. Push and create pull request
7. Review and merge

## Future Enhancements

Potential improvements:

- [ ] Dark/Light mode toggle
- [ ] Blog section with markdown support
- [ ] Contact form with email integration
- [ ] Search functionality
- [ ] Filtering/sorting on projects page
- [ ] Animation effects (Framer Motion)
- [ ] Progressive Web App (PWA) setup
- [ ] Multi-language support
- [ ] Analytics integration
- [ ] Testing suite (Jest, Cypress)

## Troubleshooting Guide

### Common Issues

| Issue | Solution |
|-------|----------|
| Styles not applying | Clear `.next` folder and rebuild |
| TypeScript errors | Run `tsc --noEmit` to check |
| Build fails | Check `npm run build` logs locally |
| Performance issues | Analyze with `next/bundle-analyzer` |

## Resources

- [Next.js Best Practices](https://nextjs.org/learn)
- [React Best Practices](https://react.dev/community/community-blogs)
- [Tailwind Best Practices](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
