import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'
import '@/mock/mockServe'
// 全局注册三级联动组件
import TapNav from '@/components/TapNav'
//全局注册轮播图组件
import Carousel from '@/components/Carousel'
// 引入轮播图样式
import '../node_modules/swiper/css/swiper.min.css'
Vue.config.productionTip = false
Vue.component(TapNav.name,TapNav)
Vue.component(Carousel.name,Carousel)
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')