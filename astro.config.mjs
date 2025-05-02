import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import simpleStackForm from "simple-stack-form";

import auth from "auth-astro";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-nomy.vercel.app",
  integrations: [react(), mdx({
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "github-dark-dimmed",
    },
    gfm: true,
  }), icon(), sitemap(), tailwind({
    applyBaseStyles: false,
  }), simpleStackForm(), auth()],
  output: "hybrid",
  adapter: vercel({
    analytics: true,
  }),
});