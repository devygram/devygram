import CSS from "@/components/icons/tech/Css";
import Figma from "@/components/icons/tech/Figma";
import Html from "@/components/icons/tech/Html";
import JavaScript from "@/components/icons/tech/JavaScript";
import TailwindCss from "@/components/icons/tech/TailwindCss";
import NextJS from "@/components/icons/tech/NextJS";
import ReactIcon from "@/components/icons/tech/ReactIcon";
import { Supabase } from "@/components/icons/tech/Supabase";
import { Cloudflare } from "@/components/icons/tech/Cloudflare";
import { Vercel } from "@/components/icons/tech/Vercel";

import type { Experience } from "./types";

const ExperienceCardData: Experience[] = [
  {
    id: "devygram-freelance",
    companyName: "DevyGram Studios",
    companyLogo: "/company.webp",
    companyWebsite: "https://devygram.com",
    isCurrentEmployer: true,
    positions: [
      {
        id: "freelance-developer-marketer",
        title: "Freelance Web Developer & Digital Marketing Expert",
        employmentType: "Freelance / Self-Employed",
        employmentPeriod: {
          start: "2023",
          end: "Present",
        },
        duration: "Active",
        location: "Remote",
        description: `Designing, engineering, and launching modern high-performance web applications using Next.js, React, Supabase, and Cloudflare.
Leading technical SEO audits, site speed optimization, and search rankings for clients across multiple niches.
Managing end-to-end digital marketing, PPC advertising, and conversion rate optimization campaigns.`,
        skills: [
          {
            name: "Next.js",
            href: "https://nextjs.org/",
            icon: <NextJS />,
          },
          {
            name: "React",
            href: "https://react.dev/",
            icon: <ReactIcon />,
          },
          {
            name: "Tailwind CSS",
            href: "https://tailwindcss.com/",
            icon: <TailwindCss />,
          },
          {
            name: "Supabase",
            href: "https://supabase.com/",
            icon: <Supabase />,
          },
          {
            name: "Cloudflare",
            href: "https://cloudflare.com/",
            icon: <Cloudflare />,
          },
          {
            name: "Vercel",
            href: "https://vercel.com/",
            icon: <Vercel />,
          },
        ],
        isExpanded: true,
      },
    ],
  },
];

export default ExperienceCardData;
