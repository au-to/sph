// import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
import Pay from '@/pages/Pay'
// 引入二级路由组件
import myOrder from '@/pages/Center/myOrder'
import groupOrder from '@/pages/Center/groupOrder'

export default [{
    path: '/home',
    // 路由懒加载
    component: ()=>import('@/pages/Home'),
    meta: { show: true }
},
{
    path: '/login',
    component: Login,
    meta: { show: false }
},
{
    path: '/register',
    component: Register,
    meta: { show: false }
},
{
    name: 'Search',
    path: '/search/:keyword?',
    component: Search,
    meta: { show: true },
    // 将params参数和query参数映射成属性传入路由组件
    props: route => ({ keyword3: route.params.keyword, keyword4: route.query.keyword2 })
},
{
    name: 'detail',
    path: '/detail/:skuId',
    component: Detail
},
{
    path: '/addcartsuccess',
    name: 'addcartsuccess',
    component: AddCartSuccess,
    meta: { show: true }
},
{
    component: ShopCart,
    name: 'shopcart',
    path: '/shopcart',
    meta: { show: true }
},
{
    component: Trade,
    path: '/trade',
    meta: { show: true },
    // 路由独享守卫
    beforeEnter: (to, from, next) => {
        if(from.path=='/shopcart') {
            next()
        }else{
            next(false);
        }
    }
},
{
    component: Pay,
    path: '/pay',
    meta: { show: true },
    beforeEnter: (to,from,next)=>{
        if(from.path=='/trade') {
            next()
        }else{
            next(false);
        }
    }
},
{
    component: PaySuccess,
    path: '/paysuccess',
    meta: { show: true }
},
{
    component: Center,
    path: '/center',
    meta: { show: true },
    children:[
        {
            path: 'myorder',
            component: myOrder
        },
        {
            path: 'groupoder',
            component: groupOrder
        },
        {
            path: '/center',
            redirect: '/center/myorder'
        }
    ]
},
{
    path: '',
    redirect: '/home'
}]