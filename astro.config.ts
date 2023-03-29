// helper, provides auto intellisense in vscode
import { defineConfig } from 'astro/config';

import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://hokkaido-milk-tea.github.io',
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      // shiki built-in themes
      theme: 'nord',
      // custom languages
      langs: [],
      // word wrap to prevent horizontal scrolling
      wrap: true
    },
  },
  integrations: [mdx(), tailwind()],
  experimental: {
    assets: true
  },
});