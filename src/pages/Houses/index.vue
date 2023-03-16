<script setup lang="ts">
import { ref } from 'vue'
import Classification from './components/Classification.vue'
import { SortData } from '@/dictionary'

const direction = ref<string>('')
const confirmEnter = (e: string): void => {
  direction.value = e
}
</script>

<template>
  <div class="box">
    <img class="right-img" src="https://s1.ax1x.com/2023/03/01/ppiatL6.jpg" alt="">
    <div class="genre-box" :class="direction" >
      <img class="left-img" src="https://s1.ax1x.com/2023/03/04/ppE15y6.jpg" alt="">
    </div>
    <div class="content">
      <Classification v-for="(ele, index) in SortData" :key="index" :data="ele" @animationEnter="confirmEnter" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.box {
  height: $content-height;
  position: relative;
  overflow: hidden;
  background-color: orangered;

  .right-img {
    width: 100%;
    height: auto;
  }
}

.genre-box {
  width: 100%;
  height: 170%;
  position: absolute;
  top: -35%;
  left: -47%;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  background-color: pink;
  overflow: hidden;

  .left-img {
    width: 100%;
    height: auto;
  }

}

.genre-box.left {
  animation: toLeft 1s ease-in-out  0s 1 normal running forwards;
  // transition: left 4s;
}

@keyframes toLeft {
  100% {
    left: -90%;
  }
}

.content {
  width: 60%;
  height: 70%;
  position: absolute;
  top: 15%;
  left: 20%;
  display: flex;
  border: 5px solid;
  border-radius: 15px;
  overflow: hidden;

}
</style>
