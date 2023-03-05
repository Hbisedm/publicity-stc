<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const imageOrigin = ref('https://pic.imgdb.cn/item/64049445f144a01007bfc992.png')
</script>

<template>
  <img :src="imageOrigin" alt="logo" class=" logo flex color-white" @click="router.push({ path: '/home' })">
</template>

<style scoped>
.logo {
  width: 40px;
  height: 40px;
  object-fit: cover;
  object-position: center;
}
</style>
