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
const HousesGenre = () => import('@/pages/Houses/Genre.vue')
const HousesEave = () => import('@/pages/Houses/Eave.vue')
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
  { // 传统民居 —— 首页
    path: '/houses',
    component: Houses,
  },
  { // 传统民居 —— 屋型
    path: '/genre',
    component: HousesGenre,
  },
  { // 传统民居 —— 屋檐
    path: '/eave',
    component: HousesEave,
  },
]
