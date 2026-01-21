'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Section from '@/components/Section'
import TutorCard from '@/components/TutorCard'
import FilterChips from '@/components/FilterChips'
import Button from '@/components/Button'
import { tutors } from '@/data/tutors'

export default function TeamPage() {
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([])
  const [selectedTests, setSelectedTests] = useState<string[]>([])
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([])
  const [selectedAdmissionsSystems, setSelectedAdmissionsSystems] = useState<string[]>([])

  // Collect all unique options
  const allSubjects = Array.from(new Set(tutors.flatMap((t) => t.subjects))).sort()
  const allTests = Array.from(
    new Set(
      tutors.flatMap((t) =>
        t.specialties.filter(
          (s) =>
            s.includes('SAT') ||
            s.includes('ACT') ||
            s.includes('TOEFL') ||
            s.includes('IELTS') ||
            s.includes('LNAT') ||
            s.includes('UCAT') ||
            s.includes('BMAT') ||
            s.includes('AP')
        )
      )
    )
  ).sort()
  const allLanguages = Array.from(new Set(tutors.flatMap((t) => t.languages))).sort()
  const allAdmissionsSystems = Array.from(new Set(tutors.flatMap((t) => t.admissionsSystems))).sort()

  // Filter tutors based on selected criteria
  const filteredTutors = useMemo(() => {
    return tutors.filter((tutor) => {
      const matchesSubject =
        selectedSubjects.length === 0 ||
        selectedSubjects.some((subject) => tutor.subjects.includes(subject))
      const matchesTest =
        selectedTests.length === 0 ||
        selectedTests.some((test) => tutor.specialties.includes(test))
      const matchesLanguage =
        selectedLanguages.length === 0 ||
        selectedLanguages.some((lang) => tutor.languages.includes(lang))
      const matchesAdmissionsSystem =
        selectedAdmissionsSystems.length === 0 ||
        selectedAdmissionsSystems.some((system) => tutor.admissionsSystems.includes(system))

      return matchesSubject && matchesTest && matchesLanguage && matchesAdmissionsSystem
    })
  }, [selectedSubjects, selectedTests, selectedLanguages, selectedAdmissionsSystems])

  const hasActiveFilters =
    selectedSubjects.length > 0 ||
    selectedTests.length > 0 ||
    selectedLanguages.length > 0 ||
    selectedAdmissionsSystems.length > 0

  return (
    <>
      <Section className="pt-32 pb-24">
        <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-black mb-8 leading-[1.1]">Meet the Team</h1>
          <p className="text-xl md:text-2xl text-primary-600 mb-6 font-light tracking-wide">
            Experienced tutors from top universities, ready to help you succeed
          </p>
          <p className="text-base md:text-lg text-primary-500 max-w-2xl mx-auto font-light leading-relaxed">
            Our tutors specialize in different subjects, tests, and languages. 
            Use the filters below to find the right match for your needs.
          </p>
        </div>
      </Section>

      <Section className="bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Filters */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8 space-y-6">
            <FilterChips
              label="Filter by EB Subject"
              options={allSubjects}
              selected={selectedSubjects}
              onChange={setSelectedSubjects}
            />
            <FilterChips
              label="Filter by Standardized Test Type"
              options={allTests}
              selected={selectedTests}
              onChange={setSelectedTests}
            />
            <FilterChips
              label="Filter by Languages Spoken"
              options={allLanguages}
              selected={selectedLanguages}
              onChange={setSelectedLanguages}
            />
            <FilterChips
              label="Filter by Admissions Systems"
              options={allAdmissionsSystems}
              selected={selectedAdmissionsSystems}
              onChange={setSelectedAdmissionsSystems}
            />
          </div>

          {/* Results */}
          <div className="mb-4 flex items-center justify-between">
            <p className="text-gray-600">
              {filteredTutors.length} tutor{filteredTutors.length !== 1 ? 's' : ''} found
              {hasActiveFilters && ' (filtered)'}
            </p>
            {hasActiveFilters && (
              <button
                onClick={() => {
                  setSelectedSubjects([])
                  setSelectedTests([])
                  setSelectedLanguages([])
                  setSelectedAdmissionsSystems([])
                }}
                className="text-sm text-black hover:text-gray-600 font-medium border-b border-black hover:border-gray-600 transition-colors"
              >
                Clear all filters
              </button>
            )}
          </div>

          {filteredTutors.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTutors.map((tutor) => (
                <TutorCard key={tutor.id} tutor={tutor} showAllSubjects />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
              <p className="text-gray-600 mb-4">No tutors match your current filters.</p>
              <button
                onClick={() => {
                  setSelectedSubjects([])
                  setSelectedTests([])
                  setSelectedLanguages([])
                  setSelectedAdmissionsSystems([])
                }}
                className="text-black hover:text-gray-600 font-medium"
              >
                Clear filters to see all tutors
              </button>
            </div>
          )}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-black text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 text-gray-400">
            Book a free consultation to discuss your needs and get matched with the right tutor.
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
