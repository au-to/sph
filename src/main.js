import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'
import '@/mock/mockServe'
// 全局注册三级联动组件
import typeNav from "@/components/TypeNav";
//全局注册轮播图组件
import Carousel from '@/components/Carousel'
// 引入轮播图样式
import '../node_modules/swiper/css/swiper.min.css'
// 分页器组件
import Pagination from '@/components/Pagination'
// 统一引入接口
import * as API from '@/api'
// 按需引入element-ui
import{MessageBox} from 'element-ui'
// 表单验证
import '@/plugins/validate'

Vue.config.productionTip = false
Vue.component(typeNav.name, typeNav);
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name, Pagination)
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
new Vue({
  render: h => h(App),
  // 配置全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  router,
  store,
}).$mount('#app')