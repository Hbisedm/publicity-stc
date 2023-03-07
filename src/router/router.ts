import type { RouteRecordRaw } from 'vue-router'

const Home = () => import('@/pages/Home/index.vue')
const About = () => import('@/pages/About/index.vue')
const Scenic = () => import('@/pages/Scenic/index.vue')
const scenicDetail = () => import('@/pages/Scenic/Detail.vue')
const Food = () => import('@/pages/Food/index.vue')
const Experience = () => import('@/pages/Experience/index.vue')
const City = () => import('@/pages/City/index.vue')
const District = () => import('@/pages/City/District.vue')
const Way = () => import('@/pages/Way/index.vue')
const Houses = () => import('@/pages/Houses/index.vue')
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
    path: '/district/:name',
    component: District,
  },
  {
    path: '/way',
    component: Way,
  },
  {
    path: '/scenicDetail/:id',
    component: scenicDetail,
  },
  {
    path: '/houses',
    component: Houses,
  },
]
