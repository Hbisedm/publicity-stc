<script setup lang="ts">
import { useCounter } from '@vueuse/core'

const { count, inc, dec } = useCounter()
</script>

<template>
  <div>
    <h1>About1</h1>

    <p>使用vue use</p>
    <p>{{ count }}</p>
    <button @click="inc()">
      +1
    </button>
    <button @click="dec()">
      -1
    </button>
    <el-button type="primary">
      Primary Button
    </el-button>
    <el-button>Default Button</el-button>
    <el-button type="dashed">
      Dashed Button
    </el-button>
    <el-button type="text">
      Text Button
    </el-button>
    <el-button type="link">
      Link Button
    </el-button>
  </div>
</template>

<style scoped></style>
