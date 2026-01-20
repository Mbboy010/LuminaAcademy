import { NavItem, StatItem, EventItem } from './types';

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Academics', href: '#academics' },
  { label: 'Campus Life', href: '#campus' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Contact', href: '#contact' },
];

export const SCHOOL_STATS: StatItem[] = [
  { id: 1, value: '1,200+', label: 'Students Enrolled' },
  { id: 2, value: '98%', label: 'University Acceptance' },
  { id: 3, value: '15:1', label: 'Student-Teacher Ratio' },
  { id: 4, value: '50+', label: 'Extracurricular Clubs' },
];

export const UPCOMING_EVENTS: EventItem[] = [
  {
    id: 1,
    date: '15',
    month: 'NOV',
    title: 'Science Fair 2024',
    description: 'Showcasing innovation from our brilliant young minds in the main hall.'
  },
  {
    id: 2,
    date: '22',
    month: 'NOV',
    title: 'Annual Sports Day',
    description: 'A day of friendly competition and athletic excellence at the stadium.'
  },
  {
    id: 3,
    date: '05',
    month: 'DEC',
    title: 'Winter Concert',
    description: 'Orchestra and choir performances to celebrate the festive season.'
  }
];

export const HERO_IMAGES = [
  "https://picsum.photos/1920/1080?random=1",
  "https://picsum.photos/1920/1080?random=2"
];

export const SYSTEM_INSTRUCTION = `You are the AI Assistant for Lumina Academy, a prestigious secondary school. 
Your tone should be professional, welcoming, and helpful. 
Key information:
- Curriculum: Cambridge IGCSE and A-Levels, plus IB Diploma.
- Values: Integrity, Excellence, Innovation.
- Admissions: Open for Grade 7 and 9. Entrance exam required.
- Facilities: State-of-the-art science labs, Olympic-size pool, Digital Library.
- Contact: admissions@lumina.edu, +1 (555) 123-4567.
Answer visitor questions about these topics briefly and politely.`;
