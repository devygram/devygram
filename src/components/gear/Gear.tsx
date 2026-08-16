'use client';

import { useState } from 'react';
import Container from '../layouts/Container';
import SectionHeading from '../common/SectionHeading';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { devices, software } from '@/config/Gear';
import RepeatSeparator from '../ui/repeat-separator';

const getDomain = (url: string) => {
  try {
    return new URL(url).hostname.replace('www.', '');
  } catch {
    return url;
  }
};

export default function Gear() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDevices = devices.filter((device) =>
    device.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredSoftware = software.filter((app) =>
    app.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const hasResults = filteredDevices.length > 0 || filteredSoftware.length > 0;

  return (
    <Container>
      <RepeatSeparator cn="dark:opacity-40" />

      <div>
        <SectionHeading
          classname=" text-neutral-400 dark:text-neutral-500 font-medium "
          heading="Gears & Setup"
        />
        <h1 className="devygram-line-bottom px-4 text-3xl font-semibold tracking-tight text-balance text-neutral-900 dark:text-neutral-50">
          My hardware, setup & software tools.
        </h1>
      </div>

      <div className="flex items-center justify-between devygram-line-top devygram-line-bottom p-2">
        <Link
          data-slot="button"
          data-variant="link"
          data-size="sm"
          className="group/button inline-flex shrink-0 items-center justify-center border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 decoration-1 underline-offset-3 active:scale-none rounded-[min(var(--radius-lg),10px)] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 h-7 gap-2 border-none px-0 text-muted-foreground hover:text-foreground hover:no-underline"
          href="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-left"
            aria-hidden="true"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
          Home
        </Link>
        <div className="flex items-center gap-2">
          {/* Search Input */}
          <div
            data-slot="input-group"
            role="group"
            className="border-input bg-background/50 dark:bg-background/30 text-foreground relative flex h-7 w-fit min-w-0 items-center rounded-lg border text-sm transition-colors select-none focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/40"
          >
            <input
              data-slot="input-group-control"
              className="placeholder:text-muted-foreground/70 h-7 w-40 min-w-0 bg-transparent px-2.5 text-xs outline-none select-text sm:w-48"
              placeholder="Search Gear..."
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div
              role="group"
              data-slot="input-group-addon"
              data-align="inline-start"
              className="flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted-foreground select-none group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4 order-first pr-1 pl-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
                className="size-3.5"
              >
                <path
                  d="M10.278 11.514a5.824 5.824 0 1 1 1.235-1.235l3.209 3.208A.875.875 0 0 1 14.111 15a.875.875 0 0 1-.624-.278l-3.209-3.208Zm.623-4.69a4.077 4.077 0 1 1-8.154 0 4.077 4.077 0 0 1 8.154 0Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            {searchQuery !== '' && (
              <div className="flex h-auto items-center pr-2">
                <button
                  className="text-muted-foreground hover:text-foreground text-xs"
                  type="button"
                  onClick={() => setSearchQuery('')}
                >
                  ✕
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <RepeatSeparator cn="dark:opacity-40" />

      {!hasResults ? (
        <div className="py-20 text-center text-muted-foreground">
          No gear found matching "{searchQuery}"
        </div>
      ) : (
        <>
          {/* Devices Section */}
          {filteredDevices.length > 0 && (
            <div className="space-y-4 my-8">
              <SectionHeading heading="Devices & Hardware" />
              <ul className="divide-y divide-border border-y border-border">
                {filteredDevices.map((device) => (
                  <li key={device.name} className="list-none">
                    <div className="relative flex items-center pr-2 hover:bg-neutral-100 dark:hover:bg-neutral-900/40 group">
                      <div className="mx-4 bg-muted flex items-center justify-center rounded-md border border-black/10 p-2 text-neutral-600 dark:text-neutral-400 dark:border-white/10 [&_svg]:size-4">
                        {device.icon}
                      </div>
                      <div className="flex-1 space-y-1 border-l border-dashed border-border p-4 pr-2">
                        <h3 className="leading-snug font-medium text-balance text-neutral-900 dark:text-neutral-100 text-sm md:text-base">
                          {device.name}
                        </h3>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Software Section */}
          {filteredSoftware.length > 0 && (
            <div className="space-y-4 my-8">
              <SectionHeading heading="Software & Apps" />
              <ul className="divide-y divide-border border-y border-border">
                {filteredSoftware.map((app, index) => (
                  <li key={app.name} className="list-none">
                    <div className="relative flex items-center pr-2 hover:bg-neutral-100 dark:hover:bg-neutral-900/40 group">
                      <div className="mx-4 bg-muted flex items-center justify-center rounded-md border border-black/10 px-2 py-1 text-neutral-600 dark:text-neutral-400 dark:border-white/10 select-none min-w-7 text-center">
                        <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">{index + 1}</span>
                      </div>
                      <div className="flex-1 space-y-1 border-l border-dashed border-border p-4 pr-2">
                        <h3 className="leading-snug font-medium text-balance text-neutral-900 dark:text-neutral-100 text-sm md:text-base">
                          <Link href={app.href} target="_blank" rel="noopener">
                            <span className="absolute inset-0" aria-hidden="true"></span>
                            {app.name}
                          </Link>
                        </h3>
                        <dl className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground">
                          <div>
                            <dt className="sr-only">Website</dt>
                            <dd>{getDomain(app.href)}</dd>
                          </div>
                        </dl>
                      </div>
                      <ArrowUpRight className="text-muted-foreground group-hover:text-foreground size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </Container>
  );
}
