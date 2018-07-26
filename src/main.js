import Vue from "vue";
//组件懒加载
import iView from "iview";
import _ from 'lodash';

import App from "./App";

import store from "./vuex";
import router from "./router";
import directives from './directives';
import filter from './filter';

import axios from "./api";

Vue.config.productionTip = false;
Vue.use(iView);
Vue.prototype.$axios = axios;
window._ = _;
for (let i in directives) {
    Vue.directive(i, directives[i]);
}
for (let i in filter) {
    Vue.filter(i, filter[i]);
}
new Vue({
    el: "#app",
    router,
    store,
    template: "<App/>",
    components: {
        App
    }
});
