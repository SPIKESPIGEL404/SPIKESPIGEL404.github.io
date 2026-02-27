import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { MdxContent } from "@/components/mdx-content";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const posts = getAllPosts();
  const currentIndex = posts.findIndex((p) => p.slug === slug);
  const prevPost = posts[currentIndex + 1];
  const nextPost = posts[currentIndex - 1];

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="h-3 w-3" /> Back to blog
      </Link>

      <article>
        <header className="mb-8">
          <h1 className="font-mono text-2xl font-bold tracking-tight">
            {post.title}
          </h1>
          <div className="mt-2 flex items-center gap-3 text-sm text-muted-foreground">
            <span className="font-mono">{post.date}</span>
            <span>&middot;</span>
            <span>{post.readingTime}</span>
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        <Separator className="mb-8" />

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <MdxContent source={post.content} />
        </div>
      </article>

      <Separator className="my-12" />

      <div className="flex justify-between text-sm">
        {prevPost ? (
          <Link
            href={`/blog/${prevPost.slug}`}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            &larr; {prevPost.title}
          </Link>
        ) : (
          <span />
        )}
        {nextPost ? (
          <Link
            href={`/blog/${nextPost.slug}`}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {nextPost.title} &rarr;
          </Link>
        ) : (
          <span />
        )}
      </div>
    </div>
  );
}
