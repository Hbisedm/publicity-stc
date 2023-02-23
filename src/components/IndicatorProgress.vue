<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
const props = withDefaults(defineProps<{
  show?: boolean
  countIndex: number
}>(), {
  show: true,
})

const presentIndex = ref(0)

defineExpose({
  presentIndex,
})

const active = ref<HTMLElement | null>(null)!
const indicator = ref<HTMLElement | null>(null)!
let indicatorClientWidth = 0

onMounted(() => {
  indicatorClientWidth = indicator.value!.clientWidth! // 总宽度
  active.value!.style.width = `${100 / props.countIndex}%` // 每一块的宽度
})

watch(presentIndex, (newVal) => {
  const calcCorrectWidth = indicatorClientWidth / props.countIndex * (newVal)
  active.value!.style.transform = `translateX(${calcCorrectWidth}px)`
})

function handleRightClick() {
  if (presentIndex.value + 1 < props.countIndex)
    presentIndex.value++
  else
    presentIndex.value = 0
}

function handleLeftClick() {
  if (presentIndex.value - 1 >= 0)
    presentIndex.value--
  else
    presentIndex.value = props.countIndex - 1
}
</script>

<template>
  <div class="indicator-wrapper">
    <div class="direction">
      <button text-white text-3xl text-black class="i-carbon-chevron-left" @click="handleLeftClick" />
      <button text-white text-3xl text-black class="i-carbon-chevron-right" @click="handleRightClick" />
    </div>
    <div class="show">
      <span class="present">{{ presentIndex + 1 }}</span> / <span class="count">{{ countIndex }}</span>
    </div>
    <div ref="indicator" class="indicator">
      <div ref="active" class="active" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.indicator-wrapper {
  display: flex;
  flex-direction: column;

  .show {
    color: #000;
    font-size: 30px;
    .present {
      color: #001;
    }
    .count {
      color: #000;

    }
  }
  .indicator {
    display: flex;
    width: 100%;
    height: 20px;
    border-radius: $border-radius;
    background-color: #000;

    .active {
      border-radius: $border-radius;
      height: 20px;
      background: $bg-linear-gradient-color;
      transition: transform 1s;
    }
  }

}
</style>
