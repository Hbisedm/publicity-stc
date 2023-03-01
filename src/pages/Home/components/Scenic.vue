<script setup lang="ts">
import { useRouter } from 'vue-router'
import Title from '../../../components/Title.vue'
import { homeScenic } from '@/dictionary'
import displayBreviaryBox from '@/components/DisplayBreviaryBox.vue'

const title = '休闲景点'
const router = useRouter()

function handleToDetail(id: number) {
  router.push(`/scenicDetail/${id}`)
}
</script>

<template>
  <div class="scenic-container">
    <Title :title="title" path="/scenic" />
    <div class="wrapper">
      <display-breviary-box v-for="(item) in homeScenic" :key="item.id" :item="item" @click="handleToDetail(item.id)" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.scenic-container {
  padding: 20px 0;
  background: $bg-linear-gradient-reversal-color;
}
.wrapper {
  margin: 0 5vw;
  display: grid;
  grid-template-columns: repeat(3, 28vw);
  grid-column-gap: 3vw;
}
</style>
