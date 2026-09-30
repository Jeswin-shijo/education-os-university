import logo from '../assets/images/logo.png'
import footerLogo from '../assets/images/footer-logo.png'
import student1 from '../assets/images/student-1.png'
import student2 from '../assets/images/student-2.png'
import student3 from '../assets/images/student-3.png'
import videoThumb from '../assets/images/video-thumb.jpg'
import founderPhoto from '../assets/images/ayya.png'
import conclave from '../assets/images/conclave.png'
import pubBrochure from '../assets/images/pub-brochure.jpg'
import pubMagazine from '../assets/images/pub-magazine.jpg'
import academicsEngineering from '../assets/images/academics-engineering.jpg'
import campusAerial from '../assets/images/campus-aerial.jpg'
import campusTech from '../assets/images/campus-tech.jpg'
import campusCultural from '../assets/images/campus-cultural.jpg'
import campusSports from '../assets/images/campus-sports.jpg'
import campusLifeSkills from '../assets/images/campus-lifeskills.jpg'
import campusDecoLeft from '../assets/images/campus-deco-left.png'
import campusDecoRight from '../assets/images/campus-deco-right.png'

import google from '../assets/images/recruiters/google.png'
import amazon from '../assets/images/recruiters/amazon.png'
import microsoft from '../assets/images/recruiters/microsoft.png'
import servicenow from '../assets/images/recruiters/servicenow.png'
import juspay from '../assets/images/recruiters/juspay.png'
import goldmanSachs from '../assets/images/recruiters/goldman-sachs.png'
import cisco from '../assets/images/recruiters/cisco.png'
import tcs from '../assets/images/recruiters/tcs.png'
import hcltech from '../assets/images/recruiters/hcltech.png'
import ups from '../assets/images/recruiters/ups.png'
import att from '../assets/images/recruiters/att.png'
import amd from '../assets/images/recruiters/amd.png'
import siemens from '../assets/images/recruiters/siemens.png'
import schneider from '../assets/images/recruiters/schneider-electric.png'
import stryker from '../assets/images/recruiters/stryker.png'
import caterpillar from '../assets/images/recruiters/caterpillar.png'
import mahindra from '../assets/images/recruiters/mahindra.png'
import bp from '../assets/images/recruiters/bp.png'

export const images = {
  logo,
  footerLogo,
  videoThumb,
  founderPhoto,
  conclave,
  campusAerial,
  campusDecoLeft,
  campusDecoRight,
}

export const university = {
  name: 'DHANALAKSHMI SRINIVASAN',
  suffix: 'UNIVERSITY',
}

export const navItems: string[] = [
  'About Us',
  'Administration',
  'Academics',
  'Admissions',
  'Placements',
  'Examinations',
  'Centre for Research',
  'Student Life',
  'Campus Harmony',
  'Information Corner',
  'HCSET',
]

export const hero = {
  titleParts: [
    { text: 'Leading University in ' },
    { text: 'Chennai', highlight: true },
    { text: ' - Dhanalakshmi Srinivasan University' },
  ],
  campusPrompt: 'Find a campus near you',

  campusName: 'Chennai',
};

export interface Achiever {
  name: string
  talent: string
  score: string
  image: string
}

export const achievers: Achiever[] = [
  { name: 'Rajlaxmi Kanhe', talent: 'The Photographer', score: '96.20%', image: student1 },
  { name: 'Ojas Dnyaneshwar', talent: 'The Painter', score: '96.40%', image: student2 },
  { name: 'Ayaan Sanjay Sonigara', talent: 'The Chess Player', score: '96.80%', image: student3 },
]

export const admission = {
  years: ['2027-28', '2026-27'],
  branches: ['OIS Vilankurichi', 'OIS Saravanampatti', 'OIS Kalapatti', 'OIS Peelamedu'],
  city: 'Coimbatore',
}

export interface Stat {
  value: string
  label: string
}

export const stats: Stat[] = [
  { value: '130+', label: 'Acres of Campus' },
  { value: '80+', label: 'Multimedia Classrooms' },
  { value: '760K+', label: 'Book Volumes' },
  { value: '250+', label: 'Recruiters' },
]

export const videoSection = {
  title: 'Why Dhanalakshmi Srinivasan University',
  description:
    'The Dhanalakshmi Srinivasan University (DSU) has been established under the Tamil Nadu Private Universities Act, 2019, located in Tiruchirappali, Tamil Nadu, India. Uniqueness of DSU lies in its multi-disciplinary nature in offering a wide range of academic programmes encompassing medicine and engineering. Our motto is "education for the real world" with dedication and commitment towards nurturing the future generation. Green ambience with state-of-the-art infrastructure along with top-class faculty aims to serve the need of national and international students.',
  cta: 'Enquire Now',
}

export const founder = {
  eyebrow: 'Founder-Chancellor DSU',
  titleLines: ['Founder Message'],
  quote:'Education is an instrument to create a knowledge society. India moves ahead in the path of giving education to all sections of population across the nation. Provision of an opportunity to pursue higher education to all eligible candidates would pave way for holistic development.', 
  name: 'Shri. A. Srinivasan',
  role: 'Founder & Chancellor',
  org: ''
}

export interface Publication {
  title: string[]
  image: string
}

export const publications = {
  eyebrow: 'DS University',
  title: 'Digital Publications',
  buttons: [
    { label: 'Article 2026', variant: 'orange' as const },
    { label: 'Article 2025', variant: 'red' as const },
  ],
  items: [
    { title: ['DS University', 'Brochure'], image: pubBrochure },
    { title: ['DS University', 'Magazine'], image: pubMagazine },
  ] satisfies Publication[],
}

