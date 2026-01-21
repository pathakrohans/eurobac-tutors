export interface Tutor {
  id: string
  name: string
  headshot: string
  degree: string
  bio: string
  subjects: string[]
  languages: string[]
  specialties: string[]
  admissionsSystems: string[]
  linkedin?: string
}

export const tutors: Tutor[] = [
  {
    id: 'rohan-pathak',
    name: 'Rohan Pathak',
    headshot: '/team/rohan-pathak.jpg',
    degree: 'BSc Electrical & Computer Engineering, Cornell University',
    bio: 'Rohan specializes in mathematics and physics for the European Baccalaureate, as well as SAT Test Preparation and US University Applications.',
    subjects: ['Mathematics 3P', 'Mathematics 5P', 'Advanced Mathematics', 'Physics', 'L2 French'],
    languages: ['English', 'French', 'Dutch'],
    specialties: ['SAT', 'SAT Math', 'SAT English Reading & Writing'],
    admissionsSystems: ['Common App'],
    linkedin: 'https://linkedin.com/in/profile-rohanpathak',
  },
  {
    id: 'leonardo-maestri',
    name: 'Leonardo Maestri',
    headshot: '/team/leonardo-maestri.jpg',
    degree: 'BA International Business Administration, Rotterdam School of Management - Erasmus University',
    bio: 'Leonardo specializes in economics and L1 English for the European Baccalaureate.',
    subjects: ['Mathematics 3P', 'Mathematics 5P', 'Advanced Mathematics', 'L1 English'],
    languages: ['English', 'Italian'],
    specialties: ['Oral Exam Prep'],
    admissionsSystems: ['StudieLink'],
    linkedin: 'https://www.linkedin.com/in/leonardo-maestri1706/',
  },
  {
    id: 'matteo-naudi',
    name: 'Matteo Naudi',
    headshot: '/team/rohan-pathak.jpg',
    degree: 'BSc Sport Science, Coaching, and Physical Education, Loughborough University',
    bio: 'Matteo has expertise in various subjects within the EB system. He also has extensive experience with UCAS personal statements and interview preparation.',
    subjects: ['Biology', 'Geography', 'L1 English'],
    languages: ['English', 'Italian', 'French'],
    specialties: ['UK Personal Statement', 'UCAS Applications', 'Interview Prep'],
    admissionsSystems: ['UCAS'],
    linkedin: 'https://www.linkedin.com/in/matteo-naudi-aa60a933a/',
  },
  {
    id: 'emma-larsen',
    name: 'Emma Larsen',
    headshot: '/team/leonardo-maestri.jpg',
    degree: 'BSc Biology, ETH Zurich',
    bio: 'Emma teaches biology and chemistry for the EB, and helps students prepare for medical school admissions tests including BMAT and UCAT. She also coaches students on study methods and exam strategies.',
    subjects: ['Biology', 'Chemistry', 'Mathematics'],
    languages: ['English', 'French'],
    specialties: ['EB Biology', 'EB Chemistry', 'UCAT', 'Study Methods'],
    admissionsSystems: [],
    linkedin: 'https://linkedin.com/in/emma-larsen',
  },
  {
    id: 'james-wilson',
    name: 'James Wilson',
    headshot: '/team/leonardo-maestri.jpg',
    degree: 'BA Economics, London School of Economics',
    bio: 'James specializes in economics, business studies, and US university applications. He has a strong track record helping students with the Common App and SAT/ACT preparation.',
    subjects: ['Economics', 'Business Studies', 'Mathematics'],
    languages: ['English', 'French'],
    specialties: ['US Common App', 'SAT', 'ACT', 'EB Economics', 'Test Prep'],
    admissionsSystems: ['Common App'],
    linkedin: 'https://linkedin.com/in/james-wilson',
  },
  {
    id: 'sophie-martin',
    name: 'Sophie Martin',
    headshot: '/team/rohan-pathak.jpg',
    degree: 'MA French Literature, Sorbonne University',
    bio: 'Sophie teaches French, Spanish, and English language and literature. She helps students with language exams including TOEFL and IELTS, and supports multilingual students in their applications.',
    subjects: ['French', 'Spanish', 'English Language', 'English Literature'],
    languages: ['French', 'English', 'Spanish'],
    specialties: ['TOEFL', 'IELTS', 'EB French', 'EB Spanish', 'Language Exam Prep'],
    admissionsSystems: [],
    linkedin: 'https://linkedin.com/in/sophie-martin',
  },
]
