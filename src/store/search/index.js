import {reqGetsearchInfo} from '@/api'
const state = {
    searchList: {},
};
const actions = {
    // 获取search模块数据
    async getSearchList(commit,params={}) {
        let result = await reqGetsearchInfo(params);
        if(result.code == 200) {
            commit('GETSEARCHLIST',result.data)
        }
    }
};
const mutations = {
    GETSEARCHLIST(state,searchList) {
        state.searchList = searchList;
    }
};
const getters = {
    // 计算属性
    goodList(state) {
        return state.searchList.goodsList || [];
    },
    trademarkList(state) {
        return state.searchList.trademarkList||[];
    },
    attrsList(state) {
        return state.searchList.attrsList||[];
    }
};
export default {
    state,
    actions,
    mutations,
    getters,
}