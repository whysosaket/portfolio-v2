import { getWorkArchiveEntry, getAllWorkArchiveEntries } from "@/lib/work_archive";
import { DATA } from "@/data/resume";
import { formatDate } from "@/lib/utils";
import { WorkArchiveSidebar } from "@/components/work-archive-sidebar";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata | undefined> {
  let entry = await getWorkArchiveEntry(params.slug);

  if (!entry) {
    return undefined;
  }

  let { title, summary, image, date } = entry.metadata;
  let ogImage = image ? `${DATA.url}${image}` : `${DATA.url}/og?title=${title}`;

  return {
    title,
    description: summary,
    openGraph: {
      title,
      description: summary,
      type: "article",
      publishedTime: date,
      url: `${DATA.url}/work-archive/${entry.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: summary,
      images: [ogImage],
    },
  };
}

const BLUR_FADE_DELAY = 0.04;

export default async function WorkArchiveEntry({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  let entry = await getWorkArchiveEntry(params.slug);

  if (!entry) {
    notFound();
  }

  // Get all entries for sidebar
  const allEntries = await getAllWorkArchiveEntries();
  const entriesForSidebar = allEntries.map((e) => ({
    slug: e.slug,
    title: e.metadata.title,
    company: e.metadata.company,
    date: e.metadata.date,
    favorite: e.metadata.favorite,
    groupLabel: e.metadata.groupLabel,
  }));

  return (
    <div className="w-full h-screen overflow-hidden flex gap-8 px-6">
      {/* Fixed Sidebar */}
      <aside className="hidden md:block w-64 flex-shrink-0 border-r pr-6 overflow-hidden">
        <div className="h-full overflow-y-auto overflow-x-hidden hide-scrollbar">
          <WorkArchiveSidebar entries={entriesForSidebar} currentSlug={entry.slug} />
        </div>
      </aside>

      {/* Scrollable Content */}
      <main className="flex-1 overflow-y-auto overflow-x-hidden hide-scrollbar relative">
        {/* Fade gradient at bottom */}
        <div className="sticky bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
        
        <div className="relative">
          <article className="space-y-6 pb-24">
            <script
              type="application/ld+json"
              suppressHydrationWarning
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Article",
                  headline: entry.metadata.title,
                  datePublished: entry.metadata.date,
                  dateModified: entry.metadata.date,
                  description: entry.metadata.summary,
                  image: entry.metadata.image
                    ? `${DATA.url}${entry.metadata.image}`
                    : `${DATA.url}/og?title=${entry.metadata.title}`,
                  url: `${DATA.url}/work-archive/${entry.slug}`,
                  author: {
                    "@type": "Person",
                    name: DATA.name,
                  },
                }),
              }}
            />
            <h1 className="title font-medium text-2xl tracking-tighter">
              {entry.metadata.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
              <time>{formatDate(entry.metadata.date)}</time>
              <span>•</span>
              <span>{entry.metadata.company}</span>
            </div>
            <div
              className="prose dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: entry.source! }}
            />
          </article>
        </div>
      </main>
    </div>
  );
}
