<script setup lang="ts">
import { defineProps } from 'vue'
import { useAnimations } from '@/hooks/useAnimation'

defineProps<{
  title: string
}
>()

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
      <h1 class="title-content">
        {{ title }}
      </h1>
      <el-link>
        了解更多
      </el-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
$border-bottom-width: 22px;
$border-thickness:4px;
$border-radius: 0px;

.title-container {
    margin: 22px 0 ;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title-border {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 200px;
        border-top:  $border-thickness solid rgba($color: $topic-color, $alpha: .8);;
        border-right: $border-thickness solid rgba($color: $topic-color, $alpha: .8);
        border-left: $border-thickness solid rgba($color: $topic-color, $alpha: .8);
        border-radius: $border-radius;
        &::after {
            position: absolute;
            content: '';
            width: $border-bottom-width;
            height: $border-thickness;
            background-color: $topic-color;
            bottom: 0;
            right: 0;

        }
        &::before {
            position: absolute;
            content: '';
            width: $border-bottom-width;
            height: $border-thickness;
            background-color: $topic-color;
            bottom: 0;
            left: 0;
        }
    }

    .title-content {
        color: $topic-color;
        margin: 0;
        text-align: center;
    }
}
</style>
