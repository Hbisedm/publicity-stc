import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import Unocss from 'unocss/vite'
import { presetAttributify, presetIcons, presetUno } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      presets: [presetUno(), presetAttributify(), presetIcons()],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
