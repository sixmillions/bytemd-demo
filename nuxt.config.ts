// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  telemetry: false,
  modules: [
    '@nuxtjs/eslint-module'
  ]
})
