import logo from '../assets/images/logo.png'
import footerLogo from '../assets/images/footer-logo.png'
import student1 from '../assets/images/banner_1.jpg'
import student2 from '../assets/images/banner_2.jpg'
import student3 from '../assets/images/banner_3.jpg'
import videoThumb from '../assets/images/video-thumb.jpg'
import founderPhoto from '../assets/images/ayya_.png'
import proChanPhoto from '../assets/images/pro_chan.png'
import viceChanPhoto from '../assets/images/vice_chan.png'
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
  proChanPhoto,
  viceChanPhoto,
  conclave,
  campusAerial,
  campusDecoLeft,
  campusDecoRight,
  pubBrochure,
  pubMagazine,
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
}

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
  branches: [
    "School of Engineering & Tech",
    "School of Nursing",
    "School of Pharmacy",
    "School of Allied Health Sciences",
    "School of Physiotherapy"
  ],
  city: 'Chennai',
}

export interface Stat {
  value: string
  label: string
}

export const stats: Stat[] = [
  { value: '100+', label: 'Acres Campus' },
  { value: '50+', label: 'Programs' },
  { value: '5000+', label: 'Students' },
  { value: '500+', label: 'Faculty' },
]

export const videoSection = {
  title: 'Why Dhanalakshmi Srinivasan University',
  description:
    'Dhanalakshmi Srinivasan University (DSU) is a multidisciplinary university in Tiruchirappalli, Tamil Nadu, offering diverse programmes in medicine, engineering, and more. With modern infrastructure, a green campus, and experienced faculty, DSU is committed to “Education for the Real World” and nurturing future-ready professionals.',
  cta: 'Enquire Now',
}

export interface LeaderMessage {
  id: number
  eyebrow: string
  titleBlue: string
  titleGold: string
  quote: string
  name: string
  role: string
  image: string
}

export const leaders: LeaderMessage[] = [
  {
    id: 1,
    eyebrow: 'FOUNDER-CHANCELLOR DSU',
    titleBlue: 'Founder',
    titleGold: 'Message',
    quote:
      'Education is an instrument to create a knowledge society. India moves ahead in the path of giving education to all sections of population across the nation. Provision of an opportunity to pursue higher education to all eligible candidates would pave way for holistic development.',
    name: 'Shri. A. Srinivasan',
    role: 'Founder & Chancellor',
    image: founderPhoto,
  },
  {
    id: 2,
    eyebrow: 'PRO-CHANCELLOR DSU',
    titleBlue: 'Pro Chancellor',
    titleGold: 'Message',
    quote:
      'Creation of a world with honest, truthful, compassionate, responsible, intelligent citizens by giving a thrust to holistic higher education is the vision of our University. Dhanalakshmi Srinivasan University (DSU) aims to uphold gender equality in providing higher education to all its student fraternity, with no socio economic or cultural discriminations.',
    name: 'Mrs. Ananthalakshmi Kathiravan',
    role: 'Pro Chancellor',
    image: proChanPhoto,
  },
  {
    id: 3,
    eyebrow: 'VICE-CHANCELLOR DSU',
    titleBlue: 'Vice Chancellor',
    titleGold: 'Message',
    quote:
      'Dr C K Ranjan graduated from the Armed Forces Medical College, Pune and was commissioned into the Indian Air Force (IAF) on 03 March 1980. He holds postgraduate degrees (MD and DNB Aviation Medicine) from Bangalore University and National Board of Examinations, New Delhi. He also completed MSc (Defence Studies) from Madras University and M Phil from Birla Institute of Technology and Science, Pilani. He is a Fellow of the Indian Society of Aerospace Medicine.',
    name: 'Air Marshal (Dr) C K Ranjan AVSM VSM (Retd)',
    role: 'Vice Chancellor',
    image: viceChanPhoto,
  },
]

export const founder = {
  eyebrow: 'Founder-Chancellor DSU',
  titleLines: ['Founder Message'],
  quote:
    'Education is an instrument to create a knowledge society. India moves ahead in the path of giving education to all sections of population across the nation. Provision of an opportunity to pursue higher education to all eligible candidates would pave way for holistic development.',
  name: 'Shri. A. Srinivasan',
  role: 'Founder & Chancellor',
  org: '',
}

export type AcademicIcon = 'engineering' | 'nursing' | 'pharmacy' | 'allied-health' | 'physiotherapy'

export interface AcademicProgram {
  name: string
  bannerLines: string[]
  icon: AcademicIcon
  image?: string
  bannerOnPoster?: boolean
}

function academicPhoto(slug: string): string {
  return `/assets/image/img-${slug === 'engineering' ? 18 : slug === 'nursing' ? 19 : slug === 'pharmacy' ? 20 : slug === 'allied-health' ? 21 : 22}.jpg`
}

export const academics: AcademicProgram[] = [
  {
    name: 'School of Engineering & Tech',
    bannerLines: ['School of', 'Engineering & Tech'],
    icon: 'engineering',
    image: academicsEngineering,
    bannerOnPoster: true,
  },
  {
    name: 'School of Nursing',
    bannerLines: ['School of', 'Nursing'],
    icon: 'nursing',
    image: academicPhoto('nursing'),
  },
  {
    name: 'School of Pharmacy',
    bannerLines: ['School of', 'Pharmacy'],
    icon: 'pharmacy',
    image: academicPhoto('pharmacy'),
  },
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
  quickLinks: ['Home', 'About us', 'Administration', 'Academics', 'Admissions'],
  usefulLinks: ['Placements', 'Examinations', 'Centre for Research', 'Student Life', 'Campus Harmony'],
  address: 'No. 6, GST Road, Mamandur, Chengalpattu – 603111, Tamil Nadu, India',
  email: 'enquiry@dsuniversity.ac.in',
  phones: ['+91 70944 58021', '+91 70944 58022'],
}

// export const chatWidget = {
//   message: 'Have questions? Chat with our Admissions Desk!',
// }

