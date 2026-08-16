import type { Metadata } from 'next';
import { Geist, Pixelify_Sans } from 'next/font/google';
import Script from 'next/script';
import '@/index.css';
import { ThemeProvider } from '@/components/landing/theme-provider';
import Container from '@/components/layouts/Container';
import Layout from '@/components/common/Layout';
import { Quote } from '@/components/common/Quote';
import Footer from '@/components/common/Footer';
import PageTracker from '@/components/common/PageTracker';
import { Analytics } from '@vercel/analytics/react';

const geistSans = Geist({
  variable: '--font-sans',
  subsets: ['latin'],
});

const pixelifySans = Pixelify_Sans({
  variable: '--font-pixelify',
  subsets: ['latin'],
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://devygram.com';

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'Devender Papani (DevyGram)',
      jobTitle: 'Freelance Web Developer & Digital Marketing Expert',
      url: siteUrl,
      sameAs: [
        'https://github.com/devygram',
        'https://x.com/devygram',
      ],
      knowsAbout: [
        'Web Development',
        'Next.js',
        'React',
        'Tailwind CSS',
        'Framer Motion',
        'Vite',
        'Supabase',
        'Cloudflare',
        'Vercel',
        'SEO',
        'Digital Marketing',
        'AI Vibe Coding',
        'PostgreSQL',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'DevyGram Portfolio',
      description: 'Portfolio of Devender Papani (DevyGram) — Freelance Web Developer & Digital Marketing Expert specializing in SEO, online advertising, and modern web applications.',
      publisher: {
        '@id': `${siteUrl}/#person`,
      },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'DevyGram | Freelance Web Developer & Digital Marketing Expert',
    template: '%s | DevyGram',
  },
  description:
    'Portfolio of Devender Papani (DevyGram) — Freelance Web Developer & Digital Marketing Expert specializing in modern web applications, high-performance SEO, and online advertising.',
  keywords: [
    'DevyGram',
    'Devender Papani',
    'Freelance Web Developer',
    'Digital Marketing Expert',
    'SEO Specialist',
    'Online Advertising',
    'React Developer',
    'Next.js Developer',
    'Supabase',
    'Cloudflare',
    'Vercel',
    'Tailwind CSS',
    'Full Stack Engineer',
    'AI Vibe Coding',
  ],
  authors: [{ name: 'Devender Papani', url: 'https://github.com/devygram' }],
  creator: 'Devender Papani',
  icons: {
    icon: [
      { url: '/devygram.png' },
      { url: '/favicon.ico' },
    ],
    shortcut: '/devygram.png',
    apple: '/devygram.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'DevyGram | Freelance Web Developer & Digital Marketing Expert',
    description:
      'Portfolio of Devender Papani (DevyGram) — Freelance Web Developer & Digital Marketing Expert specializing in SEO, online advertising, and modern web development.',
    siteName: 'DevyGram Portfolio',
    images: [
      {
        url: `${siteUrl}/devygram.png`,
        width: 1200,
        height: 630,
        alt: 'DevyGram | Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevyGram | Freelance Web Developer & Digital Marketing Expert',
    description:
      'Portfolio of Devender Papani (DevyGram) — Freelance Web Developer & Digital Marketing Expert specializing in SEO, online advertising, and modern web development.',
    images: [`${siteUrl}/devygram.png`],
    creator: '@devygram',
  },

  manifest: '/site.webmanifest',
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/devygram.png" />
        <link rel="shortcut icon" href="/devygram.png" />
        <link rel="apple-touch-icon" href="/devygram.png" />
      </head>
      <body
        className={`${geistSans.variable} ${pixelifySans.variable} min-h-screen font-sans antialiased`}
      >
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var key = "vite-ui-theme";
                  var theme = localStorage.getItem(key);
                  if (theme === "dark" || (!theme && "dark" === "dark")) {
                    document.documentElement.classList.add("dark");
                  } else if (theme === "light") {
                    document.documentElement.classList.add("light");
                  } else if (theme === "system") {
                    var dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                    document.documentElement.classList.add(dark ? "dark" : "light");
                  }
                } catch (e) {}
              })()
            `,
          }}
        />
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <PageTracker />
          <Analytics />
          <div className="min-h-screen dark:bg-black/50">
          <Container>
              <Layout>
                {children}
                <Quote />
                <Footer />
              </Layout>
            </Container>
            <div className="from-background pointer-events-none fixed inset-x-0 bottom-0 z-40 h-10 bg-linear-to-t to-transparent [mask-image:linear-gradient(to_top,black_10%,transparent)] opacity-100 backdrop-blur-[5px] select-none dark:[mask-image:linear-gradient(to_top,black_20%,transparent)]" />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
