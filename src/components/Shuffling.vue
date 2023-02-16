<script setup lang="ts">
import { useShufflingStore } from '@/stores/useShuffling'

const changeTopIndex = useShufflingStore()

const changeShuffling = (index: number) => {
  changeTopIndex.changeIndex(index)
}
</script>

<template>
  <el-carousel type="card" :autoplay="false" indicator-position="none" @change="changeShuffling">
    <el-carousel-item v-for="item in 6" :key="item">
      <h3 text="2xl" justify="center">
        {{ item }}
      </h3>
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
