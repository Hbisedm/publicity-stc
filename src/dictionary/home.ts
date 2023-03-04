import type { IHomeFestival, IHomeItinerary, IHomeScenic, IShufflingImg } from '@/interface'

// 首页顶部轮播
export const homeTopShuffling: IShufflingImg[] = [
  {
    name: '南澳大桥',
    url: 'https://s1.ax1x.com/2023/02/17/pSqYWxx.jpg',
    path: '',
    outSideUrl: '',
  },
  {
    name: '汕头烟花',
    url: 'https://s1.ax1x.com/2023/02/17/pSqY5qO.jpg',
    path: '',
    outSideUrl: '',
  },
  {
    name: '汕头道路',
    url: 'https://s1.ax1x.com/2023/02/17/pSqU98s.jpg',
    path: '',
    outSideUrl: '',
  },
  {
    name: '小公园',
    url: 'https://s1.ax1x.com/2023/02/17/pSqUpCj.jpg',
    path: '',
    outSideUrl: '',
  },
]

export const homeScenic: IHomeScenic[] = [{
  id: 1,
  name: '小公园',
  masterDiagram: 'https://s1.ax1x.com/2023/02/17/pSqUpCj.jpg',
  accessoryDiagram: [{
    name: 'xxxx',
    url: 'https://s1.ax1x.com/2023/03/01/ppism9S.jpg',
  }, {
    name: 'xxxx',
    url: 'https://s1.ax1x.com/2023/02/17/pSqUpCj.jpg',
  }],
}, {
  id: 5,
  name: '东海岸',
  masterDiagram: 'https://s1.ax1x.com/2023/03/01/ppiLAMj.jpg',
  accessoryDiagram: [{
    name: 'bbb',
    url: 'https://s1.ax1x.com/2023/02/17/pSqU98s.jpg',
  }, {
    name: 'aaa',
    url: 'https://s1.ax1x.com/2023/02/17/pSqU98s.jpg',
  }],
}, {
  id: 6,
  name: '南澳县',
  masterDiagram: 'https://s1.ax1x.com/2023/03/01/ppiqjsA.jpg',
  accessoryDiagram: [{
    name: 'yyyy',
    url: 'https://s1.ax1x.com/2023/02/17/pSqU98s.jpg',
  }, {
    name: 'dddd',
    url: 'https://s1.ax1x.com/2023/02/17/pSqU98s.jpg',
  }],
}]

export const homeFestival: IHomeFestival[] = [{
  name: '迎老爷',
  desc: ['一句话简述这个活动', '一行话简述这个活动'],
  url: ['https://s1.ax1x.com/2023/03/04/ppE15y6.jpg'],
}, {
  name: '英歌舞',
  desc: ['在潮汕，英歌舞历来也一直被视为吉祥的象征、驱邪的魔力，人们认为跳英歌舞是“好彩头”。这年谁能够进入英歌队，这年办事就顺利，事事如意', '潮汕地区的潮阳，普宁是英歌舞十分流行广泛的地方，这里的村民认为跳英歌能把妖魔鬼怪、歪风邪气驱赶净尽，以正压邪，确保平安。所以，一些大型建筑的奠基、办公大楼落成、大桥通车、学校庆典仪式举行时，都免不了要请英歌队大舞一番。在乡村，百姓们只要听到英歌声，就在门口作好了迎接准备。英歌队来了，户主就鸣炮邀请，这时英歌队就得进入院内，在院内表演一番。人们认为，经过英歌队舞过的房屋，能永保平安。'],
  url: ['https://s1.ax1x.com/2023/03/01/ppiatL6.jpg'],
}]

export const homeItinerary: IHomeItinerary[] = [
  {
    icon: 'https://s1.ax1x.com/2023/02/19/pSOkNgs.png',
    title: '小公园',
    imgs: ['', ''],
    desc: '三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地',
  }, {
    icon: 'https://s1.ax1x.com/2023/02/19/pSOkNgs.png',
    title: '汕头旅社',
    imgs: ['', ''],
    desc: '三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地',
  },
  {
    icon: 'https://s1.ax1x.com/2023/02/19/pSOkNgs.png',
    title: '开埠文化陈列馆',
    imgs: ['', ''],
    desc: '三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地',
  },
  {
    icon: 'https://s1.ax1x.com/2023/02/19/pSOkNgs.png',
    title: '广场轮渡',
    imgs: ['', ''],
    desc: '三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地',
  },
  {
    icon: 'https://s1.ax1x.com/2023/02/19/pSOkNgs.png',
    title: '南澳岛',
    imgs: ['', ''],
    desc: '三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地',
  },
  {
    icon: 'https://s1.ax1x.com/2023/02/19/pSOkNgs.png',
    title: '东海岸',
    imgs: ['', ''],
    desc: '三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地,三四行描述这个目的地',
  },

]
