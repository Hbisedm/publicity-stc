import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useShufflingStore = defineStore('ShufflingIndex', () => {
  const index = ref(0)

  function changeIndex(nums: number) {
    index.value = nums
  }

  return { index, changeIndex }
})
