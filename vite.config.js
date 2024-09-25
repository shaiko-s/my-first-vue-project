import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// import ReactivityTransform from '@vue-macros/reactivity-transform/vite'

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [vue(), vueDevTools(), ReactivityTransform()],
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
