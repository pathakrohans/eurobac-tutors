import Image from 'next/image'
import Link from 'next/link'
import Tag from './Tag'
import { Tutor } from '@/data/tutors'

interface TutorCardProps {
  tutor: Tutor
  showAllSubjects?: boolean
}

export default function TutorCard({ tutor, showAllSubjects = false }: TutorCardProps) {
  const displayedSubjects = showAllSubjects ? tutor.subjects : tutor.subjects.slice(0, 3)
  const displayedLanguages = tutor.languages.slice(0, 3)
  const testKeywords = ['SAT', 'ACT', 'TOEFL', 'IELTS', 'LNAT', 'UCAT', 'BMAT', 'AP']
  const standardizedTests = tutor.specialties.filter((specialty) =>
    testKeywords.some((keyword) => specialty.includes(keyword))
  )
  const displayedTests = standardizedTests.slice(0, 3)

  return (
    <div className="bg-white border border-primary-200 overflow-hidden hover:border-primary-400 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)] group animate-fade-in-up">
      <div className="relative h-64 bg-primary-100 overflow-hidden">
        <Image
          src={tutor.headshot}
          alt={tutor.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-medium text-black mb-2 tracking-tight">{tutor.name}</h3>
        <p className="text-sm text-primary-600 mb-6 font-light">{tutor.degree}</p>
        
        <div className="space-y-3 mb-4">
          <div>
            <p className="text-xs font-medium text-gray-500 mb-2">EB Subjects</p>
            <div className="flex flex-wrap gap-2">
              {displayedSubjects.map((subject) => (
                <Tag key={subject} variant="primary" size="sm">
                  {subject}
                </Tag>
              ))}
              {!showAllSubjects && tutor.subjects.length > 3 && (
                <Tag variant="default" size="sm">
                  +{tutor.subjects.length - 3} more
                </Tag>
              )}
            </div>
          </div>

          {standardizedTests.length > 0 && (
            <div>
              <p className="text-xs font-medium text-gray-500 mb-2">Standardized Tests</p>
              <div className="flex flex-wrap gap-2">
                {displayedTests.map((test) => (
                  <Tag key={test} variant="default" size="sm">
                    {test}
                  </Tag>
                ))}
                {standardizedTests.length > 3 && (
                  <Tag variant="default" size="sm">
                    +{standardizedTests.length - 3} more
                  </Tag>
                )}
              </div>
            </div>
          )}

          <div>
            <p className="text-xs font-medium text-gray-500 mb-2">Languages</p>
            <div className="flex flex-wrap gap-2">
              {displayedLanguages.map((lang) => (
                <Tag key={lang} variant="secondary" size="sm">
                  {lang}
                </Tag>
              ))}
              {tutor.languages.length > 3 && (
                <Tag variant="default" size="sm">
                  +{tutor.languages.length - 3} more
                </Tag>
              )}
            </div>
          </div>
        </div>

        <Link
          href={`/team/${tutor.id}`}
          className="text-primary-800 hover:text-black font-medium text-sm inline-flex items-center border-b border-primary-300 hover:border-primary-800 transition-colors duration-200"
        >
          View profile
          <svg className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
