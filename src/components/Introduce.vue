<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useShufflingStore } from '@/stores/useShuffling'

const test = ref([
  { title: '标签1', content: '内容1' },
  { title: '标签2', content: '内容2' },
  { title: '标签3', content: '内容3' },
  { title: '标签4', content: '内容4' },
  { title: '标签5', content: '内容5' },
  { title: '标签6', content: '内容6' },

])

const ShufflingStore = useShufflingStore()
const index = ref(ShufflingStore.index)
watchEffect(() => {
  index.value = ShufflingStore.index
})
</script>

<template>
  <div>{{ test[index].title }}122</div>
</template>

<style lang="sass" scoped>

</style>
