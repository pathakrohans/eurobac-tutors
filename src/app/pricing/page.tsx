import Section from '@/components/Section'
import Card from '@/components/Card'
import Button from '@/components/Button'

export const metadata = {
  title: 'Pricing',
  description: 'Transparent pricing for tutoring services. Final pricing depends on tutor and level.',
}

export default function PricingPage() {
  const pricingTiers = [
    {
      name: '1:1 Tutoring',
      description: 'Individual sessions tailored to your needs',
      price: 'From €60/hour',
      features: [
        'Personalized lesson plans',
        'Flexible scheduling',
        'All subjects and tests',
        'Progress tracking',
        'Session recordings (optional)',
      ],
      popular: false,
    },
    {
      name: 'Test Prep Packs',
      description: 'Structured packages for standardized tests',
      price: 'From €500',
      features: [
        '10-20 hours of tutoring',
        'Practice test analysis',
        'Strategy sessions',
        'Study materials included',
        'Flexible timeline',
      ],
      popular: true,
    },
    {
      name: 'Applications Coaching',
      description: 'Complete support for university applications',
      price: 'From €800',
      features: [
        'Personal statement coaching',
        'Essay support (structure & feedback)',
        'Application review',
        'Interview preparation',
        'University shortlisting',
      ],
      popular: false,
    },
    {
      name: 'Small Group Sessions',
      description: 'Affordable group learning (2-4 students)',
      price: 'From €35/student/hour',
      features: [
        'Similar level students',
        'Interactive learning',
        'Peer support',
        'Reduced cost',
        'Subject-specific groups',
      ],
      popular: false,
    },
  ]

  return (
    <>
      <Section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-black mb-6">Pricing</h1>
          <p className="text-lg text-gray-700 mb-4">
            Transparent, flexible pricing for all your tutoring needs
          </p>
          <div className="bg-gray-50 border border-gray-200 p-4 max-w-2xl mx-auto">
            <p className="text-sm text-gray-700">
              <strong>Note:</strong> Final pricing depends on tutor, subject level, and specific requirements. 
              Book a consultation to get a personalized quote.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingTiers.map((tier) => (
            <Card
              key={tier.name}
              className={`relative ${tier.popular ? 'ring-2 ring-primary-600' : ''}`}
              hover
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-black text-white px-4 py-1 text-xs font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-black mb-2">{tier.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{tier.description}</p>
                <div className="text-3xl font-semibold text-black mb-2">{tier.price}</div>
              </div>
              <ul className="space-y-3 mb-6">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-700">
                    <svg
                      className="w-5 h-5 text-black mr-2 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                href={process.env.NEXT_PUBLIC_CALENDLY_URL || '/contact'}
                variant={tier.popular ? 'primary' : 'outline'}
                size="md"
                fullWidth
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold tracking-tight text-black mb-6 text-center">Additional Information</h2>
          <div className="space-y-6">
            <Card>
              <h3 className="text-xl font-semibold mb-3">Payment Options</h3>
              <p className="text-gray-700 mb-2">
                We accept bank transfers, credit cards (via Stripe), and can arrange payment plans for longer-term packages.
              </p>
              {process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK && (
                <div className="mt-4">
                  <a
                    href={process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-black hover:text-gray-600 font-medium border-b border-black hover:border-gray-600 transition-colors"
                  >
                    Pay Invoice
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              )}
            </Card>

            <Card>
              <h3 className="text-xl font-semibold mb-3">Cancellation Policy</h3>
              <p className="text-gray-700">
                We require 24 hours notice for cancellations or rescheduling. Sessions cancelled with less than 24 hours 
                notice may be charged. We understand emergencies happen and work with families on a case-by-case basis.
              </p>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold mb-3">Refund Policy</h3>
              <p className="text-gray-700">
                Unused hours from prepaid packages can be refunded or transferred. Individual sessions are non-refundable 
                once completed. Contact us if you have concerns about your tutoring experience.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      <Section className="bg-black text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 text-gray-400">
            Book a free consultation to discuss your needs and get a personalized quote.
          </p>
          <Button
            href={process.env.NEXT_PUBLIC_CALENDLY_URL || '/contact'}
            variant="secondary"
            size="lg"
            className="rounded-none bg-white text-black hover:bg-gray-100"
          >
            Book a Free Consultation
          </Button>
        </div>
      </Section>
    </>
  )
}

