import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { markdownToHTML } from "@/data/blog";

export interface ContentEntry<T = any> {
  slug: string;
  metadata: T;
  source?: string;
}

function getMDXFiles(dir: string) {
  if (!fs.existsSync(dir)) {
    return [];
  }
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

export async function getContentEntry<T>(
  slug: string,
  contentDir: string
): Promise<ContentEntry<T> | null> {
  const filePath = path.join(process.cwd(), "content", contentDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  const source = fs.readFileSync(filePath, "utf-8");
  const { content: rawContent, data: metadata } = matter(source);
  const content = await markdownToHTML(rawContent);
  return {
    source: content,
    metadata: metadata as T,
    slug,
  };
}

export async function getAllContentEntries<T>(
  contentDir: string
): Promise<ContentEntry<T>[]> {
  const dir = path.join(process.cwd(), "content", contentDir);
  const mdxFiles = getMDXFiles(dir);

  return Promise.all(
    mdxFiles.map(async (file) => {
      const slug = path.basename(file, path.extname(file));
      const filePath = path.join(dir, file);
      const source = fs.readFileSync(filePath, "utf-8");
      const { data: metadata } = matter(source);
      return {
        slug,
        metadata: metadata as T,
      };
    })
  );
}

export function sortEntriesByDate<T extends { date?: string; publishedAt?: string }>(
  entries: ContentEntry<T>[],
  dateField: "date" | "publishedAt" = "date"
): ContentEntry<T>[] {
  return [...entries].sort((a, b) => {
    const dateA = new Date(a.metadata[dateField] || "").getTime();
    const dateB = new Date(b.metadata[dateField] || "").getTime();
    return dateB - dateA; // Most recent first
  });
}

export function filterFavorites<T extends { favorite?: boolean }>(
  entries: ContentEntry<T>[]
): ContentEntry<T>[] {
  return entries.filter((entry) => entry.metadata.favorite === true);
}

export function groupEntriesByLabel<T extends { groupLabel?: string; date?: string; publishedAt?: string }>(
  entries: ContentEntry<T>[],
  dateField: "date" | "publishedAt" = "date"
): Map<string, ContentEntry<T>[]> {
  const groups = new Map<string, ContentEntry<T>[]>();

  entries.forEach((entry) => {
    const label = entry.metadata.groupLabel || entry.metadata[dateField] || "";
    if (!groups.has(label)) {
      groups.set(label, []);
    }
    groups.get(label)!.push(entry);
  });

  return groups;
}
