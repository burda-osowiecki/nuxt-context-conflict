export default defineNuxtConfig({
  devServer: {
    host: 'localhost',
    https: false,
    port: 3000,
    url: 'http://localhost:3000',
  },
  imports: {
    dirs: ['stores'],
  },
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', ['defineStore', 'definePiniaStore']],
      },
    ],
  ],
  srcDir: 'src/',
  typescript: {
    strict: true,
    typeCheck: true,
  },
})
