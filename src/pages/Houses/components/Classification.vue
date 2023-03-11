<script setup lang="ts">
import type { ISort } from '@/interface'
const pops = defineProps<{
  data: ISort
}>()
const emit = defineEmits<{
  (e: 'animationEnter', direction: string): void
}>()

const enterDetail = (): void => {
  emit('animationEnter', pops.data.enterAlign)
}
</script>

<template>
  <div class="content-item content-left">
    <div class="icon-box">
      <img class="icon" :src="data.icon" alt="">
    </div>
    <div class="title">
      {{ data.title }}
    </div>
    <div class="tag">
      <div v-for="(ele, index) in data.tag" :key="index" class="tag-item">
        {{ ele }}
      </div>
    </div>
    <div class="enter" :class="data.enterAlign" @click="enterDetail()">
      进去逛逛
    </div>
  </div>
</template>

<style scoped lang="scss">
.content-item {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;

  .icon-box {
    // background-color: skyblue;
    width: 100px;
    height: 100px;

    .icon {
      width: 100%;
      height: auto;
    }
  }

  .title {
    font-size: 40px;
    font-weight: bold;
  }

  .tag {
    display: flex;
    flex-wrap: wrap;
    width: 70%;
    // background-color: skyblue;
    text-align: center;
    padding: 20px 0;

    .tag-item {
      font-size: 20px;
      width: calc(100% / 3);
    }

    .bold {
      font-weight: bold;
    }
  }

  .enter {
    // background-color: skyblue;
    width: 120px;
    margin-top: 20px;
    line-height: 50px;
    padding: 0 40px;
    cursor: pointer;
  }

  .enter.left {
    text-align: left;
    background: linear-gradient(to left, transparent, #22538c);

  }

  .enter.right {
    text-align: right;
    background: linear-gradient(to right, transparent, #22538c);
  }
}
</style>
