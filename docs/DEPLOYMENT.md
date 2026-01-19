# Deployment Guide

## Pre-Deployment Checklist

- [ ] All content updated with your information
- [ ] Projects added with accurate descriptions
- [ ] Contact information updated
- [ ] Links verified (LinkedIn, GitHub, email)
- [ ] Build successful: `npm run build`
- [ ] No console errors or warnings
- [ ] Responsive design tested on mobile/tablet
- [ ] SEO metadata updated

## Deployment Options

### 1. Vercel (Recommended)

Vercel is the creator of Next.js and provides optimal hosting.

**Steps**:

1. Push code to GitHub:
   ```bash
   git add .
   git commit -m "Initial portfolio commit"
   git push origin main
   ```

2. Go to [vercel.com](https://vercel.com) and sign up

3. Click "New Project" and import your GitHub repository

4. Vercel auto-detects Next.js configuration

5. Click "Deploy"

6. Configure custom domain in Vercel dashboard

**Advantages**:
- Zero-config deployment
- Automatic SSL certificates
- Built-in CI/CD
- Edge caching
- Free tier available

### 2. Netlify

**Steps**:

1. Connect GitHub to Netlify

2. Build command: `npm run build`

3. Publish directory: `.next`

4. Deploy

### 3. Self-Hosted (Docker)

**Dockerfile**:

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

**Build and Run**:

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

### 4. AWS Amplify

1. Connect GitHub repository
2. Select Next.js framework
3. Configure build settings
4. Deploy

### 5. Traditional Server (Ubuntu)

**Setup**:

1. SSH into server
2. Install Node.js 20
3. Clone repository
4. Install dependencies: `npm install`
5. Build: `npm run build`
6. Use PM2 for process management:
   ```bash
   npm install -g pm2
   pm2 start npm --name "portfolio" -- start
   pm2 startup
   pm2 save
   ```
7. Setup Nginx as reverse proxy
8. Configure SSL with Let's Encrypt

## Environment Variables

Create `.env.local` for sensitive data:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
DATABASE_URL=your_database_url
```

**Note**: Variables prefixed with `NEXT_PUBLIC_` are exposed to browser.

## Custom Domain

### On Vercel

1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records with Vercel nameservers

### On Netlify

1. Go to Domain Settings
2. Add custom domain
3. Configure DNS or use Netlify DNS

## Performance Optimization

### Image Optimization

Use Next.js Image component:

```typescript
import Image from 'next/image';

<Image 
  src="/my-image.jpg" 
  alt="Description"
  width={800}
  height={600}
/>
```

### Bundle Analysis

```bash
npm install --save-dev @next/bundle-analyzer
```

Then update `next.config.js`:

```javascript
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  // your config
})
```

Run: `ANALYZE=true npm run build`

## Monitoring

### Vercel Analytics

- Automatically enabled on Vercel
- Real User Monitoring (RUM)
- Core Web Vitals tracking

### Sentry for Error Tracking

```bash
npm install @sentry/nextjs
```

## Continuous Deployment

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - name: Deploy
        run: npm run deploy
```

## Troubleshooting

### Build Fails on Deployment

1. Check build logs
2. Run `npm run build` locally first
3. Verify all environment variables set
4. Clear build cache

### Slow Performance

- Check bundle size: `npm run build`
- Enable image optimization
- Use CDN for static assets
- Enable compression

### 404 After Deployment

Ensure `.next` folder is included in deployment or rebuild is triggered.

## Post-Deployment

1. Test all pages and links
2. Check mobile responsiveness
3. Verify forms and CTAs work
4. Monitor analytics
5. Setup backup strategy
6. Configure monitoring and alerts

## Updates & Maintenance

### Updating Dependencies

```bash
npm update
npm audit fix
```

### Redeploying

Usually automatic on git push to main branch. Manual redeploy varies by platform.

## Security

- Enable HTTPS (done automatically on modern platforms)
- Keep dependencies updated
- Use environment variables for secrets
- Implement rate limiting if needed
- Regular security audits

## Resources

- [Vercel Docs](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Netlify Docs](https://docs.netlify.com/)
