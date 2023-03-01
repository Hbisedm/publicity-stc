interface IHomeScenic {
  id: number
  name: string
  masterDiagram: string // 主图
  accessoryDiagram: {
    name: string
    url: string
  }[] // 副图
}

interface IHomeFestival {
  /**
   * 名称
   */
  name: string
  /**
   * 简述列表
   */
  desc: string[]
  /**
   * 轮播图
   */
  url: string[]
}

interface IHomeItinerary {
  icon: string
  imgs: string[]
  title: string
  desc: string
}

export type { IHomeScenic, IHomeFestival, IHomeItinerary }
