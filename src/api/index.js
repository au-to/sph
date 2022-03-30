// api接口统一管理
import requests from "./ajax";
import mockRequests from './mockAjax';

// 三级联动接口
export const reqCategoryList = () => {
    return requests.get('/product/getBaseCategoryList')
}
// 获取banner轮播图接口
export const reqGetbannerList = () => {
    return mockRequests.get('/banner')
}
// floor数据
export const reqGetfloorList = () => {
    return mockRequests.get('/floor')
}
// 获取搜索模块数据
export const reqGetsearchInfo = (params) => {
    requests({
        url: '/list',
        method: 'post',
        data: 'params'
    })
}