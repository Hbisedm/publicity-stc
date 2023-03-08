<script setup lang="ts">

</script>

<template>
  <div class="box">
    <div class="genre-box" />
    <div class="content">
      <div class="content-item content-left">
        <div class="icon-box">
          <img class="icon" src="../../../public/images/house_genre_icon.png" alt="">
        </div>
        <div class="title">
          屋型
        </div>
        <div class="tag">
          <div class="tag-item">
            竹竿厝
          </div>
          <div class="tag-item">
            四点金
          </div>
          <div class="tag-item">
            下山虎
          </div>
          <div class="tag-item">
            驷马拖车
          </div>
          <div class="tag-item">
            百鸟朝凰
          </div>
          <div class="tag-item bold">
            . . .
          </div>
        </div>
        <div class="enter">
          进去逛逛
        </div>
      </div>
      <div class="content-right" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.box {
  height: $content-height;
  position: relative;
  overflow: hidden;
  background-color: orangered;
}

.genre-box {
  width: 100%;
  height: 170%;
  position: absolute;
  top: -35%;
  left: -47%;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  background-color: pink;
}

.content {
  width: 60%;
  height: 70%;
  position: absolute;
  top: 15%;
  left: 20%;
  display: flex;
  border: 5px solid;
  border-radius: 15px;
  overflow: hidden;

  .content-item {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;

    .icon-box {
      // background-color: skyblue;
      width: 100px;
      height: 100px;

      .icon {
        width: 100%;
        height: auto;
      }
    }

    .title {
      font-size: 40px;
      font-weight: bold;
    }

    .tag {
      display: flex;
      flex-wrap: wrap;
      width: 70%;
      // background-color: skyblue;
      text-align: center;
      padding: 20px 0;

      .tag-item {
        font-size: 20px;
        width: calc(100% / 3);
      }
      .bold {
        font-weight: bold;
      }
    }

    .enter {
      background-color: skyblue;
      width: 160px;
      margin-top: 20px;
      line-height: 50px;
      text-align: right;
      padding-right: 40px;
    }
  }
}

.content-left {
  // background-color: yellow;
}

.content-right {
  // background-color: greenyellow;
}
</style>
