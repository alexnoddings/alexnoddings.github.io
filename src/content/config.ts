import { defineCollection, z } from "astro:content";

const resume = defineCollection({
  schema: z.object({
    id: z.number(),
    titles: z.array(
      z.object({
        name: z.string(),
        start: z.string(),
        end: z.string().optional(),
      }),
    ),
    company: z.string(),
    techs: z.array(z.string()),
    skills: z.array(z.string()).optional(),
    summaries: z.array(z.string()),
  }),
});

export const collections = { resume };
