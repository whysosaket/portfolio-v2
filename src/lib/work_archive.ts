import { getContentEntry, getAllContentEntries, sortEntriesByDate } from "@/lib/content";
import { WorkArchiveEntryMetadata } from "@/data/work_archive";

export interface WorkArchiveEntry {
  slug: string;
  metadata: WorkArchiveEntryMetadata;
  source?: string;
}

export async function getWorkArchiveEntry(slug: string) {
  return getContentEntry<WorkArchiveEntryMetadata>(slug, "work-archive");
}

export async function getAllWorkArchiveEntries(): Promise<WorkArchiveEntry[]> {
  return getAllContentEntries<WorkArchiveEntryMetadata>("work-archive");
}

export function getEntriesByCompany(
  entries: WorkArchiveEntry[],
  companySlug: string
): WorkArchiveEntry[] {
  return entries.filter((entry) => entry.metadata.company === companySlug);
}

export function getFavoriteEntries(
  entries: WorkArchiveEntry[]
): WorkArchiveEntry[] {
  return entries.filter((entry) => entry.metadata.favorite === true);
}

export function groupEntriesByLabel(
  entries: WorkArchiveEntry[]
): Map<string, WorkArchiveEntry[]> {
  const groups = new Map<string, WorkArchiveEntry[]>();

  entries.forEach((entry) => {
    const label = entry.metadata.groupLabel || entry.metadata.date;
    if (!groups.has(label)) {
      groups.set(label, []);
    }
    groups.get(label)!.push(entry);
  });

  return groups;
}

export function sortEntriesChronologically(
  entries: WorkArchiveEntry[]
): WorkArchiveEntry[] {
  return sortEntriesByDate(entries, "date");
}
