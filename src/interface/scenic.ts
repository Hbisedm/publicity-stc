import type { IShufflingImg } from '.'

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
  detailDesc: string
  /**
   * 景点详情描述
   */
  scenic: IScenic[]
}
