import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Section from '@/components/Section'
import Button from '@/components/Button'
import Tag from '@/components/Tag'
import TutorCard from '@/components/TutorCard'
import { tutors } from '@/data/tutors'

export async function generateStaticParams() {
  return tutors.map((tutor) => ({
    id: tutor.id,
  }))
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const tutor = tutors.find((t) => t.id === params.id)
  
  if (!tutor) {
    return {
      title: 'Tutor Not Found',
    }
  }

  return {
    title: `${tutor.name} | EB Tutors`,
    description: tutor.bio,
  }
}

export default function TutorProfilePage({ params }: { params: { id: string } }) {
  const tutor = tutors.find((t) => t.id === params.id)

  if (!tutor) {
    notFound()
  }

  // Find related tutors (same subjects or specialties)
  const relatedTutors = tutors
    .filter((t) => {
      if (t.id === tutor.id) return false
      const sharedSubjects = t.subjects.some((s) => tutor.subjects.includes(s))
      const sharedSpecialties = t.specialties.some((s) => tutor.specialties.includes(s))
      return sharedSubjects || sharedSpecialties
    })
    .slice(0, 3)

  return (
    <>
      <Section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/team"
            className="inline-flex items-center text-black hover:text-gray-600 mb-6 text-sm font-medium border-b border-black hover:border-gray-600 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Team
          </Link>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="relative h-64 md:h-80 bg-gray-100 rounded-lg overflow-hidden mb-4">
                <Image
                  src={tutor.headshot}
                  alt={tutor.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              {tutor.linkedin && (
                <a
                  href={tutor.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-black hover:text-gray-600 font-medium text-sm border-b border-black hover:border-gray-600 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn Profile
                </a>
              )}
            </div>

            <div className="md:col-span-2">
              <h1 className="text-4xl font-semibold tracking-tight text-black mb-2">{tutor.name}</h1>
              <p className="text-lg text-gray-600 mb-6">{tutor.degree}</p>

              <div className="prose max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed">{tutor.bio}</p>
              </div>

              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Subjects Taught</h3>
                  <div className="flex flex-wrap gap-2">
                    {tutor.subjects.map((subject) => (
                      <Tag key={subject} variant="primary" size="md">
                        {subject}
                      </Tag>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Languages Spoken</h3>
                  <div className="flex flex-wrap gap-2">
                    {tutor.languages.map((lang) => (
                      <Tag key={lang} variant="secondary" size="md">
                        {lang}
                      </Tag>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Specialties</h3>
                  <div className="flex flex-wrap gap-2">
                    {tutor.specialties.map((specialty) => (
                      <Tag key={specialty} variant="default" size="md">
                        {specialty}
                      </Tag>
                    ))}
                  </div>
                </div>

                {tutor.admissionsSystems.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Admissions Systems</h3>
                    <div className="flex flex-wrap gap-2">
                      {tutor.admissionsSystems.map((system) => (
                        <Tag key={system} variant="primary" size="md">
                          {system}
                        </Tag>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  href={process.env.NEXT_PUBLIC_CALENDLY_URL || '/contact'}
                  variant="primary"
                  size="lg"
                >
                  Book a Consultation
                </Button>
                <Button
                  href={`/contact?tutor=${encodeURIComponent(tutor.name)}`}
                  variant="outline"
                  size="lg"
                >
                  Request This Tutor
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {relatedTutors.length > 0 && (
        <Section className="bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold tracking-tight text-black mb-8">Related Tutors</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedTutors.map((relatedTutor) => (
                <TutorCard key={relatedTutor.id} tutor={relatedTutor} />
              ))}
            </div>
          </div>
        </Section>
      )}
    </>
  )
}
