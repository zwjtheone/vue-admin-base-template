import Vue from "vue";
import Router from "vue-router";

// eslint-disable-next-line
const _import = require(`./_import_${process.env.NODE_ENV}`);

Vue.use(Router);
const router = new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: _import('home')
        }
    ]
});
router.afterEach(() => {
    window.scrollTo(0, 0);
});
export default router;
