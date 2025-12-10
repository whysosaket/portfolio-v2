import { WorkArchiveSidebar } from "@/components/work-archive-sidebar";
import { EmptyState } from "@/components/empty-state";
import { getAllWorkArchiveEntries, getEntriesByCompany, sortEntriesChronologically, getWorkArchiveEntry } from "@/lib/work_archive";
import { formatDate } from "@/lib/utils";
import { DATA } from "@/data/resume";
import { Suspense } from "react";

export const metadata = {
  title: "Work Archive",
  description: "Detailed work experiences and projects from my career.",
};

const BLUR_FADE_DELAY = 0.04;

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

  const sortedEntries = sortEntriesChronologically(filteredEntries);
  
  // For sidebar, show all entries (not filtered) so user can navigate
  const allSortedEntries = sortEntriesChronologically(allEntries);
  const entriesForSidebar = allSortedEntries.map((entry) => ({
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
    <div className="w-full h-screen overflow-hidden flex gap-8 px-6">
      {/* Fixed Sidebar */}
      <aside className="hidden md:block w-64 flex-shrink-0 border-r pr-6 overflow-hidden">
        <div className="h-full overflow-y-auto overflow-x-hidden hide-scrollbar">
          <Suspense fallback={<div className="text-sm text-muted-foreground">Loading...</div>}>
            {entriesForSidebar.length > 0 ? (
              <WorkArchiveSidebar entries={entriesForSidebar} currentSlug={displaySlug} />
            ) : (
              <EmptyState type="work-archive" />
            )}
          </Suspense>
        </div>
      </aside>

      {/* Scrollable Content */}
      <main className="flex-1 overflow-y-auto overflow-x-hidden hide-scrollbar relative">
        {/* Fade gradient at bottom */}
        <div className="sticky bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
        
        <div className="relative">
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
        </div>
      </main>
    </div>
  );
}
