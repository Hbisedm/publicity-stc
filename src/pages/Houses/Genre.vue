<script setup lang="ts">
// import Shuffling from '@/components/Shuffling.vue'
</script>

<template>
  <div class="box">
    <div class="shuffling-box">
      <!-- <Shuffling /> -->
    </div>
    <div class="bottom-box">
      <div class="bottom-content">
        <!-- 介绍与小图 -->
        <div class="content-introduce flex">
          <div class="introduce-text flex">
            <div class="introduce-title">竹竿厝</div>
            <div class="text">2312323111111111333333333331</div>
          </div>
          <div class="introduce-img" />
        </div>
        <!-- 大图 -->
        <div class="content-shuffling" />
      </div>
    </div>
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
  height: 2000px;
}

.bottom-content {
  width: 75%;
  height: 1000px;
  margin-top: -180px;
  padding: 140px 40px 0;
  background-color: pink;

  .introduce-text {
    width: 50%;
    height: 300px;
    flex-direction: column;
    justify-content: center;
    padding-left: 20px;
    padding-right: 60px;
    background-color: green;

    div {
      background: pink;
    }
    .introduce-title {
      font-size: 32px;
      font-weight: bold;
      line-height: 80px;
    }
  }

  .introduce-img {
    width: 50%;
    height: 300px;
    background-color: yellow;
  }
}
</style>
