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
const getters = {};
export default {
    state,
    actions,
    mutations,
    getters,
}