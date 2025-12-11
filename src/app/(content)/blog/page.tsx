import { getBlogPosts, getPost } from "@/data/blog";
import { ContentSidebar, type ContentEntry } from "@/components/content-sidebar";
import { ContentPage } from "@/components/content-page";
import { EmptyState } from "@/components/empty-state";
import { formatDate } from "@/lib/utils";
import { sortEntriesByDate } from "@/lib/content";
import { Suspense } from "react";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { slug?: string };
}) {
  const posts = await getBlogPosts();
  const sortedPosts = sortEntriesByDate(posts, "publishedAt");

  // Get the post to display (from query param or first post)
  const displaySlug = searchParams.slug || sortedPosts[0]?.slug;
  const displayPost = displaySlug ? await getPost(displaySlug) : null;

  const entriesForSidebar: ContentEntry[] = sortedPosts.map((p) => ({
    slug: p.slug,
    title: p.metadata.title,
    publishedAt: p.metadata.publishedAt,
    favorite: (p.metadata as any).favorite,
    groupLabel: (p.metadata as any).groupLabel,
  }));

  return (
    <ContentPage
      sidebar={
        <ContentSidebar
          entries={entriesForSidebar}
          currentSlug={displaySlug}
          basePath="/blog"
          dateField="publishedAt"
        />
      }
      emptyStateType="blog"
      showEmptyState={!displayPost && entriesForSidebar.length === 0}
    >
      {displayPost ? (
        <article className="space-y-6 pb-24">
          <script
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                headline: displayPost.metadata.title,
                datePublished: displayPost.metadata.publishedAt,
                dateModified: displayPost.metadata.publishedAt,
                description: displayPost.metadata.summary,
                image: displayPost.metadata.image
                  ? `${process.env.NEXT_PUBLIC_URL || ""}${displayPost.metadata.image}`
                  : undefined,
              }),
            }}
          />
          <h1 className="title font-medium text-2xl tracking-tighter">
            {displayPost.metadata.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
            <time>{formatDate(displayPost.metadata.publishedAt)}</time>
          </div>
          <div
            className="prose dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: displayPost.source }}
          />
        </article>
      ) : (
        <EmptyState type="blog" />
      )}
    </ContentPage>
  );
}
