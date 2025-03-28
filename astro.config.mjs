import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ramisuvanto.github.io/flatearthchurch',
  outDir: './docs',
  integrations: [mdx(), sitemap()],
});
