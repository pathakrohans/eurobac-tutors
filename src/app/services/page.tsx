import Link from 'next/link'
import Section from '@/components/Section'
import Card from '@/components/Card'
import Button from '@/components/Button'
import Tag from '@/components/Tag'
import { services } from '@/data/services'
import { tutors } from '@/data/tutors'

export const metadata = {
  title: 'Services',
  description: 'Comprehensive tutoring services for European Baccalaureate, admissions tests, and university applications.',
}

export default function ServicesPage() {
  // Collect all unique subjects, tests, and languages from tutors
  const allSubjects = Array.from(new Set(tutors.flatMap((t) => t.subjects))).sort()
  const allTests = Array.from(
    new Set(tutors.flatMap((t) => t.specialties.filter((s) => s.includes('SAT') || s.includes('ACT') || s.includes('TOEFL') || s.includes('IELTS') || s.includes('LNAT') || s.includes('UCAT') || s.includes('BMAT') || s.includes('AP'))))
  ).sort()
  const allLanguages = Array.from(new Set(tutors.flatMap((t) => t.languages))).sort()
  const allAdmissionsSystems = Array.from(new Set(tutors.flatMap((t) => t.admissionsSystems))).sort()

  return (
    <>
      <Section className="pt-32 pb-24">
        <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-black mb-8 leading-[1.1]">Our Services</h1>
          <p className="text-xl md:text-2xl text-primary-600 mb-6 font-light tracking-wide">
            Comprehensive support for European Baccalaureate, admissions tests, and university applications.
          </p>
          <p className="text-base md:text-lg text-primary-500 max-w-2xl mx-auto font-light leading-relaxed">
            Our services vary by tutor and location. Different tutors specialize in different subjects, 
            tests, and languages. Book a consultation to find the right match for your needs.
          </p>
        </div>
      </Section>

      {services.map((service, index) => (
        <Section key={service.id} id={service.id} className={index % 2 === 0 ? 'bg-white' : 'bg-primary-50'}>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-normal text-black mb-6 tracking-tight">{service.title}</h2>
            <p className="text-lg text-primary-600 mb-12 font-light leading-relaxed">{service.description}</p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {service.subServices.map((subService, idx) => (
                <Card 
                  key={idx} 
                  hover 
                  className="bg-white border-primary-200 hover:border-primary-400 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <h3 className="text-xl font-medium mb-3 text-black tracking-tight">{subService.name}</h3>
                  <p className="text-primary-600 mb-4 font-light text-sm leading-relaxed">{subService.description}</p>
                  {subService.for && (
                    <p className="text-xs text-primary-500 italic font-light">For: {subService.for}</p>
                  )}
                  {service.id === 'university-applications' && (
                    <p className="text-xs text-primary-600 mt-4 italic border-l border-primary-400 pl-3 font-light">
                      We coach structure and thinking. Students write their own work.
                    </p>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </Section>
      ))}

      {/* Tutor Coverage Section */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-normal text-black mb-6 text-center tracking-tight">
            Tutor Coverage
          </h2>
          <p className="text-center text-primary-600 mb-12 font-light">
            Our tutors cover a wide range of subjects, tests, and languages. 
            Use the filters below to see what&apos;s available, then visit our team page to find the right tutor.
          </p>

          <div className="space-y-6 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Subjects Taught</h3>
              <div className="flex flex-wrap gap-2">
                {allSubjects.map((subject) => (
                  <Tag key={subject} variant="primary" size="md">
                    {subject}
                  </Tag>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Admissions Tests</h3>
              <div className="flex flex-wrap gap-2">
                {allTests.map((test) => (
                  <Tag key={test} variant="primary" size="md">
                    {test}
                  </Tag>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Languages Spoken</h3>
              <div className="flex flex-wrap gap-2">
                {allLanguages.map((lang) => (
                  <Tag key={lang} variant="secondary" size="md">
                    {lang}
                  </Tag>
                ))}
              </div>
            </div>

            {allAdmissionsSystems.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">University Admissions Systems</h3>
                <div className="flex flex-wrap gap-2">
                  {allAdmissionsSystems.map((system) => (
                    <Tag key={system} variant="primary" size="md">
                      {system}
                    </Tag>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="text-center">
            <Button href="/team" variant="primary" size="lg">
              Find the Right Tutor
            </Button>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-black text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-lg mb-8 text-gray-400">
            Book a free consultation and we&apos;ll help you identify the best path forward.
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
