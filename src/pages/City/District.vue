<script setup lang="ts">
import { nextTick, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useRenderGeo } from './hooks/useRenderGeo'
import LayoutGlobal from './components/LayoutGlobal.vue'
import { useMapData } from '@/stores/useMapData'

const district = ref<null | HTMLElement>(null)!

const presentGeoStore = useMapData()

const router = useRouter()

function handleBack() {
  router.back()
}

presentGeoStore.presentGeo?.mapData.then((res: any) => {
  const targetMap = res.default
  nextTick(() => {
    useRenderGeo(district, presentGeoStore.presentGeo!.shrink, targetMap, false)
  })
})
</script>

<template>
  <div>
    <LayoutGlobal>
      <template #map>
        <div ref="district" class="map" />
      </template>
      <template #content>
        <div class="content">
          <h1>{{ presentGeoStore.presentGeo?.name }}</h1>
          {{
            presentGeoStore.presentGeo?.desc
          }}
        </div>
      </template>
    </LayoutGlobal>
    <div class=" absolute bottom-20 right-10 flex flex-col items-center" @click="handleBack">
      <button text-white text-8xl class="i-carbon-drill-back" />
      <span text-white text-2xl>back</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.map {
  flex-shrink: 0;
  width: 1000px;
  height: 100%;
}

.content {
  color: $topic-color
}
</style>
