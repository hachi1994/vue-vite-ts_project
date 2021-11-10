import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
function _resolve(dir:string):string{
  return path.resolve(__dirname,dir)
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers:[ElementPlusResolver()]
    })
  ],
  resolve: {
    alias:{
      '@':_resolve('src'),
      '@components':_resolve('src/components')
    }
  },
  server: {
    port: 8090,
    proxy: {
      '/api': {
        target: 'http://119.3.103.139:8002/',
        changeOrigin: true
      }
    }
  }
})
