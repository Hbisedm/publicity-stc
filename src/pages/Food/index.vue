<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Introduce from './components/Introduce.vue'
import Shuffling from '@/components/Shuffling.vue'

// 获取顶部盒子dom
const topBox = ref<null | HTMLElement>(null)
// 获取dom高度
const h = ref<number>(0)

onMounted(() => {
  h.value = topBox.value!.offsetHeight
})
</script>

<template>
  <div id="box">
    <div ref="topBox" class="topBox">
      <div class="top-img-box">
        <Shuffling :height="`${h}px`" type="card" :autoplay="false" indicator-position="none" />
      </div>
      <div class="top-text-box">
        <div class="top-content">
          <Introduce />
        </div>
      </div>
    </div>
    <div class="bottomBox">
      <div class="bottom-text-box">
        <div class="bottom-content">
          <Introduce title-float="right" />
        </div>
      </div>
      <div class="bottom-img-box" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
#box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 96px);
  background-image: linear-gradient(#e66465, #9198e5);
  box-sizing: border-box;
  // 顶部 begin
  .topBox {
    height: 45%;
    display: flex;
    background-color: red;
    .top-img-box {
      width: 50%;
    }
  }
  .top-text-box {
    width: 50%;
    background-color: yellow;
    .top-content {
      width: 70%;
      // background-color: skyblue;
      padding: 20px 0 0 70px;
    }
  }
  // 顶部 end
  // 底部 begin
  .bottomBox {
    height: 45%;
    display: flex;
    background-color: chartreuse;

    .bottom-text-box {
      width: 45%;
      background-color: yellow;
      .bottom-content {
        width: 70%;
        padding: 20px 0 0 100px;
      }
    }

    .bottom-img-box {
      width: 55%;
      background-color: chartreuse;
    }
  }
  // 底部 end
}
</style>
