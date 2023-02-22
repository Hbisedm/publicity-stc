<script setup lang="ts">
import { useDevicePixelRatio } from '@vueuse/core'
import { onMounted, ref } from 'vue'

const props = defineProps<{
  type: 'left' | 'right'
}>()

const LEFT = 'left'
const RIGHT = 'right'

const curveLine = ref<null | HTMLCanvasElement>(null)
const { pixelRatio } = useDevicePixelRatio()

const baseHeight = 150
const baseWidth = 300

const cssHeight = `${baseHeight}px`
const cssWidth = `${baseWidth}px`

const canvasHeight = baseHeight * pixelRatio.value
const canvasWidth = baseWidth * pixelRatio.value

const canvasLineWidth = 4 * pixelRatio.value // 线宽

const offsetWidth = 100 // 偏移x

onMounted(() => {
  const ctx = curveLine.value!.getContext('2d')!
  // ctx.setLineDash([10, 10]) // 虚线的宽度
  if (LEFT === props.type) {
    ctx.beginPath()
    ctx.lineWidth = canvasLineWidth
    ctx.strokeStyle = '#fff'
    ctx.moveTo(offsetWidth, 0)// 起点
    ctx.quadraticCurveTo(0, canvasHeight / 2, canvasWidth / 2, canvasHeight / 2) // 控制点 终点
    ctx.stroke()
    ctx.moveTo(canvasWidth / 2, canvasHeight / 2)// 起点
    ctx.quadraticCurveTo(canvasWidth, canvasHeight / 2, canvasWidth - offsetWidth, canvasHeight) // 控制点 终点
    ctx.stroke()
  }

  if (RIGHT === props.type) {
    ctx.beginPath()
    ctx.lineWidth = canvasLineWidth
    ctx.strokeStyle = '#fff'
    ctx.moveTo(canvasWidth - offsetWidth, 0)// 起点
    ctx.quadraticCurveTo(canvasWidth, canvasHeight / 2, canvasWidth / 2, canvasHeight / 2) // 控制点 终点
    ctx.stroke()
    ctx.moveTo(canvasWidth / 2, canvasHeight / 2)// 起点
    ctx.quadraticCurveTo(0, canvasHeight / 2, offsetWidth, canvasHeight) // 控制点 终点
    ctx.stroke()
  }
})
</script>

<template>
  <canvas ref="curveLine" class="curve-line" :height="canvasHeight" :width="canvasWidth" />
</template>

<style scoped lang="scss">
  .curve-line {
    width: v-bind('cssWidth');
    height: v-bind('cssHeight');
    // border: 1px solid red;
  }
</style>
