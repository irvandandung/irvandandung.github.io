# Getting Started Guide

## Prerequisites

Ensure you have the following installed:
- **Node.js 18+** (managed via nvm)
- **npm** (comes with Node.js)
- **Git** (for version control)

## Initial Setup

### 1. Check Node.js Version

```bash
node --version  # Should be v18+ (v20.20.0 recommended)
npm --version   # Should be 10+
```

### 2. Use Correct Node Version

If using nvm:

```bash
nvm use 20
```

### 3. Install Dependencies

Navigate to project directory and install dependencies:

```bash
cd /var/www/irvandandung.github.io/portfolio
npm install
```

### 4. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Development Workflow

### Hot Reload

Changes to files are automatically reflected in the browser without manual refresh.

### Code Quality

Run linting to check for issues:
```bash
npm run lint
```

### Building for Production

```bash
npm run build
```

This creates optimized production build in `.next/` directory.

### Production Server

```bash
npm start
```

Runs the production build on `http://localhost:3000`

## Project Structure

```
src/
├── app/                 # App router directory (Next.js 14)
│   ├── layout.tsx      # Root layout wrapper
│   ├── page.tsx        # Home page
│   ├── globals.css     # Global Tailwind styles
│   ├── about/
│   │   └── page.tsx    # About page
│   └── projects/
│       └── page.tsx    # Projects page
└── components/         # Reusable React components
```

## Key Files

| File | Purpose |
|------|---------|
| `package.json` | Dependencies and scripts |
| `next.config.js` | Next.js configuration |
| `tailwind.config.ts` | Tailwind CSS theme and extensions |
| `tsconfig.json` | TypeScript configuration |
| `postcss.config.js` | PostCSS plugins (Tailwind) |

## Customization

### Update Content

1. **Home Page**: Edit `/src/app/page.tsx`
2. **Projects**: Edit `/src/app/projects/page.tsx`
3. **About**: Edit `/src/app/about/page.tsx`

### Add Components

Create new components in `/src/components/`:

```typescript
// src/components/Header.tsx
export default function Header() {
  return <header>My Header</header>;
}
```

### Styling

Use Tailwind CSS classes for styling:

```typescript
<div className="bg-blue-500 text-white p-4 rounded-lg">
  Styled with Tailwind
</div>
```

## Troubleshooting

### Port 3000 Already in Use

```bash
lsof -i :3000  # Find process
kill -9 <PID>  # Kill process
```

### Module Not Found

```bash
npm install
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

Clear Next.js cache:
```bash
rm -rf .next
npm run build
```

## Best Practices

- **Use TypeScript**: Take advantage of type checking
- **Component Reusability**: Create components for repeated UI patterns
- **Optimize Images**: Use Next.js Image component
- **SEO**: Update metadata in `layout.tsx`
- **Performance**: Monitor bundle size and use dynamic imports

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## Next Steps

1. Customize content with your information
2. Add your own projects
3. Update colors/theme in Tailwind config
4. Deploy to Vercel or your hosting platform
