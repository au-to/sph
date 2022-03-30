import { defineConfig } from '@vue/cli-service'
export default defineConfig({
  lintOnSave: false,
  transpileDependencies: true,
  // 代理跨域
  devServer: {
    proxy: {
      '/api': {
        target: 'http://39.98.123.211',
      },
    }
  }
})
