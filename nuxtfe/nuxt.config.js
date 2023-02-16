export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nuxt framework as FE',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    bodyAttrs: {
      class: 'bg-gray-200 font-sans leading-normal tracking-normal', // https://postsrc.com/code-snippets/how-to-add-class-attribute-to-the-body-tag-in-nuxtjs
    },
    script: [
      {
        src: 'https://unpkg.com/popper.js@1/dist/umd/popper.min.js',
        body: true,
      },
      {
        src: 'https://unpkg.com/tippy.js@4',
        body: true,
      },
      {
        src: 'main.js',
        body: true,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  /** from Nuxt 2.7+ , process.env just works in nuxt.config.js
   * Want to use .env, we must use 2 properties: publicRuntimeConfig and privateRuntimeConfig. Look: https://nuxtjs.org/blog/moving-from-nuxtjs-dotenv-to-runtime-config/
   */
  publicRuntimeConfig: {
    myApiUrl: process.env.API_URL,
    myApiListPosts: process.env.LIST_POSTS_IN_CATEGORY,
  },
  privateRuntimeConfig: {},
}