export type AcademicIcon = 'engineering' | 'nursing' | 'pharmacy' | 'allied-health' | 'physiotherapy'

export interface AcademicProgram {
  name: string
  /** Banner heading drawn over the card art, one entry per line */
  bannerLines: string[]
  icon: AcademicIcon
  /** Photo for the card; schools without one get an illustrated banner */
  image?: string
  /** The photo has its own blank poster panel, so the banner sits inside it instead of on a scrim */
  bannerOnPoster?: boolean
}

/* Drop-in photos: save an image as src/assets/images/academics/<icon>.jpg (or .png/.webp),
   e.g. nursing.jpg, and that school's card uses it; see the README in that folder. */
const academicPhotos = import.meta.glob<string>('../assets/images/academics/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
})

function academicPhoto(icon: AcademicIcon): string | undefined {
  const match = Object.entries(academicPhotos).find(([path]) => path.split('/').pop()?.split('.')[0] === icon)
  return match?.[1]
}

export const academics: AcademicProgram[] = [
  {
    name: 'School of Engineering & Technology',
    bannerLines: ['Engineering', 'and Technology'],
    icon: 'engineering',
    image: academicsEngineering,
    bannerOnPoster: true,
  },
  {
    name: 'College of Nursing and Research',
    bannerLines: ['Nursing', 'and Research'],
    icon: 'nursing',
    image: academicPhoto('nursing'),
  },
  { name: 'College of Pharmacy', bannerLines: ['Pharmacy'], icon: 'pharmacy', image: academicPhoto('pharmacy') },
  {
    name: 'School of Allied Health Sciences',
    bannerLines: ['Allied Health', 'Sciences'],
    icon: 'allied-health',
    image: academicPhoto('allied-health'),
  },
  {
    name: 'School of Physiotherapy',
    bannerLines: ['Physiotherapy'],
    icon: 'physiotherapy',
    image: academicPhoto('physiotherapy'),
  },
]

export const placement = {
  titleLines: ['Placement Success', 'Starts Here'],
}

export interface Recruiter {
  name: string
  logo: string
  height: number
}

export const recruiters: Recruiter[] = [
  { name: 'Google', logo: google, height: 46 },
  { name: 'Amazon', logo: amazon, height: 48 },
  { name: 'Microsoft', logo: microsoft, height: 35 },
  { name: 'ServiceNow', logo: servicenow, height: 25 },
  { name: 'Juspay', logo: juspay, height: 25 },
  { name: 'Goldman Sachs', logo: goldmanSachs, height: 38 },
  { name: 'Cisco', logo: cisco, height: 54 },
  { name: 'Tata Consultancy Services', logo: tcs, height: 35 },
  { name: 'HCLTech', logo: hcltech, height: 37 },
  { name: 'UPS', logo: ups, height: 47 },
  { name: 'AT&T', logo: att, height: 48 },
  { name: 'AMD', logo: amd, height: 38 },
  { name: 'Siemens', logo: siemens, height: 30 },
  { name: 'Schneider Electric', logo: schneider, height: 46 },
  { name: 'Stryker', logo: stryker, height: 38 },
  { name: 'Caterpillar', logo: caterpillar, height: 29 },
  { name: 'Mahindra', logo: mahindra, height: 30 },
  { name: 'bp', logo: bp, height: 48 },
]

export type CampusLifeKey = 'tech' | 'cultural' | 'sports' | 'lifeskills'

export interface CampusLifeItem {
  key: CampusLifeKey
  title: string
  tags: string[]
  image: string
}

export const campusLife: CampusLifeItem[] = [
  { key: 'tech', title: 'Tech Clubs', tags: ['Innovate', 'Build', 'Transform'], image: campusTech },
  { key: 'cultural', title: 'Cultural Clubs', tags: ['Express', 'Celebrate', 'Belong'], image: campusCultural },
  { key: 'sports', title: 'Sports', tags: ['Play', 'Compete', 'Excel'], image: campusSports },
  { key: 'lifeskills', title: 'Life Skills', tags: ['Learn', 'Lead', 'Grow'], image: campusLifeSkills },
]

export const courses: string[] = [
  'B.E Bio-medical Engineering',
  'B.E Computer Science and Engineering',
  'B.E Electronics and Communication Engineering',
  'B.E Electrical and Electronics Engineering',
  'B.E Mechanical Engineering',
  'B.E Civil Engineering',
  'B.Tech Artificial Intelligence and Data Science',
  'B.Tech Information Technology',
  'MBA',
  'MCA',
]

export const footer = {
  about:
    'The Dhanalakshmi Srinivasan University, Established in 2010, is a private university located in Perambalur, Tamil Nadu, India. It is part of the Dhanalakshmi Srinivasan Group, which has interests in education, healthcare, and industry. The university is recognized by the University Grants Commission (UGC) and offers a wide range of undergraduate, postgraduate, and doctoral programs in various fields, including engineering, science, management, and humanities. It is known for its focus on quality education, research, and innovation, and is committed to providing students with the skills and knowledge they need to succeed in their careers.',
  quickLinks: ['Home', 'About us', 'Specialties', 'Our Doctors', 'Contact Us'],
  usefulLinks: ['Cardiology', 'Orthopedics', 'Neurology', 'Pediatrics', 'Emergency Medicine'],
  address:
    'NH-45, Trichy Chennai Trunk Road, Samayapuram (Near Samayapuram Toll Plaza), Tiruchirappalli - 621 112. Tamil Nadu, India.',
  email: 'enquiry@dsuniversity.ac.in',
  phones: ['+91 63841 76766', '+91 63841 76769'],
}

export const chatWidget = {
  message: 'Hi there! I’m SSVM Clara. Curious about SSVM? Just\u00a0ask!',
}
