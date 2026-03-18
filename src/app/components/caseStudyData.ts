import imgCaseStudyPresby from 'figma:asset/d9b935d18d1ef49cabb3ff7b05849a52ed273626.png';

export interface CaseStudy {
  id: string;
  num: string;
  title: string;
  company: string;
  description: string;
  image: string;
  tags: { label: string; variant: string }[];
  roleType: 'Manager' | 'IC';
  projectType: string;
  skills: string[];
  metricNum: string;
  metricLabel: string;
  readTime: string;
  featured: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'presbyterian',
    num: '01',
    title: 'Presbyterian Cardiology Referrals & CAHPS',
    company: 'Presbyterian Healthcare Services',
    description:
      'Led human-centered design research and service design to improve cardiology referral experience, increase Medicare CAHPS scores, and reduce patient wait times across 40+ facilities.',
    image: imgCaseStudyPresby,
    tags: [
      { label: 'Director', variant: 'manager' },
      { label: 'Healthcare', variant: 'coral' },
      { label: 'Service Design', variant: 'gold' },
    ],
    roleType: 'Manager',
    projectType: 'Service Design',
    skills: ['Service Design', 'Research', 'CX Strategy'],
    metricNum: '74→83%',
    metricLabel: 'CAHPS score\nimprovement target',
    readTime: '8 min read',
    featured: true,
  },
  {
    id: 'mayo-clinic',
    num: '02',
    title: 'Mayo Clinic: Patient Platform',
    company: 'Mayo Clinic',
    description:
      'Established a clear vision, direction, and strategy for reimagining the authenticated patient experience at Mayo Clinic, using Strategizer Portfolio Map to build leadership consensus and drive digital transformation.',
    image:
      'https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXlvJTIwY2xpbmljJTIwaG9zcGl0YWwlMjBtZWRpY2FsJTIwY2VudGVyfGVufDF8fHx8MTc3MjYwNTUwOXww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: [
      { label: 'Director', variant: 'manager' },
      { label: 'Healthcare', variant: 'coral' },
      { label: 'Platform', variant: 'teal' },
    ],
    roleType: 'Director',
    projectType: 'Platform',
    skills: ['Design Leadership', 'Product Strategy', 'Digital Transformation'],
    metricNum: '0→1',
    metricLabel: 'Patient platform\nreplatformed',
    readTime: '10 min read',
    featured: true,
  },
];

export const allProjectTypes = [...new Set(caseStudies.map((c) => c.projectType))];
export const allSkills = [...new Set(caseStudies.flatMap((c) => c.skills))];