<script setup lang="ts">

</script>

<template>
  <div class="about-wrapper">
    <div class="about-introduce">
      <div class="logo-pic">
        汕
      </div>
      <div class="about-content animate__animated animate__fadeInBottomRight">
        <h1>关于我们</h1>
        <div>
          一个待业人员和一个工作人员摸鱼的无聊举动：写个炫酷动画宣传自己城市网站...
        </div>
        <h1>联系我们</h1>
        <div>
          邮箱: hbisedm666@163.com
        </div>
        <h1>开发人员</h1>
        <div class="dev ">
          <el-link class="link" href="https://github.com/hbisedm">
            <img class="border-rd-36 w-16 h-16" src="https://avatars.githubusercontent.com/u/51397088?v=4">
          </el-link>
          <el-link class="link" href="https://github.com/Chen-QXuan">
            <img class="border-rd-36 w-16 h-16" src="https://avatars.githubusercontent.com/u/102030829?v=4">
          </el-link>
        </div>
      </div>
    </div>
    <div class="about-description">
      Copyright © 2022-2023  All rights reserved.
    </div>
  </div>
</template>

<style scoped lang="scss">
.about-wrapper {
  width: 1920px;
  height: 88vh;
  background: $bg-linear-gradient-color;
  color: $topic-color;
  display: flex;
  flex-direction: column;

  .about-introduce {
  display: flex;

    .logo-pic {
      width: 700px;
      height: 800px;
      background: #7f32da;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 450px;
    }

    .about-content {
      padding: 20px;
    }

    .dev {
      display: grid;
      grid-template-columns: repeat(8, 14%);

      .link {
        --el-link-text-color: $topic-color;
        &::after {
          content: none
        }
      }
    }

  }

  .about-description {
    align-self: center;
    display: grid;
    margin: auto;
  }

}
</style>
