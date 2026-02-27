import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getAllPosts } from "@/lib/blog";
import { projects } from "@/lib/projects";

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);
  const featuredProjects = projects.slice(0, 2);

  return (
    <div className="mx-auto max-w-3xl px-6">
      {/* Hero */}
      <section className="py-20">
        <h1 className="font-mono text-2xl font-bold tracking-tight">
          Hi, I&apos;m Name
        </h1>
        <p className="mt-4 max-w-lg text-muted-foreground leading-relaxed">
          Short bio. Two or three lines about who you are, what you do, and what
          you care about. Keep it concise and authentic.
        </p>
        <div className="mt-6 flex gap-4">
          <a
            href="https://github.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:you@example.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Recent Posts */}
      {recentPosts.length > 0 && (
        <section className="pb-16">
          <h2 className="font-mono text-lg font-semibold mb-6">
            Recent Posts
          </h2>
          <div className="space-y-4">
            {recentPosts.map((post) => (
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
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
          <Link
            href="/blog"
            className="mt-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            View all posts <ArrowRight className="h-3 w-3" />
          </Link>
        </section>
      )}

      {/* Featured Projects */}
      <section className="pb-20">
        <h2 className="font-mono text-lg font-semibold mb-6">
          Featured Projects
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {featuredProjects.map((project) => (
            <Card key={project.title}>
              <CardHeader>
                <CardTitle className="text-base">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Live
                  </a>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
        <Link
          href="/projects"
          className="mt-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          View all projects <ArrowRight className="h-3 w-3" />
        </Link>
      </section>
    </div>
  );
}
