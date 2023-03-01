<script setup lang="ts">
import { onMounted, ref } from 'vue'
import mobile from 'is-mobile'
import Tab from '@/components/Tab.vue'
import Footer from '@/components/Footer.vue'
import SurfacePlot from '@/pages/SurfacePlot/index.vue'

const confirmEnter = ref<boolean>(false)
const isHiddenPage = ref<boolean>(false)

const dialogVisible = ref(false)

onMounted(() => {
  dialogVisible.value = mobile()
})

const isEnter = (): void => {
  confirmEnter.value = true
  window.name = 'isRefresh'
}

if (window.name === 'isRefresh')
  isHiddenPage.value = true
</script>

<template>
  <div class="flex flex-col min-h-screen overflow-x-hidden full" :class="{ recover: confirmEnter, homePage: isHiddenPage }">
    <div>
      <Tab />
      <router-view />
      <Footer />
    </div>
    <el-dialog v-model="dialogVisible" title="Tips" width="80%" draggable>
      <span>很抱歉,暂时为适配移动端,请在电脑端打开此网页体验更加!</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false">确定</el-button>
        </span>
      </template>
    </el-dialog>
    <div class="surface-box" :class="{ isRemoveShade: confirmEnter, hiddenPage: isHiddenPage }">
      <div :class="{ animation: confirmEnter }">
        <SurfacePlot :handle-enter-home="isEnter" />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 初始状态 */
.full {
  height: 100vh;
  overflow: hidden;
}

.hiddenPage {
  display: none;
}

.homePage {
  height: auto;
  overflow-y: auto;
}
.recover {
  animation: recover-scroll 10s linear 2s 1 normal running forwards
}

@keyframes recover-scroll {
  100% {
    height: auto;
    overflow-y: auto;
  }
}

.surface-box {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;

}

/* 降低层级以恢复首页轮播图按键功能 */
.isRemoveShade {
  animation: removeShade 10s linear 0s 1 normal running forwards
}
@keyframes removeShade {
  100% {
    z-index: -1;
  }
}

/* 转场动画 */
.animation {
  animation-name: scale;
  animation-duration: 10s;
  animation-timeline: box-move;
  animation: scale 10s linear 0s 1 normal running forwards
}
@keyframes scale {
  0% {
    transform: scale(1);

  }

  40% {
    transform: scale(8);
    opacity: .4;

  }

  /* 70% {
    transform: scale(20);
    opacity: .4;

  } */

  100% {
    transform: scale(60);
    opacity: 0;
    animation: ''

  }
}
</style>
