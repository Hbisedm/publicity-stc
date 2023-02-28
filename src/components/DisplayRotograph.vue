<script setup lang="ts">
import { defineProps, ref } from 'vue'
import { useScroll } from '@vueuse/core'
import type { IRotograph } from '@/interface'

const props = defineProps<{
  data: IRotograph[]
}>()

const scrollContainer = ref<HTMLElement | null>(null)
const activeData = ref(props.data[0]) // 第一个数据
const { x } = useScroll(scrollContainer, { behavior: 'smooth' })
const moveWidth = 250 // 移动距离
function handleClick(index: number, data: IRotograph) {
  activeData.value = data
  // 根据当前index 判断移动距离
  const moveX = index > 0 ? index * moveWidth : 0
  x.value = moveX
}
</script>

<template>
  <div class="rotograh-container">
    <div ref="scrollContainer" class="rotograh-imgs">
      <div v-for="(item, index) of data" :key="index" class="rotograh-img-box">
        <img :src="item.url" class="rotograh-img" :class="{ active: activeData.id === item.id }" @click="handleClick(index, item)">
        <label class="rotograh-label">{{ item.name }}</label>
      </div>
    </div>
    <div class="desc">
      <span>{{ activeData.desc }}</span>
    </div>
    <router-link :to="`/scenicDetail/${activeData.id}`" class="link">
      了解更多
    </router-link>
  </div>
</template>

<style scoped lang="scss">
$common-width: 200px;
$common-height: 300px;
$active-width: 300px;
$active-height: 460px;
$margin-left: calc(72vw/2 - $active-width/1.5);

.rotograh-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: $content-height;
    justify-content: space-around;
    box-sizing: border-box;
    padding: 40px;

    .rotograh-imgs {
        display: flex;
        position: relative;
        overflow-x: hidden;
        align-items: flex-end;
        height: $active-height + 100;
        position: relative;
        flex-shrink: 0;

        .rotograh-img-box {
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          width: $active-width;
          height: $active-height + 100;
          align-items: center;
          justify-content: center;

          .rotograh-img {
              display: block;
              width: $common-width;
              height: $common-height;
              border-radius: 4px;
              object-fit: cover;
              object-position: top center;
              transition: 1s;

              &:hover {
                  // object-position: bottom right;
              }

          }

          .rotograh-label {
            margin-top: 4px;
            color: $topic-color;
          }

          &:first-of-type {
                margin-left: $active-width + 250;
          }

          &:last-child {
                margin-right: $active-width + 250;
          }

          .active {
            width: $active-width;
            height: $active-height;
            box-shadow: 0px 0px 30px  #000;
            margin-bottom: 20px;
          }
        }

    }

    .desc {
      background-color: rgba($color: $topic-color, $alpha: .3);
      color: $topic-color;
      font-size: $desc-font-size;
      line-height: 1.8 * $desc-font-size;
      border-radius: $border-radius;
      padding: 20px ;
      > span {
        text-indent: 2em;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;

      }
    }

    .link {
      color: $topic-color;
      align-self: center;
      text-decoration: none;
    }

}
</style>
