import { getBlogPosts, getPost } from "@/data/blog";
import { BlogSidebar } from "@/components/blog-sidebar";
import { EmptyState } from "@/components/empty-state";
import { formatDate } from "@/lib/utils";
import { Suspense } from "react";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { slug?: string };
}) {
  const posts = await getBlogPosts();
  const sortedPosts = posts.sort((a, b) =>
    new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt) ? -1 : 1
  );

  // Get the post to display (from query param or first post)
  const displaySlug = searchParams.slug || sortedPosts[0]?.slug;
  const displayPost = displaySlug ? await getPost(displaySlug) : null;

  const entriesForSidebar = sortedPosts.map((p) => ({
    slug: p.slug,
    title: p.metadata.title,
    publishedAt: p.metadata.publishedAt,
    favorite: (p.metadata as any).favorite,
    groupLabel: (p.metadata as any).groupLabel,
  }));

  return (
    <div className="w-full h-screen overflow-hidden flex gap-8 px-6">
      {/* Fixed Sidebar */}
      <aside className="hidden md:block w-64 flex-shrink-0 border-r pr-6 overflow-hidden">
        <div className="h-full overflow-y-auto overflow-x-hidden hide-scrollbar">
          <Suspense fallback={<div className="text-sm text-muted-foreground">Loading...</div>}>
            <BlogSidebar entries={entriesForSidebar} currentSlug={displaySlug} />
          </Suspense>
        </div>
      </aside>

      {/* Scrollable Content */}
      <main className="flex-1 overflow-y-auto overflow-x-hidden hide-scrollbar relative">
        {/* Fade gradient at bottom */}
        <div className="sticky bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
        
        <div className="relative">
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
        </div>
      </main>
    </div>
  );
}
