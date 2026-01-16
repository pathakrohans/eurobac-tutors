export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'EuroBac Tutors',
    description: 'Expert tutoring for European Baccalaureate, admissions tests, and university applications.',
    url: 'https://eurobactutors.com',
    logo: 'https://eurobactutors.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'info@eurobactutors.com',
    },
    sameAs: [],
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'EuroBac Tutors',
    description: 'Expert tutoring for European Baccalaureate, admissions tests, and university applications.',
    url: 'https://eurobactutors.com',
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '49.6116',
        longitude: '6.1319',
      },
      geoRadius: {
        '@type': 'Distance',
        value: '500',
        unitCode: 'km',
      },
    },
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Tutoring Service',
    provider: {
      '@type': 'Organization',
      name: 'EuroBac Tutors',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Europe',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Tutoring Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'European Baccalaureate Tutoring',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Admissions Test Preparation',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'University Application Coaching',
          },
        },
      ],
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  )
}


