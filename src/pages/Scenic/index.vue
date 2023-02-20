<script setup lang="ts">
import { rotographData } from '@/dictionary'
import DisplayRotograh from '@/components/DisplayRotograph.vue'

const descNames = rotographData.map(item => item.name)
</script>

<template>
  <div class="container">
    <div class="introduce">
      <h1 class="introduce-title">
        著名景点
      </h1>
      <ul class="introduce-desc">
        <li v-for="(item, index) of descNames" :key="index">
          {{ item }}
        </li>
      </ul>
      <el-button color="#e94225">
        热门景点
      </el-button>
    </div>
    <div class="details">
      <DisplayRotograh :data="rotographData" />
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
