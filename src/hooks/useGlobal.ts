import { getCurrentInstance } from 'vue'

/**
 * 获取Vue全局挂载的变量
 * 可在main.ts中挂载
 */
export default function useGetGlobalProperties() {
  const { appContext: { app: { config: { globalProperties } } } } = getCurrentInstance()!

  return { ...globalProperties }
}
