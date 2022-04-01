// api接口统一管理
import requests from "./ajax";
import mockRequests from "./mockAjax";

// 三级联动接口
export const reqgetCategoryList = () => requests.get(`/product/getBaseCategoryList`);

// 获取banner轮播图接口
export const reqGetBannerList = () => mockRequests.get("/banner");

// floor数据
export const reqFloorList = () => mockRequests.get("/floor");

// 获取搜索模块数据
export const reqGetSearchInfo = (params) => requests({ url: "/list", method: "post", data: params });

// 获取产品信息接口
export const reqGoodsInfo = (skuId) => requests({ url: `/iterm/${skuId}`, method: 'get' })

//将产品添加到购物车中（获取更新某一个产品的个数）
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({ url: `/cart/cartList/${skuId}/${skuNum}`, method: 'post' })

// 获取购物车列表数据接口
export const reqCartList = () => requests({url:'/cart/cartList',method:'get'})