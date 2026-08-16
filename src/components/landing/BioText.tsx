import SectionHeading from '../common/SectionHeading';

const BioText = () => {
  return (
    <>
      <SectionHeading heading="About" />
      <div className="space-y-5 p-8">
        <div className="flex flex-wrap items-center gap-x-1 gap-y-2 text-base font-normal whitespace-pre-wrap text-neutral-800 md:text-base dark:text-neutral-300">
          <ul className="list-disc space-y-2.5">
            <li>
              I'm a{' '}
              <b className="font-medium text-neutral-950 underline underline-offset-2 dark:text-neutral-100">
                Freelance Web Developer & Digital Marketing Expert
              </b>{' '}
              specializing in high-performance websites, technical SEO, and conversion-driven online advertising.
            </li>

            <li>
              I craft modern web applications using{' '}
              <b className="font-medium text-neutral-950 underline underline-offset-2 dark:text-neutral-100">
                Next.js, React, Vite, Tailwind CSS, and Framer Motion
              </b>
              , integrating state-of-the-art AI & vibe coding workflows to ship fast, clean, and interactive digital products.
            </li>

            <li>
              On the backend & cloud infrastructure, I work with{' '}
              <b className="font-medium text-neutral-950 underline underline-offset-2 dark:text-neutral-100">
                Supabase, Cloudflare, Vercel, PostgreSQL, Git, and Docker
              </b>{' '}
              to power resilient, scalable applications.
            </li>

            <li>
              I also design high-fidelity UI/UX in{' '}
              <b className="font-medium text-neutral-950 underline underline-offset-2 dark:text-neutral-100">
                Figma & Photoshop
              </b>
              , bridging the gap between elegant design, robust code, and business growth.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BioText;
