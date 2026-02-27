import { compileMDX } from "next-mdx-remote/rsc";

const components = {
  h2: (props: React.ComponentProps<"h2">) => (
    <h2 className="mt-10 mb-4 font-mono text-xl font-semibold" {...props} />
  ),
  h3: (props: React.ComponentProps<"h3">) => (
    <h3 className="mt-8 mb-3 font-mono text-lg font-semibold" {...props} />
  ),
  p: (props: React.ComponentProps<"p">) => (
    <p className="mb-4 leading-7 text-muted-foreground" {...props} />
  ),
  a: (props: React.ComponentProps<"a">) => (
    <a
      className="underline underline-offset-4 hover:text-foreground transition-colors"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  ul: (props: React.ComponentProps<"ul">) => (
    <ul className="mb-4 ml-6 list-disc text-muted-foreground" {...props} />
  ),
  ol: (props: React.ComponentProps<"ol">) => (
    <ol className="mb-4 ml-6 list-decimal text-muted-foreground" {...props} />
  ),
  li: (props: React.ComponentProps<"li">) => (
    <li className="mb-1 leading-7" {...props} />
  ),
  blockquote: (props: React.ComponentProps<"blockquote">) => (
    <blockquote
      className="mb-4 border-l-2 pl-4 italic text-muted-foreground"
      {...props}
    />
  ),
  code: (props: React.ComponentProps<"code">) => (
    <code
      className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm"
      {...props}
    />
  ),
  pre: (props: React.ComponentProps<"pre">) => (
    <pre
      className="mb-4 overflow-x-auto rounded-lg border bg-muted p-4 font-mono text-sm"
      {...props}
    />
  ),
};

export async function MdxContent({ source }: { source: string }) {
  const { content } = await compileMDX({
    source,
    components,
  });

  return content;
}
