# Placeholder Images Guide

## Tutor Headshots

You need to add headshot images for each tutor in `/public/team/`.

### Required Images

Based on the tutors in `/src/data/tutors.ts`, you need:

1. `sarah-chen.jpg`
2. `marco-rossi.jpg`
3. `emma-larsen.jpg`
4. `james-wilson.jpg`
5. `sophie-martin.jpg`

### Image Specifications

- **Format**: JPG, PNG, or WebP
- **Size**: 400x400px (square, 1:1 aspect ratio)
- **File naming**: Use the tutor's `id` from the data file (e.g., `sarah-chen.jpg`)
- **Quality**: High quality, professional headshots

### Quick Options

1. **Use placeholder services**:
   - [Placeholder.com](https://via.placeholder.com/400) - `https://via.placeholder.com/400`
   - [UI Avatars](https://ui-avatars.com/) - Generate avatars with initials
   - [Unsplash](https://unsplash.com/s/photos/portrait) - Free professional photos

2. **Generate programmatically** (for development):
   ```bash
   # Using ImageMagick (if installed)
   for name in sarah-chen marco-rossi emma-larsen james-wilson sophie-martin; do
     convert -size 400x400 xc:gray -pointsize 72 -fill white -gravity center \
       -annotate +0+0 "${name^}" "public/team/${name}.jpg"
   done
   ```

3. **Use AI-generated avatars**:
   - Services like [Generated Photos](https://generated.photos/) or [This Person Does Not Exist](https://thispersondoesnotexist.com/)

### Adding Images

1. Place images in `/public/team/`
2. Ensure filenames match the `headshot` field in `/src/data/tutors.ts`
3. Images will be automatically optimized by Next.js Image component

## Favicon

Add a favicon to `/public/favicon.ico`. You can:
- Use [RealFaviconGenerator](https://realfavicongenerator.net/)
- Create a simple icon with your logo/initials
- Use an online favicon generator

## Social Preview Image (OG Image)

Add `/public/og-image.jpg` (1200x630px) for social media sharing. This appears when your site is shared on:
- Facebook
- Twitter/X
- LinkedIn
- Other social platforms

Update the Open Graph image URL in `/src/app/layout.tsx` metadata once added.


