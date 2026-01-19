# Customization Guide

## Overview

This guide walks you through customizing your portfolio to showcase your unique brand and experience.

## 1. Personal Information

### Update Your Name and Title

**File**: `/src/app/page.tsx`

```typescript
// Change this section in the hero:
<h1 className="text-6xl font-bold leading-tight">
  Hi, I'm a Senior{" "}
  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
    Developer  {/* Change your title */}
  </span>
</h1>
```

### Update Bio

**File**: `/src/app/about/page.tsx`

Replace the placeholder text in the "Who Am I?" section with your actual bio.

## 2. Customize Projects

### Add Your Projects

**File**: `/src/app/projects/page.tsx`

Find the `projects` array and add/edit entries:

```typescript
const projects: Project[] = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'What does this project do? What problem does it solve?',
    technologies: ['Tech1', 'Tech2', 'Tech3'],
    link: 'https://github.com/yourusername/project', // or project URL
  },
  // ... more projects
];
```

### Project Card Customization

To add project images, replace the placeholder gradient div:

```typescript
// Current:
<div className="bg-gradient-to-br from-blue-500 to-cyan-500 h-48 rounded-lg"></div>

// With image:
import Image from 'next/image';

<Image
  src="/projects/my-project.jpg"
  alt="Project screenshot"
  width={800}
  height={480}
  className="w-full h-48 object-cover rounded-lg"
/>
```

## 3. Update Experience Timeline

**File**: `/src/app/about/page.tsx`

Edit the `experience` array:

```typescript
const experience = [
  {
    role: 'Your Job Title',
    company: 'Your Company Name',
    period: '2023 - Present',
    description: 'What did you accomplish in this role?',
  },
  // ... more positions
];
```

## 4. Customize Skills

**File**: `/src/app/about/page.tsx`

Update the `skills` array to match your expertise:

```typescript
const skills = [
  {
    category: 'Frontend',
    items: ['Your', 'Technologies', 'Here'],
  },
  {
    category: 'Backend',
    items: ['More', 'Skills', 'Here'],
  },
  // ... more categories
];
```

## 5. Update Contact Information

### Email Link

**File**: `/src/app/about/page.tsx`

```typescript
<a href="mailto:your.email@example.com">
  Send Email
</a>
```

### Social Media Links

Update the social media buttons:

```typescript
<a href="https://linkedin.com/in/yourprofile" className="...">
  LinkedIn
</a>
<a href="https://github.com/yourusername" className="...">
  GitHub
</a>
```

## 6. Customize Appearance

### Color Scheme

**File**: `/tailwind.config.ts`

Extend the color palette:

```typescript
export default {
  theme: {
    extend: {
      colors: {
        primary: '#0066cc',
        secondary: '#00cccc',
      },
    },
  },
}
```

Then use in components:

```typescript
<div className="bg-primary text-secondary">
  Colored content
</div>
```

### Font Changes

**File**: `/src/app/layout.tsx`

```typescript
import { Poppins, JetBrains_Mono } from "next/font/google";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '600', '700'],
});
```

### Theme Colors

Current theme uses blue and cyan. To change:

1. Replace `from-blue-400 to-cyan-400` gradients
2. Update `text-blue-400` references
3. Modify hover states from `hover:text-blue-400`

Example for purple theme:

```typescript
// Replace:
className="bg-gradient-to-r from-blue-400 to-cyan-400"

// With:
className="bg-gradient-to-r from-purple-400 to-pink-400"
```

## 7. Add New Pages

### Create a New Page

1. Create directory: `src/app/blog/`
2. Create file: `src/app/blog/page.tsx`

```typescript
export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-900">
      <h1>Blog</h1>
      {/* Your content */}
    </main>
  );
}
```

3. Update navigation in layout files to include the new page

## 8. Add Reusable Components

### Create Navigation Component

**File**: `/src/components/Navigation.tsx`

```typescript
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-md bg-gray-900/80">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
        <Link href="/">Logo</Link>
        <div className="flex gap-8">
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
        </div>
      </div>
    </nav>
  );
}
```

Then use in pages:

```typescript
import Navigation from '@/components/Navigation';

export default function Page() {
  return (
    <main>
      <Navigation />
      {/* Page content */}
    </main>
  );
}
```

## 9. Add Animation Effects

Use `next/motion` or similar libraries:

```bash
npm install framer-motion
```

```typescript
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Animated content
</motion.div>
```

## 10. SEO Optimization

### Update Metadata

**File**: `/src/app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: 'Your Name - Senior Developer',
  description: 'Your professional tagline and description',
  keywords: 'developer, web developer, full-stack, react, next.js',
  openGraph: {
    title: 'Your Name - Portfolio',
    description: 'Your description',
    url: 'https://yourdomain.com',
  },
};
```

## 11. Add Favicon

Place your favicon in `/public/favicon.ico`

Next.js automatically picks it up.

## 12. Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_GITHUB_USERNAME=yourusername
NEXT_PUBLIC_EMAIL=your.email@example.com
```

Use in components:

```typescript
const email = process.env.NEXT_PUBLIC_EMAIL;
```

## 13. Dark/Light Mode

Add dark mode toggle (requires additional setup):

```bash
npm install next-themes
```

## Common Customizations Checklist

- [ ] Update name and title
- [ ] Add your projects with descriptions
- [ ] Update experience and employment history
- [ ] List your actual skills and technologies
- [ ] Add your contact information and social links
- [ ] Update color scheme (optional)
- [ ] Add favicon
- [ ] Update SEO metadata
- [ ] Add your social profiles
- [ ] Test on mobile device
- [ ] Deploy to your domain

## Testing Changes

Always test locally before deploying:

```bash
npm run dev
# Open http://localhost:3000
```

## Need Help?

Refer to:
- Official [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Utilities](https://tailwindcss.com/docs/utility-first)
- [React Documentation](https://react.dev)
