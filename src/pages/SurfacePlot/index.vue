<script setup lang="ts">
import { NCarousel } from 'naive-ui'
import Subject from './components/Subject.vue'
</script>

<template>
  <div class="box">
    <NCarousel :show-arrow="false" direction="vertical" dot-type="line" dot-placement="left">
      <Subject v-for="item in 4" :key="item" class="carousel-img" :handle-enter-home="$attrs.handleEnterHome as Function" />
      <template #dots="{ total, currentIndex, to }">
        <ul class="custom-dots">
          <li v-for="index of total" :key="index" :class="{ ['is-active']: currentIndex === index - 1 }" @click="to(index - 1)" />
        </ul>
      </template>
    </NCarousel>
  <!-- <div class="item content-box">
      <div class="title">
        Swatow
      </div>
      <div class="subhead-box">
        <div class="subhead">
          海滨小城
        </div>
        <div class="btn-box" @click="enterHome">
          <div class="btn-text">
            进入专题
          </div>
          <Icon icon="tabler:door-enter" color="white" width="30" height="30" :horizontal-flip="true" />
        </div>
      </div>
      <div class="introduce">
        <div class="introduce-item">
          经济特区
        </div>
        <div class="introduce-item">
            经济特区
          </div>
          <div class="introduce-item">
            经济特区
          </div>
          <div class="introduce-item">
            经济特区
          </div>
        </div>
      </div>
      <div class="item shuffling-box">
        2
      </div> -->
  </div>
</template>

<style scoped>
.box {
  width: 100%;
  height: 100vh;
  background: url('https://s1.ax1x.com/2023/02/17/pSqYWxx.jpg');
  background-size: 100% 100%;
}

.carousel-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.custom-dots {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 200px;
  left: 20px;
}

.custom-dots li {
  display: inline-block;
  width: 6px;
  height: 16px;
  margin: 3px 0px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.4);
  transition: width 0.3s, background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.custom-dots li.is-active {
  height: 40px;
  background: #fff;
}
</style>
