<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Shuffling from '@/components/Shuffling.vue'
const topBox = ref()
const h = ref<number>(0)
onMounted(() => {
  h.value = topBox.value.offsetHeight
})
</script>

<template>
  <div id="box">
    <div ref="topBox" class="topBox">
      <div class="top-img-box">
        <Shuffling :height="`${h}px`" />
      </div>
      <div class="top-text-box" />
    </div>
    <div class="bottomBox">
      <div class="bottom-text-box" />
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
    }

    .bottom-img-box {
      width: 55%;
      background-color: chartreuse;
    }
  }
  // 底部 end
}
</style>
