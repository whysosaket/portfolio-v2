import { NextResponse } from "next/server";
import { getBlogPosts } from "@/data/blog";
import { sortEntriesByDate } from "@/lib/content";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const limitParam = searchParams.get("limit");
    const limit = limitParam ? Math.max(1, parseInt(limitParam)) : undefined;

    const posts = await getBlogPosts();
    const sorted = sortEntriesByDate(posts, "publishedAt");

    const sliced = typeof limit === "number" ? sorted.slice(0, limit) : sorted;
    const minimal = sliced.map((p) => ({
      slug: p.slug,
      title: p.metadata.title,
      publishedAt: p.metadata.publishedAt,
      summary: p.metadata.summary,
      image: p.metadata.image || null,
    }));

    return NextResponse.json({ posts: minimal });
  } catch (e) {
    return NextResponse.json({ error: "Failed to load posts" }, { status: 500 });
  }
}

