<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="footer-linear-gradient-bg flex flex-row w-screen justify-around  flex-shrink-0 items-center m-t-auto">
    <div class="grid" title="logo">
      <logo />
    </div>
    <div class="flex flex-col">
      <div>Copyright © 2022-2023 All rights reserved.</div>
    </div>
    <div class="flex items-center">
      <Icon icon="carbon:email" color="#f7e8d5" width="20" height="20" />
      <span class="m-l-2">
        hbisedm666@163.com
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer-linear-gradient-bg {
  font-size: 12px;
  background: $bg-linear-gradient-reversal-color;
  color: $topic-color;
  height: $tab-height;
}
</style>
