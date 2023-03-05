<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useWindowSize } from '@vueuse/core'
import { computed, ref, watch } from 'vue'
import { rotographData } from '@/dictionary'
import IndicatorProgress from '@/components/IndicatorProgress.vue'

const route = useRoute()
const { id } = route.params

const activeScenicIndex = ref(0)

const presentScenicData = rotographData.find(item => item.id === parseInt(id as string))!
const { height } = useWindowSize()
const computedHeight = computed(() => {
  return height.value * 0.7
})

const computedScenic = computed(() => {
  return presentScenicData.scenic[activeScenicIndex.value]
})

const indicatorProgress = ref< typeof IndicatorProgress | null>(null)

const computedIndex = computed(() => indicatorProgress?.value?.presentIndex) // 硬写defineExpose,正常写个emit就可以了

watch(computedIndex, (nVal) => {
  activeScenicIndex.value = nVal
})
</script>

<template>
  <div class="details-wrapper">
    <Shuffling :imgs="presentScenicData?.shufflingImg" interval="0" :height="`${computedHeight}px`" />
    <div class="introduce-wrapper">
      <div class="introduce-wrapper-name">
        {{ presentScenicData.name }}
      </div>
      <div class="introduce-wrapper-desc">
        {{ presentScenicData.detailDesc }}
      </div>
    </div>
    <div class="introduce-desc">
      <div class="introduce-desc-name">
        {{ presentScenicData.name }}
      </div>
      <div class="introduce-desc-wrapper">
        <div class="introduce-desc-wrapper__left">
          <div class="introduce-desc-wrapper__left-desc">
            {{ computedScenic.desc }}
          </div>
          <IndicatorProgress ref="indicatorProgress" class="m-t-a" :count-index="presentScenicData.scenic.length" />
        </div>
        <div class="introduce-desc-wrapper__right">
          <img :src="computedScenic.imgs[0]" class="introduce-desc-wrapper__right-img">
          <div class="introduce-desc-wrapper__right-title">
            {{ computedScenic.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$distance: 100px;

.details-wrapper {
  display: flex;
  flex-direction: column;
  background: $bg-linear-gradient-color;
  color: $topic-color;
  padding: 20px 0;

  .introduce-wrapper {
    display: flex;
    flex-direction: column;
    padding: 0 200px;

    &-name {
      padding: 20px;
      font-size: 60px;
      width: 400px;
      font-weight: 700;
      background-color: rgba($color: $topic-color, $alpha: .3);
      text-align: center;
      position: relative;
      top: -$distance;
      border-radius: $border-radius;

      &::after {
        position: absolute;
        content: '';
        width: 10px;
        height: $distance;
        top: 100%;
        left: 20px;
        background: rgba($color: $topic-color, $alpha: .3);

      }
    }

    &-desc {
      text-indent: 2em;
      border-radius: $border-radius;
      background: rgba($color: $topic-color, $alpha: .3);
      width: 98%;
      padding: 20px;
      font-size: $desc-font-size;
    }
  }

  .introduce-desc {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 200px;

    &-name {
      padding: 10px;
      font-size: $topic-title-size;
      text-align: center;
      width: 300px;
      position: relative;

      &::after {
        position: absolute;
        content: '';
        width: 100px;
        height: 4px;
        background:  $topic-color;
        left: 50%;
        border-radius: $border-radius;
        transform: translateX(-50%);
        bottom: 0;

      }
    }

    &-wrapper {
      display: flex;
      position: relative;
      height: 800px;

      $offset: 50px;

      &__left {
        position: relative;
        box-sizing: border-box;
        border-radius: $border-radius;
        z-index: 1;
        width: 500px;
        height: 800px;
        background-color: $topic-color;
        flex-shrink: 0;
        padding: 40px $offset 40px;
        display: flex;
        flex-direction: column;

        &-desc {
          color: black;
        }
      }

      &__right {
        position: relative;
        left: -$offset;
        z-index: 2;
        width: 1020px;
        height: 500px;
        top: 50%;
        transform: translateY(-50%);

        &-img {
          width: 100%;
          aspect-ratio: 16/9;
          object-fit: cover;
          object-position: center;
          border-radius: $border-radius;
        }

        &-title {
          position: absolute;
          left: $offset * 2;
          bottom: $offset;
          padding: 20px;
          background: rgba($color: $topic-color, $alpha: .8);
          color: black;
          border-radius: $border-radius;
        }
      }

    }

  }
}
</style>
