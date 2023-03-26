<script setup lang="ts">
import type { IAccordion } from '@/interface'

defineProps<{
  accordionData: IAccordion[]
}>()
</script>

<template>
  <DCarouselIndicator>
    <template #default="page">
      <div class="box">
        <div v-for="(item, index) in accordionData" :key="index" :style="{ backgroundImage: `url(${item.url})` }" class="panel" :class="[page.pageIndex === index + 1 ? 'active' : '']" @click="page.setPageIndex(index + 1)">
          <h3>{{ item.title }}</h3>
        </div>
      </div>
    </template>
  </DCarouselIndicator>
</template>

<style scoped lang="scss">
.box {
  display: flex;
  width: 90vw;
}

.panel {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 40vh;
  border-radius: 50px;
  color: #fff;
  cursor: pointer;
  flex: 0.5;
  margin: 10px;
  position: relative;
  -webkit-transition: all 700ms ease-in;
  transition: all 700ms ease-in;
  overflow: hidden;
}

.panel-img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.panel h3 {
  font-size: 24px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  margin: 0;
  opacity: 0;
}

.panel.active {
  flex: 5;
}

.panel.active h3 {
  opacity: 1;
  transition: opacity 0.3s ease-in 0.4s;
}
</style>
