"use client";

import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";
import { useEffect, useState } from "react";

type BlogItem = {
  slug: string;
  title: string;
  publishedAt: string;
  summary: string;
  image?: string | null;
};

const BLUR_FADE_DELAY = 0.04;

export function BlogPreview({ limit = 3 }: { limit?: number }) {
  const [posts, setPosts] = useState<BlogItem[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const run = async () => {
      try {
        const res = await fetch(`/api/blog?limit=${limit}`);
        if (!res.ok) throw new Error("Failed to load posts");
        const data = await res.json();
        setPosts(data.posts as BlogItem[]);
      } catch (e) {
        setError("Could not load blog posts");
      }
    };
    run();
  }, [limit]);

  if (error) {
    return (
      <p className="text-sm text-muted-foreground">{error}</p>
    );
  }

  return (
    <div>
      {!posts && (
        <div className="space-y-2">
          <div className="h-5 w-40 bg-muted rounded animate-pulse" />
          <div className="h-4 w-64 bg-muted rounded animate-pulse" />
          <div className="h-4 w-52 bg-muted rounded animate-pulse" />
        </div>
      )}
      {posts && (
        <ul className="mb-4 pl-4 divide-y divide-dashed border-l">
          {posts.map((post, id) => (
            <BlurFade
              key={post.slug}
              delay={BLUR_FADE_DELAY * 2 + id * 0.05}
            >
              <li className="py-4">
                <Link href={`/blog/${post.slug}`} className="flex flex-col">
                  <span className="text-base font-medium tracking-tight leading-6">
                    {post.title}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {post.publishedAt}
                  </span>
                  {post.summary && (
                    <span className="text-[13px] leading-6 text-muted-foreground overflow-hidden">
                      {post.summary}
                    </span>
                  )}
                </Link>
              </li>
            </BlurFade>
          ))}
        </ul>
      )}
      <BlurFade delay={BLUR_FADE_DELAY * 2 + (posts?.length || 0) * 0.05}>
        <Link href="/blog" className="text-sm text-primary underline-offset-4 hover:underline">
          View all posts →
        </Link>
      </BlurFade>
    </div>
  );
}
