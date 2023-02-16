import { ref } from 'vue'
import { defineStore } from 'pinia'

interface GeoType {
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

interface IGeo {
  name: string
  mapData: Promise
  shrink: string
  desc: string
}

/**
 * 使用行政区地图数据
 */
export const useMapData = defineStore('district', () => {
  const presentGeo = ref<IGeo>(null)

  function changePresentDistrict(data: GeoType) {
    presentGeo.value = data
  }

  return { presentGeo, changePresentDistrict }
})
