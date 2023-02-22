export interface IScenic {
  name: string
  desc: string
  imgs: string[]
}

export interface IRotograph {
  id: number
  url: string
  shufflingImg: IShufflingImg[]
  name: string
  path: string
  desc: string
  scenic: IScenic[]
}
