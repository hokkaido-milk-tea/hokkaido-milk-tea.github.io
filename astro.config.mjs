import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import markdoc from "@astrojs/markdoc";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: "https://hokkaido-milk-tea.github.io",
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false
      }
    }),
    markdoc(),
    image()
  ],
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'nord',
      langs: [],
      wrap: false
    }
  }
});