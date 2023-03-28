<script setup lang="ts">
// import Shuffling from '@/components/Shuffling.vue'
import ImageText from '@/components/ImageText.vue'
import { houseGenre } from '@/dictionary'
import PageFoot from '@/components/PageFoot.vue'
</script>

<template>
  <div class="box">
    <div class="shuffling-box">
      <!-- <Shuffling /> -->
    </div>
    <div class="bottom-box">
      <div class="bottom-content">
        <ImageText v-for="(ele, index) in houseGenre" :key="index" :item="[ele, index]" />
      </div>
    </div>
    <PageFoot>
      <div class="foot-title-box flex">
        <div class="title-icon-box">
          <img class="title-icon" src="images/genreIcon.png" alt="">
        </div>
        <div class="foot-title">
          走进故居，想个标题
        </div>
      </div>
      <div class="residence-box">
        <div class="residence-item" v-for="item in 10" :key="item">陈慈簧故居</div>
      </div>
    </PageFoot>
  </div>
</template>

<style scoped lang="scss">
.box {
  background-color: pink;
}

.shuffling-box {
  height: 600px;
  background-color: skyblue;
}

.bottom-box {
  display: flex;
  justify-content: center;
  background-color: orangered;

  .bottom-content {
    width: 75%;
    margin-top: -180px;
    padding: 140px 40px 0;
    background-color: pink;
  }
}

.foot-title-box {
  justify-content: center;
  align-items: center;
  margin: 80px 0 40px;

  .title-icon-box {
    width: 74px;
    height: 74px;
    margin-right: 20px;

    .title-icon {
      width: 100%;
      height: auto;
    }
  }

  .foot-title {
    font-size: 26px;
    color: #fff;
    border-bottom: 3px solid #fff;
    padding: 0 16px;
    line-height: 60px;
  }
}

.residence-box {
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;

  .residence-item {
    width: 25%;
    text-align: center;
    line-height: 60px;
    color: #fff;

  }
}
</style>
