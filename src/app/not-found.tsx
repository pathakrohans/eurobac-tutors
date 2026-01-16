import Link from 'next/link'
import Button from '@/components/Button'
import Section from '@/components/Section'

export default function NotFound() {
  return (
    <Section className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Button href="/" variant="primary" size="lg">
          Go Home
        </Button>
      </div>
    </Section>
  )
}


