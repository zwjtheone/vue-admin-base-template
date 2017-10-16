/**
 *登陆 store
 */
const state = {
    loginStatus: false
};
const actions = {};
const mutations = {
    statusToLogin(state, msg) {
        state.loginStatus = msg;
    }
};
const getters = {
    // 计算属性
    login: state => {
        return state.loginStatus;
    }
};
export default {
    state,
    actions,
    mutations,
    getters
};
