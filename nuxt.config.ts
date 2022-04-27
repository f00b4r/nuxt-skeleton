import { NuxtOptions } from '@nuxt/types';

export default {
  // https://nuxtjs.org/guides/configuration-glossary/configuration-target
  target: 'static',

  // https://nuxtjs.org/guides/configuration-glossary/configuration-components
  components: true,

  // https://nuxtjs.org/guides/configuration-glossary/configuration-head
  head: {
    title: 'Nuxt Skeleton',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { name: 'author', content: 'f00b4r' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // https://nuxtjs.org/guides/configuration-glossary/configuration-plugins
  plugins: [],

  // https://nuxtjs.org/guides/configuration-glossary/configuration-modules
  modules: [
    '@nuxtjs/axios',
  ],

  // https://nuxtjs.org/guides/configuration-glossary/configuration-build
  build: {
    babel: {
      plugins: [
        '@babel/plugin-proposal-optional-chaining'
      ]
    }
  },

  // https://nuxtjs.org/guides/configuration-glossary/configuration-modules#buildmodules
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
  ],

  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-generate
  generate: {
  },

  // https://tailwindcss.nuxtjs.org/
  tailwindcss: {
    exposeConfig: true
  },

  // https://nuxtjs.org/guide/runtime-config
  publicRuntimeConfig: {}
} as Partial<NuxtOptions>;
