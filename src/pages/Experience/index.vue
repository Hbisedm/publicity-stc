<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const dialog = ref<HTMLElement>()!
const mask = ref<HTMLElement>()!

const showMask = ref(false)
// 从这个x 和 y 开始放大
const startX = ref()
const startY = ref()

// 记录当前点击的dom的位置
const recordX = ref()
const recordY = ref()
const recordWidth = ref()
const recordHeight = ref()

function handleHideMask() {
  showMask.value = false
}

function handleActiveShow(e: MouseEvent) {
  const dom = e.target as HTMLElement
  recordWidth.value = `${dom.clientWidth}px`
  recordHeight.value = `${dom.clientWidth}px`
  const { top, left } = dom.getBoundingClientRect()
  recordX.value = `${left}px`
  recordY.value = `${top}px`
  showMask.value = true

  // mask.value!.style.display = 'block'

  startX.value = `${e.pageX}px`
  startY.value = `${e.pageY}px`

  requestAnimationFrame(() => {
    dialog.value!.classList.add('popup')
    dialog.value!.style.width = '1000px'
    dialog.value!.style.height = '400px'
    dialog.value!.style.opacity = '1'
    dialog.value!.style.top = '50%'
    dialog.value!.style.left = '50%'
    dialog.value!.style.transform = 'translate(-50%,-50%)'
  })
}

function handleHide() {
  dialog.value!.style.width = recordWidth.value
  dialog.value!.style.height = recordHeight.value
  // dialog.value!.style.position
  dialog.value!.style.transform = 'translate(0%,0%)'
  dialog.value!.style.top = recordY.value
  dialog.value!.style.left = recordX.value
  dialog.value!.style.opacity = '0'
  handleHideMask()
}
</script>

<template>
  <Teleport v-if="showMask" to="body">
    <div ref="mask" class="mask">
      <Icon icon="bi:arrow-left-square-fill" color="#ccc" width="38" height="38" class="mt-10 ml-10" @click="handleHide" />
    </div>
  </Teleport>
  <div ref="dialog" class="initial">
    <div class="lose">
      ×
    </div>
    <div class="title">
      我是标题
    </div>
    <div class="content">
      我是内容
    </div>
  </div>
  <el-row align="middle" :gutter="10" class="wrapper">
    <el-col :span="10">
      <el-card>
        <img class="h-lg">
      </el-card>
    </el-col>
    <el-col :span="14" @click="handleActiveShow">
      <el-row :gutter="2">
        <el-col :span="6">
          <div class="bg-fuchsia w-50 h-50 border-rd-2" />
        </el-col>
        <el-col :span="6">
          <div class="bg-blue w-50 h-50 border-rd-2" />
        </el-col>
        <el-col :span="6">
          <div class="bg-amber w-50 h-50 border-rd-2" />
        </el-col>
        <el-col :span="6">
          <div class="bg-emerald w-50 h-50 border-rd-2" />
        </el-col>
      </el-row>
      <el-row :gutter="2" class="mt-1">
        <el-col :span="6">
          <div class="bg-lightblue w-50 h-50  border-rd-2" />
        </el-col>
        <el-col :span="6">
          <div class="bg-pink w-50 h-50 border-rd-2" />
        </el-col>
        <el-col :span="6">
          <div class="bg-sky w-50 h-50 border-rd-2" />
        </el-col>
        <el-col :span="6">
          <div class="bg-teal w-50 h-50 border-rd-2" />
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<style scoped lang="scss">
.wrapper {
  height: $content-height;
}

.initial{
    width: 0;
    height: 0;
    z-index: 999;
    position: absolute;
    opacity: 0;
    top: v-bind(startY);
    left: v-bind(startX);
}
.popup .lose{
    position: absolute;
    right: 10px;
    top: 0px;
}

.popup{
    background: #fff;
    border-radius: 7px;
    box-shadow: 1px 0px 10px #999;
    position: fixed;
    padding: 10px;
    padding-top: 15px;
    transition: top 1s, left 1s, all 1s;
    transform: translate(-50%,-50%);
}
.mask {
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  position: fixed;
  top: 0;
  // display: none;
    z-index: 888;
}
</style>
