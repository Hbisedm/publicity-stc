<script setup lang="ts">
import Title from '../../../components/Title.vue'
import { homeScenic } from '@/dictionary'
import displayBreviaryBox from '@/components/DisplayBreviaryBox.vue'

const title = '休闲景点'
</script>

<template>
  <div class="scenic-container">
    <Title :title="title" />
    <div class="wrapper">
      <display-breviary-box v-for="(item, index) in homeScenic" :key="index" :item="item" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.scenic-container {
  padding: 20px 0;
  background: $bg-linear-gradient-color;
}
.wrapper {
  margin: 0 5vw;
  display: grid;
  grid-template-columns: repeat(3, 28vw);
  grid-column-gap: 3vw;
}
</style>
