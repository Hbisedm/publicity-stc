<script setup>
import Title from '@/components/Title.vue'

const title = '传统民居'
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
      </div>
      <div class="content-img">
        <img src="../../../../public//images/mj.jpg" alt="">
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
  color: #fff;
  // background-color: pink;
  align-self: flex-end;

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
