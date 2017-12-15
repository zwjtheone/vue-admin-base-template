import axios from "axios";
import store from "./vuex";
import router from "./router";

const service = axios.create({
    baseURL: "/api", // api的base_url
    timeout: 5000                  // 请求超时时间
});
service.interceptors.request.use(config => {
    if (store.getters.token) {
        config.headers["AUTH_HEADER_ST"] = `${store.getters.authheaderst}`;
    }
    return config;
}, error => {
    console.log(error);
    Promise.reject(error);
});
// respone拦截器
service.interceptors.response.use(
    response => response,
    error => {
        console.log("err" + error);
        localStorage.removeItem("st");
        // 判断是否为401  如果是就删除cookie  重新登录
        if (error.response.status === 401) {
            router.replace({
                path: "/",
                query: {
                    redirect: router.currentRoute.fullPath
                }
            });
        }
        return Promise.reject(error);
    }
);
export default service;
