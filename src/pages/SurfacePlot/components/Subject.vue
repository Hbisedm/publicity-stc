<script setup  lang="ts">
import { Icon } from '@iconify/vue'
import Accordion from '@/components/Accordion.vue'

const emit = defineEmits(['confirmEnter'])

const enterHome = (): void => {
  emit('confirmEnter')
}
</script>

<template>
  <div class="subject">
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
          <Icon icon="tabler:door-enter" color="white" width="30" height="30" :horizontal-flip="true" />
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
      <Accordion />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.subject {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.item {
  height: 50%;
}

.content-box {

  color: #fff;
  // background-color: pink;
  user-select: none;

}

.title {
  font-size: 180px;
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

  font-size: 90px;
  font-weight: bold;

}

.btn-box {
  /* width: 50%; */
  display: flex;
  align-items: center;
  height: 75px;
  font-size: 28px;
  padding: 0 50px;
  border-radius: 50px 50px;
  background-color: skyblue;
  margin-top: 12px;
  margin-right: 24px;
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
  display: flex;
  align-items: center;
  padding: 0 50px;
  // background-color: skyblue;
}
</style>
