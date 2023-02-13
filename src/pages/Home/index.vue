<script setup lang="ts">
import { useCounter } from '@/stores'
const counterStore = useCounter()
const handleClick = () => {
  counterStore.increment()
}
</script>

<template>
  <div>
    <h1>Home</h1>

    <p>{{ counterStore.count }}</p>
    <button @click="handleClick">
      click
    </button>
  </div>
</template>

<style scoped></style>
