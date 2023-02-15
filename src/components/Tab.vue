<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

import { tabs } from '@/dictionary'

const reactiveTabs: typeof tabs = reactive(tabs)
const router = useRouter()

const handleRouter = (path: string) => {
  router.push({
    path,
  })
}

const handleOutSideSite = () => {
  location.href = 'https://github.com/Hbisedm/publicity-stc'
}
</script>

<template>
  <div class="flex items-center w-screen justify-around bg-coolGray-1">
    <div class=" m-l-4 flex m-r-auto w-12 h-12 " title="logo">
      <div class="m-auto">
        LOGO
      </div>
    </div>
    <ul class="list-none m-0 p-0">
      <li v-for="(item, index) of reactiveTabs" :key="index" class="float-left m-r-6 m-l-3" @click="handleRouter(item.path)">
        <a target="_blank" class="color-red"> {{ item.label }} </a>
      </li>
    </ul>
    <div class="w-12 h-12  m-l-auto m-r-4 flex" title="github" @click="handleOutSideSite">
      <svg t="1676449357453" class="w-8 h-8 m-auto" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2757" width="200" height="200"><path d="M64 512c0 195.2 124.8 361.6 300.8 422.4 22.4 6.4 19.2-9.6 19.2-22.4v-76.8c-134.4 16-140.8-73.6-150.4-89.6-19.2-32-60.8-38.4-48-54.4 32-16 64 3.2 99.2 57.6 25.6 38.4 76.8 32 105.6 25.6 6.4-22.4 19.2-44.8 35.2-60.8-144-22.4-201.6-108.8-201.6-211.2 0-48 16-96 48-131.2-22.4-60.8 0-115.2 3.2-121.6 57.6-6.4 118.4 41.6 124.8 44.8 32-9.6 70.4-12.8 112-12.8 41.6 0 80 6.4 112 12.8 12.8-9.6 67.2-48 121.6-44.8 3.2 6.4 25.6 57.6 6.4 118.4 32 38.4 48 83.2 48 131.2 0 102.4-57.6 188.8-201.6 214.4 22.4 22.4 38.4 54.4 38.4 92.8v112c0 9.6 0 19.2 16 19.2C832 876.8 960 710.4 960 512c0-246.4-201.6-448-448-448S64 265.6 64 512z" fill="#040000" p-id="2758" /></svg>
    </div>
  </div>
</template>

<style scoped>

</style>
