'use client'

import { useState, useRef, Suspense } from 'react'
import Section from '@/components/Section'
import Card from '@/components/Card'
import Button from '@/components/Button'
import { useSearchParams } from 'next/navigation'

function ContactForm() {
  const searchParams = useSearchParams()
  const requestedTutor = searchParams.get('tutor')
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    interest: [] as string[],
    tutorRequest: requestedTutor || '',
    honeypot: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  const interests = ['EB Tutoring', 'Admissions Tests', 'University Applications']

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interest: prev.interest.includes(interest)
        ? prev.interest.filter((i) => i !== interest)
        : [...prev.interest, interest],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Honeypot check
    if (formData.honeypot) {
      return // Bot detected
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        formRef.current?.reset()
        setFormData({
          name: '',
          email: '',
          message: '',
          interest: [],
          tutorRequest: '',
          honeypot: '',
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get in Touch</h1>
          <p className="text-lg text-gray-700">
            Have questions? Want to book a consultation? We&apos;re here to help.
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-2xl mx-auto">
          <Card>
            {submitStatus === 'success' ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h2>
                <p className="text-gray-600 mb-6">
                  We&apos;ll get back to you within 24 hours. In the meantime, you can also book a consultation directly.
                </p>
                <Button
                  href={process.env.NEXT_PUBLIC_CALENDLY_URL || '#'}
                  variant="primary"
                  size="lg"
                >
                  Book a Consultation
                </Button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot */}
                <input
                  type="text"
                  name="website"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    I&apos;m interested in: *
                  </label>
                  <div className="space-y-2">
                    {interests.map((interest) => (
                      <label key={interest} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.interest.includes(interest)}
                          onChange={() => handleInterestToggle(interest)}
                          className="w-4 h-4 text-black border-gray-300 focus:ring-black"
                        />
                        <span className="ml-2 text-gray-700">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="tutorRequest" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Tutor (optional)
                  </label>
                  <input
                    type="text"
                    id="tutorRequest"
                    name="tutorRequest"
                    value={formData.tutorRequest}
                    onChange={(e) => setFormData({ ...formData, tutorRequest: e.target.value })}
                    placeholder="Enter tutor name if you have a preference"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-sm text-red-800">
                      There was an error sending your message. Please try again or email us directly.
                    </p>
                  </div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  disabled={isSubmitting || formData.interest.length === 0}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </Card>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Or contact us directly:</p>
            <a
              href="mailto:info@eurobactutors.com"
              className="text-black hover:text-gray-600 font-medium text-lg border-b border-black hover:border-gray-600 transition-colors"
            >
              info@eurobactutors.com
            </a>
          </div>
        </div>
      </Section>
    </>
  )
}

export default function ContactPage() {
  return (
    <Suspense fallback={
      <Section>
        <div className="max-w-2xl mx-auto">
          <Card>
            <div className="text-center py-8">
              <p className="text-gray-600">Loading...</p>
            </div>
          </Card>
        </div>
      </Section>
    }>
      <ContactForm />
    </Suspense>
  )
}

