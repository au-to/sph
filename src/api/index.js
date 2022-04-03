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
export const reqCartList = () => requests({ url: '/cart/cartList', method: 'get' })

// 删除购物车产品的接口
export const reqDeleteCartById = () => requests({ url: `/cart/deleteCart/${skuId}`, method: 'delete' })

// 修改商品的选中状态接口
export const reqUpdateCheckedByid = (skuId, isChecked) => requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: 'get' })

// 获取验证码
export const reqGetcode = (phone) => requests({ url: `/user/passport/sendCode/${phone}`, method: 'get' })

// 注册的接口
export const reqUserRegister = (data) => requests({ url: '/user/passport/register', data, method: 'post' });

// 登录接口
export const reqUserLogin = (data) => requests({ url: '/user/passport/login', data, method: 'post' });

// 获取用户信息
export const reqUserInfo = () => requests({ url: '/user/passport/auth/getUserInfo', method: 'get' });

// 退出登录
export const reqLogout = ()=>requests({url: '/user/passport/logout',method: 'get'});
