import type { IShufflingImg } from '.'

interface IFood extends IShufflingImg {
  foodName: string // 美食名称
  foodDesc: string // 美食描述
}

export type { IFood }
