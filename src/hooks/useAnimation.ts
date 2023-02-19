import { onMounted } from 'vue'
import useGetGlobalProperties from '@/hooks/useGlobal'
interface IOption {
  /**
   * 过渡时间 (单位秒)
   */
  duration: number
  /**
     * 参考animation.css
     * https://animate.style/
     */
  animated: string
  /**
     * 是否每次进入都过渡
     */
  reset: boolean
}

interface IAnimationItem {
  $el: string
  options: IOption
}
/**
 * 创建 ScrollReveal options配置对象
 */
function createScrollRevealObjectOptions(options: ScrollRevealObjectOptions) {
  return {
    reset: options.reset,
    mobile: true,
    delay: 500,
    afterReset(el) { // 离开视图时重置，移除动画类名
      el.classList.remove('animate__animated')
      el.classList.remove(options.animated)
    },
    beforeReveal(el) { // 到达视图时触发，增加动画类名，添加执行动画时常
      el.classList.add('animated__animated')
      el.classList.add(options.animated)
      if (options.duration) {
        el.style['animation-duration'] = `${options.duration}s`
        el.style['-webkit-animation-duration'] = `${options.duration}s`
      }
    },
  }
}

/**
 * 挂载单个元素
 */
export function useAnimation(animation: IAnimationItem) {
  const { $scrollReveal } = useGetGlobalProperties()
  onMounted(() => {
    const { $el, options } = animation
    $scrollReveal.reveal($el, createScrollRevealObjectOptions(options))
  })
}

export function useAnimations(list: IAnimationItem[]) {
  const { $scrollReveal } = useGetGlobalProperties()
  onMounted(() => {
    list.forEach((item) => {
      const { $el, options } = item
      $scrollReveal.reveal($el, createScrollRevealObjectOptions(options))
    })
  })
}
