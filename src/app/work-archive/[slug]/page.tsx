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
    <section className="space-y-12 w-[90%] max-w-[1400px] mx-auto py-2">
      <BlurFade delay={BLUR_FADE_DELAY * 0.5}>
        <div className="flex justify-start mb-4">
          <Link
            href="/work-archive"
            className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center gap-1"
          >
            ← Back to work archive
          </Link>
        </div>
      </BlurFade>

      <div className="flex flex-col md:flex-row gap-8 w-full">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <WorkArchiveSidebar entries={entriesForSidebar} currentSlug={entry.slug} />
        </BlurFade>

        <div className="flex-1">
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
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
            <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">
              {entry.metadata.title}
            </h1>
            <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
              <div className="flex items-center gap-4">
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {formatDate(entry.metadata.date)}
                </p>
                <span className="text-sm text-muted-foreground">
                  {entry.metadata.company}
                </span>
              </div>
            </div>
            <article
              className="prose dark:prose-invert max-w-[650px]"
              dangerouslySetInnerHTML={{ __html: entry.source! }}
            ></article>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
