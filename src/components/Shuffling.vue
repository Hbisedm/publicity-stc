<script setup lang="ts">
import { defineProps, ref } from 'vue'
import type { IShufflingImg } from '@/interface'
defineProps<{
  imgs?: IShufflingImg[]
}>()

const emit = defineEmits<{
  (e: 'change', changeIndex: Function): void
  (e: 'update:index', shufflingIndex: number): void
}>()

const carousel = ref<null | any>(null)

const changeShuffling = (index: number) => {
  emit('update:index', index)
}

const changeIndex = (index: number) => {
  carousel.value.setActiveItem(index)
}
const handleClick = () => {
  emit('change', changeIndex)
}
</script>

<template>
  <el-carousel ref="carousel" v-bind="$attrs" @change="changeShuffling">
    <div v-if="imgs != null" class="wrapper">
      <el-carousel-item v-for="(item, index) in imgs" :key="index">
        <div class="relative">
          <img class="object-center-center object-cover w-screen auto-img" :style="{ aspectRatio: '16/9', height: $attrs.height as string }" :src="item.url">
          <div class="item-font-size absolute bottom-15 right-20 color-blue-1 op-62 font-600 ">
            {{ item.name }}
          </div>
        </div>
      </el-carousel-item>
    </div>
    <div v-else class="wrapper">
      <el-carousel-item v-for="item in 6" :key="item" @click="handleClick">
        <h3 text="2xl" justify="center">
          {{ `请填入传递imgs属性 ${item}` }}
        </h3>
      </el-carousel-item>
    </div>
  </el-carousel>
</template>

<style scoped lang="scss">
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
.wrapper {
  width: 100vw;
}

.item-font-size {
  font-size: 200px;
}
</style>
