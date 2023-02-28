import { ref } from 'vue'
import { defineStore } from 'pinia'

export interface GeoType {
  type: string
  features: {
    type: string
    properties: {
      adcode: number
      name: string
      center: number[]
      centroid: number[]
      childrenNum: number
      level: string
      acroutes: number[]
      parent: {
        adcode: number
      }
    }
    geometry: any
  }[]
}

export interface IGeo {
  name: string
  mapData: Promise<GeoType>
  shrink: string
  desc: string
}

/**
 * 使用行政区地图数据
 */
export const useMapData = defineStore('district', () => {
  const presentGeo = ref<IGeo | null>(null)

  function changePresentDistrict(data: IGeo) {
    presentGeo.value = data
  }

  return { presentGeo, changePresentDistrict }
})
