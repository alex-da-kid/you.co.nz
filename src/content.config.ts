import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      image: image().optional(),
      imageAlt: z.string().default(''),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
    }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/testimonials' }),
  schema: z.object({
    // Leave name empty to show the testimonial anonymously.
    name: z.string().optional(),
    role: z.string(),
    service: z.enum(['coaching', 'strengths', 'workshops']),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog, testimonials };
