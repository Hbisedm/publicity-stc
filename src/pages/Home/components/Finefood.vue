<script setup lang="ts">
import Title from '@/components/Title.vue'

const title = '美食'
</script>

<template>
  <div class="box">
    <Title :title="title" />
    <div class="container">
      <div v-for="item in 10" :key="item" class="show-food">
        <img src="../../../../public/images/hl.png" alt="">
        <div class="layer">
          <div class="caption">
            这是标题
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.box {
  padding: 20px 5vw 80px;
  background: $bg-linear-gradient-color;
}

.container {
  display: flex;
  flex-wrap: wrap;
}

.show-food {
  width: calc(20% - 3px);
  height: 17vw;
  cursor: pointer;
  position: relative;
  margin-right: 3px;
  margin-bottom: 3px;
  background-color: skyblue;
  text-align: center;
  overflow: hidden;
  transition: all .35s;

  img {
    width: 100%;
    height: auto;
  }
}

.show-food:hover {
  cursor: pointer;
  /*放大倍数*/
  transform: scale(1.1);
  z-index: 999;
  filter: drop-shadow(0 0 10px #faf1e6);
}

// 标题动画 begin
.layer {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  transition: all 1s;
}
.caption {
  width: 120px;
  color: #e19433;
  background: #faf1e6;
  position: absolute;
  right: -130px;
  top: 240px;
  text-align: center;
  padding: 2px 5px;
  transition: all 1s;
}

.layer:hover .caption {
  right: 0px;
}
// 标题动画 end

// 边框动画 begin
.show-food::before,
.show-food::after {
  content: "";
  height: 30px;
  width: 30px;
  position: absolute;
  opacity: 0;
  transition: all 0.35s ease;
}

.show-food::before {
  content: "";
  right: 0;
  top: 0;
  border-top: 3px solid rgb(70, 69, 69);
  border-right: 3px solid black;
  transform: translate(-100%, 50%);
}

.show-food:after {
  content: "";
  left: 0;
  bottom: 0;
  border-bottom: 3px solid rgb(70, 69, 69);
  border-left: 3px solid black;
  transform: translate(100%, -50%);
}

.show-food:hover:before,
.show-food:hover:after {
  transform: translate(0, 0);
  opacity: 1;
}
// 边框动画 end
</style>
