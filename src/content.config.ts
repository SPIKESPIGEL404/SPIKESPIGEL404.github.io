import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pages = defineCollection({
  loader: glob({ pattern: '*.mdoc', base: './content/pages' }),
  schema: z.object({
    name: z.string().optional(),
    tagline: z.string().optional(),
    bio: z.string().optional(),
    title: z.string().optional(),
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.string(),
        })
      )
      .optional(),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '*.mdoc', base: './content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '*.mdoc', base: './content/projects' }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    status: z.enum(['active', 'archived']).default('active'),
    github: z.string().url().optional(),
    live: z.string().url().optional(),
  }),
});

export const collections = { pages, posts, projects };
