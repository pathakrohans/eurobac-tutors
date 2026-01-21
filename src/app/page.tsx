import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/Button'
import Section from '@/components/Section'
import Card from '@/components/Card'
import FAQAccordion from '@/components/FAQAccordion'
import TutorCard from '@/components/TutorCard'
import { tutors } from '@/data/tutors'
import { services } from '@/data/services'

export const metadata = {
  title: 'Home',
  description: 'Expert tutoring for European Baccalaureate, admissions tests, and university applications.',
}

export default function Home() {
  const featuredTutors = tutors.slice(0, 3)
  const faqItems = [
    {
      question: 'Which tutor will I get?',
      answer: 'After your initial consultation, we match you with a tutor based on your subject needs, test requirements, language preferences, and learning style. You can also request a specific tutor if you have a preference.',
    },
    {
      question: 'Do you guarantee results?',
      answer: 'We do not guarantee specific scores or outcomes. Our tutors provide expert guidance, structured learning, and proven strategies, but results depend on many factors including student effort, prior knowledge, and test conditions. We focus on helping students reach their potential.',
    },
    {
      question: 'Do you help write essays?',
      answer: (
        <>
          We coach structure and thinking. Students write their own work. Our tutors help with brainstorming, outlining, 
          understanding prompts, and providing feedback on drafts, but all writing must be the student&apos;s own original work. 
          This approach builds stronger skills and maintains academic integrity.
        </>
      ),
    },
    {
      question: 'What languages do your tutors speak?',
      answer: 'Our tutors are multilingual and can teach in English, French, German, Spanish, Italian, and other languages. When booking a consultation, you can specify your language preference, and we\'ll match you with a tutor who can teach in that language.',
    },
    {
      question: 'How do online sessions work?',
      answer: 'Sessions are conducted via video call (Zoom, Google Meet, or your preferred platform). Tutors share screens for materials, use digital whiteboards, and provide real-time feedback. All sessions are recorded (with permission) so students can review them later.',
    },
    {
      question: 'Can I book sessions for multiple subjects?',
      answer: 'Yes! Many students work with tutors across different subjects or combine subject tutoring with test prep or application coaching. We can coordinate multiple tutors or find a tutor who covers multiple areas you need.',
    },
    {
      question: 'What if I need to reschedule or cancel?',
      answer: 'We require 24 hours notice for cancellations or rescheduling. Sessions cancelled with less than 24 hours notice may be charged. We understand emergencies happen and work with families on a case-by-case basis.',
    },
    {
      question: 'Do you offer group sessions?',
      answer: 'Yes, we offer small group sessions (typically 2-4 students) for certain subjects and test prep. Group sessions are more affordable and work well for students at similar levels. Contact us to discuss group options.',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32 pb-24 relative overflow-hidden">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-black mb-8 leading-[1.1] animate-fade-in-up">
            Expert Tutoring for{' '}
            <span className="text-primary-600 italic">European Baccalaureate</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-600 mb-6 font-light tracking-wide animate-fade-in-delay">
            Admissions Tests • University Applications
          </p>
          <p className="text-base md:text-lg text-primary-500 mb-16 max-w-2xl mx-auto leading-relaxed font-light animate-fade-in-delay">
            Experienced tutors helping students across Europe excel in the EB, standardized tests, 
            and navigate university applications. Multilingual support available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up-delay">
            <Button
              href={process.env.NEXT_PUBLIC_CALENDLY_URL || '/contact'}
              variant="primary"
              size="lg"
              className="rounded-none"
            >
              Book a Free 15-Minute Consultation
            </Button>
            <Button href="/team" variant="outline" size="lg" className="rounded-none">
              Meet the Team
            </Button>
          </div>
        </div>
      </Section>

      {/* How It Works */}
      <Section className="bg-primary-50">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-normal text-black mb-6 tracking-tight">How It Works</h2>
          <p className="text-lg text-primary-600 max-w-2xl mx-auto font-light">
            A simple, effective process to get you matched with the right tutor
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card hover className="bg-white border-primary-200 hover:border-primary-400 transition-all duration-300 animate-fade-in-up">
            <div className="text-center">
              <div className="w-14 h-14 border-2 border-primary-800 flex items-center justify-center mx-auto mb-8 transition-transform duration-300 hover:scale-110">
                <span className="text-2xl font-light text-primary-800">1</span>
              </div>
              <h3 className="text-xl font-medium mb-4 text-black tracking-tight">Diagnose</h3>
              <p className="text-primary-600 text-sm leading-relaxed font-light">
                Book a free consultation to discuss your goals, current level, and specific needs. 
                We assess what you need most.
              </p>
            </div>
          </Card>
          <Card hover className="bg-white border-primary-200 hover:border-primary-400 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-center">
              <div className="w-14 h-14 border-2 border-primary-800 flex items-center justify-center mx-auto mb-8 transition-transform duration-300 hover:scale-110">
                <span className="text-2xl font-light text-primary-800">2</span>
              </div>
              <h3 className="text-xl font-medium mb-4 text-black tracking-tight">Match a Tutor</h3>
              <p className="text-primary-600 text-sm leading-relaxed font-light">
                We match you with a tutor who specializes in your subjects, tests, or application type, 
                and speaks your preferred language.
              </p>
            </div>
          </Card>
          <Card hover className="bg-white border-primary-200 hover:border-primary-400 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-center">
              <div className="w-14 h-14 border-2 border-primary-800 flex items-center justify-center mx-auto mb-8 transition-transform duration-300 hover:scale-110">
                <span className="text-2xl font-light text-primary-800">3</span>
              </div>
              <h3 className="text-xl font-medium mb-4 text-black tracking-tight">Improve</h3>
              <p className="text-primary-600 text-sm leading-relaxed font-light">
                Start regular sessions with structured learning, practice, and feedback. 
                Track progress and adjust as needed.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Services Overview */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-normal text-black mb-6 tracking-tight">Our Services</h2>
          <p className="text-lg text-primary-600 max-w-2xl mx-auto font-light">
            Comprehensive support across all your academic and application needs
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Card 
              key={service.id} 
              hover 
              className="bg-white border-primary-200 hover:border-primary-400 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)] animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <h3 className="text-xl font-medium mb-4 text-black tracking-tight">{service.title}</h3>
              <p className="text-primary-600 mb-6 font-light text-sm leading-relaxed">{service.description}</p>
              <ul className="space-y-2.5 text-sm text-primary-600 mb-6">
                {service.subServices.slice(0, 4).map((sub, subIdx) => (
                  <li key={subIdx} className="flex items-start font-light">
                    <span className="text-primary-800 mr-3 mt-1">—</span>
                    <span>{sub.name}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link
                  href="/services"
                  className="text-primary-800 hover:text-black font-medium text-sm inline-flex items-center border-b border-primary-300 hover:border-primary-800 transition-colors duration-200"
                >
                  See all services
                </Link>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button href="/services" variant="primary" size="lg">
            See All Services
          </Button>
        </div>
      </Section>

      {/* Team Preview */}
      <Section className="bg-primary-50">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-normal text-black mb-6 tracking-tight">Meet Our Team</h2>
          <p className="text-lg text-primary-600 max-w-2xl mx-auto font-light">
            Experienced tutors from top universities, ready to help you succeed
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {featuredTutors.map((tutor) => (
            <TutorCard key={tutor.id} tutor={tutor} />
          ))}
        </div>
        <div className="text-center">
          <Button href="/team" variant="outline" size="lg">
            View All Tutors
          </Button>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-normal text-black mb-6 tracking-tight">What Students Say</h2>
          <p className="text-xs text-primary-500 italic mb-12 font-light">(Placeholder testimonials - replace with real ones)</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white border-primary-200 hover:border-primary-400 transition-all duration-300 animate-fade-in-up">
            <div className="mb-4">
              <div className="flex text-primary-700 mb-4 text-sm">
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i} className="opacity-80">{star}</span>
                ))}
              </div>
              <p className="text-primary-600 italic mb-6 text-sm leading-relaxed font-light">
                &quot;The EB math tutoring helped me understand concepts I&apos;d struggled with for months. 
                My tutor was patient and explained everything clearly.&quot;
              </p>
              <p className="text-xs font-medium text-primary-800">— Student, Luxembourg</p>
            </div>
          </Card>
          <Card className="bg-white border-primary-200 hover:border-primary-400 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="mb-4">
              <div className="flex text-primary-700 mb-4 text-sm">
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i} className="opacity-80">{star}</span>
                ))}
              </div>
              <p className="text-primary-600 italic mb-6 text-sm leading-relaxed font-light">
                &quot;The UCAS personal statement support was invaluable. My tutor helped me structure my thoughts 
                and write authentically. Got offers from all my choices!&quot;
              </p>
              <p className="text-xs font-medium text-primary-800">— Student, Brussels</p>
            </div>
          </Card>
          <Card className="bg-white border-primary-200 hover:border-primary-400 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="mb-4">
              <div className="flex text-primary-700 mb-4 text-sm">
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i} className="opacity-80">{star}</span>
                ))}
              </div>
              <p className="text-primary-600 italic mb-6 text-sm leading-relaxed font-light">
                &quot;SAT prep sessions were exactly what I needed. Practice tests, strategy, and confidence-building. 
                Scored higher than I expected.&quot;
              </p>
              <p className="text-xs font-medium text-primary-800">— Student, Paris</p>
            </div>
          </Card>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-primary-50">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-normal text-black mb-6 tracking-tight">Frequently Asked Questions</h2>
          <p className="text-lg text-primary-600 max-w-2xl mx-auto font-light">
            Everything you need to know about working with EB Tutors
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <FAQAccordion items={faqItems} />
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary-900 text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-normal tracking-tight mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-12 text-primary-300 font-light">
            Book a free consultation to discuss your goals and find the right tutor for you.
          </p>
          <Button
            href={process.env.NEXT_PUBLIC_CALENDLY_URL || '/contact'}
            variant="secondary"
            size="lg"
            className="rounded-none bg-white text-primary-900 hover:bg-primary-100 transition-all duration-200"
          >
            Book Your Free Consultation
          </Button>
        </div>
      </Section>
    </>
  )
}

