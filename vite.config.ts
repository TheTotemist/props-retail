import { fileURLToPath, URL } from 'node:url'

import VueRouter from 'unplugin-vue-router/vite'
import Vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import svgLoader from 'vite-svg-loader'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      // Routing options 
    }),
    Vue(), 
    svgLoader()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
