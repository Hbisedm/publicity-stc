<script setup lang="ts">
import { defineProps } from 'vue'
import type { IHomeScenic } from '@/interface'

defineProps<{
  item: IHomeScenic
}>()
</script>

<template>
  <div class="flex flex-col justify-center">
    <div class="master">
      <img class="master-img" :src="item.masterDiagram" :alt="item.name">
      <div class="content font-700">
        {{ item.name }}
      </div>
    </div>
    <div class="accessory">
      <div v-for="(accessory, index) of item.accessoryDiagram" :key="index" class="accessory-box">
        <img :src="accessory.url" :alt="accessory.name" class="accessory-img">
        <div class="accessory-desc">
          {{ accessory.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.master {
    position: relative;
    font-size: 0; //

    .master-img{
        position: relative;
        width: 100%;
        aspect-ratio: 16/10;
        object-fit: cover;
        z-index: 1;
    }

    .content {
        position:absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 99;
        font-size: 60px;
        color: rgba($color: #fff, $alpha: .9);
    }
}

.accessory {
    display: flex;
    justify-content: center;
    align-items: center;

    .accessory-box {
        position: relative;
        width: 100%;
        transition:  width .5s;

        &:hover {
            width: 200%;
        }

        .accessory-img {
            width: 100%;
            height: 110px;
            object-fit: cover;
        }
        .accessory-desc {
            position: absolute;
            bottom: 0;
            left: 0;
            display: inline-block;
            font-size: 12px;
            width: 100%;
            text-align: center;
            line-height: 30px;
            background-color: rgba($color: #fff, $alpha: .6);
        }

    }
}
</style>
