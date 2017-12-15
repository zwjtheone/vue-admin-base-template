/**
 * VERSION: 0.2.0
 * vue-base-template
 * Created on 2017/12/15.~
 * Talk is cheap. Show me the code.
 * GIT:https://github.com/zwj47
 *
 * @author: by Jay99, email:zwj@zwj.space
 * ==============================================
 */
/**
 *登陆 store
 */
const state = {
    test: false
};
const actions = {};
const mutations = {
    testMutaiton(state, msg) {
        state.test = msg;
    }
};
const getters = {
    // 计算属性
    testGet: state => {
        return state.test;
    }
};
export default {
    state,
    actions,
    mutations,
    getters
};
