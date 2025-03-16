// import { file } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    words: z.string(),
    tags: z.array(z.string()),
    heroImage: z.string().optional(),
  }),
});

// const books = defineCollection({
//   loader: file("src/content/books.json")
// })

// export const collections = { blog, books };
export const collections = { blog };
