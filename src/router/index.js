import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)

import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
// 重写原型上的replace和push方法
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
// 重写push方法
VueRouter.prototype.push = function(location,resolve,reject) {
    if(resolve && reject) {
        originPush.call(this,location,resolve,reject);
    } else {
        originPush.call(this,location,()=>{},()=>{})
    }
}
// 重写replace方法
VueRouter.prototype.replace = function(location,resolve,reject) {
    if(resolve && reject) {
        originReplace.call(this,location,resolve,reject);
    } else {
        originReplace.call(this,location,()=>{},()=>{})
    }
}
export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home,
            meta: {show: true}
        },
        {
            path: '/login',
            component: Login,
            meta: {show: false}
        },
        {
            path: '/register',
            component: Register,
            meta: {show: false}
        },
        {
            name: 'Search',
            path: '/search/:keyword?',
            component: Search,
            meta: {show: true},
            // 将params参数和query参数映射成属性传入路由组件
            props: route => ({keyword3: route.params.keyword,keyword4: route.query.keyword2})
        },
        {
            path: '',
            redirect: '/home'
        }
    ]
})
