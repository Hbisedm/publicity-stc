<script setup lang="ts">
import { ref } from 'vue'
import { rotographData } from '@/dictionary'
import DisplayRotograh from '@/components/DisplayRotograph.vue'

const activeData = ref(rotographData[0])

const descNames = rotographData.map((item) => {
  return {
    name: item.name,
    id: item.id,
  }
})

// 利用事件委托
function handleActive(e: Event) {
  const dom = e.target as HTMLElement
  const findRes = rotographData.find(i => i.id === parseInt(dom.dataset.id!))
  if (findRes)
    activeData.value = findRes
}
</script>

<template>
  <div class="container">
    <div class="introduce">
      <h1 class="introduce-title">
        著名景点
      </h1>
      <ul class="introduce-desc" @click="handleActive($event)">
        <li v-for="(item, index) of descNames" :key="index" :data-id="item.id" class="cursor-pointer " :class="{ 'text-rose': activeData.id === item.id }">
          {{ item.name }}
        </li>
      </ul>
      <el-button color="#e94225">
        热门景点
      </el-button>
    </div>
    <div class="details">
      <DisplayRotograh v-model:activeData="activeData" :rotograph-data="rotographData" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.container{
  display: grid;
  grid-template-columns: 28vw 72vw;
  box-sizing: border-box;
  height: $content-height;

  .introduce {
    background: #181c31;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    color: $topic-color;
    padding-left: 25%;

    .introduce-title {
      font-size: $topic-title-size;
      position: relative;
      margin: 0;

      &::before {
        position: absolute;
        content: '';
        top: -0.3em;
        left: 0;
        width: 2.6em;
        height: 4px;
        background: #e94225;

      }
    }

    .introduce-desc {
      align-items: flex-start;
      padding: 0;
      >li {
        list-style: none;
        line-height: 2* $desc-font-size;
        font-size: $desc-font-size;
      }

    }
  }

  .details {
    background: $bg-linear-gradient-color;
  }
}
</style>
