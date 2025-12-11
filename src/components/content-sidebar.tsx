"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight, Star, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ContentEntry {
  slug: string;
  title: string;
  date?: string;
  publishedAt?: string;
  company?: string;
  favorite?: boolean;
  groupLabel?: string;
}

interface ContentSidebarProps {
  entries: ContentEntry[];
  currentSlug?: string;
  basePath: string;
  dateField?: "date" | "publishedAt";
  renderMetadata?: (entry: ContentEntry) => React.ReactNode;
}

export function ContentSidebar({
  entries,
  currentSlug,
  basePath,
  dateField = "date",
  renderMetadata,
}: ContentSidebarProps) {
  const router = useRouter();
  const [openGroups, setOpenGroups] = useState<Set<string>>(new Set());

  const handleEntryClick = (slug: string) => {
    router.push(`${basePath}?slug=${slug}`);
  };

  const getDate = (entry: ContentEntry) => entry[dateField] || entry.date || entry.publishedAt || "";

  const favorites = entries.filter((entry) => entry.favorite);
  const nonFavorites = entries.filter((entry) => !entry.favorite);

  // Group entries by groupLabel or date
  const groups = new Map<string, ContentEntry[]>();
  nonFavorites.forEach((entry) => {
    const label = entry.groupLabel || getDate(entry);
    if (!groups.has(label)) {
      groups.set(label, []);
    }
    groups.get(label)!.push(entry);
  });

  const toggleGroup = (label: string) => {
    const newOpen = new Set(openGroups);
    if (newOpen.has(label)) {
      newOpen.delete(label);
    } else {
      newOpen.add(label);
    }
    setOpenGroups(newOpen);
  };

  if (entries.length === 0) {
    return (
      <div className="w-full md:w-64 flex-shrink-0">
        <div className="text-sm text-muted-foreground text-center py-8">
          No entries available
        </div>
      </div>
    );
  }

  return (
    <div className="w-full md:w-64 flex-shrink-0 h-full overflow-y-auto overflow-x-hidden">
      {/* Back Button */}
      <div className="mb-4 pb-4 border-b">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-2 rounded-md hover:bg-muted"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="space-y-6 pr-2">
        {/* Favorites Section */}
        {favorites.length > 0 && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              <Star className="h-4 w-4" />
              <span>Favorites</span>
            </div>
            <ul className="space-y-1">
              {favorites.map((entry) => (
                <li key={entry.slug}>
                  <button
                    onClick={() => handleEntryClick(entry.slug)}
                    className={cn(
                      "w-full text-left px-3 py-2 rounded-md text-sm transition-colors truncate",
                      currentSlug === entry.slug
                        ? "bg-foreground text-background font-medium"
                        : "hover:bg-muted text-muted-foreground hover:text-foreground"
                    )}
                    title={entry.title}
                  >
                    {entry.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Grouped Entries */}
        <div className="space-y-2">
          {Array.from(groups.entries())
            .sort(([a], [b]) => {
              // Sort groups by date (most recent first)
              const dateA = getDate(groups.get(a)?.[0] || {}) || a;
              const dateB = getDate(groups.get(b)?.[0] || {}) || b;
              return new Date(dateB).getTime() - new Date(dateA).getTime();
            })
            .map(([label, groupEntries]) => {
              const isOpen = openGroups.has(label);
              return (
                <div key={label} className="space-y-1">
                  <button
                    onClick={() => toggleGroup(label)}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  >
                    <span className="truncate flex-1 text-left">{label}</span>
                    {isOpen ? (
                      <ChevronDown className="h-4 w-4 flex-shrink-0 ml-2" />
                    ) : (
                      <ChevronRight className="h-4 w-4 flex-shrink-0 ml-2" />
                    )}
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden space-y-1 pl-4"
                      >
                        {groupEntries
                          .sort((a, b) => new Date(getDate(b)).getTime() - new Date(getDate(a)).getTime())
                          .map((entry) => (
                            <li key={entry.slug}>
                              <button
                                onClick={() => handleEntryClick(entry.slug)}
                                className={cn(
                                  "w-full text-left px-3 py-2 rounded-md text-sm transition-colors truncate",
                                  currentSlug === entry.slug
                                    ? "bg-foreground text-background font-medium"
                                    : "hover:bg-muted text-muted-foreground hover:text-foreground"
                                )}
                                title={entry.title}
                              >
                                {entry.title}
                              </button>
                            </li>
                          ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
