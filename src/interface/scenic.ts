export interface IScenic {
  name: string
  desc: string
  imgs: string[]
}

export interface IRotograph {
  id: number
  url: string
  /**
   * 轮播图
   */
  shufflingImg: IShufflingImg[]
  name: string
  path: string
  desc: string
  /**
   * 景点详情描述
   */
  scenic: IScenic[]
}
