# Portfolio Website

A modern, responsive portfolio website built with Next.js 14, React 18, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Mobile-first approach with clean, modern UI
- **Multiple Sections**: 
  - Home: Hero section with call-to-action
  - Projects: Showcase of professional projects with technologies used
  - About Me: Personal bio, experience timeline, and skills
- **Dark Theme**: Eye-catching dark theme with blue/cyan gradients
- **Performance**: Optimized with Next.js for fast loading and great SEO
- **Modern Stack**: Built with latest web technologies

## Tech Stack

- **Frontend Framework**: Next.js 14 (App Router)
- **UI Library**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Google Fonts (Inter)

## Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   ├── globals.css         # Global styles
│   │   ├── projects/
│   │   │   └── page.tsx        # Projects page
│   │   └── about/
│   │       └── page.tsx        # About page
│   └── components/             # Reusable components
├── public/                      # Static assets
├── docs/                        # Documentation
├── package.json                # Dependencies
├── next.config.js              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── postcss.config.js           # PostCSS configuration
```

## Installation

### Prerequisites

- Node.js 18+ (Using nvm for version management)
- npm or yarn package manager

### Setup Instructions

1. **Navigate to the project directory**:
   ```bash
   cd /var/www/irvandandung.github.io/portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Visit `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code quality

## Pages

### Home (/)
- Hero section with tagline
- Featured projects preview
- Call-to-action buttons
- Navigation bar

### Projects (/projects)
- Grid view of all projects
- Project cards with descriptions
- Technology tags
- Project links

### About Me (/about)
- Personal bio
- Experience timeline
- Skills categorized by type
- Contact information and links

## Customization Guide

### Update Your Information

Edit the relevant pages to customize:
- `/src/app/page.tsx` - Home page content
- `/src/app/projects/page.tsx` - Project listings
- `/src/app/about/page.tsx` - About section, skills, experience

### Add New Projects

In `/src/app/projects/page.tsx`, add to the `projects` array:
```typescript
{
  id: 7,
  title: 'Your Project Title',
  description: 'Description of your project',
  technologies: ['Tech1', 'Tech2', 'Tech3'],
  link: 'https://project-link.com',
}
```

### Customize Colors

Edit `/tailwind.config.ts` to modify the color scheme and extend the theme.

### Update Fonts

In `/src/app/layout.tsx`, modify the font import from `next/font/google`.

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Click deploy
4. Domain configuration in Vercel dashboard

### Deploy to Other Platforms

- **Netlify**: Connect GitHub repo and select Next.js preset
- **AWS**: Use Amplify or EC2 with manual setup
- **Docker**: Build container and deploy

## Environment Variables

Create `.env.local` file if needed (not required for basic setup):

```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Performance Optimizations

- Static site generation (SSG) for faster builds
- Image optimization with Next.js Image component
- CSS-in-JS with Tailwind for minimal CSS
- Automatic code splitting
- SEO optimized with Next.js metadata

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contributing

Feel free to fork this project and customize it for your own portfolio!

## License

This project is open source and available for personal use.

## Support

For questions or issues, create an issue in the repository or check the documentation.

---

**Version**: 1.0.0  
**Created**: January 2024
