<script setup lang="ts">
import { Icon } from '@iconify/vue'

const emit = defineEmits(['enterHome'])

const enterHome = (): void => {
  emit('enterHome')
}
</script>

<template>
  <div class="box">
    <div class="item content-box">
      <div class="title">
        Swatow
      </div>
      <div class="subhead-box">
        <div class="subhead">
          海滨小城
        </div>
        <div class="btn-box" @click="enterHome">
          <div class="btn-text">
            进入专题
          </div>
          <Icon icon="tabler:door-enter" color="white" width="28" height="28" :horizontal-flip="true" />
        </div>
      </div>
      <div class="introduce">
        <div class="introduce-item">
          经济特区
        </div>
        <div class="introduce-item">
          经济特区
        </div>
        <div class="introduce-item">
          经济特区
        </div>
        <div class="introduce-item">
          经济特区
        </div>
      </div>
    </div>
    <div class="item shuffling-box">
      2
    </div>
  </div>
</template>

<style scoped>
.box {
  width: 100%;
  height: 100vh;
  background: url('../../../public/images/home.png');
  background-size: 100% 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

}

.item {
  height: 50%;
}

.content-box {

  padding-right: 120px;
  color: #fff;
  background-color: pink;
  user-select: none;

}

.title {
  font-size: 150px;
  font-weight: bold;
  padding-top: 50px;
  line-height: 140px;
}

.subhead-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

}

.subhead {
  /* width: 50%; */

  font-size: 75px;
  font-weight: bold;

}

.btn-box {
  /* width: 50%; */
  display: flex;
  align-items: center;
  height: 75px;
  font-size: 24px;
  padding: 0 40px;
  border-radius: 50px 50px;
  background-color: skyblue;
  margin-top: 12px;
  cursor: pointer;

}

.btn-text {
  margin-right: 10px;
}

.introduce {
  display: flex;
  padding-top: 10px;
}

.introduce-item {
  padding-right: 30px;
}

.shuffling-box {
  width: 45%;
  background-color: skyblue;
}
</style>
