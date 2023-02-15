import { onBeforeUnmount, onMounted } from 'vue'
import { useMapData } from '@/stores/useMapData'
import type { ECOption } from '@/lib'
import { echarts } from '@/lib'
import { districtMap } from '@/dictionary'
export function useRenderGeo(city: HTMLElement, geoData: any) {
  const { changePresentDistrict } = useMapData()
  function bingEcharts() {
    const myChart = echarts.init(city.value!)
    echarts.registerMap('ShanTou', geoData)
    const option = {
      series: [
        {
          type: 'map',
          map: 'ShanTou', // 引入地图数据
        },
      ],
    }
    myChart.setOption(option as ECOption)
    myChart.on('click', (params) => {
      const target = districtMap.find(item => item.name === params.name)
      target?.mapData.then((res) => {
        const targetMap = res.default
        // 拿到行政区数据
        changePresentDistrict(targetMap)
      })
    })
  }

  onMounted(() => {
    bingEcharts()
  })

  // 处理echarts自适应
  const getDOMFlag = true
  let myChart: any = null
  window.addEventListener('resize', () => {
    if (getDOMFlag)
      myChart = echarts.init(city.value!)
    myChart.resize()
  })

  // 销毁echarts
  onBeforeUnmount(() => {
    const myChart = echarts.init(city.value!)
    myChart.dispose()
  })
}
