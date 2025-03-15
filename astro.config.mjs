// @ts-check
import { defineConfig, envField } from "astro/config";

import tailwind from "@astrojs/tailwind";

import vue from "@astrojs/vue";

import icon from "astro-icon";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), vue(), icon()],

  env: {
    schema: {
      HARDCOVER_API_URL: envField.string({
        context: "client",
        access: "public",
        optional: true,
      }),
      HARDCOVER_API_KEY: envField.string({
        context: "server",
        access: "secret",
      }),
    },
  },

  adapter: vercel(),
  output: "server",
});

