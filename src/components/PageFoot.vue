<script setup lang="ts">
</script>

<template>
  <div class="foot-box">
    <img class="foot-bgimg" src="/images/home.png" alt="">
    <div class="foot-content">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.foot-box {
  height: 500px;
  overflow: hidden;
  position: relative;
  .foot-bgimg {
    width: 100%;
    height: auto;
  }

  .foot-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .7);
  }
}
</style>
