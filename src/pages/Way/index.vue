<script setup lang="ts">
import Introduce from './components/Introduce.vue'
import { way } from '@/dictionary'
const { bannerUrl, title, desc } = way
const bgCssVar = `url(${bannerUrl})`
</script>

<template>
  <div class="wrapper">
    <div class="banner">
      <h1 class="title">
        {{ title }}
      </h1>
      <div class="desc">
        {{ desc }}
      </div>
    </div>
    <div class="content-bg">
      <Introduce
        v-for="(item, index) of way.way"
        :key="index"
        :type="index % 2 === 0 ? 'left' : 'right'"
        :way="item"
        :line="index !== way.way.length - 1"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;

  .banner {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: $topic-color;
    width: 100vw;
    aspect-ratio: 3;
    background-image: v-bind('bgCssVar');
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    padding: 20px 80px;

    .title {
      display: inline-block;
      font-size: $topic-title-size;
    }

    .desc {
      display: inline-block;
      text-indent: 4em;
    }
  }

  .content-bg {
    background: $bg-linear-gradient-color;
    display: flex;
    flex-direction: column;
    width: 100vw;
    padding: 20px;
  }

}
</style>
