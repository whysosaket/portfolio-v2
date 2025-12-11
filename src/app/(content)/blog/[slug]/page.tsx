import { getPost, getBlogPosts } from "@/data/blog";
import { DATA } from "@/data/resume";
import { formatDate } from "@/lib/utils";
import { ContentSidebar, type ContentEntry } from "@/components/content-sidebar";
import { ContentPage } from "@/components/content-page";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata | undefined> {
  let post = await getPost(params.slug);

  if (!post) {
    return undefined;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image ? `${DATA.url}${image}` : `${DATA.url}/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  let post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  // Get all posts for sidebar
  const allPosts = await getBlogPosts();
  const entriesForSidebar: ContentEntry[] = allPosts.map((p) => ({
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
          currentSlug={post.slug}
          basePath="/blog"
          dateField="publishedAt"
        />
      }
    >
      <article className="space-y-6 pb-24">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.metadata.title,
              datePublished: post.metadata.publishedAt,
              dateModified: post.metadata.publishedAt,
              description: post.metadata.summary,
              image: post.metadata.image
                ? `${DATA.url}${post.metadata.image}`
                : `${DATA.url}/og?title=${post.metadata.title}`,
              url: `${DATA.url}/blog/${post.slug}`,
              author: {
                "@type": "Person",
                name: DATA.name,
              },
            }),
          }}
        />
        <h1 className="title font-medium text-2xl tracking-tighter">
          {post.metadata.title}
        </h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <Suspense fallback={<p className="h-5" />}>
            <time>{formatDate(post.metadata.publishedAt)}</time>
          </Suspense>
        </div>
        <div
          className="prose dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.source }}
        />
      </article>
    </ContentPage>
  );
}
