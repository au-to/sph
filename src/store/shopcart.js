const state = {
    cartList: []
};
const actions = {
    // 获取购物车列表数据
    async getCartList({commit}) {
        let result = await reqCartList();
        if(result.code==200) {
            commit('GETCARTLIST',result.data);
        }
    }
};
const mutations = {
    GETCARTLIST(state,cartList) {
        state.cartList = cartList;
    }
};
const getters = {
    cartList(state) {
        return state.cartList = cartList[0]||{}
    },
    
};

export default{
state,
actions,
mutations,
getters
}