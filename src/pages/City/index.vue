<script setup lang="ts">
import { ref } from 'vue'
import { useRenderGeo } from './hooks/useRenderGeo'
import ShanTou from '@/assets/json/ShanTou.json'
import { useMapData } from '@/stores/useMapData'

const city = ref<null | HTMLElement>(null)

const presentGeoStore = useMapData()

useRenderGeo(city as any, 'ShanTou', ShanTou)
</script>

<template>
  <div>
    <div id="myChart2" ref="city" class="h-xl" />
    <h1>关于汕头</h1>
    <div class="content">
      ................desc...............
    </div>
  </div>
</template>

<style scoped>

</style>
