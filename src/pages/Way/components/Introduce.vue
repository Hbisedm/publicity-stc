<script setup lang="ts">
import CurveLine from '@/components/CurveLine.vue'
import type { IWayItem } from '@/interface'

defineProps<{
  type: 'left' | 'right'
  line: boolean
  way: IWayItem
}>()
</script>

<template>
  <div class="introduce-wrapper">
    <div class="flex flex-col">
      <div class="introduce-title">
        {{ way.title }}
      </div>
      <CurveLine v-if="line" :type="type" />
    </div>
    <div class="introduce-content">
      {{ way.content }}
    </div>
  </div>
</template>

<style scoped lang="scss">
$title-width: 25vw;
.introduce-wrapper {
  font-size: 0;
  display: flex;
  color: $topic-color;
  margin-left: 20px;

  .introduce-title {
    text-align: center;
    font-size: $topic-title-size;
    background: blueviolet;
    width: $title-width;
  }

  .introduce-content {
    color: $topic-color;
    font-size: 22px;
    padding: 20px;
  }
}
</style>
