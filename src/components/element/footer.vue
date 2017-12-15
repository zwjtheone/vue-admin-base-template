<template>
    <div class="footer-box">
        <div class="footer">
            底部
        </div>
    </div>
</template>

<script>
    export default {
        name: "myFooter",
        data() {
            return {};
        },
        created() {
        },
        computed: {},
        methods: {}
    };
</script>

<style lang="less" scoped>
    .footer-box {
        background-color : #1F2D3D;
        height           : 80px;
        .footer {
            width  : 1170px;
            margin : 0 auto;
        }
    }
</style>
