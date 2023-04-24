import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  routes: () => {
    const routes = [
      {
        name: 'home',
        path: '/:slug*',
        component: () => import('~/pages/home.vue'),
        meta: {
          middleware: ['home-guard'],
        },
      },
    ]

    return routes
  },
}
