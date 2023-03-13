import * as path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { YN_LIBS } from '@yank-note/runtime-api'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
    __EXTENSION_VERSION__: JSON.stringify(process.env.npm_package_version),
    __EXTENSION_ID__: JSON.stringify(process.env.npm_package_name),
  },
  server: {
    port:5555,
    proxy: {
      //代理所有 /api 的请求
      "/api": {
        // 代理请求之后的请求地址
        target: "http://localhost:3044",
        // 跨域配置
      }
    }
  },
  resolve: {
    alias: [
      { find: /^@\//, replacement: path.resolve(__dirname, 'src') + '/' },
    ],
  },
  build: {
    minify: true,
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      formats: ['iife'],
      name: process.env.npm_package_name.replace(/[^a-zA-Z0-9_]/g, '_'),
      fileName: () => 'index.js',
    },
    rollupOptions: {
      external: Object.keys(YN_LIBS),
      output: {
        globals: {
          window: 'window',
          ...YN_LIBS,
        }
      }
    }
  },
})
