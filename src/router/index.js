import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes'
Vue.use(VueRouter)

// 重写原型上的replace和push方法
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
// 重写push方法
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, () => { }, () => { })
    }
}
// 重写replace方法
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject);
    } else {
        originReplace.call(this, location, () => { }, () => { })
    }
}
export default new VueRouter({
    routes,
    scrollBehavior (to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        return {top: 0}
      }
})