<script setup lang="ts">
import Title from '@/components/Title.vue'
import { homeFestival } from '@/dictionary'
import { useAnimations } from '@/hooks/useAnimation'

const title = '节庆与活动'

useAnimations([
  {
    $el: '.festival-top',
    options: {
      animated: 'animate__fadeInRight',
      duration: 1,
      reset: false,
    },
  },
  {
    $el: '.festival-bottom',
    options: {
      animated: 'animate__fadeInLeft',
      duration: 1,
      reset: false,
    },
  },
])
</script>

<template>
  <div class="festival-container">
    <Title :title="title" />
    <div class="festival">
      <div class="common-wrapper left-wrapper">
        <img
          :src="homeFestival[0].url[0]" class="festival-img"
        >
        <div class="festival-top festival-content">
          <div class="festival-name">
            {{ homeFestival[0].name }}
          </div>
          <div class=" common-border border-left" />
          <div class="festival-desc">
            <div v-for="(item, index) of homeFestival[0].desc" :key="index">
              {{ item }}
            </div>
            <el-link>
              更多详情
            </el-link>
          </div>
        </div>
      </div>
      <div class="common-wrapper right-wrapper">
        <div class="festival-bottom festival-content">
          <div class="festival-name">
            {{ homeFestival[1].name }}
          </div>
          <div class="common-border border-right" />
          <div class="festival-desc">
            <div v-for="(item, index) of homeFestival[1].desc" :key="index">
              {{ item }}
            </div>
            <el-link>
              更多详情
            </el-link>
          </div>
        </div>
        <img :src="homeFestival[1].url[0]" class="festival-img">
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$font-size: 4vw;
$border-radius: 10px;

$max-z-index: 9;
$medium-z-index: 5;
$min-z-index: 1;

@keyframes imgBounceIn{
    0% {
        transform: scale(1.1);
    }

    50% {
        transform: scale(1.2);
    }
    100% {
        transform: scale(1.1);
    }
}

.festival-container {
  padding: 20px 0;
  background: $bg-linear-gradient-reversal-color;

    .festival {
        padding: 0 5vw;
        display: flex;
        flex-direction: column;

        > div {
            display: flex;
        }

        .common-wrapper {
            position: relative;
            height: 27vw;

            .festival-img {
                border-radius: $border-radius;
                position: relative;
                width: 50%;
                height: calc(0.3*90vw);
                object-fit: cover;
                z-index: $min-z-index;
                transition: z-index .2s;

                &:hover {
                    z-index: $medium-z-index;
                    animation: imgBounceIn 1s ease-in-out;

                }
            }

            .festival-content {
                position: relative;
                box-sizing: border-box;
                width: 50%;

                .festival-name {
                    font-size: $font-size;
                    color: $topic-color;
                    font-weight: 500;
                }

                .common-border {
                    position: relative;
                    z-index: $max-z-index;
                    width: 26vw;
                    height: 4px;
                    background-color: rgba($color: $topic-color, $alpha:.8);
                }
                .festival-desc {
                    color: $topic-color;
                    height: 60%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-around;
                }
            }

        }

        .left-wrapper {
            margin-bottom: 10px;
            .festival-img {
                transform-origin: top left;
                transform: scaleX(1.1) scaleY(1.1);
            }
            .festival-content {
                padding-left: 10vw;

                .border-left {
                    left: -8vw;
                    &::before {
                        position: absolute;
                        content: '⭕️';
                        width: 20px;
                        height: 20px;
                        top: -10px;
                        left: -14px;
                    }
                }
                .festival-desc {
                    text-align: end;
                }
            }
        }
        .right-wrapper {
            .festival-img {
                transform-origin: bottom right;
                transform: scaleX(1.1) scaleY(1.1);
            }
            .festival-content {
                padding-top: 2%;
                padding-right: 10vw;
                text-align: end;
                .border-right {
                    right: -16vw;

                    &::before {
                        position: absolute;
                        content: '⭕️';
                        width: 20px;
                        height: 20px;
                        top: -10px;
                        right: -16px;
                    }

                }
                .festival-desc {
                    text-align: start;
                }
            }
        }
    }
}
</style>
