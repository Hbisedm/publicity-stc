export interface IWayItem {
  title: string
  content: string
  url: string
}

export interface IWay {
  title: string
  bannerUrl: string
  desc: string
  way: IWayItem[]
}
