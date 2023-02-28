import type { Ref } from 'vue'
import { onBeforeUnmount, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useMapData } from '@/stores/useMapData'
import type { ECOption } from '@/lib'
import { echarts } from '@/lib'
import { districtMap } from '@/dictionary'

const areaColor = '#22538c'
const color = '#ff0'
const borderColor = '#0f0'

/**
 * dom
 * shrink: 地图简称
 * geoData: 地图数据
 * initial: 是否初始化
 */
export function useRenderGeo(dom: Ref<HTMLElement | null>, shrink: string, geoData: any, initial = true) {
  const router = useRouter()
  const mapDataStore = useMapData()
  function bingEcharts() {
    const myChart = echarts.init(dom.value!)
    echarts.registerMap(shrink, geoData) // 注册地图数据
    // echarts diy 配置
    const option = {
      geo: [{
        roam: 'scale',
        type: 'map',
        show: true,
        map: shrink, // 引入地图数据
        projection: {
          project: (point: any) => [point[0] / 180 * Math.PI, -Math.log(Math.tan((Math.PI / 2 + point[1] / 180 * Math.PI) / 2))],
          unproject: (point: any) => [point[0] * 180 / Math.PI, 2 * 180 / Math.PI * Math.atan(Math.exp(point[1])) - 90],
        },
        label: {
          show: true, // 显示文本
        },
        itemStyle: {
          areaColor,
          color,
          borderColor,
          borderType: 'dotted',
          shadowColor: 'rgba(0, 0, 0, 0.5)',
          shadowBlur: 20,
          shadowOffsetX: 4,
          shadowOffsetY: 4,
        },
        emphasis: { // 高亮时
          focus: 'self',

        },
      }],
    }
    myChart.setOption(option as ECOption)
    if (initial) {
      // 监听事件
      myChart.on('click', (params) => {
        const target = districtMap.find(item => item.name === params.name)!
        // 拿到行政区数据
        mapDataStore.changePresentDistrict(target)
        router.push({
          path: `/district/${target.name}`,
        })
      })
    }
  }

  if (initial) {
    onMounted(() => {
      bingEcharts()
    })
    // 销毁echarts
    onBeforeUnmount(() => {
      const myChart = echarts.init(dom.value!)
      myChart.dispose()
    })
  }
  else {
    bingEcharts()
  }

  // 处理echarts自适应
  const getDOMFlag = true
  let myChart: any = null
  window.addEventListener('resize', () => {
    if (getDOMFlag)
      myChart = echarts.init(dom.value!)
    myChart.resize()
  })
}
