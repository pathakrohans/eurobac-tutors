import Section from '@/components/Section'
import Card from '@/components/Card'
import Button from '@/components/Button'

export const metadata = {
  title: 'About Us',
  description: 'Learn about EB Tutors, our mission, values, and how we select our tutor team.',
}

export default function AboutPage() {
  const values = [
    {
      title: 'Clarity',
      description: 'We communicate clearly about what we can help with, how we work, and what to expect. No jargon, no false promises.',
    },
    {
      title: 'Rigor',
      description: 'We maintain high standards in our teaching methods, tutor selection, and student support. Quality matters.',
    },
    {
      title: 'Kindness',
      description: 'We approach every student with empathy and patience. Learning can be stressful—we create a supportive environment.',
    },
  ]

  return (
    <>
      <Section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About EB Tutors</h1>
          <p className="text-lg text-gray-700">
            Expert tutoring for students navigating the European Baccalaureate, admissions tests, and university applications.
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why We Exist</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The European Baccalaureate is a rigorous program, and navigating university applications—especially 
              across different countries—can be overwhelming. Many students and families struggle to find tutors who 
              truly understand the EB system, speak multiple languages, and can guide them through the complexities 
              of international university applications.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              EB Tutors was founded to bridge this gap. We bring together experienced tutors who have been through 
              the EB themselves, excelled in admissions tests, and successfully navigated university applications. 
              Our tutors understand the unique challenges EB students face and can provide targeted, effective support.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Whether you&apos;re preparing for EB exams, studying for the SAT or ACT, or working on your UCAS personal 
              statement, we&apos;re here to help you succeed—with clarity, rigor, and kindness.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How We Select Our Tutors</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <h3 className="text-xl font-semibold mb-3">Academic Excellence</h3>
              <p className="text-gray-700">
                All our tutors have strong academic backgrounds, typically from top universities. Many have completed 
                the EB themselves or have extensive experience teaching it.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold mb-3">Teaching Experience</h3>
              <p className="text-gray-700">
                We prioritize tutors with proven teaching experience, whether through formal tutoring, teaching 
                assistantships, or educational roles.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold mb-3">Subject Expertise</h3>
              <p className="text-gray-700">
                Tutors must demonstrate deep knowledge in their subjects and, where relevant, have strong test scores 
                or credentials in the areas they teach.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold mb-3">Communication Skills</h3>
              <p className="text-gray-700">
                We look for tutors who can explain complex concepts clearly, adapt to different learning styles, 
                and build rapport with students.
              </p>
            </Card>
          </div>
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              All tutors go through an interview process and reference checks before joining the team.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <Card key={value.title} hover>
                <h3 className="text-2xl font-semibold text-black mb-4">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-black text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Want to Learn More?</h2>
          <p className="text-lg mb-8 text-gray-400">
            Book a free consultation to discuss your needs and see if we&apos;re a good fit.
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

