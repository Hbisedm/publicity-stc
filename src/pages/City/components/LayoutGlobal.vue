<script setup lang="ts">

</script>

<template>
  <div class="wrapper">
    <slot name="map" />
    <slot name="content" />
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  background: $bg-linear-gradient-color;
  flex-wrap: nowrap;
  height: $content-height;
}
</style>
