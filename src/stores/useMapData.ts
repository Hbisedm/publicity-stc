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

/**
 * 使用行政区地图数据
 */
export const useMapData = defineStore('district', () => {
  const mapData = ref('')

  function changePresentDistrict(data: GeoType) {
    mapData.value = data
  }

  return { mapData, changePresentDistrict }
})
