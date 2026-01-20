# Project Images Setup Guide

Guide for adding project images to your portfolio projects.

---

## Overview

Projects now support optional images:
- ✅ **With Image**: Displays project image in the card header
- ✅ **Without Image**: Shows abbreviated title (first letters) as fallback

---

## How to Add Project Images

### Step 1: Prepare Your Image

1. **Image Location**: Place images in `public/projects/` directory
2. **Recommended Size**: 400x300px (or similar 4:3 aspect ratio)
3. **File Format**: PNG, JPG, or WebP
4. **File Name**: Use descriptive name matching project name
   - Example: `epl-football-pwa.png`

### Step 2: Update Project Data

Edit `src/locales/en.json` (and `src/locales/id.json`):

```json
{
  "title": "Your Project Title",
  "description": "Project description here",
  "tags": ["Tag1", "Tag2"],
  "link": "https://project-url.com",
  "image": "project-image.png"  // Add this line
}
```

### Step 3: If No Image

Leave the `image` field empty:

```json
{
  "title": "Your Project Title",
  "description": "Project description here",
  "tags": ["Tag1", "Tag2"],
  "link": "https://project-url.com",
  "image": ""  // Empty - will show abbreviated title
}
```

---

## File Structure

```
public/
└── projects/
    ├── epl-football-pwa.png
    ├── nextjs-portfolio.png
    ├── mobile-app.png
    └── [your-project-image].png
```

---

## Examples

### With Image
```json
{
  "title": "E-Commerce Platform",
  "description": "Full-stack e-commerce solution",
  "tags": ["Full-Stack", "API", "Database"],
  "link": "https://github.com",
  "image": "ecommerce-platform.png"
}
```

**Result**: Shows the `ecommerce-platform.png` image in card

### Without Image
```json
{
  "title": "Real-time Chat App",
  "description": "WebSocket-based chat application",
  "tags": ["WebSocket", "Real-time"],
  "link": "https://github.com",
  "image": ""
}
```

**Result**: Shows abbreviated title "RCA" in colored box

---

## Abbreviated Title Generation

The system automatically generates abbreviated titles from project names:

| Project Title | Abbreviated | Display |
|---------------|-------------|---------|
| EPL Football PWA | EFP | colored box shows "EFP" |
| Next.js Portfolio | NFP | colored box shows "NFP" |
| E-Commerce Platform | ECP | colored box shows "ECP" |
| Real-time Chat App | RCA | colored box shows "RCA" |

---

## Project Data Structure

### Complete Project Object

```typescript
{
  title: string;           // Project name
  description: string;     // Short description
  tags: string[];          // Tech tags (["Tag1", "Tag2"])
  link: string;            // Project/GitHub URL
  image?: string;          // Optional image filename
}
```

---

## Step-by-Step: Adding a New Project

### 1. Create Image
- Design/screenshot your project
- Save as PNG/JPG (400x300px recommended)
- Name: `my-project.png`

### 2. Add to Public Folder
```bash
cp my-project.png public/projects/
```

### 3. Update English Locale
Edit `src/locales/en.json`:
```json
{
  "title": "My Project",
  "description": "What this project does",
  "tags": ["React", "TypeScript"],
  "link": "https://github.com/project",
  "image": "my-project.png"
}
```

### 4. Update Indonesian Locale
Edit `src/locales/id.json`:
```json
{
  "title": "Proyek Saya",
  "description": "Apa yang dilakukan proyek ini",
  "tags": ["React", "TypeScript"],
  "link": "https://github.com/project",
  "image": "my-project.png"
}
```

### 5. Test
```bash
pnpm dev
# Visit http://localhost:3000/projects
# Should see your new project with image
```

### 6. Deploy
```bash
git add .
git commit -m "feat: Add My Project with image"
git push origin master
```

---

## Image Specifications

### Recommended Dimensions
- **Width**: 400px
- **Height**: 300px (4:3 ratio)
- **Aspect Ratio**: 4:3 preferred

### File Formats
- ✅ PNG (best for logos/screenshots)
- ✅ JPG/JPEG (best for photos)
- ✅ WebP (most optimized)
- ❌ GIF (not recommended)

### File Size
- **Recommended**: 50-200KB
- **Maximum**: 500KB
- **Note**: Files are optimized by Next.js Image component

