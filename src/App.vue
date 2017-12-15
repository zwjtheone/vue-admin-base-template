<template>
    <div id="app">
        <myHeader></myHeader>
        <router-view></router-view>
        <myFooter></myFooter>
    </div>
</template>

<script>
    import myHeader from "@/components/element/header";
    import myFooter from "@/components/element/footer";

    export default {
        name: "app",
        components: {
            myHeader,
            myFooter
        }
    };
</script>
<style lang="less">
    @import "normalize.css/normalize.css";
    @import "./styles/theme/index";
    body, html{
        font-family: "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
    }
</style>
