export interface Tutor {
  id: string
  name: string
  headshot: string
  degree: string
  bio: string
  subjects: string[]
  languages: string[]
  specialties: string[]
  linkedin?: string
  availability?: string
}

export const tutors: Tutor[] = [
  {
    id: 'rohan-pathak',
    name: 'Rohan Pathak',
    headshot: '/team/rohan-pathak.jpg',
    degree: 'BSc Electrical & Computer Engineering, Cornell University',
    bio: 'Rohan specializes in mathematics and physics for the European Baccalaureate, as well as SAT Test Preparation and US University Applications.',
    subjects: ['Mathematics', 'Physics'],
    languages: ['English', 'French', 'Dutch'],
    specialties: ['EB Math', 'EB Physics', 'SAT Math'],
    linkedin: 'https://linkedin.com/in/profile-rohanpathak',
    availability: 'Limited slots',
  },
  {
    id: 'sarah-chen',
    name: 'Sarah Chen',
    headshot: '/team/rohan-pathak.jpg',
    degree: 'BSc Electrical & Computer Engineering, Cornell University',
    bio: 'Sarah specializes in mathematics and physics for the European Baccalaureate, with particular expertise in exam preparation and oral exam techniques. She has helped over 50 students achieve their target scores.',
    subjects: ['Mathematics', 'Physics', 'Computer Science'],
    languages: ['English', 'French', 'Mandarin'],
    specialties: ['EB Math', 'EB Physics', 'SAT Math', 'AP Calculus', 'Oral Exam Prep'],
    linkedin: 'https://linkedin.com/in/sarah-chen',
    availability: 'Limited slots',
  },
  {
    id: 'marco-rossi',
    name: 'Marco Rossi',
    headshot: '/team/rohan-pathak.jpg',
    degree: 'MA History, Oxford University',
    bio: 'Marco focuses on humanities subjects and university applications, especially for UK universities. He has extensive experience with UCAS personal statements and interview preparation.',
    subjects: ['History', 'English Literature', 'Philosophy'],
    languages: ['English', 'Italian', 'French', 'Spanish'],
    specialties: ['UK Personal Statement', 'UCAS Applications', 'LNAT', 'Interview Prep', 'EB History'],
    linkedin: 'https://linkedin.com/in/marco-rossi',
  },
  {
    id: 'emma-larsen',
    name: 'Emma Larsen',
    headshot: '/team/rohan-pathak.jpg',
    degree: 'BSc Biology, ETH Zurich',
    bio: 'Emma teaches biology and chemistry for the EB, and helps students prepare for medical school admissions tests including BMAT and UCAT. She also coaches students on study methods and exam strategies.',
    subjects: ['Biology', 'Chemistry', 'Mathematics'],
    languages: ['English', 'German', 'French', 'Danish'],
    specialties: ['EB Biology', 'EB Chemistry', 'BMAT', 'UCAT', 'Study Methods'],
    linkedin: 'https://linkedin.com/in/emma-larsen',
  },
  {
    id: 'james-wilson',
    name: 'James Wilson',
    headshot: '/team/rohan-pathak.jpg',
    degree: 'BA Economics, London School of Economics',
    bio: 'James specializes in economics, business studies, and US university applications. He has a strong track record helping students with the Common App and SAT/ACT preparation.',
    subjects: ['Economics', 'Business Studies', 'Mathematics'],
    languages: ['English', 'French'],
    specialties: ['US Common App', 'SAT', 'ACT', 'EB Economics', 'Test Prep'],
    linkedin: 'https://linkedin.com/in/james-wilson',
  },
  {
    id: 'sophie-martin',
    name: 'Sophie Martin',
    headshot: '/team/rohan-pathak.jpg',
    degree: 'MA French Literature, Sorbonne University',
    bio: 'Sophie teaches French, Spanish, and English language and literature. She helps students with language exams including TOEFL and IELTS, and supports multilingual students in their applications.',
    subjects: ['French', 'Spanish', 'English Language', 'English Literature'],
    languages: ['French', 'English', 'Spanish', 'German'],
    specialties: ['TOEFL', 'IELTS', 'EB French', 'EB Spanish', 'Language Exam Prep'],
    linkedin: 'https://linkedin.com/in/sophie-martin',
  },
]


