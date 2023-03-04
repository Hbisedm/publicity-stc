<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Introduce from './components/Introduce.vue'
import Shuffling from '@/components/Shuffling.vue'
import { foodSnack, foodStaple } from '@/dictionary'

// 获取顶部盒子dom
const topBox = ref<null | HTMLElement>(null)
// 获取dom高度
const imgHeight = ref<number>(0)

// 顶部轮播下标
const topIndex = ref<number>(0)
// 底部轮播下标
const botIndex = ref<number>(0)

onMounted(() => {
  imgHeight.value = topBox.value!.offsetHeight
})
</script>

<template>
  <div id="box">
    <div ref="topBox" class="topBox">
      <div class="top-img-box">
        <Shuffling v-model:index="topIndex" :imgs="foodSnack" :height="`${imgHeight}px`" type="card" :autoplay="false" indicator-position="none" />
      </div>
      <div class="top-text-box">
        <div class="top-content">
          <Introduce :content-index="topIndex" :desc="foodSnack" />
        </div>
      </div>
    </div>
    <div class="bottomBox">
      <div class="bottom-text-box">
        <div class="bottom-content">
          <Introduce title-float="right" :content-index="botIndex" :desc="foodStaple" />
        </div>
      </div>
      <div class="bottom-img-box">
        <Shuffling v-model:index="botIndex" :imgs="foodStaple" :height="`${imgHeight}px`" :autoplay="false" indicator-position="none" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: $content-height;
  box-sizing: border-box;
  background: $bg-linear-gradient-color;
  // 顶部 begin
  .topBox {
    height: 45%;
    display: flex;
    .top-img-box {
      display: flex;
      margin: auto;
      width: 50%;
    }
  }
  .top-text-box {
    width: 50%;
    .top-content {
      padding: 0px 80px;
    }
  }
  // 顶部 end
  // 底部 begin
  .bottomBox {
    height: 45%;
    display: flex;

    .bottom-text-box {
      width: 45%;
      .bottom-content {
        width: 70%;
        padding: 3vw 0 0 7vw;
      }
    }

    .bottom-img-box {
      width: 55%;
    }
  }
  // 底部 end
}
</style>
