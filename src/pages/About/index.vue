<script setup lang="ts">
import { useCounter } from '@vueuse/core'

const { count, inc, dec } = useCounter()
</script>

<template>
  <div>
    <h1>About</h1>

    <p>使用vue use</p>
    <p>{{ count }}</p>
    <button @click="inc()">
      +1
    </button>
    <button @click="dec()">
      -1
    </button>
    <a-button type="primary">
      Primary Button
    </a-button>
    <a-button>Default Button</a-button>
    <a-button type="dashed">
      Dashed Button
    </a-button>
    <a-button type="text">
      Text Button
    </a-button>
    <a-button type="link">
      Link Button
    </a-button>
  </div>
</template>

<style scoped></style>
