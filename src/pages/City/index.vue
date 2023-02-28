<script setup lang="ts">
import { ref } from 'vue'
import { useRenderGeo } from './hooks/useRenderGeo'
import LayoutGlobal from './components/LayoutGlobal.vue'
import ShanTou from '@/assets/json/ShanTou.json'
import { useMapData } from '@/stores/useMapData'

const city = ref<null | HTMLElement>(null)

const presentGeoStore = useMapData()

useRenderGeo(city, 'ShanTou', ShanTou)
</script>

<template>
  <LayoutGlobal>
    <template #map>
      <div ref="city" class="map" />
    </template>
    <template #content>
      <div class="content">
        <h1>关于汕头</h1>
        <div>
          ................desc...............
        </div>
      </div>
    </template>
  </LayoutGlobal>
</template>

<style scoped lang="scss">
.map {
  width: 1000px;
  height: 100%;
}

.content {
  color: $topic-color
}
</style>
