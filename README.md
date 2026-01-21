# EB Tutors Website

A production-ready website for EB Tutors, a tutoring service specializing in European Baccalaureate, admissions tests, and university applications.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone the repository (or navigate to the project directory)

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

4. Add your environment variables to `.env.local`:

```env
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-username
NEXT_PUBLIC_STRIPE_PAYMENT_LINK=https://buy.stripe.com/your-link
# Optional: Analytics
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=eurobactutors.com
```

5. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── api/          # API routes
│   │   ├── team/         # Team pages (dynamic routes)
│   │   └── ...
│   ├── components/       # Reusable React components
│   └── data/             # Data files (tutors, services)
├── public/               # Static assets
│   └── team/            # Tutor headshots
└── ...
```

## Adding Tutors

1. Add a headshot image to `/public/team/`:
   - Name it: `{tutor-id}.jpg` (e.g., `sarah-chen.jpg`)
   - Recommended size: 400x400px, square format
   - Formats: JPG, PNG, or WebP

2. Edit `/src/data/tutors.ts`:
   - Add a new tutor object to the `tutors` array
   - Follow the existing structure:
     ```typescript
     {
       id: 'unique-id',
       name: 'Full Name',
       headshot: '/team/unique-id.jpg',
       degree: 'Degree, University',
       bio: '2-3 sentence bio...',
       subjects: ['Subject 1', 'Subject 2'],
       languages: ['English', 'French'],
       specialties: ['EB Math', 'SAT Math', ...],
       linkedin: 'https://linkedin.com/in/...', // optional
       availability: 'Limited slots', // optional
     }
     ```

3. The tutor will automatically appear on:
   - `/team` page
   - Individual profile at `/team/{tutor-id}`
   - Home page (if in the first 3)

## Editing Services

Edit `/src/data/services.ts` to modify service categories and sub-services. Each service has:
- `id`: URL anchor (e.g., `eb-tutoring`)
- `title`: Display name
- `description`: Brief overview
- `subServices`: Array of sub-services with name, description, and optional "for" field

## Setting Up Calendly

1. Create a Calendly account and set up your scheduling page
2. Copy your Calendly URL (e.g., `https://calendly.com/your-username`)
3. Add it to `.env.local` as `NEXT_PUBLIC_CALENDLY_URL`
4. The "Book Call" buttons throughout the site will link to this URL

## Setting Up Stripe Payment Links

1. Create a Stripe account
2. Create a Payment Link in Stripe Dashboard
3. Copy the Payment Link URL
4. Add it to `.env.local` as `NEXT_PUBLIC_STRIPE_PAYMENT_LINK`
5. The "Pay Invoice" button on the pricing page will use this link

## Contact Form

The contact form at `/contact` uses a server action. Currently, it logs submissions to the console. To enable email sending:

1. Choose an email service (Resend, SendGrid, Nodemailer, etc.)
2. Install the necessary package
3. Edit `/src/app/api/contact/route.ts`
4. Replace the TODO comment with actual email sending code

Example with Resend:
```bash
npm install resend
```

```typescript
import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)

await resend.emails.send({
  from: 'contact@eurobactutors.com',
  to: 'info@eurobactutors.com',
  subject: `New contact form submission from ${body.name}`,
  html: `...`,
})
```

## Deployment to Vercel

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project" and import your repository
4. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_CALENDLY_URL`
   - `NEXT_PUBLIC_STRIPE_PAYMENT_LINK`
   - `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` (if using)
5. Deploy!

Vercel will automatically:
- Build your Next.js app
- Deploy it to a production URL
- Set up HTTPS
- Enable automatic deployments on git push

## Custom Domain

1. In Vercel dashboard, go to your project → Settings → Domains
2. Add your custom domain (e.g., `eurobactutors.com`)
3. Follow Vercel's instructions to update DNS records
4. Update `sitemap.ts` and `robots.ts` with your actual domain

## SEO Checklist

Before launching:

- [ ] Update `src/app/layout.tsx` with your actual domain
- [ ] Update `src/app/sitemap.ts` with your actual domain
- [ ] Update `src/app/robots.ts` with your actual domain
- [ ] Update `src/app/structured-data.tsx` with accurate business information
- [ ] Add a favicon to `/public/favicon.ico`
- [ ] Add social preview image to `/public/og-image.jpg` (1200x630px)
- [ ] Update Open Graph image URL in `layout.tsx` metadata
- [ ] Test all pages for proper metadata
- [ ] Submit sitemap to Google Search Console

## Analytics (Optional)

The site includes placeholder support for Plausible Analytics. To enable:

1. Sign up at [plausible.io](https://plausible.io)
2. Add your domain to Plausible
3. Set `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` in your `.env.local`
4. The script will automatically load

For other analytics (Google Analytics, etc.), add the script to `src/app/layout.tsx`.

## Launch Checklist

- [ ] All environment variables set
- [ ] Tutor headshots added to `/public/team/`
- [ ] Tutor data updated in `/src/data/tutors.ts`
- [ ] Services data reviewed in `/src/data/services.ts`
- [ ] Contact form email sending configured
- [ ] Calendly URL configured
- [ ] Stripe payment link configured
- [ ] Custom domain configured (if applicable)
- [ ] Favicon added
- [ ] Social preview image added
- [ ] SEO metadata updated
- [ ] All pages tested
- [ ] Mobile responsiveness checked
- [ ] Analytics configured (if using)
- [ ] Privacy policy and terms pages created (if needed)

## Maintenance

### Updating Content

- **Tutors**: Edit `/src/data/tutors.ts`
- **Services**: Edit `/src/data/services.ts`
- **Copy**: Edit page files in `/src/app/`
- **Styling**: Edit Tailwind classes or `/src/app/globals.css`

### Adding New Pages

1. Create a new file in `/src/app/` (e.g., `new-page/page.tsx`)
2. Export metadata for SEO
3. Add link to navbar in `/src/components/Navbar.tsx` (if needed)

## Support

For issues or questions, check:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Documentation](https://vercel.com/docs)

## License

Private - EB Tutors


