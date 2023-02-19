<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'
import { computed } from 'vue'
import Scenic from './components/Scenic.vue'
// import Experience from './components/Experience.vue'
import Festival from './components/Festival.vue'
import Itinerary from './components/Itinerary.vue'
import { homeTopShuffling } from '@/dictionary'

const handleChangeIndex = (func: Function) => {
  // console.log(func)
  func(3)
}

const { height } = useWindowSize()

const computedHeight = computed(() => {
  return height.value * 0.9
})

// console.log(width, height)
</script>

<template>
  <div class="home">
    <Shuffling :height="`${computedHeight}px`" arrow="always" :interval="5000" :imgs="homeTopShuffling" @change="handleChangeIndex" />
    <Scenic />
    <!-- <Experience /> -->
    <Festival />
    <Itinerary />
  </div>
</template>

<style scoped lang="scss">
.home {

}

::v-deep .el-date-editor {
    box-shadow: none !important;
}

::v-deep .el-carousel__indicators--horizontal {
  transform: translateX(300%) translateY(-100%)
}
</style>
