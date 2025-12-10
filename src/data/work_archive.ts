export interface WorkArchiveCompany {
  name: string;
  slug: string;
  logoUrl: string;
  href: string;
}

export interface WorkArchiveEntryMetadata {
  title: string;
  company: string;
  date: string;
  favorite?: boolean;
  groupLabel?: string;
  summary: string;
  image?: string;
}

export const WORK_ARCHIVE_COMPANIES: WorkArchiveCompany[] = [
  {
    name: "Mem0 (YC S24)",
    slug: "mem0",
    logoUrl: "/mem0_logo.jpeg",
    href: "https://mem0.ai/",
  },
  {
    name: "DBS Tech India",
    slug: "dbs",
    logoUrl: "/dbs-logo.png",
    href: "https://www.dbs.com/dbstechindia/index.html",
  },
  {
    name: "Soshals",
    slug: "soshals",
    logoUrl: "/soshals.jpg",
    href: "https://www.soshals.app/",
  },
  {
    name: "Samsung R&D, BLR",
    slug: "samsung",
    logoUrl: "/samsung.png",
    href: "https://www.samsungprism.com/",
  },
];

export function getCompanyBySlug(slug: string): WorkArchiveCompany | undefined {
  return WORK_ARCHIVE_COMPANIES.find((company) => company.slug === slug);
}
