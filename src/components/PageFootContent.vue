<script setup lang="ts">
import type { IPageFoot } from '@/interface'
defineProps<{
  data: IPageFoot
}>()
</script>

<template>
  <div class="foot-title-box flex">
    <div class="title-icon-box">
      <img class="title-icon" :src="data.icon" alt="">
    </div>
    <div class="foot-title">
      {{ data.title }}
    </div>
  </div>
  <div class="residence-box">
    <div v-for="(ele, index) in data.tag" :key="index" class="residence-item">
      <router-link to="" class="link">
        {{ ele.title }}
      </router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
.foot-title-box {
  justify-content: center;
  align-items: center;
  margin: 80px 0 40px;

  .title-icon-box {
    width: 74px;
    height: 74px;
    margin-right: 20px;

    .title-icon {
      width: 100%;
      height: auto;
    }
  }

  .foot-title {
    font-size: 26px;
    color: #fff;
    border-bottom: 3px solid #fff;
    padding: 0 16px;
    line-height: 60px;
  }
}

.residence-box {
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;

  .residence-item {
    width: 25%;
    text-align: center;
    line-height: 60px;
    color: #fff;

  }
}

.link {
    color: #fff;
    font-size: 16px;
    text-decoration: none;
}
</style>
