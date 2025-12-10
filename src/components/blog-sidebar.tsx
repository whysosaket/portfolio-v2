"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface BlogEntry {
  slug: string;
  title: string;
  publishedAt: string;
  favorite?: boolean;
  groupLabel?: string;
}

interface BlogSidebarProps {
  entries: BlogEntry[];
  currentSlug?: string;
  basePath?: string;
}

export function BlogSidebar({
  entries,
  currentSlug,
  basePath = "/blog",
}: BlogSidebarProps) {
  const [openGroups, setOpenGroups] = useState<Set<string>>(new Set());

  const favorites = entries.filter((entry) => entry.favorite);
  const nonFavorites = entries.filter((entry) => !entry.favorite);

  // Group entries by groupLabel or publishedAt
  const groups = new Map<string, BlogEntry[]>();
  nonFavorites.forEach((entry) => {
    const label = entry.groupLabel || entry.publishedAt;
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

  return (
    <div className="w-full md:w-64 flex-shrink-0 space-y-6">
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
                <Link
                  href={`${basePath}/${entry.slug}`}
                  className={cn(
                    "block px-3 py-2 rounded-md text-sm transition-colors",
                    currentSlug === entry.slug
                      ? "bg-foreground text-background font-medium"
                      : "hover:bg-muted text-muted-foreground hover:text-foreground"
                  )}
                >
                  {entry.title}
                </Link>
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
            const dateA = groups.get(a)?.[0]?.publishedAt || a;
            const dateB = groups.get(b)?.[0]?.publishedAt || b;
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
                  <span>{label}</span>
                  {isOpen ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
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
                        .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
                        .map((entry) => (
                          <li key={entry.slug}>
                            <Link
                              href={`${basePath}/${entry.slug}`}
                              className={cn(
                                "block px-3 py-2 rounded-md text-sm transition-colors",
                                currentSlug === entry.slug
                                  ? "bg-foreground text-background font-medium"
                                  : "hover:bg-muted text-muted-foreground hover:text-foreground"
                              )}
                            >
                              {entry.title}
                            </Link>
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
  );
}
