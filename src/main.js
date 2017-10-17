import Vue from "vue";
import App from "./App";
import iView from "iview";
import store from "./vuex/store";
import router from "./router";
import axios from "./api";
import "./styles/reset.css";
import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false;
Vue.use(iView);
Vue.prototype.$axios = axios;
new Vue({
    el: "#app",
    router,
    store,
    template: "<App/>",
    components: {
        App
    }
});
