// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // Performance optimizations
    build: {
      analyze: true,
      extractCSS: true,
      optimizeCSS: true,
      terser: {
        parallel: true,
      },
    },
    // SEO enhancements
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'A Food Blog' },
        // Add more meta tags as needed
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxt/content", "@nuxt/image"],

})
