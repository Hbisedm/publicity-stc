<script setup lang="ts">
// import Shuffling from '@/components/Shuffling.vue'
import ImageText from '@/components/ImageText.vue'
import { houseGenre } from '@/dictionary'
import PageFoot from '@/components/PageFoot.vue'
</script>

<template>
  <div class="box">
    <div class="shuffling-box">
      <!-- <Shuffling /> -->
    </div>
    <div class="bottom-box">
      <div class="bottom-content">
        <ImageText v-for="(ele, index) in houseGenre" :key="index" :item="[ele, index]" />
      </div>
    </div>
    <PageFoot v-slot="data">
      {{ data.nums }}
    </PageFoot>
  </div>
</template>

<style scoped lang="scss">
.box {
  background-color: pink;
}

.shuffling-box {
  height: 600px;
  background-color: skyblue;
}

.bottom-box {
  display: flex;
  justify-content: center;
  background-color: orangered;

  .bottom-content {
    width: 75%;
    margin-top: -180px;
    padding: 140px 40px 0;
    background-color: pink;
  }
}
</style>
