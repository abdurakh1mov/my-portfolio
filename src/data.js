/**
 * Single source of truth for all site content.
 * Edit this file to make the portfolio your own — no component changes needed.
 */

export const profile = {
  name: 'Alex Rivera',
  brand: 'alex',
  available: true,
  year: 2026,
  email: 'hello@alexrivera.dev',
  hero: {
    lead: 'I craft',
    accent: 'Flutter',
    trail: 'experiences',
    tagline:
      'Cross-platform apps that feel native, run at 60fps, and look like they were designed by someone who cares. Because I do.',
  },
  about: [
    "I'm Alex — a Flutter engineer obsessed with motion, performance, and the small moments that make an app feel alive.",
    'Six years building consumer mobile products, from solo side-projects to apps with millions of installs. I care about clean architecture as much as delightful micro-interactions. Currently open to senior / staff roles and select contracts.',
  ],
}

export const navLinks = [
  { label: 'Apps', href: '#apps' },
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Work', href: '#work' },
]

export const stats = [
  { value: '6+', label: 'years' },
  { value: '14', label: 'apps' },
  { value: '2M+', label: 'downloads' },
  { value: '4.8', label: 'avg rating' },
]

export const apps = [
  {
    name: 'Lumen',
    category: 'Habit tracker',
    rating: '4.8',
    description: 'Streaks, home-screen widgets & local-first sync that just works.',
    gradient: 'linear-gradient(135deg, #38bdf8, #a78bfa)',
  },
  {
    name: 'Fathom',
    category: 'Sleep & calm',
    rating: '4.9',
    description: 'Adaptive soundscapes and a beautiful, distraction-free player.',
    gradient: 'linear-gradient(135deg, #a78bfa, #38bdf8)',
  },
  {
    name: 'Trailhead',
    category: 'Hiking maps',
    rating: '4.7',
    description: 'Offline maps, GPS tracks and elevation profiles for the wild.',
    gradient: 'linear-gradient(135deg, #38bdf8, #5eead4)',
  },
  {
    name: 'Splitmate',
    category: 'Expenses',
    rating: '4.6',
    description: 'Split group costs and settle up with one tap. No spreadsheets.',
    gradient: 'linear-gradient(135deg, #c084fc, #5eead4)',
  },
  {
    name: 'Pulse',
    category: 'Fitness',
    rating: '4.8',
    description: 'Workout logging with rich charts and Apple Health sync.',
    gradient: 'linear-gradient(135deg, #38bdf8, #a78bfa)',
  },
  {
    name: 'Nimbus',
    category: 'Weather',
    rating: '4.9',
    description: 'Hyperlocal forecasts wrapped in a genuinely gorgeous UI.',
    gradient: 'linear-gradient(135deg, #5eead4, #c084fc)',
  },
]

export const stack = [
  'Flutter',
  'Dart',
  'Riverpod',
  'Firebase',
  'Supabase',
  'GraphQL',
  'Melos',
  'Codemagic',
  'Figma',
]

export const experience = [
  {
    period: '2023 — now',
    role: 'Senior Flutter Engineer',
    company: 'Northwind',
    summary: 'Led flagship rewrite, cut cold-start by 40%, mentored 4 devs.',
  },
  {
    period: '2021 — 23',
    role: 'Mobile Developer',
    company: 'Orbital Labs',
    summary: "Shipped 5 apps and built the company's shared design system.",
  },
  {
    period: '2019 — 21',
    role: 'Junior Developer',
    company: 'Bitcraft',
    summary: 'Drove native→Flutter migration and first App Store launch.',
  },
]

export const socials = [
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'X', href: 'https://x.com' },
]
