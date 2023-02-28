<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import Title from '@/components/Title.vue'

const title = '传统民居'

const enterDetail = () => {
  console.log('跳转')
}
</script>

<template>
  <div class="box">
    <Title :title="title" />
    <div class="content-box">
      <div class="text-box">
        <div class="introduce">
          <div>望族营建屋庐，必建家庙，尤为壮丽。</div>
          <div>雕梁画栋，池台竹树，必极工巧。</div>
          <div>大宗小宗，竞建祠堂，争夸壮丽，不惜赀费。</div>
        </div>
        <div class="title">
          <div>潮汕厝</div>
          <div class="right-title">
            皇宫起
          </div>
        </div>
        <div class="enter" @click="enterDetail">
          <span class="enter-text">进去看看</span>
          <Icon icon="material-symbols:door-open-outline" color="#f7e8d5" width="38" height="38" />
        </div>
      </div>
      <div class="content-img">
        <img src="/images/mj.jpg" alt="">
        <div class="shade" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box {
  padding: 20px 5vw 80px;
  // background: $bg-linear-gradient-color;
  background-color: #0d3773;

}

.content-box {
  display: flex;
}

.text-box {
  display: flex;
  flex-direction: column;
  width: 50%;
  // background-color: pink;
}

.introduce {
  padding-top: 200px;
  text-align: right;
  // font-size: 30px;
  padding-right: 200px;
  color: #bbb;
  // background-color: skyblue;
}

.title {
  width: 500px;
  display: flex;
  flex-direction: column;
  padding-top: 180px;
  font-weight: bold;
  font-size: 90px;
  color: #f7e8d5;
  // background-color: pink;
  align-self: flex-end;

  mask: radial-gradient(circle at 0% 0%, #000, transparent 40%);
    animation: scale 20s infinite;

}

@keyframes scale {
    0% {
        mask-size: 100% 100%;
    }
    60%,
    100% {
        mask-size: 850% 1000%;
    }
}

.enter {
  display: flex;
  align-self: center;
  font-size: 28px;
  padding: 120px 30px 0 15px;
  color: #f7e8d5;
  cursor: pointer;
  // background-color: yellow;
  border-bottom: 5px solid #fce7cd;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 20px;
}

.enter-text {
  margin-right: 10px;
  padding-bottom: 16px;
}

.right-title {
  align-self: flex-end;

}

.content-img {
  width: 40%;
  position: relative;

  // overflow: hidden;
}

.content-img img {
  width: 100%;
  height: auto;
}

.shade {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 180px;
  height: 650px;
  // background: $bg-linear-gradient-color;
  background-color: #0d3773;

}
</style>
