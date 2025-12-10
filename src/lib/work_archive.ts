import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { markdownToHTML } from "@/data/blog";
import { WorkArchiveEntryMetadata } from "@/data/work_archive";

export interface WorkArchiveEntry {
  slug: string;
  metadata: WorkArchiveEntryMetadata;
  source?: string;
}

function getMDXFiles(dir: string) {
  if (!fs.existsSync(dir)) {
    return [];
  }
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

export async function getWorkArchiveEntry(slug: string) {
  const filePath = path.join(process.cwd(), "content", "work-archive", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  const source = fs.readFileSync(filePath, "utf-8");
  const { content: rawContent, data: metadata } = matter(source);
  const content = await markdownToHTML(rawContent);
  return {
    source: content,
    metadata: metadata as WorkArchiveEntryMetadata,
    slug,
  };
}

export async function getAllWorkArchiveEntries(): Promise<WorkArchiveEntry[]> {
  const workArchiveDir = path.join(process.cwd(), "content", "work-archive");
  const mdxFiles = getMDXFiles(workArchiveDir);

  return Promise.all(
    mdxFiles.map(async (file) => {
      const slug = path.basename(file, path.extname(file));
      const filePath = path.join(workArchiveDir, file);
      const source = fs.readFileSync(filePath, "utf-8");
      const { data: metadata } = matter(source);
      return {
        slug,
        metadata: metadata as WorkArchiveEntryMetadata,
      };
    })
  );
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
  return [...entries].sort((a, b) => {
    const dateA = new Date(a.metadata.date).getTime();
    const dateB = new Date(b.metadata.date).getTime();
    return dateB - dateA; // Most recent first
  });
}
