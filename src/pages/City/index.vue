<script setup lang="ts">
import { ref } from 'vue'
import { useRenderGeo } from './hooks/useRenderGeo'
import ShanTou from '@/assets/json/ShanTou.json'
import { useMapData } from '@/stores/useMapData'

const city = ref<null | HTMLElement>(null)

const { changePresentDistrict } = useMapData()

useRenderGeo(city as any, ShanTou)

// function bingEcharts() {
//   const myChart = echarts.init(city.value!)
//   echarts.registerMap('ShanTou', ShanTou as any)
//   const option = {
//     series: [
//       {
//         type: 'map',
//         map: 'ShanTou', // 引入地图数据
//       },
//     ],
//   }
//   myChart.setOption(option as ECOption)
//   myChart.on('click', (params) => {
//     const target = districtMap.find(item => item.name === params.name)
//     target?.mapData.then((res) => {
//       const targetMap = res.default
//       // 拿到行政区数据
//       changePresentDistrict(targetMap)
//     })
//   })
// }

// onMounted(() => {
//   bingEcharts()
// })

// // 处理echarts自适应
// const getDOMFlag = true
// let myChart: any = null
// window.addEventListener('resize', () => {
//   if (getDOMFlag)
//     myChart = echarts.init(city.value!)
//   myChart.resize()
// })

// // 销毁echarts
// onBeforeUnmount(() => {
//   const myChart = echarts.init(city.value!)
//   myChart.dispose()
// })
</script>

<template>
  <div>
    <div id="myChart2" ref="city" class="h-xl" />
    <h1>关于汕头</h1>
    <div class="content">
      ................desc...............
    </div>
  </div>
</template>

<style scoped>

</style>
