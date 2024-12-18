import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://swagatmitrab.vercel.app",
  integrations: [
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: {
        theme: "css-variables",
        wrap: true,
      },
    }),
    sitemap(),
    tailwind(),
  ],
  markdown: {
    rehypePlugins: [rehypeKatex],
    remarkPlugins: [remarkMath],
  },
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
});
