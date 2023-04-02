// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define your collection(s)
const blogCollection = defineCollection({
    schema: z.object({
        title: z.string({
          required_error: "Required frontmatter missing: title",
          invalid_type_error: "Frontmatter title must be a string",
        }),
        date: z.string(),
        tags: z.array(z.string()).default([]),
        draft: z.boolean().default(false),
    })
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'blog': blogCollection,
};