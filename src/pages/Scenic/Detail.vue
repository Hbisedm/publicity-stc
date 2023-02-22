<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useWindowSize } from '@vueuse/core'
import { computed } from 'vue'
import { rotographData } from '@/dictionary'

const route = useRoute()
const { id } = route.params

const presentScenicData = rotographData.find(item => item.id === parseInt(id as string))
const { height } = useWindowSize()
const computedHeight = computed(() => {
  return height.value * 0.7
})
</script>

<template>
  <div>
    <Shuffling :imgs="presentScenicData?.shufflingImg" interval="0" :height="`${computedHeight}px`" />
    <div>{{ presentScenicData }}</div>
  </div>
</template>

<style scoped>

</style>
