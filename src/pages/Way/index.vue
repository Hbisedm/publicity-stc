<script setup lang="ts">
import { way } from '@/dictionary'
import leftCurveLine from '@/components/LeftCurveLine.vue'
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
    <left-curve-line />
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

}
</style>
