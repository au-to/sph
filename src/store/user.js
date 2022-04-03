import { reqGetcode, reqUserRegister, reqUserLogin, reqUserInfo } from '@/api'
import { setToken, getToken, reqLogout ,removeToken} from '@/utils/token'

const state = {
    code: '',
    token: getToken(),
    userInfo: {}
};
const actions = {
    // 获取验证码
    async getCode({ commit }, phone) {
        let result = await reqGetcode(phone);
        if (result.code == 200) {
            commit('GETCODE', result.data);
            return 'ok';
        } else {
            Promise.reject(new Error('faile'));
        }
    },
    // 用户注册
    async userRegister({ commit }, user) {
        let result = await reqUserRegister(user);
        if (result.code == 200) {
            return 'ok';
        } else {
            return Promise.reject(new Error('faile'));
        }
    },
    // 用户登录
    async userLogin({ commit }, data) {
        let result = await reqUserLogin(data);
        if (result.code == 200) {
            commit('USERLOGIN', result.data.token);
            // 持久化存储
            setToken(result.data.token);
            return 'ok';
        } else {
            Promise.reject(new Error('faile'))
        }
    },
    // 获取用户信息
    async getUserInfo() {
        let result = await reqUserInfo();
        if (result.code == 200) {
            commit('GETUSERINFO', result.data)
            return 'ok';
        }else {
            Promise.reject(new Error('faile'));
        }
    },
    // 退出登录
    async userLogOut({ commit }) {
        let result = await reqLogout();
        if(result.code==200){
            commit('CLEAR');
            return 'ok';
        }else{
            return Promise.reject(new Error('fail'));
        }
    }
};
const mutations = {
    GETCODE(state, code) {
        state.code = code;
    },
    USERLOGIN(state, token) {
        state.token = token;
    },
    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo;
    },
    CLEAR(state) {
        state.token = '';
        state.userInfo = {};
        removeToken();
    }
};
const getters = {};

export default {
    state,
    actions,
    mutations,
    getters
}