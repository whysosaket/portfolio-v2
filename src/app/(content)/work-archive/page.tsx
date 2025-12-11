import { getAllWorkArchiveEntries, getEntriesByCompany, getWorkArchiveEntry } from "@/lib/work_archive";
import { sortEntriesByDate } from "@/lib/content";
import { ContentSidebar, type ContentEntry } from "@/components/content-sidebar";
import { ContentPage } from "@/components/content-page";
import { EmptyState } from "@/components/empty-state";
import { formatDate } from "@/lib/utils";
import { DATA } from "@/data/resume";
import { Suspense } from "react";

export const metadata = {
  title: "Work Archive",
  description: "Detailed work experiences and projects from my career.",
};

interface WorkArchivePageProps {
  searchParams: { company?: string; slug?: string };
}

export default async function WorkArchivePage({ searchParams }: WorkArchivePageProps) {
  let allEntries = await getAllWorkArchiveEntries();
  
  // Filter by company if specified
  let filteredEntries = allEntries;
  if (searchParams.company) {
    filteredEntries = getEntriesByCompany(allEntries, searchParams.company);
  }

  const sortedEntries = sortEntriesByDate(filteredEntries, "date");
  
  // For sidebar, show all entries (not filtered) so user can navigate
  const allSortedEntries = sortEntriesByDate(allEntries, "date");
  const entriesForSidebar: ContentEntry[] = allSortedEntries.map((entry) => ({
    slug: entry.slug,
    title: entry.metadata.title,
    company: entry.metadata.company,
    date: entry.metadata.date,
    favorite: entry.metadata.favorite,
    groupLabel: entry.metadata.groupLabel,
  }));

  // Get the entry to display (from query param or first filtered entry)
  const displaySlug = searchParams.slug || sortedEntries[0]?.slug;
  const displayEntry = displaySlug ? await getWorkArchiveEntry(displaySlug) : null;

  return (
    <ContentPage
      sidebar={
        <ContentSidebar
          entries={entriesForSidebar}
          currentSlug={displaySlug}
          basePath="/work-archive"
          dateField="date"
        />
      }
      emptyStateType="work-archive"
      showEmptyState={!displayEntry && entriesForSidebar.length === 0}
    >
      {displayEntry ? (
        <article className="space-y-6 pb-24">
          <script
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                headline: displayEntry.metadata.title,
                datePublished: displayEntry.metadata.date,
                dateModified: displayEntry.metadata.date,
                description: displayEntry.metadata.summary,
                image: displayEntry.metadata.image
                  ? `${DATA.url}${displayEntry.metadata.image}`
                  : undefined,
              }),
            }}
          />
          <h1 className="title font-medium text-2xl tracking-tighter">
            {displayEntry.metadata.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
            <time>{formatDate(displayEntry.metadata.date)}</time>
            <span>•</span>
            <span>{displayEntry.metadata.company}</span>
          </div>
          <div
            className="prose dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: displayEntry.source! }}
          />
        </article>
      ) : (
        <EmptyState type="work-archive" />
      )}
    </ContentPage>
  );
}
