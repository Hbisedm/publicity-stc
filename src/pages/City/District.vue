<script setup lang="ts">
import { nextTick, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useRenderGeo } from './hooks/useRenderGeo'
import { useMapData } from '@/stores/useMapData'

const district = ref<null | HTMLElement>(null)

const presentGeoStore = useMapData()

const router = useRouter()

presentGeoStore.presentGeo?.mapData.then((res: any) => {
  const targetMap = res.default
  nextTick(() => {
    useRenderGeo(district as any, presentGeoStore.presentGeo.shrink, targetMap, false)
  })
})
</script>

<template>
  <div>
    <div ref="district" class="h-xl" />
    <h1> {{ presentGeoStore.presentGeo.name }} </h1>
    <div>
      {{
        presentGeoStore.presentGeo.desc
      }}
    </div>
  </div>
</template>

<style scoped>

</style>
