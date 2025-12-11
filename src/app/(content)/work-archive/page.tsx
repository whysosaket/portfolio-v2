import { getAllWorkArchiveEntries, getEntriesByCompany, getWorkArchiveEntry } from "@/lib/work_archive";
import { getCompanyBySlug } from "@/data/work_archive";
import { sortEntriesByDate } from "@/lib/content";
import { ContentSidebar, type ContentEntry } from "@/components/content-sidebar";
import { ContentPage } from "@/components/content-page";
import { EmptyState } from "@/components/empty-state";
import { formatDate } from "@/lib/utils";
import { DATA } from "@/data/resume";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";
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
  
  // For sidebar: if company filter is active, show only that company's entries
  // Otherwise show all entries
  let entriesForSidebar: ContentEntry[];
  let crossCompanyFavorites: ContentEntry[] = [];
  
  if (searchParams.company) {
    // Filter sidebar to only show current company's entries
    const companyEntries = sortEntriesByDate(filteredEntries, "date");
    entriesForSidebar = companyEntries.map((entry) => ({
      slug: entry.slug,
      title: entry.metadata.title,
      company: entry.metadata.company,
      date: entry.metadata.date,
      favorite: entry.metadata.favorite,
      groupLabel: entry.metadata.groupLabel,
    }));
    
    // Get favorites from other companies to show in sidebar
    const allFavorites = allEntries.filter((e) => e.metadata.favorite === true);
    crossCompanyFavorites = allFavorites
      .filter((e) => e.metadata.company !== searchParams.company)
      .map((entry) => ({
        slug: entry.slug,
        title: entry.metadata.title,
        company: entry.metadata.company,
        date: entry.metadata.date,
        favorite: entry.metadata.favorite,
        groupLabel: entry.metadata.groupLabel,
      }));
  } else {
    // Show all entries when no company filter
    const allSortedEntries = sortEntriesByDate(allEntries, "date");
    entriesForSidebar = allSortedEntries.map((entry) => ({
      slug: entry.slug,
      title: entry.metadata.title,
      company: entry.metadata.company,
      date: entry.metadata.date,
      favorite: entry.metadata.favorite,
      groupLabel: entry.metadata.groupLabel,
    }));
  }

  // Get the entry to display (from query param or first filtered entry)
  const displaySlug = searchParams.slug || sortedEntries[0]?.slug;
  const displayEntry = displaySlug ? await getWorkArchiveEntry(displaySlug) : null;
  
  // Check if the displayed entry is from a different company (cross-company favorite)
  const isCrossCompanyEntry = displayEntry && searchParams.company && displayEntry.metadata.company !== searchParams.company;
  const crossCompanyEntry = isCrossCompanyEntry ? displayEntry : null;

  return (
    <ContentPage
      sidebar={
        <ContentSidebar
          entries={entriesForSidebar}
          currentSlug={displaySlug}
          basePath="/work-archive"
          dateField="date"
          crossCompanyFavorites={crossCompanyFavorites}
          currentCompany={searchParams.company}
        />
      }
      emptyStateType="work-archive"
      showEmptyState={!displayEntry && entriesForSidebar.length === 0 && crossCompanyFavorites.length === 0}
    >
      {displayEntry ? (
        <article className="space-y-6 pb-24">
          {/* Warning Banner for Cross-Company Entry */}
          {isCrossCompanyEntry && (() => {
            const entryCompany = getCompanyBySlug(displayEntry.metadata.company);
            const currentCompany = searchParams.company ? getCompanyBySlug(searchParams.company) : null;
            return (
              <div className="mb-6 p-4 rounded-md bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-yellow-800 dark:text-yellow-300 mb-1">
                      This work belongs to a different company
                    </p>
                    <p className="text-sm text-yellow-700 dark:text-yellow-400 mb-3">
                      This entry is from <strong>{entryCompany?.name || displayEntry.metadata.company}</strong>
                      {currentCompany && `, not ${currentCompany.name}`}.
                    </p>
                    <Link
                      href={`/work-archive?company=${displayEntry.metadata.company}&slug=${displayEntry.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-yellow-800 dark:text-yellow-300 hover:text-yellow-900 dark:hover:text-yellow-200 underline"
                    >
                      View in {entryCompany?.name || displayEntry.metadata.company} work archive →
                    </Link>
                  </div>
                </div>
              </div>
            );
          })()}
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
