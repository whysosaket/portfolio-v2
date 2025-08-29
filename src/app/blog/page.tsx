import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatDate } from "@/lib/utils";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section className="space-y-12 w-full py-2">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-2">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              Writing
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Writing on building, shipping, and staying curious
            </h1>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Short notes, experiments, and lessons from the road.
            </p>
          </div>
        </div>
      </BlurFade>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
        {posts
          .sort((a, b) =>
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
              ? -1
              : 1
          )
          .map((post, id) => (
            <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="block group">
                <Card className="overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full">
                  <div className="relative w-full bg-muted/50">
                    {post.metadata.image ? (
                      <div className="relative w-full aspect-[16/9]">
                        <Image
                          src={post.metadata.image}
                          alt={post.metadata.title}
                          fill
                          sizes="(max-width: 800px) 100vw, 800px"
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="h-40 w-full bg-muted flex items-center justify-center text-muted-foreground text-sm">
                        No image
                      </div>
                    )}
                  </div>
                  <CardHeader className="space-y-1.5 p-3">
                    <CardTitle className="text-lg font-semibold tracking-tight group-hover:underline">
                      {post.metadata.title}
                    </CardTitle>
                    <time className="font-sans text-[11px] text-muted-foreground">
                      {formatDate(post.metadata.publishedAt)}
                    </time>
                  </CardHeader>
                  {post.metadata.summary && (
                    <CardContent className="p-3 pt-0">
                      <p className="text-[13px] leading-6 text-muted-foreground overflow-hidden">
                        {post.metadata.summary}
                      </p>
                    </CardContent>
                  )}
                </Card>
              </Link>
            </BlurFade>
          ))}
      </div>
    </section>
  );
}
