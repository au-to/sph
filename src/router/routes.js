import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'

export default [{
    path: '/home',
    component: Home,
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
    path: '',
    redirect: '/home'
}]