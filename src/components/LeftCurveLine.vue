<script setup lang="ts">
import { useDevicePixelRatio } from '@vueuse/core'
import { onMounted } from 'vue'

const { pixelRatio } = useDevicePixelRatio()

const baseHeight = 150
const baseWidth = 300

const cssHeight = `${baseHeight}px`
const cssWidth = `${baseWidth}px`

const canvasHeight = baseHeight * pixelRatio.value
const canvasWidth = baseWidth * pixelRatio.value

const canvasLineWidth = 4 * pixelRatio.value // 线宽

onMounted(() => {
  const leftCurveCtx = document.getElementsByClassName('curve-line')
  Array.prototype.forEach.call(leftCurveCtx, (item) => {
    const ctx = item.getContext('2d')
    // ctx.setLineDash([10, 10]) // 虚线的宽度
    ctx.beginPath()
    ctx.lineWidth = canvasLineWidth
    ctx.moveTo(0, 0)// 起点
    ctx.quadraticCurveTo(0, canvasHeight / 2, canvasWidth / 2, canvasHeight / 2) // 控制点 终点
    ctx.stroke()
    ctx.moveTo(canvasWidth / 2, canvasHeight / 2)// 起点
    ctx.quadraticCurveTo(canvasWidth, 100, canvasWidth, canvasHeight) // 控制点 终点
    ctx.stroke()
  })
})
</script>

<template>
  <canvas class="curve-line" :height="canvasHeight" :width="canvasWidth" />
</template>

<style scoped lang="scss">
  .curve-line {
    width: v-bind('cssWidth');
    height: v-bind('cssHeight');
    border: 1px solid red;
  }
</style>
