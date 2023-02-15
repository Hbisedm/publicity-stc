<script setup lang="ts">
import Tab from '@/components/Tab.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Tab />
    <router-view class="p-4" />
    <Footer />
  </div>
</template>
