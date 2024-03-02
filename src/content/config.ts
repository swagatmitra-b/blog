import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		words: z.string(), 
		tags: z.array(z.string()),
		heroImage: z.string().optional(),
	}),
});

export const collections = { blog };
