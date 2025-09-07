// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/google-fonts"],

  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700]
    },
    display: "swap"
  },
});
