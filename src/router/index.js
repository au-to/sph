import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes'
import store from '@/store'
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
let router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        return { top: 0 }
    }
})

// 全局前置守卫
router.beforeEach(async(to, from, next) => {
    // 若用户已经登录，不能去login
    let token = store.state.user.token;
    let name = store.state.user.userInfo.name;
    if (token) {
        if (to.path == '/login') {
            next('/home');
        } else {
            if(name) {
                next();
            }else{
              try {
                await store.dispatch('getUserInfo');
                next();
              } catch (error) {
                // 清除token
                await store.dispatch('userLogout');
                next('/login')
              }
            }
        }
    }else{
        next();
    }
})
export default router;