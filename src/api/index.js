// api接口统一管理
import requests from "./ajax";
import mockRequests from "./mockAjax";

// 三级联动接口
export const reqgetCategoryList = () =>requests.get(`/product/getBaseCategoryList`);

// 获取banner轮播图接口
export const reqGetBannerList = () => mockRequests.get("/banner");

// floor数据
export const reqFloorList = () => mockRequests.get("/floor");

// 获取搜索模块数据
export const reqGetSearchInfo = (params)=>requests({url:"/list",method:"post",data:params});

// 获取产品信息接口
export const reqGoodsInfo = (skuId) => requests({url:`/iterm/${skuId}`,method:'get'})