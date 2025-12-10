import BlurFade from "@/components/magicui/blur-fade";
import { WorkArchiveSidebar } from "@/components/work-archive-sidebar";
import { WorkArchiveTimeline } from "@/components/work-archive-timeline";
import { getAllWorkArchiveEntries, getEntriesByCompany, sortEntriesChronologically } from "@/lib/work_archive";
import Link from "next/link";

export const metadata = {
  title: "Work Archive",
  description: "Detailed work experiences and projects from my career.",
};

const BLUR_FADE_DELAY = 0.04;

interface WorkArchivePageProps {
  searchParams: { company?: string };
}

export default async function WorkArchivePage({ searchParams }: WorkArchivePageProps) {
  let entries = await getAllWorkArchiveEntries();
  
  if (searchParams.company) {
    entries = getEntriesByCompany(entries, searchParams.company);
  }

  const sortedEntries = sortEntriesChronologically(entries);
  
  const entriesForSidebar = sortedEntries.map((entry) => ({
    slug: entry.slug,
    title: entry.metadata.title,
    company: entry.metadata.company,
    date: entry.metadata.date,
    favorite: entry.metadata.favorite,
    groupLabel: entry.metadata.groupLabel,
  }));

  const entriesForTimeline = sortedEntries.map((entry) => ({
    slug: entry.slug,
    title: entry.metadata.title,
    company: entry.metadata.company,
    date: entry.metadata.date,
    summary: entry.metadata.summary,
    image: entry.metadata.image,
  }));

  return (
    <section className="space-y-12 w-[90%] max-w-[1400px] mx-auto py-2">
      <BlurFade delay={BLUR_FADE_DELAY * 0.5}>
        <div className="flex justify-start mb-4">
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center gap-1"
          >
            ← Back to home
          </Link>
        </div>
      </BlurFade>
      
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-2">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              Work Archive
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              My Work Journey
            </h1>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Detailed experiences and projects from my career.
            </p>
          </div>
        </div>
      </BlurFade>

      <div className="flex flex-col md:flex-row gap-8 w-full">
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <WorkArchiveSidebar entries={entriesForSidebar} />
        </BlurFade>
        
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <WorkArchiveTimeline entries={entriesForTimeline} />
        </BlurFade>
      </div>
    </section>
  );
}
