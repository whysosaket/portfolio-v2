"use client";

import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BlurFade from "@/components/magicui/blur-fade";

interface WorkArchiveEntry {
  slug: string;
  title: string;
  company: string;
  date: string;
  summary: string;
  image?: string | null;
}

interface WorkArchiveTimelineProps {
  entries: WorkArchiveEntry[];
  basePath?: string;
}

const BLUR_FADE_DELAY = 0.04;

export function WorkArchiveTimeline({
  entries,
  basePath = "/work-archive",
}: WorkArchiveTimelineProps) {
  return (
    <div className="flex-1 space-y-8">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
        
        <div className="space-y-12">
          {entries.map((entry, index) => (
            <BlurFade
              key={entry.slug}
              delay={BLUR_FADE_DELAY * index}
            >
              <div className="relative flex gap-6">
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-foreground border-4 border-background" />
                </div>
                
                {/* Content */}
                <div className="flex-1 pt-1">
                  <Link href={`${basePath}/${entry.slug}`} className="block group">
                    <Card className="overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out">
                      {entry.image && (
                        <div className="relative w-full aspect-video bg-muted/50">
                          <Image
                            src={entry.image}
                            alt={entry.title}
                            fill
                            sizes="(max-width: 800px) 100vw, 800px"
                            className="object-cover"
                          />
                        </div>
                      )}
                      <CardHeader className="space-y-1.5 p-4">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <CardTitle className="text-lg font-semibold tracking-tight group-hover:underline">
                              {entry.title}
                            </CardTitle>
                            <p className="text-sm text-muted-foreground mt-1">
                              {entry.company}
                            </p>
                          </div>
                          <time className="font-sans text-xs text-muted-foreground whitespace-nowrap">
                            {formatDate(entry.date)}
                          </time>
                        </div>
                      </CardHeader>
                      {entry.summary && (
                        <CardContent className="p-4 pt-0">
                          <p className="text-sm leading-6 text-muted-foreground">
                            {entry.summary}
                          </p>
                        </CardContent>
                      )}
                    </Card>
                  </Link>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </div>
  );
}
