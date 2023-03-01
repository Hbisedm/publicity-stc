<script setup lang="ts">
import { defineProps } from 'vue'
import { useAnimations } from '@/hooks/useAnimation'

withDefaults(defineProps<{
  title: string
  path?: string
}
>(), {
  path: '/',
})

useAnimations([
  {
    $el: '.test',
    options: {
      reset: false,
      duration: 2.5,
      animated: 'animate__heartBeat',
    },
  }, {
    $el: '.title-border-animate',
    options: {
      reset: false,
      duration: 2.5,
      animated: 'animate__fadeInUp',
    },
  }])
</script>

<template>
  <div class="title-container">
    <div class="title-border title-border-animate ">
      <div class="title-content">
        <h1 class="caption">
          {{ title }}
        </h1>
        <router-link :to="path" class="link">
          了解更多
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$border-bottom-width: 22px;
$border-thickness: 4px;
$border-radius: 0px;

.title-container {
  margin: 22px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title-border {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 50px;
    margin-bottom: 60px;
    border-top: $border-thickness solid rgba($color: $topic-color, $alpha: .8);
    border-right: $border-thickness solid rgba($color: $topic-color, $alpha: .8);
    border-left: $border-thickness solid rgba($color: $topic-color, $alpha: .8);
    border-radius: $border-radius;

    &::after {
      position: absolute;
      content: '';
      width: $border-bottom-width;
      height: $border-thickness;
      background-color: #c4cad6;
      bottom: 0;
      right: 0;

    }

    &::before {
      position: absolute;
      content: '';
      width: $border-bottom-width;
      height: $border-thickness;
      background-color: #c4cad6;
      bottom: 0;
      left: 0;
    }
  }

  .title-content {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    color: $topic-color;
    margin: 0;
    text-align: center;
    line-height: 50px;
    .caption{
      margin-top: 10px;
      margin-bottom: 0px;
      font-size: 50px;
    }

    .link {
      color: $topic-color;
      text-decoration: none;
      font-size: 12px;
    }
  }
}
</style>
