// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/styles/index.scss"],
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    "@vueuse/nuxt",
    "@unocss/nuxt",
    "@element-plus/nuxt",
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],
  // vueuse
  vueuse: {
    ssrHandlers: true,
  },
  unocss: {
    uno: true,
    attributify: true,
    icons: {
      scale: 1.2,
    },
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  devServer: {
    port: 3302,
  },
});
