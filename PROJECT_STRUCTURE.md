# Project Structure

```
EuroBac Tutors/
├── public/
│   ├── team/                    # Tutor headshots (add images here)
│   └── favicon.ico              # Site favicon
├── scripts/
│   └── generate-placeholders.js # Helper script for placeholder images
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts     # Contact form API endpoint
│   │   ├── team/
│   │   │   ├── [id]/
│   │   │   │   └── page.tsx     # Individual tutor profile pages
│   │   │   └── page.tsx         # Team listing page with filters
│   │   ├── about/
│   │   │   └── page.tsx         # About page
│   │   ├── contact/
│   │   │   └── page.tsx         # Contact form page
│   │   ├── pricing/
│   │   │   └── page.tsx         # Pricing page
│   │   ├── services/
│   │   │   └── page.tsx         # Services listing page
│   │   ├── globals.css          # Global styles
│   │   ├── layout.tsx           # Root layout with metadata
│   │   ├── not-found.tsx         # 404 page
│   │   ├── page.tsx             # Home page
│   │   ├── robots.ts            # Robots.txt
│   │   ├── sitemap.ts           # Sitemap.xml
│   │   └── structured-data.tsx  # Schema.org structured data
│   ├── components/
│   │   ├── Button.tsx           # Reusable button component
│   │   ├── Card.tsx             # Card container component
│   │   ├── Container.tsx        # Container wrapper
│   │   ├── FAQAccordion.tsx     # FAQ accordion component
│   │   ├── FilterChips.tsx      # Filter chips for team page
│   │   ├── Footer.tsx           # Site footer
│   │   ├── Navbar.tsx           # Site navigation
│   │   ├── Section.tsx          # Section wrapper
│   │   ├── Tag.tsx              # Tag/badge component
│   │   └── TutorCard.tsx        # Tutor card component
│   └── data/
│       ├── services.ts          # Services data
│       └── tutors.ts            # Tutors data
├── .eslintrc.json               # ESLint configuration
├── .gitignore                   # Git ignore rules
├── next.config.js               # Next.js configuration
├── package.json                 # Dependencies
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
├── PLACEHOLDER_IMAGES.md        # Guide for adding images
├── PROJECT_STRUCTURE.md         # This file
└── README.md                    # Main documentation
```

## Key Files to Customize

1. **Tutor Data**: `src/data/tutors.ts` - Add/edit tutors
2. **Services**: `src/data/services.ts` - Edit service offerings
3. **Environment Variables**: `.env.local` - Add Calendly, Stripe links
4. **Images**: `public/team/` - Add tutor headshots
5. **Metadata**: `src/app/layout.tsx` - Update SEO metadata
6. **Contact Form**: `src/app/api/contact/route.ts` - Configure email sending

## Pages

- `/` - Home page with hero, services overview, team preview, testimonials, FAQ
- `/services` - Detailed services listing
- `/team` - Team page with filtering
- `/team/[id]` - Individual tutor profiles
- `/pricing` - Pricing tiers and information
- `/about` - About page with values and tutor selection process
- `/contact` - Contact form

## Components

All reusable components are in `src/components/` and follow a consistent design system using Tailwind CSS.


