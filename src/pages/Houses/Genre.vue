<script setup lang="ts">
// import Shuffling from '@/components/Shuffling.vue'
</script>

<template>
  <div class="box">
    <div class="shuffling-box">
      <!-- <Shuffling /> -->
    </div>
    <div class="bottom-box">
      <div class="bottom-content" />
    </div>
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
  height: 2000px;
}

.bottom-content {
  width: 75%;
  height: 1000px;
  margin-top: -140px;
  background-color: pink;
}
</style>
