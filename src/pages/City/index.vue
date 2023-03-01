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
          <span class="desc-block">汕头是中国广东省的一个城市，位于广东东部沿海地区。它是一个历史悠久的港口城市，也是一个工业和商业中心。汕头的人口约为5百万人，其中有很多居民是福建、广东和潮汕人。</span>
          <span class="desc-block">汕头有许多景点和旅游胜地，包括汕头大学、潮汕文化博物馆、潮汕客家博物馆、南澳海滩、古城镇、汕头公园和南澳岛等。此外，汕头还以其著名的潮汕美食而闻名，例如潮汕牛肉火锅、潮汕烧鹅、潮汕牛腩粉、潮汕粉果等。</span>
          <span class="desc-block">汕头的经济以制造业和出口业为主。当地的主要出口产品包括服装、家具、电子产品、机械设备和玩具等。汕头还是一个重要的港口城市，其港口是南海的一个重要出口点。</span>
          <span class="desc-block">总之，汕头是一个充满活力和历史文化底蕴的城市，既有美食和景点，也是一个经济和商业中心。</span>
        </div>
      </div>
    </template>
  </LayoutGlobal>
</template>

<style scoped lang="scss">
@import "./styles/city.scss";

.map {
  width: 1000px;
  height: 100%;
  flex-shrink: 0;
}
</style>
