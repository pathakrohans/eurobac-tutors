import { MetadataRoute } from 'next'
import { tutors } from '@/data/tutors'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://eurobactutors.com'

  const routes = [
    '',
    '/services',
    '/team',
    '/pricing',
    '/about',
    '/contact',
  ]

  const tutorRoutes = tutors.map((tutor) => `/team/${tutor.id}`)

  return [
    ...routes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1 : 0.8,
    })),
    ...tutorRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}


