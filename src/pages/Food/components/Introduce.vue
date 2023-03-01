<script setup lang="ts">
import type { IFood } from '@/interface'

defineProps<{
  titleFloat?: string
  contentIndex: number
  desc: IFood[]
}>()
</script>

<template>
  <h2 class="title" :class="titleFloat">
    {{ desc![contentIndex].foodName }}
  </h2>
  <div class="desc">
    {{ desc![contentIndex].foodDesc }}
  </div>
</template>

<style lang="scss" scoped>
.right {
  text-align: right;
}
.title {
  color: #fff;
}
.desc {
  color: $desc-font-color;
  white-space: pre-wrap;
  font-size: $desc-font-size;
}
</style>
