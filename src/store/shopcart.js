import { reqCartList, reqDeleteCartById, reqUpdateCheckedByid } from '@/api'
const state = {
    cartList: []
};
const actions = {
    // 获取购物车列表数据
    async getCartList({ commit }) {
        let result = await reqCartList();
        if (result.code == 200) {
            commit('GETCARTLIST', result.data);
        }
    },
    // 删除购物车产品
    async deleteCartById({ commit }, skuId) {
        let result = await reqDeleteCartById(skuId);
        if (result.code == 200) {
            return 'ok';
        } else {
            Promise.reject(new Error('faile'));
        }
    },
    // 修改购物车产品选中状态
    async updateCheckedByid({commit},{skuId,isChecked}) {
       let result = await reqUpdateCheckedByid(skuId,isChecked);
       if(result.code==200) {
           return 'ok';
       }else{
           Promise.reject(new Error('faile'));
       }
    },
    // 删除全部选中的产品
    deleteAllCheckedCart({dispatch,getters}) {
        // 获取购物车的全部产品
        let promiseAll = [];
        getters.cartList.cartInfoList.forEach(iterm => {
            let promise = iterm.isChecked==1?dispatch('deleteCartById',iterm.skuId):'';
            promiseAll.push(promise);
            return promise.all(promiseAll);
        });
    },
    // 修改全部产品的状态
    updateAllCartIsChecked({dispatch,state},isChecked) {
        state.cartList[0].cartInfoList.forEach(iterm => {
            let promiseAll = [];
            let promise = dispatch('updateCheckedByid',{skuId:skuId,isChecked});
            promiseAll.push(promise);
        });
        return promise.all(promiseAll);
    }
};
const mutations = {
    GETCARTLIST(state, cartList) {
        state.cartList = cartList;
    }
};
const getters = {
    cartList(state) {
        return state.cartList = cartList[0] || {}
    },

};

export default {
    state,
    actions,
    mutations,
    getters
}