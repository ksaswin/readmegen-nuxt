// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';


export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  devtools: { enabled: true },

  colorMode: {
    preference: 'light'
  },

  modules: ['@nuxt/ui', 'nuxt-monaco-editor', '@pinia/nuxt'],

  alias: {
    // NOTE: npm caused an error after pinia installation.
    // Issue tracked here: https://github.com/vuejs/pinia/issues/1542
    // Suggested work-around
    pinia: '/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs',

    '@': resolve(__dirname, '/')
  },

  typescript: {
    typeCheck: true
  },
  // NOTE: Suggested fix for JS Heap out of memory error during build
  // https://answers.netlify.com/t/javascript-heap-out-of-memory-when-trying-to-build-a-nuxt-app/93138/14
  postcss: {
    plugins: {
      cssnano: process.env.NODE_ENV === 'production' ? { preset: ['default', { discardComments: { removeAll: true } }] } : false,
    },
  },
})