### Optimization Tips
1. **Compress images**: Use ImageOptim or TinyPNG
2. **Use WebP**: Better compression than PNG/JPG
3. **Proper dimensions**: Avoid huge files
4. **Remove metadata**: Strip EXIF data

---

## Styling & Display

### Container Styling
- **Background**: Colored with opacity (changes per project)
- **Height**: 96px (mobile) / 128px (desktop)
- **Hover**: Slight brightness increase on hover
- **Transition**: Smooth hover effect

### Image Styling
- **Fit**: Object-cover (crops to fit)
- **Z-index**: Positioned behind
- **Fallback**: Shows abbreviated title if missing

### Color Map (Automatic)
Colors cycle through for each project:
1. Orange (bg-orange-600/20)
2. Green (bg-green-600/20)
3. Purple (bg-purple-600/20)
4. Blue (bg-blue-600/20)
5. Indigo (bg-indigo-600/20)
6. Pink (bg-pink-600/20)

---

## Troubleshooting

### Image Not Showing

**Problem**: Image filename in JSON but not showing

**Solutions**:
1. Check file exists in `public/projects/`
2. Verify filename matches exactly (case-sensitive)
3. Ensure image format is supported
4. Hard refresh browser: `Ctrl+Shift+R`
5. Check browser console for errors (F12)

### Image Looks Stretched

**Problem**: Image appears distorted

**Solution**: 
- Use correct aspect ratio (4:3)
- Image should be 400x300px or similar ratio
- Object-cover mode crops, doesn't stretch

### Abbreviated Title Not Showing as Fallback

**Problem**: Image missing but no fallback title

**Solution**:
1. Ensure `image` field is empty string: `"image": ""`
2. Not: `"image": null` or missing property
3. Reload page completely

---

## Current Projects Status

### With Images:
- ✅ EPL Football PWA (`epl-football-pwa.png`)
- ✅ Next.js Portfolio (`nextjs-portfolio.png`)
- ✅ Mobile App (`mobile-app.png`)

### With Abbreviated Title Fallback:
- ✅ E-Commerce Platform (shows "ECP")
- ✅ Real-time Chat App (shows "RCA")
- ✅ API Gateway (shows "AG")

---

## Next Steps

1. **Add Project Images**:
   - Create images for projects
   - Place in `public/projects/`
   - Update JSON with filenames

2. **Deploy**:
   - Commit changes
   - Push to master
   - GitHub Actions deploys automatically

3. **Verify**:
   - Check portfolio: https://irvandandung.github.io/projects
   - Verify images display correctly
   - Check abbreviated titles for projects without images

---

## Tips & Tricks

### Batch Rename Images
```bash
# If images are named poorly, use this to rename them
cd public/projects/
ls *.png | while read f; do
  mv "$f" "$(echo $f | sed 's/[0-9]*-//g')"
done
```

### Generate Abbreviated Title Preview
```bash
# Test abbreviated title generation
node -e "
const title = 'E-Commerce Platform';
const abbrev = title.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 3);
console.log(abbrev);
"
# Output: ECP
```

### Quick Image Create (using placeholder)
```bash
# Create placeholder image (400x300px)
convert -size 400x300 xc:#242D3D \
  -pointsize 30 -fill white -gravity center \
  -annotate +0+0 "PROJECT IMAGE" \
  public/projects/project-placeholder.png
```

---

## Best Practices

1. **Keep Images Consistent**
   - Similar dimensions across projects
   - Professional appearance
   - Clear representation of project

2. **Use Descriptive Filenames**
   - `epl-football-pwa.png` ✅
   - `img1.png` ❌

3. **Optimize Before Upload**
   - Compress images
   - Use appropriate format
   - Remove unnecessary metadata

4. **Update Both Locales**
   - Update en.json
   - Update id.json (same image, translated text)

5. **Test Before Deploying**
   - `pnpm dev`
   - Check images display
   - Verify on different screen sizes

---

## Related Files

- **Component**: `src/app/projects/page.tsx`
- **English Data**: `src/locales/en.json`
- **Indonesian Data**: `src/locales/id.json`
- **Images Directory**: `public/projects/`

---

**Last Updated**: 2026-01-20
**Image Format**: PNG, JPG, WebP
**Recommended Size**: 400x300px
**Fallback**: Abbreviated title from first letters of project name
