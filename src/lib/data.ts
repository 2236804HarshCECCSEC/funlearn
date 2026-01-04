import { Calculator, BookOpenText, FlaskConical } from 'lucide-react';

export const user = {
  name: 'Alex',
  email: 'alex@example.com',
  avatar: 'user-avatar-1',
  points: 1250,
  level: 8,
  badges: [
    { name: 'Math Wiz', id: 'badge-math-wiz' },
    { name: 'Word Smith', id: 'badge-word-smith' },
    { name: 'Science Explorer', id: 'badge-science-explorer' },
    { name: 'Super Speller', id: 'badge-super-speller' },
    { name: 'Geometry Genius', id: 'badge-geometry-genius' },
  ],
};

export const subjects = [
  {
    name: 'Maths',
    description: 'Numbers, shapes, and logic.',
    icon: Calculator,
    moduleCount: 15,
    href: '/math',
  },
  {
    name: 'English',
    description: 'Reading, writing, and grammar.',
    icon: BookOpenText,
    moduleCount: 20,
    href: '#',
  },
  {
    name: 'Science',
    description: 'Exploring the world around us.',
    icon: FlaskConical,
    moduleCount: 12,
    href: '#',
  },
];
