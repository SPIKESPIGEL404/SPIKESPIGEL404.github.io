import Link from "next/link";
import type { Metadata } from "next";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-mono text-2xl font-bold tracking-tight">Blog</h1>
      <p className="mt-2 text-muted-foreground">
        Thoughts on software, tools, and building things.
      </p>

      <div className="mt-10 space-y-4">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="hover:bg-accent/50 transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">{post.title}</CardTitle>
                  <span className="text-xs text-muted-foreground font-mono shrink-0 ml-4">
                    {post.date}
                  </span>
                </div>
                <CardDescription>{post.summary}</CardDescription>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
            </Card>
          </Link>
        ))}

        {posts.length === 0 && (
          <p className="text-sm text-muted-foreground">No posts yet.</p>
        )}
      </div>
    </div>
  );
}
