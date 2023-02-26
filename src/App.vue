<script setup lang="ts">
import { ref } from 'vue'
import Tab from '@/components/Tab.vue'
import Footer from '@/components/Footer.vue'
import SurfacePlot from '@/pages/SurfacePlot/index.vue'

const isEnter = ref<boolean>(false)

const confirmEnter = (): void => {
  isEnter.value = true
  // console.log(123)
}
</script>

<template>
  <div class="flex flex-col min-h-screen overflow-x-hidden ">
    <div class="bigbox">
      <Tab />
      <router-view />
      <Footer />
    </div>
    <div class="aaa" :class="{ animation: isEnter }">
      <SurfacePlot @enterHome="confirmEnter" />
    </div>
  </div>
</template>

<style scoped>
.bigbox {
  display: none;
}
.aaa {
  width: 100%;
  height: 100vw;
  position: absolute;
  top: 0;
  left: 0;
}
/* 转场动画 */
.animation {

  animation-name: scale;
  animation-duration: 10s;
  animation-timeline: box-move;
  animation: scale 10s linear 2s 1 normal running forwards
}

@keyframes scale {
  0% {
    transform: scale(1);
  }

  40% {
    transform: scale(5);
    opacity: .8;

  }

  70% {
    transform: scale(20);
    opacity: .4;

  }

  100% {
    transform: scale(60);
    opacity: 0;
    animation: ''

  }
}
</style>
