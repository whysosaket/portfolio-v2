import { getWorkArchiveEntry, getAllWorkArchiveEntries } from "@/lib/work_archive";
import { DATA } from "@/data/resume";
import { formatDate } from "@/lib/utils";
import { ContentSidebar, type ContentEntry } from "@/components/content-sidebar";
import { ContentPage } from "@/components/content-page";
import { sortEntriesByDate } from "@/lib/content";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

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

  // Get all entries and filter sidebar by the entry's company
  const allEntries = await getAllWorkArchiveEntries();
  const entryCompany = entry.metadata.company;
  
  // Filter to only show entries from the same company
  const companyEntries = allEntries.filter((e) => e.metadata.company === entryCompany);
  const sortedCompanyEntries = sortEntriesByDate(companyEntries, "date");
  
  const entriesForSidebar: ContentEntry[] = sortedCompanyEntries.map((e) => ({
    slug: e.slug,
    title: e.metadata.title,
    company: e.metadata.company,
    date: e.metadata.date,
    favorite: e.metadata.favorite,
    groupLabel: e.metadata.groupLabel,
  }));
  
  // Get favorites from other companies to show in sidebar
  const allFavorites = allEntries.filter((e) => e.metadata.favorite === true);
  const crossCompanyFavorites: ContentEntry[] = allFavorites
    .filter((e) => e.metadata.company !== entryCompany)
    .map((e) => ({
      slug: e.slug,
      title: e.metadata.title,
      company: e.metadata.company,
      date: e.metadata.date,
      favorite: e.metadata.favorite,
      groupLabel: e.metadata.groupLabel,
    }));

  return (
    <ContentPage
      sidebar={
        <ContentSidebar
          entries={entriesForSidebar}
          currentSlug={entry.slug}
          basePath="/work-archive"
          dateField="date"
          crossCompanyFavorites={crossCompanyFavorites}
          currentCompany={entryCompany}
        />
      }
    >
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
    </ContentPage>
  );
}
