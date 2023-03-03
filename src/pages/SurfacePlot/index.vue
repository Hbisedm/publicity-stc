<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { NCarousel, NStep, NSteps } from 'naive-ui'
import Subject from './components/Subject.vue'

const emit = defineEmits(['handleEnterHome'])
// 纵向轮播下标
const currentRef = ref<number>(1)
const enterHome = (): void => {
  emit('handleEnterHome')
}

const filpOver = (next: Function): void => {
  next()

  if (currentRef.value! >= 4)
    currentRef.value = 1
  else currentRef.value!++
}
</script>

<template>
  <div class="box">
    <NCarousel :show-arrow="true" direction="vertical" dot-type="line" dot-placement="left">
      <!-- 纵向轮播 -->
      <Subject v-for="item in 4" :key="item" class="carousel-img" @confirmEnter="enterHome" />

      <!-- 下一页 -->
      <template #arrow="{ next }">
        <div class="next" @click="filpOver(next)" />
      </template>

      <!-- 步骤条控制点 -->
      <template #dots="{ total, currentIndex, to }">
        <NSteps v-model:current="currentRef" class="custom-dots" vertical size="small">
          <!-- 已翻页背景 icon -->
          <template #finish-icon>
            <Icon icon="tabler:door-enter" color="#102d66" width="30" height="30" :horizontal-flip="true" />
          </template>

          <NStep v-for="index of total" :key="index" :class="{ ['is-active']: currentIndex === index - 1 }" @click="to(index - 1)">
            <!-- 当前页背景 icon -->
            <template #icon>
              <Icon />
            </template>
          </NStep>
        </NSteps>
      </template>
    </NCarousel>
  </div>
</template>

<style lang="scss" scoped>
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
  // display: flex;
  // flex-direction: column;
  width: auto;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 240px;
  left: 60px;
}

.custom-dots li {
  // display: inline-block;
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

/* 步骤条 */
.n-steps .n-step-indicator {
  width: 20px !important;
  height: 20px !important;
}

.next {
  position: absolute;
  top: 680px;
  left: 64px;
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-top: 20px solid #102d66;
  cursor: pointer;
}

.n-steps.n-steps--vertical:not(.n-steps--show-description)>.n-step {
  padding-bottom: 80px !important;
}

.n-steps.n-steps--vertical>.n-step>.n-step-indicator>.n-step-splitor {
  width: 3px !important;
}

.n-step.n-step--clickable.n-step--wait-status,
.n-step.n-step--clickable.n-step--finish-status,
.n-step.n-step--clickable.n-step--process-status.is-active {
  --n-indicator-border-color: #102d66 !important;
  --n-indicator-border-color: #102d66 !important;
  --n-indicator-text-color: #102d66 !important;
  --n-splitor-color: #102d66 !important;

}

.n-step-indicator {
  background-color: #102d66 !important;
  box-shadow: #102d66 !important;
}

.n-step.n-step--clickable.n-step--process-status.is-active {
  --n-indicator-border-color: #102d66 !important;
  --n-indicator-color: #102d66 !important;
}

.n-step.n-step--clickable.n-step--process-status {
  --n-indicator-border-color: #102d66 !important;
  --n-indicator-color: #102d66 !important;
  --n-splitor-color: #102d66 !important;
}
</style>
