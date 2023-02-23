<script setup lang="ts">
import { ref } from 'vue'
import { homeItinerary } from '@/dictionary'
import Shuffling from '@/components/Shuffling.vue'
const title = '推荐路径'
const presentItinerary = ref(homeItinerary[0])
const presentIndex = ref(0)

function handleMouseOver(index: number) {
  presentIndex.value = index
  presentItinerary.value = homeItinerary[index]
}
</script>

<template>
  <div class="wrapper">
    <Title :title="title" path="/way" />
    <div class="itinerary-order">
      <div v-for="(item, index) of homeItinerary" :key="index" class="itinerary-order-box">
        <img :src="item.icon" :alt="item.title" class="itinerary-order-icon" @mouseover="handleMouseOver(index)">
      </div>
    </div>
    <div class="itinerary-desc" :style="{ flexFlow: presentIndex >= 3 ? 'row-reverse' : 'nowrap' }">
      <Shuffling class="itinerary-desc-shuffling" />
      <div class="itinerary-desc-content">
        <h1 align="center">
          {{ presentItinerary.title }}
        </h1>
        {{ presentItinerary.desc }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  padding: 20px 5vw;
  background: $bg-linear-gradient-color;
  display: flex;
  flex-direction: column;
  align-items: center;

  .itinerary-order {
    display: flex;
    width: 90vw;
    justify-content: space-around;

    .itinerary-order-box {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 120px;
      height: 120px;

      .itinerary-order-icon {
        position: relative;
        z-index: 2;
        width: 100px;
        height: 100px;
        object-fit: cover;
        transition: all .5s;

        &:hover {
          width: 120px;
          height: 120px;
          filter: drop-shadow(0 0 10px $topic-color);
        }
      }

      &::before{
        z-index: 1;
        position: absolute;
        content: '';
        width: 180%;
        height: 10px;
        background-color: $topic-color;
        top: 50%;
        left: -160%;
      }
      &:nth-child(1) {
          &::before {
            width: 0px;
          }
      }
    }
  }

  .itinerary-desc {
    color: $topic-color;
    margin-top: 30px;
    display: flex;
    transition: flex 1s;

    .itinerary-desc-shuffling {
      width: 40vw;
      height: 300px;
    }

    .itinerary-desc-content {
      margin:0  2.5vw;
      width: 45vw;
    }

  }
}
</style>
