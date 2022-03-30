import { reqCategoryList, reqGetbannerList, reqGetfloorList } from "@/api";
const state = {
    categoryList: [],
    bannerList: [],
    floorList: [],
};
const actions = {
    // 获取三级联动数据
    async categoryList(commit) {
        let result = await reqCategoryList();
        if (result.code == 200) {
            commit('CATEGORYLIST', result.data)
        }
    },
    // 获取轮播图数据
    async getBannerList(commit) {
        let result = await reqGetbannerList();
        if (result.code == 200) {
            commit('GETBANNERLIST', result.data)
        }
    },
    // 获取floor数据
    async getfloorList(commit) {
        let result = await reqGetfloorList()
        if (result.code == 200) {
            commit('GETFLOORLIST', result.data)
        }
    }
};
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    },
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList;
    },
    GETFLOORLIST(state, floorList) {
        state.floorList = floorList;
    }
};
const getters = {};
export default {
    state,
    actions,
    mutations,
    getters,
}