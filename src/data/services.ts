export interface SubService {
  name: string
  description: string
  for?: string
}

export interface Service {
  id: string
  title: string
  description: string
  subServices: SubService[]
}

export const services: Service[] = [
  {
    id: 'eb-tutoring',
    title: 'European Baccalaureate (EB) Tutoring',
    description: 'Comprehensive support for all EB subjects, from regular tutoring to intensive exam preparation.',
    subServices: [
      {
        name: 'Subject Tutoring',
        description: 'One-on-one or small group sessions covering all EB subjects: Mathematics, Sciences, Languages, Humanities, and more.',
        for: 'Students at any stage of the EB program',
      },
      {
        name: 'Exam Revision Plans',
        description: 'Structured revision schedules tailored to your exam dates and learning style.',
        for: 'Students preparing for EB exams',
      },
      {
        name: 'Past Papers & Practice',
        description: 'Guided practice with past EB papers, including detailed feedback and strategy development.',
        for: 'Students in exam preparation phase',
      },
      {
        name: 'Oral Exam Preparation',
        description: 'Specialized coaching for EB oral exams, including presentation skills and question handling.',
        for: 'Students facing oral assessments',
      },
      {
        name: 'Study Methods & Organization',
        description: 'Learn effective study techniques, time management, and note-taking strategies.',
        for: 'Students looking to improve their study habits',
      },
      {
        name: 'Intensive Bootcamps',
        description: 'Focused multi-day sessions for intensive preparation before major exams.',
        for: 'Students needing concentrated preparation',
      },
    ],
  },
  {
    id: 'admissions-tests',
    title: 'Admissions Tests',
    description: 'Expert preparation for standardized tests required by universities worldwide.',
    subServices: [
      {
        name: 'SAT',
        description: 'Comprehensive SAT preparation covering Math, Evidence-Based Reading and Writing, and test-taking strategies.',
        for: 'Students applying to US universities',
      },
      {
        name: 'ACT',
        description: 'Full ACT preparation including all four sections: English, Math, Reading, and Science.',
        for: 'Students applying to US universities',
      },
      {
        name: 'TOEFL / IELTS',
        description: 'Language proficiency test preparation with practice tests and speaking/writing feedback.',
        for: 'Non-native English speakers applying to English-speaking universities',
      },
      {
        name: 'AP Exams',
        description: 'Advanced Placement exam preparation across multiple subjects.',
        for: 'Students taking AP courses or seeking college credit',
      },
      {
        name: 'LNAT (UK Law)',
        description: 'Law National Aptitude Test preparation for UK law school applications.',
        for: 'Students applying to UK law programs',
      },
      {
        name: 'UCAT / BMAT (UK Medicine)',
        description: 'Medical school admissions test preparation with practice questions and strategy sessions.',
        for: 'Students applying to UK medical schools',
      },
      {
        name: 'General Admissions Tests',
        description: 'Support for other standardized tests required by specific universities or programs.',
        for: 'Students with specific test requirements',
      },
    ],
  },
  {
    id: 'university-applications',
    title: 'University Applications',
    description: 'Guidance through the entire application process, from choosing universities to submitting strong applications.',
    subServices: [
      {
        name: 'US Applications (Common App)',
        description: 'Complete support for US university applications including Common App essays, supplements, and activity lists. We coach structure and thinking. Students write their own work.',
        for: 'Students applying to US universities',
      },
      {
        name: 'UK Applications (UCAS)',
        description: 'Personal statement writing support, course selection guidance, and UCAS form completion. We coach structure and thinking. Students write their own work.',
        for: 'Students applying to UK universities',
      },
      {
        name: 'UK Personal Statement',
        description: 'Specialized coaching for UCAS personal statements with multiple drafts and feedback. We coach structure and thinking. Students write their own work.',
        for: 'Students applying to UK universities',
      },
      {
        name: 'European University Applications',
        description: 'Support for applications to universities across Europe, tailored to each country\'s requirements.',
        for: 'Students applying to European universities',
      },
      {
        name: 'Interview Preparation',
        description: 'Mock interviews and coaching for university admissions interviews, including Oxbridge and medical school interviews.',
        for: 'Students with upcoming university interviews',
      },
      {
        name: 'CV / Activity Lists',
        description: 'Help crafting compelling CVs and activity lists that highlight achievements and experiences effectively.',
        for: 'Students building their application profiles',
      },
      {
        name: 'University Shortlisting',
        description: 'Guidance on selecting universities that match your academic profile, interests, and career goals.',
        for: 'Students beginning their application journey',
      },
    ],
  },
]


