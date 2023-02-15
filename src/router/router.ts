import type { RouteRecordRaw } from 'vue-router'

const Home = () => import('@/pages/Home/index.vue')
const About = () => import('@/pages/About/index.vue')
const Cover = () => import('@/pages/Cover/index.vue')
const Scenic = () => import('@/pages/Scenic/index.vue')
const Food = () => import('@/pages/Food/index.vue')
const Experience = () => import('@/pages/Experience/index.vue')
const City = () => import('@/pages/City/index.vue')
const Way = () => import('@/pages/Way/index.vue')

const Demo = () => import('@/pages/PlayGround/Demo.vue')

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/about',
    component: About,
  }, {
    path: '/cover',
    component: Cover,
  },
  {
    path: '/demo',
    component: Demo,
  }, {
    path: '/scenic',
    component: Scenic,
  }, {
    path: '/food',
    component: Food,
  }, {
    path: '/experience',
    component: Experience,
  }, {
    path: '/city',
    component: City,
  },
  {
    path: '/way',
    component: Way,
  },
]
