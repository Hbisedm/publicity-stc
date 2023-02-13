import type { RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: () => import('@/pages/Home/index.vue'),
  },
  {
    path: '/about',
    component: () => import('@/pages/About/index.vue'),
  },
]
