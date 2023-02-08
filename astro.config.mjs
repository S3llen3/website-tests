import { defineConfig } from 'astro/config';

// https://astro.build/config
import react from "@astrojs/react";
import solidJs from "@astrojs/solid-js";
import lit from "@astrojs/lit";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  site: 'http://localhost:3000',
  integrations: [mdx(), react(), solidJs(), lit(), sitemap(), prefetch()]
});