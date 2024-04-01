// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/styles/index.scss"],
  build: {
    transpile: ["vuetify"],
  },
  modules: ["@vueuse/nuxt"],
  // vueuse
  vueuse: {
    ssrHandlers: true,
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
