<script setup lang="ts">
import type { IWayItem } from '@/interface'
const prop = defineProps<{
  item: [IWayItem, number]
}>()

const [data, index] = prop.item
</script>

<template>
  <!-- 介绍与小图 -->
  <div class="content-introduce flex" :class="{ reverse: index % 2 !== 0 }">
    <div class="introduce-text flex">
      <div class="introduce-title">
        {{ data.title }}
      </div>
      <div class="text">
        {{ data.content }}
      </div>
    </div>
    <div class="introduce-img-box">
      <img class="introduce-img" src="images/mj.jpg" alt="">
      <!-- <img class="introduce-img" :src="data.url" alt=""> -->
    </div>
  </div>
  <!-- 大图 -->
  <div class="content-shuffling" />
</template>

<style scoped lang="scss">
.content-introduce.reverse {
  flex-direction: row-reverse;
  .introduce-title {
    align-self: flex-end;
  }
}
.introduce-text {
  width: 50%;
  flex-direction: column;
  justify-content: center;
  padding: 0 60px;

  .introduce-title {
    font-size: 32px;
    font-weight: bold;
    line-height: 80px;
    padding: 0 36px;
  }
}

.introduce-img-box {
  width: 50%;

  // height: 500px;
  // overflow: hidden;
  .introduce-img {
    width: 100%;
    // height: auto;
    aspect-ratio: 1 / .8;
    object-fit: cover;
    image-rendering: pixelated
  }
}

.content-shuffling {
  height: 600px;
  margin: 60px 0;
  background-color: skyblue;
}
</style>
