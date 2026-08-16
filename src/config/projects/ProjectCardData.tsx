import Motion from '@/components/icons/social/FramerMotion';
import ReactJs from '@/components/icons/tech/ReactIcon';
import NextJs from '@/components/icons/tech/NextJS';
import { Supabase } from '@/components/icons/tech/Supabase';
import TailwindCss from '@/components/icons/tech/TailwindCss';
import TypeScript from '@/components/icons/tech/TypeScript';
import Vite from '@/components/icons/tech/Vite';
import { Cloudflare } from '@/components/icons/tech/Cloudflare';
import { Vercel } from '@/components/icons/tech/Vercel';
import { LLM, PostgreSQL } from '@/lib/techIcons';

export const ProjectCardData = [
  {
    id: 1,
    title: 'Kashio',
    subheading: 'AI-Powered Finance & Subscription Tracker',
    img: {
      src: '/projects/project1.avif',
      alt: 'Kashio Personal Finance App',
      width: 1920,
      height: 1080,
    },
    description:
      'A modern personal finance, expense analytics, and subscription management web application. Features interactive subscription renewal calendars, Google Gemini AI financial summaries, cash flow diagnostics, and obsidian dark UI.',
    links: {
      website: 'https://kashio.in',
      github: 'https://github.com/devygram',
      details: '/projects/kashio',
    },
    technologies: [
      {
        name: 'React',
        icon: <ReactJs />,
        href: 'https://react.dev/',
      },
      {
        name: 'Vite',
        icon: <Vite />,
        href: 'https://vitejs.dev/',
      },
      {
        name: 'Tailwind CSS',
        icon: <TailwindCss />,
        href: 'https://tailwindcss.com/',
      },
      {
        name: 'Supabase',
        icon: <Supabase />,
        href: 'https://supabase.com/',
      },
      {
        name: 'Gemini AI',
        icon: <LLM />,
        href: 'https://deepmind.google/technologies/gemini/',
      },
      {
        name: 'PostgreSQL',
        icon: <PostgreSQL />,
        href: 'https://www.postgresql.org/',
      },
    ],
    isWorking: true,
    isBulding: false,
    details: true,
    projectDetailsPageSlug: '/projects/kashio',
  },
  {
    id: 2,
    title: 'Tools by DevyGram',
    subheading: 'Web & Developer Utilities Suite',
    img: {
      src: '/projects/project2.avif',
      alt: 'Tools by DevyGram',
      width: 1920,
      height: 1080,
    },
    description:
      'A collection of high-performance web utilities, formatters, generators, and productivity tools built for developers and creators. Fast, private, and runs directly in your browser.',
    links: {
      website: 'https://tools.devygram.com/',
      github: 'https://github.com/devygram',
      details: '/projects/tools',
    },
    technologies: [
      {
        name: 'Next.js',
        icon: <NextJs />,
        href: 'https://nextjs.org/',
      },
      {
        name: 'React',
        icon: <ReactJs />,
        href: 'https://react.dev/',
      },
      {
        name: 'Tailwind CSS',
        icon: <TailwindCss />,
        href: 'https://tailwindcss.com/',
      },
      {
        name: 'TypeScript',
        icon: <TypeScript />,
        href: 'https://www.typescriptlang.org/',
      },
      {
        name: 'Vercel',
        icon: <Vercel />,
        href: 'https://vercel.com/',
      },
    ],
    isWorking: true,
    isBulding: false,
    details: true,
    projectDetailsPageSlug: '/projects/tools',
  },
  {
    id: 3,
    title: 'WLPPR',
    subheading: 'Curated Aesthetic Wallpapers',
    img: {
      src: '/projects/project3.avif',
      alt: 'WLPPR Wallpaper Platform',
      width: 1920,
      height: 1080,
    },
    description:
      'A minimal, lightning-fast wallpaper platform featuring handpicked high-resolution backgrounds for desktop and mobile devices. Hosted globally on Cloudflare Pages.',
    links: {
      website: 'https://wlppr.pages.dev/',
      github: 'https://github.com/devygram',
      details: '/projects/wlppr',
    },
    technologies: [
      {
        name: 'React',
        icon: <ReactJs />,
        href: 'https://react.dev/',
      },
      {
        name: 'Vite',
        icon: <Vite />,
        href: 'https://vitejs.dev/',
      },
      {
        name: 'Tailwind CSS',
        icon: <TailwindCss />,
        href: 'https://tailwindcss.com/',
      },
      {
        name: 'Cloudflare',
        icon: <Cloudflare />,
        href: 'https://cloudflare.com/',
      },
    ],
    isWorking: true,
    isBulding: false,
    details: true,
    projectDetailsPageSlug: '/projects/wlppr',
  },
  {
    id: 4,
    title: 'Biolink Hub',
    subheading: 'Minimalist Personal Link-in-Bio',
    img: {
      src: '/projects/project4.avif',
      alt: 'Biolink Website',
      width: 1920,
      height: 1080,
    },
    description:
      'A fast, mobile-first bio link website designed for clean navigation across all social channels, portfolio items, and marketing campaigns with high conversion rates.',
    links: {
      website: 'https://bio.devygram.com/',
      github: 'https://github.com/devygram',
      details: '/projects/biolink',
    },
    technologies: [
      {
        name: 'Next.js',
        icon: <NextJs />,
        href: 'https://nextjs.org/',
      },
      {
        name: 'Tailwind CSS',
        icon: <TailwindCss />,
        href: 'https://tailwindcss.com/',
      },
      {
        name: 'TypeScript',
        icon: <TypeScript />,
        href: 'https://www.typescriptlang.org/',
      },
      {
        name: 'Vercel',
        icon: <Vercel />,
        href: 'https://vercel.com/',
      },
    ],
    isWorking: true,
    isBulding: false,
    details: true,
    projectDetailsPageSlug: '/projects/biolink',
  },
  {
    id: 5,
    title: 'Pixora',
    subheading: 'Creative Digital Assets & Visuals',
    img: {
      src: '/projects/comingsoon.avif',
      alt: 'Pixora Creative Assets',
      width: 1920,
      height: 1080,
    },
    description:
      'A modern visual asset platform and creative digital repository showcasing graphics, UI elements, and media curated for modern web design projects.',
    links: {
      website: 'https://pixora.devygram.com/',
      github: 'https://github.com/devygram',
      details: '/projects/pixora',
    },
    technologies: [
      {
        name: 'React',
        icon: <ReactJs />,
        href: 'https://react.dev/',
      },
      {
        name: 'Next.js',
        icon: <NextJs />,
        href: 'https://nextjs.org/',
      },
      {
        name: 'Tailwind CSS',
        icon: <TailwindCss />,
        href: 'https://tailwindcss.com/',
      },
      {
        name: 'Motion',
        icon: <Motion />,
        href: 'https://motion.dev/',
      },
    ],
    isWorking: true,
    isBulding: false,
    details: true,
    projectDetailsPageSlug: '/projects/pixora',
  },
];
