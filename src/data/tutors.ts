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
    subjects: ['Mathematics 3P', 'Mathematics 5P', 'Advanced Mathematics'],
    languages: ['English', 'Italian'],
    specialties: ['Oral Exam Prep'],
    admissionsSystems: ['StudieLink'],
    linkedin: 'https://www.linkedin.com/in/leonardo-maestri1706/',
  },
  {
    id: 'matteo-naudi',
    name: 'Matteo Naudi',
    headshot: '/team/matteo-naudi.jpg',
    degree: 'BSc Sport Science, Coaching, and Physical Education, Loughborough University',
    bio: 'Matteo has expertise in various subjects within the EB system. He also has extensive experience with UCAS personal statements and interview preparation.',
    subjects: ['Biology', 'Geography', 'L1 English'],
    languages: ['English', 'Italian', 'French'],
    specialties: ['UK Personal Statement', 'UCAS Applications', 'Interview Prep'],
    admissionsSystems: ['UCAS'],
    linkedin: 'https://www.linkedin.com/in/matteo-naudi-aa60a933a/',
  },
  {
    id: 'romeo-erniquin',
    name: 'Romeo Erniquin',
    headshot: '/team/romeo-erniquin.jpg',
    degree: 'BSc Mechanical Engineering, Politecnico di Torino',
    bio: 'Romeo teaches Mathematics, Physcs, and L1 English for the EB, as well as helps students prepare for oral examinations and interviews.',
    subjects: ['Mathematics 3P', 'Mathematics 5P', 'Advanced Mathematics', 'Physics', 'L1 English'],
    languages: ['English', 'French'],
    specialties: ['UCAT'],
    admissionsSystems: [],
    linkedin: 'https://linkedin.com/in/emma-larsen',
  },
  {
    id: 'tom-beauge',
    name: 'Tom Beaugé',
    headshot: '/team/tom-beauge.jpg',
    degree: 'BSc Computer Science, École Polytechnique Fédérale de Lausanne (EPFL)',
    bio: 'Tom specializes in STEM subjects. He has a strong track record helping students prove themselves in mathematics and computer science.',
    subjects: ['ICT', 'Mathematics 3P', 'Mathematics 5P', 'Advanced Mathematics', 'Physics'],
    languages: ['English', 'French'],
    specialties: [],
    admissionsSystems: [],
    linkedin: 'https://www.linkedin.com/in/tombeauge/',
  },
  {
    id: 'sophie-martin',
    name: 'Sophie Martin',
    headshot: '/team/rohan-pathak.jpg',
    degree: 'MA French Literature, Sorbonne University',
    bio: 'Sophie teaches French, Spanish, and English language and literature. She helps students with language exams including TOEFL and IELTS, and supports multilingual students in their applications.',
    subjects: ['French', 'Spanish'],
    languages: ['French', 'English', 'Spanish'],
    specialties: ['TOEFL', 'IELTS'],
    admissionsSystems: [],
    linkedin: 'https://linkedin.com/in/sophie-martin',
  },
]
